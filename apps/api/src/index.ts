import express from 'express';
import { checkEnv } from './lib/check-env';

checkEnv();

import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { authMiddleware } from './middleware/auth';
import { sessionTracker } from './middleware/session-tracker';
import authRoutes from './routes/auth';
import workspaceRoutes from './routes/workspaces';
import pullRequestRoutes from './routes/pull-requests';
import commentRoutes from './routes/comments';
import aiRoutes from './routes/ai';
import securityRoutes from './routes/security';
import billingRoutes from './routes/billing';
import notificationsRoutes from './routes/notifications';
import integrationsRoutes from './routes/integrations';
import usersRoutes from './routes/users';
import { initSocket } from './realtime/socket';
import { initYjsServer } from './realtime/yjs-server';
import { API_ENDPOINTS } from '@devcollab/shared';

dotenv.config();

import { prisma } from './lib/prisma';
import { redis } from './lib/redis';
import pinoHttp from 'pino-http';
import { logger } from './lib/logger';
import { 
  requestIdMiddleware, 
  securityHeaders, 
  globalRateLimit, 
  authRateLimit 
} from './middleware/harden';

const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 4000;

// Logging & Hardening
app.use(requestIdMiddleware);
app.use(pinoHttp({ logger }));
app.use(securityHeaders);
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(globalRateLimit);
app.use(express.json({
  verify: (req: any, res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(sessionTracker as any);

app.get('/', (req, res) => {
  res.json({ message: 'DevCollab API is running' });
});

// Health check
app.get('/api/health', async (req, res) => {
  const dbConnected = await prisma.$queryRaw`SELECT 1`.then(() => true).catch(() => false);
  const redisConnected = redis.status === 'ready';
  res.json({
    status: dbConnected && redisConnected ? 'ok' : 'degraded',
    uptime: process.uptime(),
    dbConnected,
    redisConnected
  });
});

app.use('/auth', authRateLimit, authRoutes);
app.use('/workspaces', workspaceRoutes);
app.use('/', pullRequestRoutes);
app.use('/', commentRoutes);
app.use('/ai', aiRoutes);
app.use('/security', securityRoutes);
app.use('/billing', billingRoutes);
app.use('/notifications', notificationsRoutes);
app.use('/integrations', integrationsRoutes);
app.use('/users', usersRoutes);

app.get(API_ENDPOINTS.SESSIONS, (req, res) => {
  res.json({ sessions: [] });
});

// Initialize Socket.io
initSocket(httpServer);

// Initialize Yjs Server
initYjsServer();

if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

export { app, httpServer };
export default app;
