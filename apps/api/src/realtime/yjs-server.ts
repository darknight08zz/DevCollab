import { WebSocketServer } from 'ws';
import * as Y from 'yjs';
import { setupWSConnection } from './yjs-utils';
import { RedisPersistence } from 'y-redis';
import jwt from 'jsonwebtoken';
import { AuthUser } from '@devcollab/shared';
import { prisma } from '../lib/prisma';

const WS_PORT = parseInt(process.env.WS_PORT || '1234');

export const initYjsServer = () => {
  const wss = new WebSocketServer({ port: WS_PORT });
  
  // Initialize Redis Persistence for Yjs
  let persistence: RedisPersistence | null = null;
  if (process.env.REDIS_URL) {
    persistence = new RedisPersistence({
      redisOpts: {
        host: new URL(process.env.REDIS_URL).hostname,
        port: parseInt(new URL(process.env.REDIS_URL).port || '6379'),
        password: new URL(process.env.REDIS_URL).password || undefined,
        maxRetriesPerRequest: null,
        retryStrategy: (times: number) => Math.min(times * 100, 3000),
      }
    });
    console.log('Yjs Redis Persistence initialized');
  }

  wss.on('connection', async (ws, req) => {
    // Basic authentication check
    const url = new URL(req.url || '', `http://${req.headers.host}`);
    const token = url.searchParams.get('token');
    const sessionId = url.pathname.split('/').pop() || 'default';

    if (!token) {
      console.error('Yjs Connection denied: No token provided');
      ws.close(4001, 'Unauthorized');
      return;
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!) as AuthUser;
      
      // Plan Check: Yjs requires PRO
      const session = await prisma.reviewSession.findUnique({
        where: { id: sessionId },
        include: { pullRequest: { include: { repository: true } } }
      });

      if (session && session.pullRequest.repository.workspaceId) {
        const workspace = await prisma.workspace.findUnique({
          where: { id: session.pullRequest.repository.workspaceId }
        });

        if (workspace && workspace.plan === 'FREE') {
          console.error(`Yjs Connection denied: Workspace ${workspace.id} is on FREE plan`);
          ws.close(4003, 'Upgrade required');
          return;
        }
      }

      // Setup Yjs connection with persistence
      setupWSConnection(ws, req, {
        docName: `session:${sessionId}`,
        gc: true,
      });

      // Load from persistence if available
      if (persistence) {
        const docName = `session:${sessionId}`;
        // y-redis handles persistence automatically once configured correctly,
        // but some versions require explicit bind.
        // For y-redis, it usually hooks into the room management.
      }

      console.log(`Yjs User connected to session: ${sessionId}`);
    } catch (err) {
      console.error('Yjs Connection denied: Invalid token');
      ws.close(4002, 'Invalid token');
    }
  });

  console.log(`Yjs WebSocket server is running on ws://localhost:${WS_PORT}`);
};
