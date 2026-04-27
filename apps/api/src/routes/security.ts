import { Router } from 'express';
import { PrismaClient } from '../generated/client';
import { authMiddleware as authenticate, AuthRequest } from '../middleware/auth';
import axios from 'axios';
import parseDiff from 'parse-diff';
import { preScanDiff, scanForVulnerabilities, calculateSecurityScore } from '../ai/security-scanner';
import { NotificationService } from '../lib/notifications';

const router = Router();
const prisma = new PrismaClient();

// POST /prs/:prId/security/scan
router.post('/prs/:prId/security/scan', authenticate, async (req: AuthRequest, res) => {
  const { prId } = req.params;

  try {
    const pr = await prisma.pullRequest.findUnique({
      where: { id: prId },
      include: { repository: true }
    });

    if (!pr) return res.status(404).json({ error: 'PR not found' });

    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    if (!user?.githubAccessToken) return res.status(401).json({ error: 'GitHub not connected' });

    // Fetch diff
    const diffResponse = await axios.get(`https://api.github.com/repos/${pr.repository.fullName}/pulls/${pr.githubPrNumber}`, {
      headers: { 
        Authorization: `Bearer ${user.githubAccessToken}`,
        Accept: 'application/vnd.github.v3.diff'
      }
    });

    const parsedDiff = parseDiff(diffResponse.data);

    // 1. Fast Regex Pre-scan
    const regexIssues = preScanDiff(parsedDiff);

    // 2. Deep GPT-4o Scan
    const gptIssues = await scanForVulnerabilities(parsedDiff);

    const allIssues = [...regexIssues, ...gptIssues];

    // Save results to DB
    const savedFindings = await Promise.all(allIssues.map(async (issue) => {
      return prisma.securityFinding.create({
        data: {
          pullRequestId: prId,
          filePath: issue.filePath,
          lineNumber: issue.lineNumber,
          severity: issue.severity,
          category: issue.category,
          cweId: issue.cweId,
          description: issue.description,
          remediation: issue.remediation
        }
      });
    }));

    // Update PR security score
    const score = calculateSecurityScore(allIssues);
    await prisma.pullRequest.update({
      where: { id: prId },
      data: { securityScore: score }
    });

    res.json({ findings: savedFindings, score });

    // Notifications for Critical/High issues
    const criticalIssues = allIssues.filter(i => i.severity === 'critical' || i.severity === 'high');
    if (criticalIssues.length > 0) {
      try {
        const workspace = await prisma.workspace.findFirst({
          where: { repositories: { some: { id: pr.repositoryId } } }
        });

        const payload = {
          type: 'security_critical' as any,
          title: 'Critical Security Vulnerabilities Found',
          body: `DevCollab Security Scanner found ${criticalIssues.length} high/critical vulnerabilities in PR #${pr.githubPrNumber}: "${pr.title}"`,
          link: `/dashboard/${workspace?.slug}/${pr.repositoryId}/prs/${pr.id}`,
          workspaceId: pr.repository.workspaceId
        };

        await NotificationService.notify(pr.authorId, payload);
        await NotificationService.notifySlack(pr.repository.workspaceId, payload);
      } catch (nError) {
        console.error('Failed to trigger security notifications:', nError);
      }
    }
  } catch (error: any) {
    console.error('Security scan failed:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /prs/:prId/security/results
router.get('/prs/:prId/security/results', authenticate, async (req: AuthRequest, res) => {
  const { prId } = req.params;

  try {
    const findings = await prisma.securityFinding.findMany({
      where: { 
        pullRequestId: prId,
        isFalsePositive: false
      },
      orderBy: { createdAt: 'desc' }
    });

    const pr = await prisma.pullRequest.findUnique({ where: { id: prId } });

    res.json({ findings, score: pr?.securityScore });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /security/findings/:findingId/false-positive
router.patch('/security/findings/:findingId/false-positive', authenticate, async (req, res) => {
  const { findingId } = req.params;

  try {
    await prisma.securityFinding.update({
      where: { id: findingId },
      data: { isFalsePositive: true }
    });
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
