'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { WorkspaceSettingsLayout } from '@/components/dashboard/WorkspaceSettingsLayout';
import { 
  Share2, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  MessageSquare,
  Hash,
  Loader2,
  Lock,
  GitBranch
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function WorkspaceIntegrationsPage() {
  const params = useParams();
  const { session, user } = useAuth();
  const slug = params.slug as string;

  const [workspace, setWorkspace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [slackWebhook, setSlackWebhook] = useState('');
  const [slackChannel, setSlackChannel] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.accessToken) return;
      try {
        const wsRes = await axios.get(`${API_URL}/workspaces/${slug}`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setWorkspace(wsRes.data);

        const slackRes = await axios.get(`${API_URL}/integrations/slack/${wsRes.data.id}`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        if (slackRes.data) {
          setSlackWebhook(slackRes.data.webhookUrl || '');
          setSlackChannel(slackRes.data.channelName || '');
        }
      } catch (err) {
        console.error('Failed to fetch data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug, session?.accessToken]);

  const handleSlackUpdate = async () => {
    if (!session?.accessToken) return;
    setSaving(true);
    try {
      await axios.post(`${API_URL}/integrations/slack/connect`, {
        workspaceId: workspace.id,
        webhookUrl: slackWebhook,
        channelName: slackChannel
      }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      alert('Slack configuration saved!');
    } catch (error: any) {
      if (error.response?.status === 402) {
        alert('Slack integration requires the TEAM plan.');
      } else {
        alert('Failed to save Slack settings');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <WorkspaceSettingsLayout>
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" />
      </div>
    </WorkspaceSettingsLayout>
  );

  const isTeamPlan = workspace.plan === 'TEAM' || workspace.plan === 'ENTERPRISE';

  return (
    <WorkspaceSettingsLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-black mb-2">Integrations</h1>
          <p className="text-white/40 font-medium">Connect DevCollab to your existing tools and workflows.</p>
        </header>

        <div className="grid gap-8">
          {/* GitHub Connection */}
          <section className="bg-white/5 border border-white/10 rounded-[32px] p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <GitBranch size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">GitHub</h3>
                  <p className="text-sm text-white/40 font-medium">Required for repository syncing and auth.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 size={12} />
                Connected
              </div>
            </div>
            <div className="p-4 bg-[#050505] rounded-2xl border border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <img src={user?.avatarUrl || ''} className="w-8 h-8 rounded-full" />
                 <span className="text-sm font-bold">{user?.githubUsername}</span>
               </div>
               <Button variant="ghost" className="text-xs text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 font-bold">Disconnect</Button>
            </div>
          </section>

          {/* Slack Integration */}
          <section className="bg-white/5 border border-white/10 rounded-[32px] p-8 space-y-8 relative overflow-hidden">
            {!isTeamPlan && (
              <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-sm z-10 flex items-center justify-center p-8 text-center">
                <div className="max-w-xs space-y-4">
                  <Lock className="mx-auto text-indigo-500" size={32} />
                  <h4 className="text-xl font-bold">Slack is a Team feature</h4>
                  <p className="text-sm text-white/60 font-medium">Upgrade to the TEAM plan to automate your workspace notifications.</p>
                  <Button className="bg-indigo-600 hover:bg-indigo-500 h-10 px-6 rounded-xl font-bold shadow-[0_0_15px_rgba(79,70,229,0.3)]">Upgrade Now</Button>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A154B]/20 rounded-2xl text-[#E01E5A]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Slack</h3>
                  <p className="text-sm text-white/40 font-medium">Send real-time alerts to your team channels.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Incoming Webhook URL</label>
                <Input 
                  value={slackWebhook}
                  onChange={(e) => setSlackWebhook(e.target.value)}
                  placeholder="https://hooks.slack.com/services/..."
                  className="bg-[#050505] border-white/10 h-12 rounded-2xl focus-visible:ring-indigo-500 font-mono text-xs"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Notification Channel</label>
                <div className="relative">
                   <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                   <Input 
                    value={slackChannel}
                    onChange={(e) => setSlackChannel(e.target.value)}
                    placeholder="engineering-alerts"
                    className="bg-[#050505] border-white/10 h-12 rounded-2xl pl-10 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>
              <Button 
                onClick={handleSlackUpdate}
                disabled={saving}
                className="bg-[#4A154B] hover:bg-[#4A154B]/90 h-12 rounded-2xl font-bold"
              >
                {saving ? <Loader2 className="animate-spin" /> : 'Save Slack Settings'}
              </Button>
            </div>
          </section>

          {/* Future Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-40 grayscale">
            {[
              { name: 'Jira', desc: 'Sync PR comments as Jira issues.' },
              { name: 'Linear', desc: 'Auto-link PRs to Linear tasks.' }
            ].map(tool => (
              <div key={tool.name} className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center justify-between group">
                <div className="space-y-1">
                  <h4 className="font-bold">{tool.name}</h4>
                  <p className="text-xs font-medium text-white/40">{tool.desc}</p>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-2 py-1 rounded-full">Coming Soon</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WorkspaceSettingsLayout>
  );
}
