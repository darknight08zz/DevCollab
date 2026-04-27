import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import { NotificationService } from '../lib/notifications';

const router = Router();

router.use(authMiddleware);

// GET /notifications - Get user's notifications
router.get('/', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
    res.json(notifications);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /notifications/:id/read - Mark as read
router.patch('/:id/read', async (req: AuthRequest, res) => {
  const { id } = req.params;
  const userId = req.user!.id;
  try {
    await NotificationService.markRead(id, userId);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /notifications/read-all - Mark all as read
router.post('/read-all', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  try {
    await NotificationService.markAllRead(userId);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /settings/notifications - Update preferences
router.patch('/settings', async (req: AuthRequest, res) => {
  const userId = req.user!.id;
  const { emailEnabled } = req.body;
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { emailNotificationsEnabled: emailEnabled }
    });
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
