'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { 
  GitPullRequest, 
  ChevronLeft,
  FileText,
  MessageSquare,
  Play,
  CheckCircle2,
  XCircle,
  GitMerge,
  ChevronDown,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiffViewer } from '@/components/DiffViewer';
import { Header } from '@/components/dashboard/Header';
import { CommentsPanel } from '@/components/reviews/CommentsPanel';
import { useReviewSession } from '@/hooks/use-review-session';
import { useRealtimeComments } from '@/hooks/use-realtime-comments';
import { useYjsSession } from '@/hooks/use-yjs-session';
import { PresenceBar, ConnectionStatus } from '@/components/reviews/RealtimeUI';
import { BookmarksPanel } from '@/components/reviews/BookmarksPanel';
import { AISummaryCard } from '@/components/reviews/AISummaryCard';
import { SecurityTab } from '@/components/reviews/SecurityTab';
import { SecurityBanner } from '@/components/reviews/SecurityBanner';
import { FixModal } from '@/components/reviews/FixModal';
import { Shield, FileCode } from 'lucide-react';
import { Sparkles, Bot, AlertCircle } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface PullRequest {
  id: string;
  githubPrNumber: number;
  title: string;
  body: string;
  status: 'OPEN' | 'CLOSED' | 'MERGED';
  author: {
    name: string;
    avatarUrl: string;
    githubUsername: string;
  };
  headBranch: string;
  baseBranch: string;
  repositoryId: string;
  repository: {
    id: string;
    fullName: string;
    workspaceId: string;
    workspace: {
      id: string;
      plan: string;
    }
  };
}

interface DiffFile {
  filePath: string;
  additions: number;
  deletions: number;
  status: string;
  sha: string;
  baseSha: string;
}

interface FileContent {
  original: string;
  modified: string;
  loading: boolean;
}

