import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import slugify from 'slugify';
import { Resend } from 'resend';
import axios from 'axios';
import { NotificationService } from '../lib/notifications';
import { cache } from '../lib/redis';

const router = Router();
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

router.use(authMiddleware);

// Helper for audit logging
async function createAuditLog(workspaceId: string, actorId: string, action: string, metadata?: any) {
  try {
    await prisma.auditLog.create({
      data: { workspaceId, actorId, action, metadata }
    });
  } catch (err) {
    console.error('Audit log failed:', err);
  }
}

// GET /workspaces - List user's workspaces
router.get('/', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    const workspaces = await prisma.workspace.findMany({
      where: {
        OR: [
          { ownerId: userId },
          { members: { some: { userId } } }
        ]
      },
      include: {
        members: true,
        _count: { select: { repositories: true } }
      }
    });
    res.json(workspaces);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workspaces' });
  }
});

// POST /workspaces - Create workspace
router.post('/', async (req: AuthRequest, res) => {
  const { name } = req.body;
  const userId = req.user!.id;

  if (!name) return res.status(400).json({ message: 'Name is required' });

  const slug = slugify(name, { lower: true, strict: true }) + '-' + Math.random().toString(36).substring(2, 7);

  try {
    // Plan Check: FREE users are limited to 1 workspace
    const ownedWorkspaces = await prisma.workspace.findMany({
      where: { ownerId: userId },
      include: { subscription: true }
    });

    const activeProWorkspace = ownedWorkspaces.find(ws => ws.plan !== 'FREE');
    if (ownedWorkspaces.length >= 1 && !activeProWorkspace) {
      return res.status(402).json({ 
        error: 'upgrade_required', 
        message: 'Free users are limited to 1 workspace. Upgrade to Pro for more.' 
      });
    }

    const workspace = await prisma.workspace.create({
      data: {
        name,
        slug,
        ownerId: userId,
        members: {
          create: { userId, role: 'OWNER' }
        }
      }
    });
    res.status(201).json(workspace);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create workspace' });
  }
});

// GET /workspaces/:slug - Get workspace details
router.get('/:slug', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const cacheKey = `workspace:${slug}`;

  const cached = await cache.get(cacheKey);
  if (cached) return res.json(cached);

  try {
    const workspace = await prisma.workspace.findUnique({
      where: { slug },
      include: {
        members: { include: { user: true } },
        repositories: true,
        owner: true
      }
    });

    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    
    await cache.set(cacheKey, workspace, 60); // 60 seconds
    res.json(workspace);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workspace details' });
  }
});

// POST /workspaces/:slug/members - Invite member
router.post('/:slug/members', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const { email, role } = req.body;

  try {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

    // In a real app, we'd check if user exists, send invite link, etc.
    // For this boilerplate, we'll search for user or create placeholder
    let user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      // Create a skeleton user for the invite
      user = await prisma.user.create({
        data: { email }
      });
    }

    await prisma.workspaceMember.upsert({
      where: { workspaceId_userId: { workspaceId: workspace.id, userId: user.id } },
      update: { role },
      create: { workspaceId: workspace.id, userId: user.id, role }
    });

    // Send email using Resend
    if (resend) {
      await resend.emails.send({
        from: 'DevCollab <invites@devcollab.dev>',
        to: email,
        subject: `You've been invited to join ${workspace.name}`,
        html: `<p>Click here to join the workspace: <a href="${process.env.FRONTEND_URL}/dashboard/${slug}">Join Workspace</a></p>`
      });
    }

    res.json({ message: 'Member invited successfully' });

    // Notifications
    try {
      await NotificationService.notifyWorkspace(workspace.id, {
        type: 'member_join',
        title: 'New Member Joined',
        body: `${user.email} has joined ${workspace.name}.`,
        link: `/dashboard/${workspace.slug}`,
        workspaceId: workspace.id
      }, user.id);
    } catch (nError) {
      console.error('Failed to trigger member join notifications:', nError);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to invite member' });
  }
});

