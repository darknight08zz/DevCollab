'use client';

import React, { useEffect, useState } from 'react';
import UserSettingsLayout from '@/components/settings/UserSettingsLayout';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Save, Loader2, GitBranch, AlertTriangle } from 'lucide-react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function ProfilePage() {
  const { session } = useAuth();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      if (!session?.accessToken) return;
      try {
        const response = await axios.get(`${API_URL}/users/me`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setUser(response.data);
        setName(response.data.name || '');
        setAvatarUrl(response.data.avatarUrl || '');
      } catch (error) {
        console.error('Failed to fetch user', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [session?.accessToken]);

  const handleUpdate = async () => {
    if (!session?.accessToken) return;
    setSaving(true);
    try {
      await axios.patch(`${API_URL}/users/me`, { name, avatarUrl }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you absolutely sure? This will anonymize your data and you will lose access to your account.') || !session?.accessToken) return;
    try {
      await axios.delete(`${API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      window.location.href = '/';
    } catch (error) {
      alert('Failed to delete account');
    }
  };

  if (loading) return (
    <UserSettingsLayout>
      <div className="flex items-center justify-center h-[400px]">
        <Loader2 className="animate-spin text-indigo-500" />
      </div>
    </UserSettingsLayout>
  );

  return (
    <UserSettingsLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-black mb-2">Profile</h1>
          <p className="text-white/40 font-medium">Manage your public information and account data.</p>
        </header>

        <section className="space-y-8">
          {/* Avatar Upload */}
          <div className="flex items-center gap-8 bg-white/5 p-8 rounded-[32px] border border-white/10">
            <div className="relative group">
              <Avatar className="w-24 h-24 border-2 border-white/10 group-hover:opacity-50 transition-all cursor-pointer">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="bg-indigo-500/20 text-indigo-500 text-2xl font-black">
                  {name[0] || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                <Camera size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Profile Picture</h3>
              <p className="text-xs text-white/40">JPG, GIF or PNG. Max size of 800K</p>
              <Input 
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="Avatar URL"
                className="mt-2 h-8 text-xs bg-[#050505] border-white/10"
              />
            </div>
          </div>

          {/* Form */}
          <div className="grid gap-6 max-w-xl">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Display Name</label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 h-12 rounded-2xl focus-visible:ring-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest">GitHub Username</label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 h-12 rounded-2xl px-4 text-white/60">
                <GitBranch size={18} />
                <span className="text-sm font-medium">{user?.githubUsername || 'Not connected'}</span>
              </div>
            </div>

            <Button 
              onClick={handleUpdate}
              disabled={saving}
              className="bg-indigo-600 hover:bg-indigo-500 h-12 rounded-2xl font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] mt-4"
            >
              {saving ? <Loader2 className="animate-spin" /> : <Save size={18} className="mr-2" />}
              Save Changes
            </Button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center gap-2 text-rose-500">
            <AlertTriangle size={20} />
            <h2 className="text-xl font-bold">Danger Zone</h2>
          </div>
          
          <div className="bg-rose-500/5 border border-rose-500/10 p-8 rounded-[32px] flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-bold">Delete Account</p>
              <p className="text-sm text-white/40 max-w-md">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <Button 
              variant="destructive" 
              onClick={handleDeleteAccount}
              className="bg-rose-500 hover:bg-rose-600 h-12 px-8 rounded-2xl font-bold"
            >
              Delete Account
            </Button>
          </div>
        </section>
      </div>
    </UserSettingsLayout>
  );
}
