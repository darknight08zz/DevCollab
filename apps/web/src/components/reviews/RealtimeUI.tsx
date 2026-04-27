'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff } from 'lucide-react';

interface OnlineUser {
  id: string;
  name: string;
  avatarUrl: string;
  githubUsername: string;
}

export function PresenceBar({ users }: { users: OnlineUser[] }) {
  return (
    <div className="flex -space-x-2 overflow-hidden px-2">
      <TooltipProvider>
        <AnimatePresence>
          {users.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="h-7 w-7 ring-2 ring-[#050505] hover:z-10 transition-transform hover:scale-110">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-white text-black font-bold text-[10px] uppercase tracking-widest border-none">
                  {user.name} (@{user.githubUsername})
                </TooltipContent>
              </Tooltip>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#050505]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </TooltipProvider>
    </div>
  );
}

const COLORS = [
  '#6366f1', // indigo
  '#ec4899', // pink
  '#10b981', // emerald
  '#f59e0b', // amber
  '#3b82f6', // blue
  '#ef4444', // red
  '#8b5cf6', // violet
];

function getUserColor(userId: string) {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

export function LiveCursor({ userId, name, lineNumber, filePath, currentFilePath }: { 
  userId: string; 
  name: string; 
  lineNumber: number; 
  filePath: string;
  currentFilePath: string;
}) {
  if (filePath !== currentFilePath) return null;
  
  const color = getUserColor(userId);

  return (
    <div 
      className="absolute left-[calc(50%+40px)] z-50 pointer-events-none transition-all duration-300 ease-out flex items-center gap-1"
      style={{ top: `${(lineNumber - 1) * 19 + 20}px` }}
    >
      <div className="w-0.5 h-5" style={{ backgroundColor: color }} />
      <div 
        className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter text-white shadow-lg"
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
    </div>
  );
}

export function TypingIndicator({ users }: { users: string[] }) {
  if (users.length === 0) return null;

  return (
    <div className="flex items-center gap-2 px-4 py-2 mt-2 bg-indigo-500/5 border border-indigo-500/10 rounded-lg w-fit">
      <div className="flex gap-1">
        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
      </div>
      <span className="text-[10px] font-bold text-indigo-400/60 uppercase tracking-widest">
        {users.length === 1 ? `${users[0]} is typing...` : `${users.length} people are typing...`}
      </span>
    </div>
  );
}

export function ConnectionStatus({ isConnected }: { isConnected: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full border transition-all duration-500 ${
      isConnected 
        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
        : 'bg-amber-500/10 border-amber-500/20 text-amber-400 animate-pulse'
    }`}>
      {isConnected ? <Wifi size={10} /> : <WifiOff size={10} />}
      <span className="text-[9px] font-black uppercase tracking-widest">
        {isConnected ? 'Live' : 'Reconnecting...'}
      </span>
    </div>
  );
}
