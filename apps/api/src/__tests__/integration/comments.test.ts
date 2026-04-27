import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { prisma } from '../../lib/prisma';
import app from '../../index';
import jwt from 'jsonwebtoken';

describe('Comments Integration Tests', () => {
  let testUser: any;
  let authToken: string;
  let workspace: any;
  let repository: any;
  let pr: any;

  beforeAll(async () => {
    testUser = await prisma.user.upsert({
      where: { email: 'comment-tester@example.com' },
      update: {},
      create: { email: 'comment-tester@example.com', githubId: 'cmt-123', githubUsername: 'cmt-tester' }
    });

    authToken = jwt.sign({ id: testUser.id, email: testUser.email }, process.env.JWT_SECRET!);

    workspace = await prisma.workspace.create({
      data: {
        name: 'Comment Test WS',
        slug: 'comment-ws',
        ownerId: testUser.id,
        members: { create: { userId: testUser.id, role: 'OWNER' } }
      }
    });

    repository = await prisma.repository.create({
      data: { name: 'cmt-repo', fullName: 'cmt-owner/cmt-repo', githubRepoId: 'repo-cmt', workspaceId: workspace.id }
    });

    pr = await prisma.pullRequest.create({
      data: {
        repositoryId: repository.id,
        githubPrNumber: 2,
        title: 'Fix: Bug',
        authorId: testUser.id,
        headBranch: 'fix/bug',
        baseBranch: 'main'
      }
    });
  });

  afterAll(async () => {
    await prisma.workspace.deleteMany({ where: { id: workspace.id } });
    await prisma.user.delete({ where: { id: testUser.id } });
  });

  it('should create a comment, reply, and resolve it', async () => {
    // 1. Create Comment
    const commentRes = await request(app)
      .post('/comments')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        pullRequestId: pr.id,
        filePath: 'src/app.ts',
        lineNumber: 15,
        body: 'This needs improvement.',
        diffHunk: '@@ -12,5 +12,5 @@'
      });

    expect(commentRes.status).toBe(201);
    const commentId = commentRes.body.id;

    // 2. Reply to Comment
    const replyRes = await request(app)
      .post('/comments')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        pullRequestId: pr.id,
        parentId: commentId,
        body: 'I agree, fixed in next commit.',
        filePath: 'src/app.ts',
        lineNumber: 15,
        diffHunk: '@@ -12,5 +12,5 @@'
      });

    expect(replyRes.status).toBe(201);
    expect(replyRes.body.parentId).toBe(commentId);

    // 3. Resolve Thread
    const resolveRes = await request(app)
      .patch(`/comments/${commentId}/resolve`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(resolveRes.status).toBe(200);
    expect(resolveRes.body.status).toBe('RESOLVED');

    // 4. Verify in PR detail
    const prDetails = await request(app)
      .get(`/prs/${pr.id}`)
      .set('Authorization', `Bearer ${authToken}`);

    const thread = prDetails.body.comments.find((c: any) => c.id === commentId);
    expect(thread.replies).toHaveLength(1);
    expect(thread.status).toBe('RESOLVED');
  });
});
