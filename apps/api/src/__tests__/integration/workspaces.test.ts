import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { prisma } from '../../lib/prisma';
import app from '../../index';
import jwt from 'jsonwebtoken';

describe('Workspace Integration Tests', () => {
  let testUser: any;
  let authToken: string;

  beforeAll(async () => {
    // Setup test user
    testUser = await prisma.user.upsert({
      where: { email: 'test-qa@example.com' },
      update: {},
      create: {
        email: 'test-qa@example.com',
        githubId: 'qa-123',
        githubUsername: 'qa-tester',
        name: 'QA Tester'
      }
    });

    authToken = jwt.sign({ id: testUser.id, email: testUser.email }, process.env.JWT_SECRET!);
  });

  afterAll(async () => {
    // Cleanup
    await prisma.workspace.deleteMany({ where: { ownerId: testUser.id } });
    await prisma.user.delete({ where: { id: testUser.id } });
  });

  it('should create a workspace and invite a member', async () => {
    // 1. Create Workspace
    const createRes = await request(app)
      .post('/workspaces')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ name: 'Integration Test Workspace' });

    expect(createRes.status).toBe(201);
    const workspace = createRes.body;
    expect(workspace.name).toBe('Integration Test Workspace');

    // 2. Invite Member
    const inviteRes = await request(app)
      .post(`/workspaces/${workspace.slug}/members`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({ email: 'invited@example.com', role: 'REVIEWER' });

    expect(inviteRes.status).toBe(200);
    expect(inviteRes.body.message).toContain('invited successfully');

    // 3. Verify Membership
    const wsDetails = await request(app)
      .get(`/workspaces/${workspace.slug}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(wsDetails.body.members).toHaveLength(2); // Owner + Invited
    expect(wsDetails.body.members.find((m: any) => m.user.email === 'invited@example.com')).toBeDefined();
  });

  it('should allow multiple workspaces regardless of plan', async () => {
    // The previous test created 1 workspace. We should now be able to create more.
    const secondWsRes = await request(app)
      .post('/workspaces')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ name: 'Second Workspace' });

    expect(secondWsRes.status).toBe(201);
    expect(secondWsRes.body.name).toBe('Second Workspace');
  });
});
