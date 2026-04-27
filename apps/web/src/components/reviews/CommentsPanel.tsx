'use client';

import React from 'react';
import { 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Clock,
  ChevronRight,
  Search
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { formatDistanceToNow } from 'date-fns';

interface Comment {
  id: string;
  content: string;
  lineNumber: number;
  filePath: string;
  createdAt: string;
  resolvedAt: string | null;
  author: {
    name: string;
    avatarUrl: string;
  };
}

interface CommentsPanelProps {
  comments: Comment[];
  onJumpToFile: (filePath: string, lineNumber: number) => void;
}

export function CommentsPanel({ comments, onJumpToFile }: CommentsPanelProps) {
  // Group by file
  const grouped = comments.reduce((acc, comment) => {
    if (!acc[comment.filePath]) acc[comment.filePath] = [];
    acc[comment.filePath].push(comment);
    return acc;
  }, {} as Record<string, Comment[]>);

  const totalComments = comments.length;
  const resolvedComments = comments.filter(c => c.resolvedAt).length;

  return (
    <aside className="w-80 border-l border-white/10 bg-white/2 backdrop-blur-xl flex flex-col hidden xl:flex">
      <div className="p-6 border-b border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-indigo-400" />
            <h2 className="font-bold">Discussions</h2>
          </div>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full font-bold text-white/40">
            {resolvedComments}/{totalComments}
          </span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
          <Input 
            placeholder="Search comments..." 
            className="h-9 bg-white/5 border-white/10 pl-9 text-xs focus-visible:ring-indigo-500/50"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {totalComments === 0 ? (
          <div className="p-12 text-center space-y-4 opacity-20">
            <MessageSquare size={40} className="mx-auto" />
            <p className="text-xs font-mono uppercase tracking-widest">No comments yet</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {Object.entries(grouped).map(([filePath, fileComments]) => (
              <div key={filePath} className="p-4 space-y-4">
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <FileText size={12} />
                  <span className="text-[10px] font-mono truncate">{filePath}</span>
                </div>

                <div className="space-y-4">
                  {fileComments.map((comment) => (
                    <div 
                      key={comment.id}
                      onClick={() => onJumpToFile(comment.filePath, comment.lineNumber)}
                      className={`group cursor-pointer p-3 rounded-xl transition-all border ${
                        comment.resolvedAt 
                          ? 'bg-emerald-500/5 border-emerald-500/10 opacity-50 hover:opacity-100' 
                          : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5 ring-1 ring-white/10">
                            <AvatarImage src={comment.author.avatarUrl} />
                            <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-[10px] font-bold text-white/60 truncate">{comment.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[8px] text-white/20 font-mono">
                          L{comment.lineNumber}
                          {comment.resolvedAt && <CheckCircle2 size={8} className="text-emerald-400" />}
                        </div>
                      </div>
                      
                      <p className="text-xs text-white/80 line-clamp-2 leading-relaxed mb-2">
                        {comment.content}
                      </p>

                      <div className="flex items-center justify-between text-[8px] uppercase tracking-widest font-bold text-white/20">
                        <span className="flex items-center gap-1">
                          <Clock size={8} />
                          {formatDistanceToNow(new Date(comment.createdAt))}
                        </span>
                        <ChevronRight size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
