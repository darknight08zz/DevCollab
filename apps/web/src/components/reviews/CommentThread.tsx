'use client';

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import { 
  Reply, 
  CheckCircle2, 
  MoreHorizontal, 
  Trash2, 
  Edit3,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Bot,
  Zap,
  AlertTriangle,
  Info,
  Sparkles
} from 'lucide-react';
import { CommentBox } from './CommentBox';
import { motion, AnimatePresence } from 'framer-motion';

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  resolvedAt: string | null;
  author: {
    id: string;
    name: string;
    avatarUrl: string;
    githubUsername: string;
  };
  replies?: Comment[];
  isAI?: boolean;
  severity?: 'error' | 'warning' | 'suggestion';
  category?: string;
  suggestedFix?: string;
}

interface CommentThreadProps {
  comments: Comment[];
  onReply: (content: string, parentId: string) => Promise<void>;
  onResolve: (commentId: string) => Promise<void>;
  onDelete: (commentId: string) => Promise<void>;
  onEdit: (commentId: string, content: string) => Promise<void>;
  onSuggestFix?: (commentId: string) => Promise<void>;
  currentUser?: any;
}

export function CommentThread({ 
  comments, 
  onReply, 
  onResolve, 
  onDelete, 
  onEdit,
  onSuggestFix,
  currentUser 
}: CommentThreadProps) {
  const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const rootComment = comments[0];
  if (!rootComment) return null;

  const isResolved = rootComment.resolvedAt !== null;

  if (isResolved && isCollapsed) {
    return (
      <div className="my-2 px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-center justify-between group cursor-pointer" onClick={() => setIsCollapsed(false)}>
        <div className="flex items-center gap-3">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span className="text-xs font-medium text-emerald-400/60">Thread resolved by {rootComment.author.name}</span>
        </div>
        <Button variant="ghost" size="sm" className="h-6 text-[10px] text-emerald-400/40 hover:text-emerald-400 uppercase font-bold tracking-widest">
          Show Thread
        </Button>
      </div>
    );
  }

  return (
    <div className={`my-4 border rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
      isResolved ? 'border-emerald-500/20 bg-emerald-500/[0.02]' : 
      rootComment.isAI ? 'border-purple-500/40 bg-purple-500/[0.03] ring-1 ring-purple-500/20' : 
      'border-white/10 bg-white/5'
    }`}>
      {/* Header for Resolved Threads */}
      {isResolved && (
        <div className="bg-emerald-500/10 px-4 py-2 flex items-center justify-between border-b border-emerald-500/10">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Thread Resolved</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 text-emerald-400/40 hover:text-emerald-400"
            onClick={() => setIsCollapsed(true)}
          >
            <ChevronUp size={14} />
          </Button>
        </div>
      )}

      <div className="divide-y divide-white/5">
        {comments.map((comment, index) => (
          <div key={comment.id} className={`p-4 space-y-3 group ${index > 0 ? 'ml-8 border-l border-white/5 bg-white/[0.01]' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-6 w-6 ring-1 ring-white/10">
                  <AvatarImage src={comment.author.avatarUrl} />
                  <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white/90">{comment.author.name}</span>
                    {comment.isAI && (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[8px] font-black uppercase tracking-widest border border-purple-500/20">
                        <Bot size={8} />
                        AI Reviewer
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-white/20 font-mono">
                    {formatDistanceToNow(new Date(comment.createdAt))} ago
                  </span>
                </div>
              </div>

              {comment.isAI && comment.severity && (
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border ${
                    comment.severity === 'error' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    comment.severity === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {comment.severity === 'error' ? <AlertTriangle size={10} /> : 
                     comment.severity === 'warning' ? <Zap size={10} /> : <Info size={10} />}
                    {comment.severity}
                  </span>
                  {comment.category && (
                    <span className="text-[9px] font-mono text-white/30 lowercase">#{comment.category}</span>
                  )}
                </div>
              )}
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {currentUser?.id === comment.author.id && (
                  <>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-white/20 hover:text-white" onClick={() => {}}>
                      <Edit3 size={12} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-white/20 hover:text-rose-400" onClick={() => onDelete(comment.id)}>
                      <Trash2 size={12} />
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="text-sm text-white/70 leading-relaxed pl-9">
              {comment.content}
            </div>

            {index === 0 && !isResolved && (
              <div className="flex items-center gap-4 pl-9 pt-1">
                <button 
                  onClick={() => setIsReplyBoxOpen(true)}
                  className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-indigo-400 transition-colors"
                >
                  <Reply size={12} />
                  Reply
                </button>
                <button 
                  onClick={() => onResolve(comment.id)}
                  className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-emerald-400 transition-colors"
                >
                  <CheckCircle2 size={12} />
                  Resolve
                </button>
                {comment.isAI && onSuggestFix && (
                  <button 
                    onClick={() => onSuggestFix(comment.id)}
                    className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400/60 hover:text-purple-400 transition-colors"
                  >
                    <Sparkles size={12} />
                    Suggest Fix
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isReplyBoxOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-black/20 border-t border-white/5"
          >
            <CommentBox 
              placeholder="Reply to thread..."
              onSubmit={async (content) => {
                await onReply(content, rootComment.id);
                setIsReplyBoxOpen(false);
              }}
              onCancel={() => setIsReplyBoxOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
