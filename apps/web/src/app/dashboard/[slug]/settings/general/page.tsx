'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { WorkspaceSettingsLayout } from '@/components/dashboard/WorkspaceSettingsLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Save, 
  Trash2, 
  AlertTriangle, 
  ArrowRightLeft, 
  Loader2,
  Lock,
  Globe
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function WorkspaceGeneralPage() {
  const params = useParams();
  const router = useRouter();
  const { session, user } = useAuth();
  const slug = params.slug as string;

  const [workspace, setWorkspace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [transferUserId, setTransferUserId] = useState('');

  useEffect(() => {
    const fetchWorkspace = async () => {
      if (!session?.accessToken) return;
      try {
        const response = await axios.get(`${API_URL}/workspaces/${slug}`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setWorkspace(response.data);
        setName(response.data.name);
      } catch (error) {
        console.error('Failed to fetch workspace', error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkspace();
  }, [slug, session?.accessToken]);

  const handleUpdate = async () => {
    if (!session?.accessToken) return;
    setSaving(true);
    try {
      await axios.patch(`${API_URL}/workspaces/${slug}/settings`, { name }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      alert('Settings updated');
    } catch (error) {
      alert('Failed to update');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!session?.accessToken || !workspace) return;
    const confirmation = window.prompt(`Type "${workspace.name}" to confirm deletion:`);
    if (confirmation !== workspace.name) return;

    try {
      await axios.delete(`${API_URL}/workspaces/${slug}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      router.push('/dashboard');
    } catch (error) {
      alert('Failed to delete');
    }
  };

  const handleTransfer = async () => {
    if (!transferUserId || !session?.accessToken) return;
    if (!window.confirm('Are you sure you want to transfer ownership? You will become an ADMIN.')) return;

    try {
      await axios.post(`${API_URL}/workspaces/${slug}/transfer`, { newOwnerId: transferUserId }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      alert('Ownership transferred');
      window.location.reload();
    } catch (error) {
      alert('Failed to transfer');
    }
  };

  if (loading) return (
    <WorkspaceSettingsLayout>
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" />
      </div>
    </WorkspaceSettingsLayout>
  );

  const isOwner = workspace.ownerId === user?.id;

  return (
    <WorkspaceSettingsLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-black mb-2">General Settings</h1>
          <p className="text-white/40 font-medium">Configure your workspace identity and privacy.</p>
        </header>

        <section className="space-y-8 max-w-xl">
          <div className="space-y-4">
             <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Workspace Name</label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 h-12 rounded-2xl focus-visible:ring-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Workspace Slug</label>
              <div className="flex items-center gap-3 bg-white/2 border border-white/10 h-12 rounded-2xl px-4 text-white/20 cursor-not-allowed">
                <Globe size={18} />
                <span className="text-sm font-medium">devcollab.ai/dashboard/{workspace.slug}</span>
                <Lock size={14} className="ml-auto" />
              </div>
            </div>

            <Button 
              onClick={handleUpdate}
              disabled={saving}
              className="bg-indigo-600 hover:bg-indigo-500 h-12 rounded-2xl font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] w-full mt-4"
            >
              {saving ? <Loader2 className="animate-spin" /> : <Save size={18} className="mr-2" />}
              Save Changes
            </Button>
          </div>
        </section>

        {/* Plan Display */}
        <section className="pt-12 border-t border-white/10 space-y-6">
          <h2 className="text-xl font-bold">Current Plan</h2>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-indigo-400">{workspace.plan}</span>
                <span className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Active</span>
              </div>
              <p className="text-sm text-white/40">Your workspace is currently on the {workspace.plan} plan.</p>
            </div>
            <Button 
              onClick={() => router.push(`/dashboard/${slug}/settings/billing`)}
              className="bg-white text-black hover:bg-white/90 h-12 px-8 rounded-2xl font-bold"
            >
              Upgrade Plan
            </Button>
          </div>
        </section>

        {/* Danger Zone */}
        {isOwner && (
          <section className="pt-12 border-t border-white/10 space-y-6">
            <div className="flex items-center gap-2 text-rose-500">
              <AlertTriangle size={20} />
              <h2 className="text-xl font-bold">Danger Zone</h2>
            </div>
            
            <div className="grid gap-6">
              {/* Transfer */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-6">
                <div className="space-y-1">
                  <p className="font-bold">Transfer Ownership</p>
                  <p className="text-sm text-white/40 max-w-md">Transfer this workspace to another member. You will lose owner permissions.</p>
                </div>
                <div className="flex gap-4">
                  <select 
                    value={transferUserId}
                    onChange={(e) => setTransferUserId(e.target.value)}
                    className="flex-1 bg-[#050505] border border-white/10 rounded-2xl p-3 text-sm focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select a member...</option>
                    {workspace.members.filter((m: any) => m.userId !== user?.id).map((m: any) => (
                      <option key={m.userId} value={m.userId}>{m.user.name || m.user.email}</option>
                    ))}
                  </select>
                  <Button 
                    onClick={handleTransfer}
                    disabled={!transferUserId}
                    className="bg-white/10 hover:bg-white/20 text-white h-12 px-6 rounded-2xl font-bold"
                  >
                    <ArrowRightLeft size={18} className="mr-2" />
                    Transfer
                  </Button>
                </div>
              </div>

              {/* Delete */}
              <div className="bg-rose-500/5 border border-rose-500/10 p-8 rounded-[32px] flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-bold text-rose-500">Delete Workspace</p>
                  <p className="text-sm text-white/40 max-w-md">Permanently remove this workspace and all associated repositories, reviews, and data.</p>
                </div>
                <Button 
                  variant="destructive" 
                  onClick={handleDelete}
                  className="bg-rose-500 hover:bg-rose-600 h-12 px-8 rounded-2xl font-bold"
                >
                  <Trash2 size={18} className="mr-2" />
                  Delete Workspace
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>
    </WorkspaceSettingsLayout>
  );
}
