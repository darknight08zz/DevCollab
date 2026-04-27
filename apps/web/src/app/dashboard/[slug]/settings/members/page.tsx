'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { WorkspaceSettingsLayout } from '@/components/dashboard/WorkspaceSettingsLayout';
import { 
  Users, 
  UserPlus, 
  Loader2, 
  MoreVertical, 
  Shield, 
  Trash2,
  Clock,
  UserCheck
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function WorkspaceMembersPage() {
  const params = useParams();
  const { session, user } = useAuth();
  const slug = params.slug as string;

  const [workspace, setWorkspace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('VIEWER');
  const [inviting, setInviting] = useState(false);

  const fetchWorkspace = async () => {
    if (!session?.accessToken) return;
    try {
      const response = await axios.get(`${API_URL}/workspaces/${slug}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setWorkspace(response.data);
    } catch (error) {
      console.error('Failed to fetch workspace', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkspace();
  }, [slug, session?.accessToken]);

  const handleInvite = async () => {
    if (!inviteEmail || !session?.accessToken) return;
    setInviting(true);
    try {
      await axios.post(`${API_URL}/workspaces/${slug}/members`, {
        email: inviteEmail,
        role: inviteRole
      }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setInviteEmail('');
      alert('Invitation sent!');
      fetchWorkspace();
    } catch (error) {
      alert('Failed to invite member');
    } finally {
      setInviting(false);
    }
  };

  const handleRemoveMember = async (userId: string) => {
    if (!window.confirm('Are you sure you want to remove this member?') || !session?.accessToken) return;
    try {
      await axios.delete(`${API_URL}/workspaces/${slug}/members/${userId}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      fetchWorkspace();
    } catch (error) {
      alert('Failed to remove member');
    }
  };

  const handleUpdateRole = async (userId: string, role: string) => {
    if (!session?.accessToken || !workspace) return;
    try {
      await axios.post(`${API_URL}/workspaces/${slug}/members`, {
        email: workspace.members.find((m: any) => m.userId === userId).user.email,
        role
      }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      fetchWorkspace();
    } catch (error) {
      alert('Failed to update role');
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
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black mb-2">Members</h1>
            <p className="text-white/40 font-medium">Manage who has access to this workspace and their roles.</p>
          </div>
          <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-500">
            <Users size={24} />
          </div>
        </header>

        {/* Invite Section */}
        <section className="bg-white/5 border border-white/10 rounded-[32px] p-8 space-y-6">
           <div className="flex items-center gap-3">
             <UserPlus size={20} className="text-indigo-400" />
             <h3 className="font-bold">Invite new member</h3>
           </div>
           <div className="flex gap-4">
             <Input 
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="email@example.com"
                className="flex-1 bg-[#050505] border-white/10 h-12 rounded-2xl focus-visible:ring-indigo-500"
             />
             <select 
               value={inviteRole}
               onChange={(e) => setInviteRole(e.target.value)}
               className="bg-[#050505] border border-white/10 rounded-2xl px-4 text-sm font-medium focus:outline-none focus:border-indigo-500"
             >
               <option value="VIEWER">Viewer</option>
               <option value="REVIEWER">Reviewer</option>
               <option value="ADMIN">Admin</option>
             </select>
             <Button 
               onClick={handleInvite}
               disabled={inviting || !inviteEmail}
               className="bg-indigo-600 hover:bg-indigo-500 h-12 px-8 rounded-2xl font-bold"
             >
               {inviting ? <Loader2 className="animate-spin" /> : 'Invite'}
             </Button>
           </div>
        </section>

        {/* Members List */}
        <section>
          <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-white/20">
                   <th className="px-8 py-4">User</th>
                   <th className="px-8 py-4">Role</th>
                   <th className="px-8 py-4">Joined</th>
                   <th className="px-8 py-4 text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5 font-medium">
                 {workspace.members.map((member: any) => (
                   <tr key={member.id} className="hover:bg-white/[0.02] transition-colors">
                     <td className="px-8 py-6">
                       <div className="flex items-center gap-3">
                         <Avatar className="w-10 h-10 border border-white/10">
                           <AvatarImage src={member.user.avatarUrl} />
                           <AvatarFallback className="bg-indigo-500/20 text-indigo-400 font-bold">
                             {member.user.name?.[0] || member.user.githubUsername?.[0] || 'U'}
                           </AvatarFallback>
                         </Avatar>
                         <div>
                           <p className="text-sm font-bold text-white">{member.user.name || member.user.githubUsername}</p>
                           <p className="text-xs text-white/40">{member.user.email}</p>
                         </div>
                       </div>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                           {member.role === 'OWNER' ? (
                             <div className="flex items-center gap-2">
                               <Shield size={14} className="text-indigo-400" />
                               <span className="text-xs font-bold text-white">OWNER</span>
                             </div>
                           ) : (
                             <select 
                               disabled={!isOwner}
                               value={member.role}
                               onChange={(e) => handleUpdateRole(member.userId, e.target.value)}
                               className="bg-transparent border-none text-xs font-bold text-white/60 focus:ring-0 cursor-pointer hover:text-white"
                             >
                               <option value="VIEWER">VIEWER</option>
                               <option value="REVIEWER">REVIEWER</option>
                               <option value="ADMIN">ADMIN</option>
                             </select>
                           )}
                        </div>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-white/20 text-xs">
                          <Clock size={12} />
                          {new Date(member.joinedAt).toLocaleDateString()}
                        </div>
                     </td>
                     <td className="px-8 py-6 text-right">
                        {isOwner && member.userId !== user?.id && member.role !== 'OWNER' && (
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleRemoveMember(member.userId)}
                            className="text-white/20 hover:text-rose-500 hover:bg-rose-500/10 rounded-xl"
                          >
                            <Trash2 size={18} />
                          </Button>
                        )}
                        {member.userId === user?.id && (
                           <span className="text-[10px] bg-white/10 text-white/40 px-2 py-1 rounded-full font-bold uppercase tracking-widest">You</span>
                        )}
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
