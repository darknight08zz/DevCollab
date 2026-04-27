import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import { requirePlan } from '../middleware/plan-gate';

const router = Router();

router.use(authMiddleware);

// POST /integrations/slack/connect (TEAM Plan Only)
router.post('/slack/connect', requirePlan('TEAM'), async (req: AuthRequest, res) => {
  const { workspaceId, webhookUrl, channelName } = req.body;
  const userId = req.user!.id;

  try {
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId }
    });

    if (!workspace || workspace.ownerId !== userId) {
      return res.status(403).json({ error: 'Only workspace owners can manage integrations' });
    }

    await prisma.workspaceSlackConfig.upsert({
      where: { workspaceId },
      update: { webhookUrl, channelName },
      create: { workspaceId, webhookUrl, channelName }
    });

    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /integrations/slack/:workspaceId
router.get('/slack/:workspaceId', async (req: AuthRequest, res) => {
  const { workspaceId } = req.params;
  try {
    const config = await prisma.workspaceSlackConfig.findUnique({
      where: { workspaceId }
    });
    res.json(config);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
