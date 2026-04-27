import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { redis } from '../lib/redis';

export async function sessionTracker(req: AuthRequest, res: Response, next: NextFunction) {
  if (req.user) {
    const userId = req.user.id;
    const sessionId = req.headers['x-session-id'] as string;
    
    if (sessionId) {
      // Add session to set, with 7 day expiry
      const key = `user_sessions:${userId}`;
      await redis.sadd(key, sessionId);
      await redis.expire(key, 60 * 60 * 24 * 7);
    }
  }
  next();
}
