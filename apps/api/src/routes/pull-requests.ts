import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import axios from 'axios';
import parseDiff from 'parse-diff';
import { NotificationService } from '../lib/notifications';
import { cache } from '../lib/redis';

const router = Router();

router.use(authMiddleware);

// GET /prs - List all pull requests for the user across all workspaces
router.get('/prs', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    const prs = await prisma.pullRequest.findMany({
      where: {
        repository: {
          workspace: {
            members: { some: { userId } }
          }
        }
      },
      include: { 
        author: true, 
        repository: {
          include: { workspace: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(prs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch global pull requests' });
  }
});

// GET /workspaces/:slug/repos/:repoId/prs - List pull requests
router.get('/workspaces/:slug/repos/:repoId/prs', async (req: AuthRequest, res) => {
  const { repoId } = req.params;
  
  try {
    const prs = await prisma.pullRequest.findMany({
      where: { repositoryId: repoId },
      include: { author: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(prs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pull requests' });
  }
});

// POST /workspaces/:slug/repos/:repoId/prs/sync - Sync latest PRs from GitHub
router.post('/workspaces/:slug/repos/:repoId/prs/sync', async (req: AuthRequest, res) => {
  const { repoId } = req.params;
  const userId = req.user!.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const repo = await prisma.repository.findUnique({ where: { id: repoId } });

    if (!user?.githubAccessToken || !repo) {
      return res.status(401).json({ message: 'GitHub connection or repository not found' });
    }

    const workspace = await prisma.workspace.findUnique({ where: { id: repo.workspaceId } });

    // Fetch PRs from GitHub
    const response = await axios.get(`https://api.github.com/repos/${repo.fullName}/pulls`, {
      params: { state: 'all', sort: 'updated', direction: 'desc' },
      headers: { Authorization: `Bearer ${user.githubAccessToken}` }
    });

    const githubPrs = response.data;

    // Batch upsert PRs
    const prs = await Promise.all(githubPrs.map(async (gPr: any) => {
      // Find or create PR author (might be different from current user)
      let author = await prisma.user.findUnique({ where: { githubId: gPr.user.id.toString() } });
      if (!author) {
        author = await prisma.user.create({
          data: {
            email: `${gPr.user.login}@github.com`,
            name: gPr.user.login,
            githubId: gPr.user.id.toString(),
            githubUsername: gPr.user.login,
            avatarUrl: gPr.user.avatar_url
          }
        });
      }

      return prisma.pullRequest.upsert({
        where: { repositoryId_githubPrNumber: { repositoryId: repoId, githubPrNumber: gPr.number } },
        update: {
          title: gPr.title,
          body: gPr.body,
          status: gPr.state.toUpperCase() === 'OPEN' ? 'OPEN' : (gPr.merged_at ? 'MERGED' : 'CLOSED'),
          headBranch: gPr.head.ref,
          baseBranch: gPr.base.ref,
          diffUrl: gPr.diff_url,
          updatedAt: new Date(gPr.updated_at)
        },
        create: {
          repositoryId: repoId,
          githubPrNumber: gPr.number,
          title: gPr.title,
          body: gPr.body,
          authorId: author.id,
          status: gPr.state.toUpperCase() === 'OPEN' ? 'OPEN' : (gPr.merged_at ? 'MERGED' : 'CLOSED'),
          headBranch: gPr.head.ref,
          baseBranch: gPr.base.ref,
          diffUrl: gPr.diff_url,
          createdAt: new Date(gPr.created_at)
        }
      });
    }));

    res.json(prs);
  } catch (error: any) {
    console.error('PR Sync error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to sync pull requests' });
  }
});

// GET /prs/:prId - Get PR details
router.get('/prs/:prId', async (req: AuthRequest, res) => {
  const { prId } = req.params;
  try {
    const pr = await prisma.pullRequest.findUnique({
      where: { id: prId },
      include: { 
        author: true,
        repository: {
          include: { workspace: true }
        }
      }
    });
    if (!pr) return res.status(404).json({ message: 'PR not found' });
    res.json(pr);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch PR details' });
  }
});

// GET /prs/:prId/diff - Fetch and parse diff
router.get('/prs/:prId/diff', async (req: AuthRequest, res) => {
  const { prId } = req.params;
  const userId = req.user!.id;

  const cacheKey = `pr-diff:${prId}`;
  const cached = await cache.get(cacheKey);
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=300');
    return res.json(cached);
  }

  try {
    const pr = await prisma.pullRequest.findUnique({
      where: { id: prId },
      include: { repository: true }
    });

    if (!pr) return res.status(404).json({ message: 'PR not found' });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user?.githubAccessToken) {
      return res.status(401).json({ message: 'GitHub not connected' });
    }

    // Fetch raw diff from GitHub
    const diffResponse = await axios.get(`https://api.github.com/repos/${pr.repository.fullName}/pulls/${pr.githubPrNumber}`, {
      headers: { 
        Authorization: `Bearer ${user.githubAccessToken}`,
        Accept: 'application/vnd.github.v3.diff'
      }
    });

    const files = parseDiff(diffResponse.data);

    // Fetch file list to get status and shas
    const filesResponse = await axios.get(`https://api.github.com/repos/${pr.repository.fullName}/pulls/${pr.githubPrNumber}/files`, {
      headers: { Authorization: `Bearer ${user.githubAccessToken}` }
    });
    
    const githubFiles = filesResponse.data;
    
    const result = files.map(file => {
      const gFile = githubFiles.find((f: any) => f.filename === (file.to || file.from));
      return {
        filePath: file.to || file.from,
        additions: file.additions,
        deletions: file.deletions,
        status: gFile?.status || 'modified',
        chunks: file.chunks,
        sha: pr.headBranch,
        baseSha: pr.baseBranch,
        rawUrl: gFile?.raw_url,
        contentsUrl: gFile?.contents_url
      };
    });

    await cache.set(cacheKey, result, 300); // 5 minutes
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.json(result);
  } catch (error: any) {
    console.error('Diff fetch error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch diff' });
  }
});

// POST /prs/:prId/sessions - Create review session
router.post('/prs/:prId/sessions', async (req: AuthRequest, res) => {
  const { prId } = req.params;
  const userId = req.user!.id;

  try {
    const session = await prisma.reviewSession.create({
      data: {
        pullRequestId: prId,
        createdBy: userId,
        isActive: true
      },
      include: {
        pullRequest: { include: { repository: { include: { workspace: true } } } },
        creator: true
      }
    });
    res.status(201).json(session);

    // Notifications
    try {
      const pr = session.pullRequest;
      const workspaceId = pr.repository.workspaceId;
      const baseUrl = `/dashboard/${pr.repository.workspace.slug}/${pr.repositoryId}/prs/${pr.id}`;

      const payload = {
        type: 'assignment' as any, // Reusing assignment for session start
        title: 'Review Session Started',
        body: `${session.creator.name || session.creator.githubUsername} started a review session on PR #${pr.githubPrNumber}: "${pr.title}"`,
        link: baseUrl,
        workspaceId
      };

      // Notify PR author
      if (pr.authorId !== userId) {
        await NotificationService.notify(pr.authorId, payload);
      }
      
      // Notify Slack
      await NotificationService.notifySlack(workspaceId, payload);
    } catch (nError) {
      console.error('Failed to trigger session notifications:', nError);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to create review session' });
  }
});

// GET /repos/:repoId/contents - Proxy for GitHub contents
router.get('/repos/:repoId/contents', async (req: AuthRequest, res) => {
  const { repoId } = req.params;
  const { path, ref } = req.query;
  const userId = req.user!.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const repo = await prisma.repository.findUnique({ where: { id: repoId } });

    if (!user?.githubAccessToken || !repo) {
      return res.status(401).json({ message: 'GitHub connection or repository not found' });
    }

    const response = await axios.get(`https://api.github.com/repos/${repo.fullName}/contents/${path}`, {
      params: { ref },
      headers: { 
        Authorization: `Bearer ${user.githubAccessToken}`,
        Accept: 'application/vnd.github.v3.raw'
      }
    });

    res.send(response.data);
  } catch (error: any) {
    console.error('Content fetch error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch content' });
  }
});

// PATCH /prs/:prId/reviewer - Assign reviewer
router.patch('/prs/:prId/reviewer', async (req: AuthRequest, res) => {
  const { prId } = req.params;
  const { reviewerId } = req.body;
  const userId = req.user!.id;

  try {
    const pr = await prisma.pullRequest.update({
      where: { id: prId },
      data: { reviewerId },
      include: { 
        author: true, 
        reviewer: true,
        repository: { include: { workspace: true } }
      }
    });

    if (reviewerId && reviewerId !== userId) {
      await NotificationService.notify(reviewerId, {
        type: 'assignment',
        title: 'New Review Assignment',
        body: `${pr.author.name || pr.author.githubUsername} assigned you as a reviewer for PR #${pr.githubPrNumber}: "${pr.title}"`,
        link: `/dashboard/${pr.repository.workspace.slug}/${pr.repositoryId}/prs/${pr.id}`,
        workspaceId: pr.repository.workspaceId
      });
    }

    res.json(pr);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
