import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { 
  createCheckout, 
  getSubscription, 
  cancelSubscription, 
  listPrices 
} from '../lib/lemonsqueezy';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import crypto from 'crypto';

const router = Router();

// Create Checkout Session
router.post('/create-checkout', authMiddleware, async (req: AuthRequest, res) => {
  const { workspaceId, plan } = req.body;
  const userId = req.user!.id;

  const variantId = plan === 'PRO' ? process.env.LEMON_SQUEEZY_PRO_VARIANT_ID : process.env.LEMON_SQUEEZY_TEAM_VARIANT_ID;
  
  if (!variantId) {
    return res.status(400).json({ error: 'Invalid plan or missing variant ID' });
  }

  try {
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      include: { owner: true }
    });

    if (!workspace || workspace.ownerId !== userId) {
      return res.status(403).json({ error: 'Only workspace owners can manage billing' });
    }

    const checkout = await createCheckout(
      process.env.LEMON_SQUEEZY_STORE_ID!, 
      variantId, 
      {
        checkoutData: {
          email: workspace.owner.email,
          custom: {
            workspaceId,
            plan
          }
        },
        productOptions: {
          redirectUrl: `${process.env.FRONTEND_URL}/dashboard/${workspace.slug}/settings/billing?success=true`,
        }
      }
    );

    res.json({ url: checkout.data?.data.attributes.url });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Get Customer Portal (Lemon Squeezy uses a static link or subscription management URL)
router.post('/portal', authMiddleware, async (req: AuthRequest, res) => {
  const { workspaceId } = req.body;
  
  try {
    const subscription = await prisma.subscription.findUnique({
      where: { workspaceId }
    });

    if (!subscription) {
      return res.status(404).json({ error: 'No active subscription found' });
    }

    // Lemon Squeezy provides a customer portal URL in the subscription object
    const lsSub = await getSubscription(subscription.lemonSqueezySubscriptionId);
    res.json({ url: lsSub.data?.data.attributes.urls.customer_portal });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Get Billing Status
router.get('/status/:workspaceId', authMiddleware, async (req: AuthRequest, res) => {
  const { workspaceId } = req.params;

  try {
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      include: { subscription: true }
    });

    if (!workspace) return res.status(404).json({ error: 'Workspace not found' });

    const prCount = await prisma.pullRequest.count({
      where: { repository: { workspaceId } }
    });

    res.json({
      plan: workspace.plan,
      subscription: workspace.subscription,
      usage: {
        activePRs: prCount,
        maxPRs: workspace.plan === 'FREE' ? 3 : Infinity,
        maxWorkspaces: workspace.plan === 'FREE' ? 1 : workspace.plan === 'PRO' ? 5 : Infinity
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Lemon Squeezy Webhook
router.post('/webhook', async (req, res) => {
  const hmac = crypto.createHmac('sha256', process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!);
  const digest = Buffer.from(hmac.update((req as any).rawBody || JSON.stringify(req.body)).digest('hex'), 'utf8');
  const signature = Buffer.from(req.get('X-Signature') || '', 'utf8');

  if (!crypto.timingSafeEqual(digest, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const payload = req.body;
  const eventName = payload.meta.event_name;
  const attributes = payload.data.attributes;
  const customData = payload.meta.custom_data;

  switch (eventName) {
    case 'subscription_created':
    case 'subscription_updated': {
      const { workspaceId, plan } = customData;
      
      await prisma.$transaction([
        prisma.workspace.update({
          where: { id: workspaceId },
          data: { plan: plan || 'PRO' }
        }),
        prisma.subscription.upsert({
          where: { workspaceId },
          update: {
            lemonSqueezyCustomerId: attributes.customer_id.toString(),
            lemonSqueezySubscriptionId: payload.data.id.toString(),
            lemonSqueezyVariantId: attributes.variant_id.toString(),
            status: attributes.status,
            currentPeriodEnd: new Date(attributes.renews_at || attributes.ends_at)
          },
          create: {
            workspaceId,
            lemonSqueezyCustomerId: attributes.customer_id.toString(),
            lemonSqueezySubscriptionId: payload.data.id.toString(),
            lemonSqueezyVariantId: attributes.variant_id.toString(),
            status: attributes.status,
            currentPeriodEnd: new Date(attributes.renews_at || attributes.ends_at)
          }
        })
      ]);
      break;
    }

    case 'subscription_cancelled':
    case 'subscription_expired': {
      const lsSubscriptionId = payload.data.id.toString();
      const sub = await prisma.subscription.findUnique({
        where: { lemonSqueezySubscriptionId: lsSubscriptionId }
      });

      if (sub) {
        await prisma.workspace.update({
          where: { id: sub.workspaceId },
          data: { 
            plan: 'FREE',
            subscription: {
              update: { status: attributes.status }
            }
          }
        });
      }
      break;
    }
  }

  res.json({ received: true });
});

export default router;