export default function PRDetailPage() {
  const { slug, repoId, prId } = useParams();
  const router = useRouter();
  const { user, session } = useAuth();
  const [pr, setPr] = useState<PullRequest | null>(null);
  const [diffFiles, setDiffFiles] = useState<DiffFile[]>([]);
  const [contents, setContents] = useState<Record<string, FileContent>>({});
  const [initialComments, setInitialComments] = useState<any[]>([]);
  const [revealLines, setRevealLines] = useState<Record<string, number>>({});
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [startingSession, setStartingSession] = useState(false);
  const [collapsedFiles, setCollapsedFiles] = useState<Record<string, boolean>>({});
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<'files' | 'security'>('files');
  const [securityFindings, setSecurityFindings] = useState<any[]>([]);
  const [securityScore, setSecurityScore] = useState<number | null>(null);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fixModalData, setFixModalData] = useState<{ isOpen: boolean, fix: string | null }>({ isOpen: false, fix: null });

  const { typingUsers, isConnected: isSocketConnected, updateTyping } = useReviewSession(currentSessionId || '');
  const { comments, addComment, resolveComment, deleteComment } = useRealtimeComments(currentSessionId || '', initialComments);
  const { ydoc, awareness, isConnected: isYjsConnected } = useYjsSession(currentSessionId || '');

  // Deriving online users from Yjs Awareness
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

  useEffect(() => {
    if (!awareness) return;
    const update = () => {
      const states = awareness.getStates();
      const users: any[] = [];
      states.forEach((state: any) => {
        if (state.user) users.push(state.user);
      });
      // Deduplicate by ID
      const uniqueUsers = Array.from(new Map(users.map(u => [u.id, u])).values());
      setOnlineUsers(uniqueUsers);
    };
    awareness.on('change', update);
    update();
    return () => awareness.off('change', update);
  }, [awareness]);

  const fileRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const fetchPRDetails = async () => {
    if (!session?.accessToken) return;
    try {
      const [prRes, diffRes] = await Promise.all([
        axios.get(`${API_URL}/prs/${prId}`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        }),
        axios.get(`${API_URL}/prs/${prId}/diff`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        })
      ]);
      setPr(prRes.data);
      setDiffFiles(diffRes.data);

      // Create or find session
      const sessionResponse = await axios.post(`${API_URL}/prs/${prId}/sessions`, {}, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setCurrentSessionId(sessionResponse.data.id);
      
      // Fetch comments (grouped from backend)
      const commentsResponse = await axios.get(`${API_URL}/sessions/${sessionResponse.data.id}/comments`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      
      const flatComments: any[] = [];
      Object.values(commentsResponse.data).forEach((fileObj: any) => {
        Object.values(fileObj).forEach((lineComments: any) => {
          flatComments.push(...lineComments);
        });
      });
      setInitialComments(flatComments);
      setAiSummary(prRes.data.aiSummary);
      setSecurityScore(prRes.data.securityScore);
      
      const secRes = await axios.get(`${API_URL}/security/prs/${prId}/security/results`, {
        headers: { 
          Authorization: `Bearer ${session.accessToken}`,
          'x-workspace-id': prRes.data.repository.workspaceId
        }
      });
      setSecurityFindings(secRes.data.findings);
    } catch (error: any) {
      if (error.response?.status === 402) {
        // Silently fail here, will be handled by tab render
      }
      console.error('Failed to fetch PR details:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFileContent = async (file: DiffFile) => {
    if (!session?.accessToken || contents[file.filePath]) return;

    setContents(prev => ({
      ...prev,
      [file.filePath]: { original: '', modified: '', loading: true }
    }));

    try {
      const [originalRes, modifiedRes] = await Promise.all([
        axios.get(`${API_URL}/repos/${repoId}/contents`, {
          params: { path: file.filePath, ref: pr?.baseBranch },
          headers: { Authorization: `Bearer ${session.accessToken}` }
        }).catch(() => ({ data: '' })),
        axios.get(`${API_URL}/repos/${repoId}/contents`, {
          params: { path: file.filePath, ref: pr?.headBranch },
          headers: { Authorization: `Bearer ${session.accessToken}` }
        }).catch(() => ({ data: '' }))
      ]);

      setContents(prev => ({
        ...prev,
        [file.filePath]: {
          original: typeof originalRes.data === 'string' ? originalRes.data : JSON.stringify(originalRes.data),
          modified: typeof modifiedRes.data === 'string' ? modifiedRes.data : JSON.stringify(modifiedRes.data),
          loading: false
        }
      }));
    } catch (error) {
      console.error(`Failed to fetch content for ${file.filePath}:`, error);
      setContents(prev => ({
        ...prev,
        [file.filePath]: { original: '', modified: '', loading: false }
      }));
    }
  };

  // AI Handlers
  const handleAIAnalyze = async () => {
    if (!session?.accessToken || !currentSessionId) return;
    try {
      setIsAnalyzing(true);
      await axios.post(`${API_URL}/ai/prs/${prId}/ai/analyze`, { sessionId: currentSessionId }, {
        headers: { 
          Authorization: `Bearer ${session.accessToken}`,
          'x-workspace-id': pr?.repository.workspaceId
        }
      });
    } catch (error: any) {
      console.error('AI Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleGenerateSummary = async () => {
    if (!session?.accessToken) return;
    try {
      setIsSummarizing(true);
      const response = await axios.post(`${API_URL}/ai/prs/${prId}/ai/summary`, {}, {
        headers: { 
          Authorization: `Bearer ${session.accessToken}`,
          'x-workspace-id': pr?.repository.workspaceId
        }
      });
      setAiSummary(response.data.summary);
    } catch (error: any) {
      console.error('AI Summary failed:', error);
    } finally {
      setIsSummarizing(false);
    }
  };

  const handleSuggestFix = async (commentId: string) => {
    if (!session?.accessToken) return;
    try {
      setFixModalData({ isOpen: true, fix: null });
      const response = await axios.post(`${API_URL}/ai/comments/${commentId}/ai/fix`, {}, {
        headers: { 
          Authorization: `Bearer ${session.accessToken}`,
          'x-workspace-id': pr?.repository.workspaceId
        }
      });
      setFixModalData({ isOpen: true, fix: response.data.fix });
    } catch (error) {
      console.error('AI Fix Suggestion failed:', error);
      setFixModalData({ isOpen: false, fix: null });
    }
  };
  const handleSecurityScan = async () => {
    if (!session?.accessToken) return;
    try {
      setIsScanning(true);
      const response = await axios.post(`${API_URL}/security/prs/${prId}/security/scan`, {}, {
        headers: { 
          Authorization: `Bearer ${session.accessToken}`,
          'x-workspace-id': pr?.repository.workspaceId
        }
      });
      setSecurityFindings(response.data.findings);
      setSecurityScore(response.data.score);
    } catch (error: any) {
      console.error('Security scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const handleMarkFalsePositive = async (findingId: string) => {
    if (!session?.accessToken) return;
    try {
      await axios.patch(`${API_URL}/security/findings/${findingId}/false-positive`, {}, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setSecurityFindings(prev => prev.filter(f => f.id !== findingId));
    } catch (error) {
      console.error('Failed to mark false positive:', error);
    }
  };

  useEffect(() => {
    fetchPRDetails();
  }, [prId, session?.accessToken]);

  // Use hooks logic for handlers
  const handleAddComment = addComment;
  const handleResolveComment = resolveComment;
  const handleDeleteComment = deleteComment;

  const startReviewSession = async () => {
    if (!session?.accessToken) return;
    try {
      setStartingSession(true);
      const response = await axios.post(`${API_URL}/prs/${prId}/sessions`, {}, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      router.push(`/session/${response.data.id}`);
    } catch (error) {
      console.error('Failed to start session:', error);
    } finally {
      setStartingSession(false);
    }
  };

  const toggleCollapse = (path: string) => {
    setCollapsedFiles(prev => ({ ...prev, [path]: !prev[path] }));
  };

  const scrollToFile = (path: string, lineNumber?: number) => {
    fileRefs.current[path]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (collapsedFiles[path]) {
      toggleCollapse(path);
    }
    const file = diffFiles.find(f => f.filePath === path);
    if (file) fetchFileContent(file);
    
    if (lineNumber) {
      setRevealLines(prev => ({ ...prev, [path]: lineNumber }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="animate-spin text-white/20" size={48} />
      </div>
    );
  }

  if (!pr) return null;

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      {/* Left Sidebar - File Tree */}
      <aside className="w-80 border-r border-white/10 bg-white/2 backdrop-blur-xl flex flex-col">
        <div className="p-6 border-b border-white/10">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs mb-4 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to List
          </button>
          <div className="flex items-center gap-2 mb-1">
            <GitPullRequest size={20} className="text-white/60" />
            <h2 className="font-semibold text-lg">Changed Files</h2>
          </div>
          <p className="text-white/30 text-xs">{diffFiles.length} files affected</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {diffFiles.map((file) => {
            const fileCommentCount = comments.filter(c => c.filePath === file.filePath).length;
            return (
              <button
                key={file.filePath}
                onClick={() => scrollToFile(file.filePath)}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-all text-left group"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileText size={14} className="text-white/40 flex-shrink-0" />
                  <span className="text-xs font-mono truncate text-white/60 group-hover:text-white">
                    {file.filePath.split('/').pop()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {fileCommentCount > 0 && (
                    <span className="bg-indigo-500/20 text-indigo-400 text-[10px] px-1.5 py-0.5 rounded-full font-bold border border-indigo-500/20">
                      {fileCommentCount}
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <span className="text-emerald-400">+{file.additions}</span>
                    <span className="text-rose-400">-{file.deletions}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="p-4 bg-white/5 border-t border-white/10">
          <button
            onClick={startReviewSession}
            disabled={startingSession}
            className="w-full bg-white text-black py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all disabled:opacity-50"
          >
            {startingSession ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
            Start Review Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <Header />
        <SecurityBanner 
          criticalCount={securityFindings.filter(f => f.severity === 'critical').length}
          highCount={securityFindings.filter(f => f.severity === 'high').length}
          onViewDetails={() => setActiveTab('security')}
        />
        
        <div className="max-w-5xl mx-auto p-12 space-y-12">
          {/* PR Header */}
          <section className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-white/40 font-mono text-xl">#{pr.githubPrNumber}</span>
                  <h1 className="text-4xl font-bold tracking-tight">{pr.title}</h1>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-5 h-5 rounded-full border border-white/20 overflow-hidden">
                    <img src={pr.author.avatarUrl} alt={pr.author.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{pr.author.githubUsername}</span>
                </div>

                <div className="h-4 w-px bg-white/10" />
                
                <PresenceBar users={onlineUsers} />
                <ConnectionStatus isConnected={isSocketConnected && isYjsConnected} />
                
                <div className="h-4 w-px bg-white/10" />
                
                <button
                  onClick={handleAIAnalyze}
                  disabled={isAnalyzing}
                  className="flex items-center gap-2 bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 px-4 py-1.5 rounded-full border border-purple-500/20 transition-all text-xs font-bold disabled:opacity-50"
                >
                  {isAnalyzing ? <Loader2 size={14} className="animate-spin" /> : <Bot size={14} />}
                  Analyze with AI
                </button>
                
                <button
                  onClick={handleSecurityScan}
                  disabled={isScanning}
                  className="flex items-center gap-2 bg-rose-600/10 hover:bg-rose-600/20 text-rose-400 px-4 py-1.5 rounded-full border border-rose-500/20 transition-all text-xs font-bold disabled:opacity-50"
                >
                  {isScanning ? <Loader2 size={14} className="animate-spin" /> : <Shield size={14} />}
                  Run Security Scan
                </button>
                
                <div className="h-4 w-px bg-white/10" />

                {pr.status === 'OPEN' && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 uppercase tracking-wider">
                    <CheckCircle2 size={14} /> Open
                  </span>
                )}
                {pr.status === 'CLOSED' && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/20 uppercase tracking-wider">
                    <XCircle size={14} /> Closed
                  </span>
                )}
                {pr.status === 'MERGED' && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20 uppercase tracking-wider">
                    <GitMerge size={14} /> Merged
                  </span>
                )}
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/60 leading-relaxed text-sm whitespace-pre-wrap backdrop-blur-sm">
              {pr.body || <span className="italic">No description provided.</span>}
            </div>

            <AISummaryCard 
              summary={aiSummary} 
              isLoading={isSummarizing} 
              onGenerate={handleGenerateSummary} 
            />
          </section>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-white/10">
            <button
              onClick={() => setActiveTab('files')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all relative ${
                activeTab === 'files' ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              <FileCode size={16} />
              Changed Files
              {activeTab === 'files' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all relative ${
                activeTab === 'security' ? 'text-rose-400' : 'text-white/40 hover:text-white'
              }`}
            >
              <Shield size={16} />
              Security
              {securityFindings.length > 0 && (
                <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {securityFindings.length}
                </span>
              )}
              {activeTab === 'security' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />}
            </button>
          </div>

          {activeTab === 'files' ? (
            /* Diffs */
            <section className="space-y-8 pb-20">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold">Changes</h2>
              </div>
              
              <div className="space-y-6">
                {diffFiles.map((file) => (
                  <div 
                    key={file.filePath} 
                    ref={el => { fileRefs.current[file.filePath] = el }}
                    className="space-y-4 scroll-mt-8"
                  >
                    <button
                      onClick={() => toggleCollapse(file.filePath)}
                      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        {collapsedFiles[file.filePath] ? <ChevronRight size={18} /> : <ChevronDown size={18} />}
                        <span className="text-sm font-mono font-semibold">{file.filePath}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-widest ${
                          file.status === 'added' ? 'bg-emerald-500/20 text-emerald-400' :
                          file.status === 'removed' ? 'bg-rose-500/20 text-rose-400' :
                          'bg-white/10 text-white/60'
                        }`}>
                          {file.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono">
                        <div className="flex items-center gap-1">
                          <span className="text-emerald-400">+{file.additions}</span>
                          <span className="text-rose-400">-{file.deletions}</span>
                        </div>
                        {!contents[file.filePath] && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              fetchFileContent(file);
                            }}
                            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition-colors text-white/80"
                          >
                            Load Diff
                          </button>
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {!collapsedFiles[file.filePath] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          {contents[file.filePath]?.loading ? (
                            <div className="h-[200px] flex flex-col items-center justify-center gap-3 bg-white/5 rounded-xl border border-white/10">
                              <Loader2 className="animate-spin text-white/20" size={32} />
                              <span className="text-xs text-white/40 font-mono">Fetching file content...</span>
                            </div>
                          ) : contents[file.filePath] ? (
                            <DiffViewer 
                              original={contents[file.filePath].original}
                              modified={contents[file.filePath].modified}
                              filePath={file.filePath}
                              comments={comments}
                              currentUser={user}
                              onAddComment={(line, content) => handleAddComment(line, file.filePath, content)}
                              onResolveComment={handleResolveComment}
                              onDeleteComment={handleDeleteComment}
                              revealLine={revealLines[file.filePath]}
                              ydoc={ydoc}
                              awareness={awareness}
                              typingUsers={typingUsers}
                              onlineUsers={onlineUsers}
                              onTyping={(line, isTyping) => updateTyping(file.filePath, line, isTyping)}
                              onSuggestFix={handleSuggestFix}
                            />
                          ) : (
                            <div className="p-8 text-center bg-white/5 rounded-xl border border-white/10 border-dashed">
                              <p className="text-white/40 text-sm">Click "Load Diff" or scroll to view changes.</p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <SecurityTab 
              findings={securityFindings} 
              score={securityScore} 
              onMarkFalsePositive={handleMarkFalsePositive}
              onScrollToLine={(path, line) => {
                setActiveTab('files');
                setTimeout(() => scrollToFile(path, line), 100);
              }}
            />
          )}
        </div>
      </main>

      <CommentsPanel 
        comments={comments} 
        onJumpToFile={(path, line) => scrollToFile(path, line)} 
      />

      <BookmarksPanel 
        ydoc={ydoc} 
        onJump={scrollToFile} 
      />

      <FixModal 
        isOpen={fixModalData.isOpen} 
        onClose={() => setFixModalData({ ...fixModalData, isOpen: false })} 
        fix={fixModalData.fix} 
      />
    </div>
  );
}
