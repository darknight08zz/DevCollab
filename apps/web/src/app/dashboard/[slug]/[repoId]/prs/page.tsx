'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { 
  GitPullRequest, 
  RefreshCw, 
  Clock, 
  GitBranch, 
  ChevronRight,
  ChevronLeft,
  Filter,
  CheckCircle2,
  XCircle,
  GitMerge,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

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
  securityScore: number | null;
  createdAt: string;
  updatedAt: string;
}

export default function PRListPage() {
  const { slug, repoId } = useParams();
  const router = useRouter();
  const { session } = useAuth();
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'CLOSED' | 'MERGED'>('ALL');

  const fetchPRs = async () => {
    if (!session?.accessToken) return;
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/workspaces/${slug}/repos/${repoId}/prs`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setPrs(response.data);
    } catch (error) {
      console.error('Failed to fetch PRs:', error);
    } finally {
      setLoading(false);
    }
  };

  const syncPRs = async () => {
    if (!session?.accessToken) return;
    try {
      setSyncing(true);
      await axios.post(`${API_URL}/workspaces/${slug}/repos/${repoId}/prs/sync`, {}, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      await fetchPRs();
    } catch (error: any) {
      if (error.response?.status === 402) {
        alert('You have reached the limit of 3 active pull requests for the FREE plan. Please upgrade to Pro to sync more.');
        router.push('/billing');
      }
      console.error('Failed to sync PRs:', error);
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchPRs();
  }, [slug, repoId, session?.accessToken]);

  const filteredPrs = prs.filter(pr => filter === 'ALL' || pr.status === filter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'OPEN':
        return <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20"><CheckCircle2 size={12} /> Open</span>;
      case 'CLOSED':
        return <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium border border-rose-500/20"><XCircle size={12} /> Closed</span>;
      case 'MERGED':
        return <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20"><GitMerge size={12} /> Merged</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <button 
              onClick={() => router.push(`/dashboard/${slug}`)}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs mb-4 group"
            >
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Workspace
            </button>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Pull Requests
            </h1>
            <p className="text-white/40 mt-1">Review and manage changes across your repository.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
              {(['ALL', 'OPEN', 'CLOSED', 'MERGED'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    filter === f ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {f.charAt(0) + f.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
            
            <button
              onClick={syncPRs}
              disabled={syncing}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={syncing ? 'animate-spin' : ''} />
              {syncing ? 'Syncing...' : 'Sync Latest'}
            </button>
          </div>
        </div>

        {/* PR List */}
        <div className="grid gap-4">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-white/5 rounded-2xl border border-white/10 animate-pulse" />
              ))}
            </div>
          ) : filteredPrs.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                <GitPullRequest className="text-white/20" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-medium">No pull requests found</h3>
                <p className="text-white/40 max-w-sm mx-auto mt-2">
                  There are no pull requests matching your current filter. Sync from GitHub to see the latest changes.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-3">
              {filteredPrs.map((pr) => (
                <motion.div
                  key={pr.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => router.push(`/dashboard/${slug}/${repoId}/prs/${pr.id}`)}
                  className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all cursor-pointer overflow-hidden"
                >
                  {/* Glass Background Highlight */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors" />
                  
                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden flex-shrink-0">
                        <img src={pr.author.avatarUrl} alt={pr.author.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold group-hover:text-white transition-colors">{pr.title}</h3>
                          <span className="text-white/30 font-mono text-sm">#{pr.githubPrNumber}</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-white/40">
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-white/60">{pr.author.githubUsername}</span>
                            <span>opened</span>
                            <span>{formatDistanceToNow(new Date(pr.createdAt))} ago</span>
                          </div>
                          
                          <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            <GitBranch size={12} />
                            <span>{pr.headBranch}</span>
                            <ChevronRight size={10} className="text-white/20" />
                            <span>{pr.baseBranch}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        {pr.securityScore !== null && (
                          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold ${
                            pr.securityScore >= 90 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                            pr.securityScore >= 70 ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                            'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}>
                            <Shield size={10} />
                            {pr.securityScore}
                          </div>
                        )}
                        {getStatusBadge(pr.status)}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                        <Clock size={10} />
                        Updated {formatDistanceToNow(new Date(pr.updatedAt))} ago
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
