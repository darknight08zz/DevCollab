'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { 
  GitPullRequest, 
  Clock, 
  GitBranch, 
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  GitMerge,
  Globe,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { Sidebar } from '@/components/dashboard/sidebar';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface PullRequest {
  id: string;
  githubPrNumber: number;
  title: string;
  status: 'OPEN' | 'CLOSED' | 'MERGED';
  author: {
    name: string;
    avatarUrl: string;
    githubUsername: string;
  };
  headBranch: string;
  baseBranch: string;
  createdAt: string;
  updatedAt: string;
  repository: {
    id: string;
    name: string;
    workspace: {
      slug: string;
      name: string;
    }
  }
}

export default function GlobalPRPage() {
  const router = useRouter();
  const { session } = useAuth();
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!session?.accessToken) return;
    try {
      setLoading(true);
      const [prRes, wsRes] = await Promise.all([
        axios.get(`${API_URL}/prs`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        }),
        axios.get(`${API_URL}/workspaces`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        })
      ]);
      setPrs(prRes.data);
      setWorkspaces(wsRes.data);
    } catch (error) {
      console.error('Failed to fetch global data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [session?.accessToken]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'OPEN':
        return <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase"><CheckCircle2 size={10} /> Open</span>;
      case 'CLOSED':
        return <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold border border-rose-500/20 uppercase"><XCircle size={10} /> Closed</span>;
      case 'MERGED':
        return <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold border border-purple-500/20 uppercase"><GitMerge size={10} /> Merged</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar workspaces={workspaces} />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-12 space-y-12">
          {/* Header */}
          <div className="space-y-2">
            <button 
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs mb-4 group"
            >
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Overview
            </button>
            <div className="flex items-center gap-2 text-white/40 mb-2">
              <Globe size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Global View</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              All Pull Requests
            </h1>
            <p className="text-white/40">Monitoring all active and historical changes across your organization.</p>
          </div>

          {/* List */}
          <div className="space-y-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="animate-spin text-white/20" size={48} />
                <p className="text-white/20 font-mono text-xs">Loading all pull requests...</p>
              </div>
            ) : prs.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-20 text-center space-y-6">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                  <GitPullRequest className="text-white/10" size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">No pull requests found</h3>
                  <p className="text-white/40 max-w-sm mx-auto">
                    Once you sync repositories in your workspaces, their pull requests will appear here in a unified view.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-3">
                {prs.map((pr) => (
                  <motion.div
                    key={pr.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => router.push(`/dashboard/${pr.repository.workspace.slug}/${pr.repository.id}/prs/${pr.id}`)}
                    className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden flex-shrink-0 bg-white/5 flex items-center justify-center">
                          <img src={pr.author.avatarUrl} alt={pr.author.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors line-clamp-1">{pr.title}</h3>
                            <span className="text-white/20 font-mono text-sm flex-shrink-0">#{pr.githubPrNumber}</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs">
                            <div className="flex items-center gap-1.5 text-white/60">
                              <span className="font-bold text-white">{pr.author.githubUsername}</span>
                              <span className="text-white/40">in</span>
                              <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20">
                                {pr.repository.workspace.name} / {pr.repository.name}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/30 font-mono">
                              <GitBranch size={10} />
                              <span>{pr.headBranch}</span>
                              <ChevronRight size={10} className="text-white/10" />
                              <span>{pr.baseBranch}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3 flex-shrink-0">
                        {getStatusBadge(pr.status)}
                        <div className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                          <Clock size={12} />
                          {formatDistanceToNow(new Date(pr.createdAt))} ago
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
