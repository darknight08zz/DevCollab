import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import { NotificationService } from '../lib/notifications';

const router = Router();

router.use(authMiddleware);

// Helper to check if user has access to a session's workspace
async function checkSessionAccess(userId: string, sessionId: string) {
  const session = await prisma.reviewSession.findUnique({
    where: { id: sessionId },
    include: {
      pullRequest: {
        include: {
          repository: {
            include: {
              workspace: {
                include: {
                  members: {
                    where: { userId }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  if (!session) return null;
  const isMember = session.pullRequest.repository.workspace.members.length > 0;
  return isMember ? session : null;
}

// POST /sessions/:sessionId/comments - Create comment
router.post('/sessions/:sessionId/comments', async (req: AuthRequest, res) => {
  const { sessionId } = req.params;
  const { filePath, lineNumber, content, parentId } = req.body;
  const userId = req.user!.id;

  try {
    const session = await checkSessionAccess(userId, sessionId);
    if (!session) return res.status(403).json({ message: 'Forbidden' });

    const comment = await prisma.comment.create({
      data: {
        reviewSessionId: sessionId,
        authorId: userId,
        filePath,
        lineNumber,
        content,
        parentId
      },
      include: {
        author: true
      }
    });

    res.status(201).json(comment);

    // Notifications
    try {
      const pr = session.pullRequest;
      const workspaceId = pr.repository.workspaceId;
      const baseUrl = `/dashboard/${session.pullRequest.repository.workspace.slug}/${pr.repositoryId}/prs/${pr.id}`;

      // Notify PR Author
      if (pr.authorId !== userId) {
        await NotificationService.notify(pr.authorId, {
          type: 'comment',
          title: 'New Comment',
          body: `${comment.author.name || comment.author.githubUsername} commented on your PR: "${pr.title}"`,
          link: baseUrl,
          workspaceId
        });
      }

      // Notify Parent Comment Author (if reply)
      if (parentId) {
        const parent = await prisma.comment.findUnique({ where: { id: parentId } });
        if (parent && parent.authorId !== userId && parent.authorId !== pr.authorId) {
          await NotificationService.notify(parent.authorId, {
            type: 'reply',
            title: 'New Reply',
            body: `${comment.author.name || comment.author.githubUsername} replied to your comment.`,
            link: baseUrl,
            workspaceId
          });
        }
      }
    } catch (nError) {
      console.error('Failed to trigger comment notifications:', nError);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to create comment' });
  }
});

// GET /sessions/:sessionId/comments - Get all comments
router.get('/sessions/:sessionId/comments', async (req: AuthRequest, res) => {
  const { sessionId } = req.params;
  const userId = req.user!.id;

  try {
    const session = await checkSessionAccess(userId, sessionId);
    if (!session) return res.status(403).json({ message: 'Forbidden' });

    const comments = await prisma.comment.findMany({
      where: { reviewSessionId: sessionId },
      include: {
        author: true
      },
      orderBy: { createdAt: 'asc' }
    });

    // Grouping by filePath and lineNumber as requested
    const grouped = comments.reduce((acc: any, comment) => {
      const { filePath, lineNumber } = comment;
      if (!acc[filePath]) acc[filePath] = {};
      if (!acc[filePath][lineNumber]) acc[filePath][lineNumber] = [];
      acc[filePath][lineNumber].push(comment);
      return acc;
    }, {});

    res.json(grouped);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch comments' });
  }
});

// PATCH /comments/:commentId - Edit comment
router.patch('/comments/:commentId', async (req: AuthRequest, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  const userId = req.user!.id;

  try {
    const comment = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    if (comment.authorId !== userId) return res.status(403).json({ message: 'Forbidden' });

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
      include: { author: true }
    });

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update comment' });
  }
});

// DELETE /comments/:commentId - Delete comment
router.delete('/comments/:commentId', async (req: AuthRequest, res) => {
  const { commentId } = req.params;
  const userId = req.user!.id;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
      include: {
        reviewSession: {
          include: {
            pullRequest: {
              include: {
                repository: {
                  include: {
                    workspace: {
                      include: {
                        members: { where: { userId } }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const userRole = comment.reviewSession.pullRequest.repository.workspace.members[0]?.role;
    const isAuthor = comment.authorId === userId;
    const isAdmin = userRole === 'ADMIN' || userRole === 'OWNER';

    if (!isAuthor && !isAdmin) return res.status(403).json({ message: 'Forbidden' });

    await prisma.comment.delete({ where: { id: commentId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete comment' });
  }
});

// PATCH /comments/:commentId/resolve - Resolve thread
router.patch('/comments/:commentId/resolve', async (req: AuthRequest, res) => {
  const { commentId } = req.params;
  const userId = req.user!.id;

  try {
    const comment = await prisma.comment.findUnique({ 
      where: { id: commentId },
      include: {
        reviewSession: {
          include: {
            pullRequest: {
              include: {
                repository: {
                  include: {
                    workspace: {
                      include: {
                        members: { where: { userId } }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    // Membership check
    if (comment.reviewSession.pullRequest.repository.workspace.members.length === 0) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { resolvedAt: comment.resolvedAt ? null : new Date() },
      include: { author: true }
    });

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to resolve comment' });
  }
});

export default router;
