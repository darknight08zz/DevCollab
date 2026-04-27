'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { WorkspaceSettingsLayout } from '@/components/dashboard/WorkspaceSettingsLayout';
import { 
  History, 
  Loader2, 
  User as UserIcon, 
  ArrowRight,
  Clock,
  ExternalLink,
  Lock
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function WorkspaceAuditLogPage() {
  const params = useParams();
  const { session } = useAuth();
  const slug = params.slug as string;

  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [workspace, setWorkspace] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.accessToken) return;
      try {
        const wsRes = await axios.get(`${API_URL}/workspaces/${slug}`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setWorkspace(wsRes.data);

        const logRes = await axios.get(`${API_URL}/workspaces/${slug}/audit-log`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setLogs(logRes.data);
      } catch (err: any) {
        console.error('Failed to fetch audit logs', err);
        setError(err.response?.data || { message: 'Failed to fetch logs' });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug, session?.accessToken]);

  if (loading) return (
    <WorkspaceSettingsLayout>
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" />
      </div>
    </WorkspaceSettingsLayout>
  );



  return (
    <WorkspaceSettingsLayout>
      <div className="space-y-12">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black mb-2">Audit Log</h1>
            <p className="text-white/40 font-medium">History of all critical actions performed in this workspace.</p>
          </div>
          <div className="p-2 bg-white/5 rounded-xl text-white/20">
            <History size={24} />
          </div>
        </header>

        <section>
          <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-white/20">
                  <th className="px-8 py-4">Actor</th>
                  <th className="px-8 py-4">Action</th>
                  <th className="px-8 py-4">Details</th>
                  <th className="px-8 py-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium">
                {logs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center text-white/20">
                      No logs found yet.
                    </td>
                  </tr>
                ) : logs.map((log) => (
                  <tr key={log.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8 border border-white/10">
                          <AvatarImage src={log.actor.avatarUrl} />
                          <AvatarFallback className="text-[10px] bg-indigo-500/20 text-indigo-400">
                            {log.actor.name?.[0] || log.actor.githubUsername?.[0] || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-bold">{log.actor.name || log.actor.githubUsername}</p>
                          <p className="text-[10px] text-white/40 font-mono">{log.actor.id.substring(0, 8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-lg text-white/80 font-bold">
                        {log.action.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-xs text-white/60 font-mono max-w-xs truncate group-hover:whitespace-normal group-hover:break-words">
                        {JSON.stringify(log.metadata)}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-white/20 text-xs font-bold whitespace-nowrap">
                        <Clock size={12} />
                        {formatDistanceToNow(new Date(log.createdAt))} ago
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </WorkspaceSettingsLayout>
  );
}
