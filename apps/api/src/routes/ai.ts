import { Router } from 'express';
import { PrismaClient } from '../generated/client';
import { analyzeDiff, generatePRSummary, suggestFix } from '../ai/reviewer';
import { authMiddleware as authenticate, AuthRequest } from '../middleware/auth';
import { requirePlan } from '../middleware/plan-gate';
import axios from 'axios';
import parseDiff from 'parse-diff';
import { NotificationService } from '../lib/notifications';
import { aiRateLimit } from '../middleware/harden';
import { cache } from '../lib/redis';
import crypto from 'crypto';

const router = Router();
const prisma = new PrismaClient();

router.use(requirePlan('PRO'));

const AI_USER_ID = '00000000-0000-0000-0000-000000000000'; // Fixed UUID for AI

async function getAIUser() {
  let user = await prisma.user.findUnique({ where: { id: AI_USER_ID } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        id: AI_USER_ID,
        email: 'ai@devcollab.io',
        name: 'DevCollab AI',
        avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=ai',
        githubUsername: 'ai-reviewer'
      }
    });
  }
  return user;
}

// POST /prs/:prId/ai/analyze
router.post('/prs/:prId/ai/analyze', authenticate, aiRateLimit, async (req: AuthRequest, res) => {
  const { prId } = req.params;
  const { sessionId } = req.body; // AI comments should be linked to an active review session

  try {
    const pr = await prisma.pullRequest.findUnique({
      where: { id: prId },
      include: { repository: true }
    });

    if (!pr) return res.status(404).json({ error: 'PR not found' });

    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    if (!user?.githubAccessToken) return res.status(401).json({ error: 'GitHub not connected' });

    // Fetch real diff from GitHub
    const diffResponse = await axios.get(`https://api.github.com/repos/${pr.repository.fullName}/pulls/${pr.githubPrNumber}`, {
      headers: { 
        Authorization: `Bearer ${user.githubAccessToken}`,
        Accept: 'application/vnd.github.v3.diff'
      }
    });

    const diffData = diffResponse.data;
    const diffHash = crypto.createHash('sha256').update(diffData).digest('hex');
    const cacheKey = `ai-analysis:${prId}:${diffHash}`;

    const cached = await cache.get(cacheKey);
    if (cached) {
      return res.json({ comments: cached, cached: true });
    }

    const parsedDiff = parseDiff(diffData);

    const aiComments = await analyzeDiff(parsedDiff);
    const aiUser = await getAIUser();

    const createdComments = await Promise.all(aiComments.map(async (c) => {
      return prisma.comment.create({
        data: {
          reviewSessionId: sessionId,
          authorId: aiUser.id,
          filePath: c.filePath,
          lineNumber: c.lineNumber,
          content: c.message,
          isAI: true,
          severity: c.severity,
          category: c.category,
          suggestedFix: c.suggestedFix
        }
      });
    }));

    await cache.set(cacheKey, createdComments); // Forever (no TTL)
    res.json({ comments: createdComments });

    // Notifications
    try {
      const workspace = await prisma.workspace.findFirst({
        where: { repositories: { some: { id: pr.repositoryId } } }
      });

      const payload = {
        type: 'ai_complete' as any,
        title: 'AI Analysis Complete',
        body: `DevCollab AI has finished reviewing PR #${pr.githubPrNumber}: "${pr.title}"`,
        link: `/dashboard/${workspace?.slug}/${pr.repositoryId}/prs/${pr.id}`,
        workspaceId: pr.repository.workspaceId
      };

      await NotificationService.notify(pr.authorId, payload);
      await NotificationService.notifySlack(pr.repository.workspaceId, payload);
    } catch (nError) {
      console.error('Failed to trigger AI notifications:', nError);
    }
  } catch (error: any) {
    console.error('AI Analysis failed:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /prs/:prId/ai/summary
router.post('/prs/:prId/ai/summary', authenticate, async (req: AuthRequest, res) => {
  const { prId } = req.params;

  try {
    const pr = await prisma.pullRequest.findUnique({ 
      where: { id: prId },
      include: { repository: true }
    });
    if (!pr) return res.status(404).json({ error: 'PR not found' });

    if (pr.aiSummary) return res.json({ summary: pr.aiSummary });

    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    const diffResponse = await axios.get(`https://api.github.com/repos/${pr.repository.fullName}/pulls/${pr.githubPrNumber}`, {
      headers: { 
        Authorization: `Bearer ${user?.githubAccessToken}`,
        Accept: 'application/vnd.github.v3.diff'
      }
    });
    const parsedDiff = parseDiff(diffResponse.data);

    const summary = await generatePRSummary({
      title: pr.title,
      body: pr.body || undefined,
      diff: parsedDiff
    });

    await prisma.pullRequest.update({
      where: { id: prId },
      data: { aiSummary: summary }
    });

    res.json({ summary });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /comments/:commentId/ai/fix
router.post('/comments/:commentId/ai/fix', authenticate, async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    if (comment.suggestedFix) return res.json({ fix: comment.suggestedFix });

    const fix = await suggestFix(comment.content, "..."); // Context would be fetched from file content
    
    await prisma.comment.update({
      where: { id: commentId },
      data: { suggestedFix: fix }
    });

    res.json({ fix });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
