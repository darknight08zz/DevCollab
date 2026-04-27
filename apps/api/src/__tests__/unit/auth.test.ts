import { describe, it, expect, vi } from 'vitest';
import jwt from 'jsonwebtoken';
import { authMiddleware, AuthRequest } from '../../middleware/auth';
import { Response } from 'express';

describe('Auth Middleware Unit Tests', () => {
  const secret = 'test-secret';
  process.env.JWT_SECRET = secret;

  it('should validate a correct JWT token', () => {
    const user = { id: 'user-1', email: 'test@example.com', githubUsername: 'tester' };
    const token = jwt.sign(user, secret);
    
    const req = {
      headers: { authorization: `Bearer ${token}` }
    } as AuthRequest;
    
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    } as any;
    
    const next = vi.fn();

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.user).toMatchObject(user);
  });

  it('should return 401 if no token is provided', () => {
    const req = { headers: {} } as AuthRequest;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    } as any;
    const next = vi.fn();

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized: No token provided' });
  });

  it('should return 401 for an invalid token', () => {
    const req = {
      headers: { authorization: 'Bearer invalid-token' }
    } as AuthRequest;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    } as any;
    const next = vi.fn();

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized: Invalid token' });
  });

  it('should detect an expired token', () => {
    const token = jwt.sign({ id: '1' }, secret, { expiresIn: '0s' });
    
    const req = {
      headers: { authorization: `Bearer ${token}` }
    } as AuthRequest;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    } as any;
    const next = vi.fn();

    // Small delay to ensure expiry
    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });
});
