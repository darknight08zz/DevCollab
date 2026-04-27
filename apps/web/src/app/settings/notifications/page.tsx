'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Bell, 
  Mail, 
  Save, 
  ChevronLeft, 
  Shield, 
  Bot, 
  MessageSquare, 
  UserPlus,
  Loader2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { motion } from 'framer-motion';
import { usePlan } from '@/hooks/use-plan';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function NotificationSettingsPage() {
  const router = useRouter();
  const { session, user } = useAuth();
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [slackWebhook, setSlackWebhook] = useState('');
  const [slackChannel, setSlackChannel] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState('');
  
  // We'll use the first workspace as default for slack config demo
  useEffect(() => {
    const fetchData = async () => {
      if (!session?.accessToken) return;
      try {
        // Fetch user preferences
        const userRes = await axios.get(`${API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setEmailEnabled(userRes.data.emailNotificationsEnabled);

        // Fetch workspaces for slack config
        const wsRes = await axios.get(`${API_URL}/workspaces`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setWorkspaces(wsRes.data);
        if (wsRes.data.length > 0) {
          setSelectedWorkspaceId(wsRes.data[0].id);
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };
    fetchData();
  }, [session?.accessToken]);

  useEffect(() => {
    const fetchSlackConfig = async () => {
      if (!selectedWorkspaceId || !session?.accessToken) return;
      try {
        const res = await axios.get(`${API_URL}/integrations/slack/${selectedWorkspaceId}`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        if (res.data) {
          setSlackWebhook(res.data.webhookUrl || '');
          setSlackChannel(res.data.channelName || '');
        } else {
          setSlackWebhook('');
          setSlackChannel('');
        }
      } catch (error) {
        console.error('Failed to fetch slack config:', error);
      }
    };
    fetchSlackConfig();
  }, [selectedWorkspaceId, session?.accessToken]);

  const handleSave = async () => {
    if (!session?.accessToken) return;
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      // Save email preferences
      await axios.patch(`${API_URL}/notifications/settings`, { emailEnabled }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });

      // Save slack config if team plan and workspace selected
      const currentWorkspace = workspaces.find(w => w.id === selectedWorkspaceId);
      if (currentWorkspace?.plan !== 'FREE' && slackWebhook) {
        await axios.post(`${API_URL}/integrations/slack/connect`, {
          workspaceId: selectedWorkspaceId,
          webhookUrl: slackWebhook,
          channelName: slackChannel
        }, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error: any) {
      if (error.response?.status === 402) {
        alert('Slack integration requires the TEAM plan.');
      } else {
        alert('Failed to save settings');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const currentWorkspace = workspaces.find(w => w.id === selectedWorkspaceId);
  const isTeamPlan = currentWorkspace?.plan === 'TEAM' || currentWorkspace?.plan === 'ENTERPRISE';

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs mb-6 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                Notifications
              </h1>
              <p className="text-white/40 font-medium">Control how and when you want to be notified.</p>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                saveSuccess ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-white/90'
              } disabled:opacity-50`}
            >
              {isSaving ? <Loader2 className="animate-spin" size={18} /> : saveSuccess ? <CheckCircle2 size={18} /> : <Save size={18} />}
              {saveSuccess ? 'Saved!' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Email Notifications */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Mail size={20} />
            </div>
            <h2 className="text-xl font-bold">Email Notifications</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-bold">Global Email Notifications</p>
                <p className="text-sm text-white/40">Send me emails for important updates and activities.</p>
              </div>
              <button
                onClick={() => setEmailEnabled(!emailEnabled)}
                className={`w-14 h-8 rounded-full p-1 transition-colors ${emailEnabled ? 'bg-indigo-600' : 'bg-white/10'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${emailEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            <div className="grid gap-4 pt-4">
              {[
                { icon: <MessageSquare size={16} />, label: 'New comments on your PRs', desc: 'Notify when someone reviews your code' },
                { icon: <Bot size={16} />, label: 'AI Analysis completion', desc: 'Get an email when AI finish reviewing' },
                { icon: <Shield size={16} />, label: 'Critical security alerts', desc: 'Immediate alerts for high-risk findings' },
                { icon: <UserPlus size={16} />, label: 'Workspace invitations', desc: 'When you are added to a new team' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 opacity-80">
                  <div className="p-2 bg-white/5 rounded-xl text-white/40">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="text-[11px] text-white/30">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slack Integration */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#4A154B]/20 rounded-lg text-[#E01E5A]">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-xl font-bold">Slack Integration</h2>
            </div>
            {!isTeamPlan && (
              <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-1 rounded-full font-black tracking-widest uppercase">
                Team Plan Required
              </span>
            )}
          </div>

          <div className={`bg-white/5 border border-white/10 rounded-[32px] p-8 space-y-8 ${!isTeamPlan ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
            <div className="space-y-4">
              <label className="text-sm font-bold text-white/60">Target Workspace</label>
              <select 
                value={selectedWorkspaceId}
                onChange={(e) => setSelectedWorkspaceId(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-indigo-500 transition-colors"
              >
                {workspaces.map(ws => (
                  <option key={ws.id} value={ws.id}>{ws.name} ({ws.plan})</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white/60">Incoming Webhook URL</label>
                <a href="https://api.slack.com/apps" target="_blank" className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  How to setup? <ExternalLink size={10} />
                </a>
              </div>
              <input 
                type="text" 
                placeholder="https://hooks.slack.com/services/..."
                value={slackWebhook}
                onChange={(e) => setSlackWebhook(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-white/10"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-white/60">Notification Channel (Optional)</label>
              <input 
                type="text" 
                placeholder="#engineering"
                value={slackChannel}
                onChange={(e) => setSlackChannel(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-white/10"
              />
            </div>

            {!isTeamPlan && (
              <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl text-center space-y-4">
                <p className="text-sm font-bold text-rose-400">Slack integration is exclusive to the Team plan.</p>
                <button 
                  onClick={() => router.push('/billing')}
                  className="bg-rose-500 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-rose-400 transition-all shadow-[0_0_15px_rgba(225,29,72,0.3)]"
                >
                  Upgrade to Team
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
