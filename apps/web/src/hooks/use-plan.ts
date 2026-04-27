'use client';

import { useMemo } from 'react';

export type Plan = 'FREE' | 'PRO' | 'TEAM' | 'ENTERPRISE';

const PLAN_HIERARCHY: Record<Plan, number> = {
  FREE: 0,
  PRO: 1,
  TEAM: 2,
  ENTERPRISE: 3
};

export function usePlan(currentPlan: Plan = 'FREE') {
  const check = (minPlan: Plan) => {
    return PLAN_HIERARCHY[currentPlan] >= PLAN_HIERARCHY[minPlan];
  };

  return {
    isPro: check('PRO'),
    isTeam: check('TEAM'),
    isEnterprise: check('ENTERPRISE'),
    level: PLAN_HIERARCHY[currentPlan],
    check
  };
}
