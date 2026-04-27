import { prisma } from './prisma';
import { Resend } from 'resend';
import axios from 'axios';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export type NotificationType = 'comment' | 'reply' | 'assignment' | 'ai_complete' | 'security_critical' | 'member_join';

export interface NotificationPayload {
  type: NotificationType;
  title: string;
  body: string;
  link?: string;
  workspaceId?: string;
}

export class NotificationService {
  static async notify(userId: string, payload: NotificationPayload) {
    try {
      // Save to DB
      const notification = await prisma.notification.create({
        data: {
          userId,
          type: payload.type,
          title: payload.title,
          body: payload.body,
          link: payload.link,
        },
      });

      // Fetch user for email preference
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true, emailNotificationsEnabled: true, name: true }
      });

      // Send Email if enabled
      if (user?.emailNotificationsEnabled && resend) {
        await resend.emails.send({
          from: 'DevCollab <notifications@devcollab.ai>',
          to: user.email,
          subject: payload.title,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #4f46e5;">DevCollab</h2>
              <p style="font-size: 16px; color: #333;">Hello ${user.name || 'there'},</p>
              <p style="font-size: 16px; color: #555;">${payload.body}</p>
              ${payload.link ? `
                <a href="${process.env.FRONTEND_URL}${payload.link}" 
                   style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px;">
                   View in DevCollab
                </a>
              ` : ''}
              <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;" />
              <p style="font-size: 12px; color: #999;">You received this because you have email notifications enabled. Manage your settings at ${process.env.FRONTEND_URL}/settings/notifications</p>
            </div>
          `,
        });
      }

      // Trigger Slack if workspaceId provided
      if (payload.workspaceId) {
        await this.notifySlack(payload.workspaceId, payload);
      }

      return notification;
    } catch (error) {
      console.error('Notification failed:', error);
    }
  }

  static async notifyWorkspace(workspaceId: string, payload: NotificationPayload, excludeUserId?: string) {
    const members = await prisma.workspaceMember.findMany({
      where: { 
        workspaceId,
        NOT: excludeUserId ? { userId: excludeUserId } : undefined
      },
      select: { userId: true }
    });

    await Promise.all(members.map(m => this.notify(m.userId, { ...payload, workspaceId })));
  }

  static async notifySlack(workspaceId: string, payload: NotificationPayload) {
    try {
      const workspace = await prisma.workspace.findUnique({
        where: { id: workspaceId },
        include: { slackConfig: true }
      });

      if (!workspace?.slackConfig) return;

      const { webhookUrl } = workspace.slackConfig;

      await axios.post(webhookUrl, {
        text: `*${payload.title}*\n${payload.body}\n${payload.link ? `<${process.env.FRONTEND_URL}${payload.link}|View in DevCollab>` : ''}`
      });
    } catch (error) {
      console.error('Slack notification failed:', error);
    }
  }

  static async markRead(notificationId: string, userId: string) {
    return prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { isRead: true }
    });
  }

  static async markAllRead(userId: string) {
    return prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true }
    });
  }
}
