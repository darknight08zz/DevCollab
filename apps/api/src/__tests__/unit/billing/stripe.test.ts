import { describe, it, expect, vi, beforeEach } from 'vitest';
import { stripe } from '../../../lib/stripe';
import { prisma } from '../../../lib/prisma';
import billingRouter from '../../../routes/billing';
import express from 'express';
import request from 'supertest';

// Mock Dependencies
vi.mock('../../../lib/stripe', () => ({
  stripe: {
    webhooks: {
      constructEvent: vi.fn()
    }
  },
  PLAN_PRICES: {
    PRO: 'price_pro',
    TEAM: 'price_team'
  }
}));

vi.mock('../../../lib/prisma', () => ({
  prisma: {
    workspace: {
      update: vi.fn(),
      findUnique: vi.fn()
    },
    subscription: {
      upsert: vi.fn(),
      findUnique: vi.fn()
    },
    $transaction: vi.fn((cb) => cb)
  }
}));

const app = express();
app.use(express.json());
app.use('/billing', billingRouter);

describe('Stripe Webhook Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.STRIPE_WEBHOOK_SECRET = 'test_secret';
  });

  it('should update workspace plan on checkout.session.completed', async () => {
    const mockEvent = {
      type: 'checkout.session.completed',
      data: {
        object: {
          customer: 'cus_123',
          subscription: 'sub_123',
          metadata: {
            workspaceId: 'ws_123',
            plan: 'PRO'
          }
        }
      }
    };

    vi.mocked(stripe.webhooks.constructEvent).mockReturnValue(mockEvent as any);

    const res = await request(app)
      .post('/billing/webhook')
      .set('stripe-signature', 'test_sig')
      .send(mockEvent);

    expect(res.status).toBe(200);
    expect(prisma.workspace.update).toHaveBeenCalledWith(expect.objectContaining({
      where: { id: 'ws_123' },
      data: { plan: 'PRO' }
    }));
  });

  it('should downgrade to FREE if subscription is deleted', async () => {
    const mockEvent = {
      type: 'customer.subscription.deleted',
      data: {
        object: {
          status: 'canceled',
          metadata: { workspaceId: 'ws_123' },
          current_period_end: Math.floor(Date.now() / 1000),
          items: { data: [{ price: { id: 'price_123' } }] }
        }
      }
    };

    vi.mocked(stripe.webhooks.constructEvent).mockReturnValue(mockEvent as any);

    const res = await request(app)
      .post('/billing/webhook')
      .set('stripe-signature', 'test_sig')
      .send(mockEvent);

    expect(res.status).toBe(200);
    expect(prisma.workspace.update).toHaveBeenCalledWith(expect.objectContaining({
      where: { id: 'ws_123' },
      data: expect.objectContaining({ plan: 'FREE' })
    }));
  });

  it('should return 400 if webhook signature is invalid', async () => {
    vi.mocked(stripe.webhooks.constructEvent).mockImplementation(() => {
      throw new Error('Invalid signature');
    });

    const res = await request(app)
      .post('/billing/webhook')
      .set('stripe-signature', 'invalid')
      .send({});

    expect(res.status).toBe(400);
    expect(res.text).toContain('Webhook Error');
  });
});
