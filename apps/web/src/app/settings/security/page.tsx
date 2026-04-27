'use client';

import React, { useEffect, useState } from 'react';
import UserSettingsLayout from '@/components/settings/UserSettingsLayout';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { 
  ShieldAlert, 
  Smartphone, 
  Monitor, 
  Globe, 
  Loader2, 
  RefreshCcw,
  History
} from 'lucide-react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function SecurityPage() {
  const { session } = useAuth();
  const [sessions, setSessions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [revoking, setRevoking] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      if (!session?.accessToken) return;
      try {
        const response = await axios.get(`${API_URL}/users/sessions`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setSessions(response.data.sessions);
      } catch (error) {
        console.error('Failed to fetch sessions', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSessions();
  }, [session?.accessToken]);

  const revokeOtherSessions = async () => {
    if (!session?.accessToken) return;
    setRevoking(true);
    try {
      const currentSessionId = localStorage.getItem('sessionId') || 'unknown';
      await axios.post(`${API_URL}/users/sessions/revoke-all`, {}, {
        headers: { 
          Authorization: `Bearer ${session.accessToken}`,
          'x-session-id': currentSessionId
        }
      });
      setSessions([currentSessionId]);
      alert('Other sessions revoked successfully');
    } catch (error) {
      alert('Failed to revoke sessions');
    } finally {
      setRevoking(false);
    }
  };

  return (
    <UserSettingsLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-black mb-2">Security</h1>
          <p className="text-white/40 font-medium">Protect your account and manage active sessions.</p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <History size={20} />
              </div>
              <h2 className="text-xl font-bold">Active Sessions</h2>
            </div>
            <Button 
              variant="outline" 
              onClick={revokeOtherSessions}
              disabled={revoking || sessions.length <= 1}
              className="border-white/10 hover:bg-white/5 h-10 rounded-xl font-bold text-xs"
            >
              {revoking ? <Loader2 className="animate-spin" /> : <RefreshCcw size={14} className="mr-2" />}
              Revoke all other sessions
            </Button>
          </div>

          <div className="grid gap-4">
            {loading ? (
              <div className="py-12 flex justify-center"><Loader2 className="animate-spin text-white/20" /></div>
            ) : sessions.length === 0 ? (
               <div className="py-12 text-center text-white/20 font-medium">No active sessions found.</div>
            ) : sessions.map((s, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl text-white/40">
                    {i === 0 ? <Monitor size={20} /> : <Smartphone size={20} />}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-sm">Session {s.substring(0, 8)}...</p>
                      {i === 0 && (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-black tracking-widest uppercase">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/40 font-medium">San Francisco, United States • 192.168.1.1</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/20">
                  <Globe size={14} />
                  <span className="text-xs font-medium">Chrome on macOS</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Two-Factor Auth (Placeholder) */}
        <section className="pt-12 border-t border-white/10 space-y-6">
           <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
              <ShieldAlert size={20} />
            </div>
            <h2 className="text-xl font-bold">Two-Factor Authentication</h2>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex items-center justify-between opacity-50 grayscale cursor-not-allowed">
            <div className="space-y-1">
              <p className="font-bold">2FA via Authentication App</p>
              <p className="text-sm text-white/40">Protect your account with an extra layer of security.</p>
            </div>
            <Button disabled className="h-12 px-8 rounded-2xl font-bold">Enable 2FA</Button>
          </div>
        </section>
      </div>
    </UserSettingsLayout>
  );
}
