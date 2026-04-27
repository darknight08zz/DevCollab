import { Router } from 'express';
import { prisma } from '../lib/prisma';
import redis from '../lib/redis';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

router.use(authMiddleware);

// GET /users/sessions - List active sessions
router.get('/sessions', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    const sessions = await redis.smembers(`user_sessions:${userId}`);
    res.json({ sessions });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /users/sessions/revoke-all
router.post('/sessions/revoke-all', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  const currentSessionId = req.headers['x-session-id'] as string;
  try {
    const sessions = await redis.smembers(`user_sessions:${userId}`);
    const toRevoke = sessions.filter(s => s !== currentSessionId);
    
    if (toRevoke.length > 0) {
      await redis.srem(`user_sessions:${userId}`, ...toRevoke);
      // In a real app, we'd also invalidate the JWTs or session tokens
    }
    
    res.json({ success: true, revokedCount: toRevoke.length });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /users/me
router.get('/me', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        ownedWorkspaces: true,
        memberships: {
          include: { workspace: true }
        }
      }
    });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /users/me
router.patch('/me', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  const { name, avatarUrl, emailNotificationsEnabled } = req.body;
  
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        avatarUrl,
        emailNotificationsEnabled
      }
    });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /users/me (Danger Zone - Soft Delete / Anonymize)
router.delete('/me', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    // Soft delete / anonymize
    await prisma.user.update({
      where: { id: userId },
      data: {
        email: `deleted_${userId}@deleted.com`,
        name: 'Deleted User',
        githubId: null,
        githubUsername: 'deleted-user',
        githubAccessToken: null,
      }
    });
    res.json({ success: true, message: 'Account deleted and data anonymized.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
