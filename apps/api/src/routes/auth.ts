import { Router } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { prisma } from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';

import { validate } from '../middleware/harden';
import { z } from 'zod';

const router = Router();

const githubCallbackSchema = z.object({
  code: z.string().optional(),
  accessToken: z.string().optional()
}).refine(data => data.code || data.accessToken, {
  message: "Either 'code' or 'accessToken' must be provided"
});

router.post('/github/callback', validate(githubCallbackSchema), async (req, res) => {
  const { code, accessToken: providedAccessToken } = req.body;

  try {
    let accessToken = providedAccessToken;

    if (!accessToken && code) {
      // 1. Exchange code for access token
      const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );

      accessToken = tokenResponse.data.access_token;
    }

    if (!accessToken) {
      return res.status(401).json({ message: 'Failed to obtain access token from GitHub' });
    }

    // 2. Fetch user profile from GitHub
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const githubUser = userResponse.data;

    // 3. Upsert user in DB
    const user = await prisma.user.upsert({
      where: { githubId: githubUser.id.toString() },
      update: {
        name: githubUser.name || githubUser.login,
        avatarUrl: githubUser.avatar_url,
        githubUsername: githubUser.login,
        githubAccessToken: accessToken,
      },
      create: {
        email: githubUser.email || `${githubUser.login}@github.com`,
        name: githubUser.name || githubUser.login,
        avatarUrl: githubUser.avatar_url,
        githubId: githubUser.id.toString(),
        githubUsername: githubUser.login,
        githubAccessToken: accessToken,
      },
    });

    // 4. Sign JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        avatarUrl: user.avatarUrl,
        githubId: user.githubId,
        githubUsername: user.githubUsername,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatarUrl: user.avatarUrl,
        githubId: user.githubId,
        githubUsername: user.githubUsername,
      },
      token,
    });
  } catch (error: any) {
    console.error('Auth error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Authentication failed' });
  }
});

router.get('/me', authMiddleware, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

export default router;