// DELETE /workspaces/:slug/members/:userId - Remove member
router.delete('/:slug/members/:userId', async (req: AuthRequest, res) => {
  const { slug, userId } = req.params;
  const ownerId = req.user!.id;

  try {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

    // Only owner can remove members
    if (workspace.ownerId !== ownerId) {
      return res.status(403).json({ message: 'Only the workspace owner can remove members' });
    }

    // Cannot remove the owner
    if (userId === workspace.ownerId) {
      return res.status(400).json({ message: 'Cannot remove the workspace owner' });
    }

    await prisma.workspaceMember.delete({
      where: { workspaceId_userId: { workspaceId: workspace.id, userId } }
    });

    res.json({ message: 'Member removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove member' });
  }
});

// GET /workspaces/:slug/repos/import - List GitHub repos
router.get('/:slug/repos/import', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user?.githubAccessToken) {
      return res.status(401).json({ message: 'GitHub not connected' });
    }

    const response = await axios.get('https://api.github.com/user/repos', {
      params: { sort: 'updated', per_page: 50 },
      headers: { Authorization: `Bearer ${user.githubAccessToken}` }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch GitHub repositories' });
  }
});

// POST /workspaces/:slug/repos - Import repo
router.post('/:slug/repos', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const { githubRepoId, name, fullName, defaultBranch, isPrivate } = req.body;

  try {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

    const repo = await prisma.repository.create({
      data: {
        workspaceId: workspace.id,
        githubRepoId: githubRepoId.toString(),
        name,
        fullName,
        defaultBranch: defaultBranch || 'main',
        isPrivate: !!isPrivate
      }
    });

    res.status(201).json(repo);
    await createAuditLog(workspace.id, req.user!.id, 'repo_imported', { repo: fullName });
  } catch (error) {
    res.status(500).json({ message: 'Failed to import repository' });
  }
});

// PATCH /workspaces/:slug/settings
router.patch('/:slug/settings', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const { name } = req.body;
  const userId = req.user!.id;

  try {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    if (workspace.ownerId !== userId) return res.status(403).json({ message: 'Forbidden' });

    const updated = await prisma.workspace.update({
      where: { id: workspace.id },
      data: { name }
    });

    await createAuditLog(workspace.id, userId, 'settings_updated', { oldName: workspace.name, newName: name });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update settings' });
  }
});

// DELETE /workspaces/:slug
router.delete('/:slug', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const userId = req.user!.id;

  try {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    if (workspace.ownerId !== userId) return res.status(403).json({ message: 'Only owner can delete workspace' });

    await prisma.workspace.delete({ where: { id: workspace.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete workspace' });
  }
});

// POST /workspaces/:slug/transfer
router.post('/:slug/transfer', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const { newOwnerId } = req.body;
  const userId = req.user!.id;

  try {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    if (workspace.ownerId !== userId) return res.status(403).json({ message: 'Forbidden' });

    const newOwner = await prisma.user.findUnique({ where: { id: newOwnerId } });
    if (!newOwner) return res.status(404).json({ message: 'New owner not found' });

    await prisma.$transaction([
      prisma.workspace.update({
        where: { id: workspace.id },
        data: { ownerId: newOwnerId }
      }),
      prisma.workspaceMember.update({
        where: { workspaceId_userId: { workspaceId: workspace.id, userId: newOwnerId } },
        data: { role: 'OWNER' }
      }),
      prisma.workspaceMember.update({
        where: { workspaceId_userId: { workspaceId: workspace.id, userId: userId } },
        data: { role: 'ADMIN' }
      })
    ]);

    await createAuditLog(workspace.id, userId, 'ownership_transferred', { from: userId, to: newOwnerId });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to transfer ownership' });
  }
});

// GET /workspaces/:slug/audit-log (TEAM plan only)
router.get('/:slug/audit-log', async (req: AuthRequest, res) => {
  const { slug } = req.params;
  const userId = req.user!.id;

  try {
    const workspace = await prisma.workspace.findUnique({ 
      where: { slug },
      include: { members: { where: { userId } } }
    });

    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    if (workspace.plan === 'FREE' || workspace.plan === 'PRO') {
      return res.status(402).json({ error: 'upgrade_required', message: 'Audit Log requires TEAM plan' });
    }

    const logs = await prisma.auditLog.findMany({
      where: { workspaceId: workspace.id },
      include: { actor: true },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch audit log' });
  }
});

export default router;
