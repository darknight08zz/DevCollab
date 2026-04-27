import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { prisma } from '../lib/prisma';

export const requirePlan = (minPlan: 'PRO' | 'TEAM') => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const workspaceId = req.headers['x-workspace-id'] as string || req.body.workspaceId || req.query.workspaceId as string;

    if (!workspaceId) {
      return res.status(400).json({ error: 'workspace_id_required' });
    }

    try {
      const workspace = await prisma.workspace.findUnique({
        where: { id: workspaceId }
      });

      if (!workspace) {
        return res.status(404).json({ error: 'workspace_not_found' });
      }

      const planHierarchy = {
        FREE: 0,
        PRO: 1,
        TEAM: 2,
        ENTERPRISE: 3
      };

      const userPlanLevel = planHierarchy[workspace.plan as keyof typeof planHierarchy] || 0;
      const requiredLevel = planHierarchy[minPlan as keyof typeof planHierarchy];

      if (userPlanLevel < requiredLevel) {
        return res.status(402).json({
          error: 'upgrade_required',
          requiredPlan: minPlan,
          upgradeUrl: '/billing'
        });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};
