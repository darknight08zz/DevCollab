import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { RedisStore } from 'rate-limit-redis';
import { redis } from '../lib/redis';
import { logger, getRequestId } from '../lib/logger';
import { z } from 'zod';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window as any);

// Request ID Middleware
export const requestIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const id = getRequestId();
  (req as any).id = id;
  res.setHeader('X-Request-Id', id);
  next();
};

// Security Headers
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "wss:", "https:"],
    },
  },
});

// Rate Limiters
export const globalRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  store: new RedisStore({
    sendCommand: async (...args: string[]) => {
      return await (redis as any).call(args[0], ...args.slice(1));
    },
  }),
});

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,
  message: { error: 'Too many login attempts, please try again later.' },
  store: new RedisStore({
    prefix: 'rl-auth:',
    sendCommand: async (...args: string[]) => {
      return await (redis as any).call(args[0], ...args.slice(1));
    },
  }),
});

export const aiRateLimit = async (req: any, res: Response, next: NextFunction) => {
  const userId = req.user?.id;
  if (!userId) return next();

  const key = `rl-ai:${userId}`;
  const count = await redis.incr(key);
  
  if (count === 1) {
    await redis.expire(key, 3600); // 1 hour
  }

  if (count > 20) {
    return res.status(429).json({ error: 'AI limit reached for this hour. Please try again later.' });
  }
  
  next();
};

// Sanitization
export const sanitize = (content: string) => DOMPurify.sanitize(content);

// Validation Middleware
export const validate = (schema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
      });
    }
    next(error);
  }
};

// Cache Control
export const cacheControl = (seconds: number) => (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', `public, max-age=${seconds}`);
  }
  next();
};
