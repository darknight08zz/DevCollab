'use client';

import React from 'react';
import { Sparkles, Bot, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface AISummaryCardProps {
  summary: string | null;
  isLoading: boolean;
  onGenerate: () => void;
}

export function AISummaryCard({ summary, isLoading, onGenerate }: AISummaryCardProps) {
  return (
    <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden group">
      {/* Animated background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="space-y-4 flex-1 mr-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-400">
              <Bot size={20} />
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-purple-400">AI PR Summary</h3>
          </div>
          
          {isLoading ? (
            <div className="flex items-center gap-3 py-2">
              <Loader2 className="animate-spin text-purple-400/40" size={18} />
              <p className="text-xs text-white/30 font-mono italic">AI is reading your code and thinking...</p>
            </div>
          ) : summary ? (
            <motion.p 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-white/70 leading-relaxed max-w-3xl"
            >
              {summary}
            </motion.p>
          ) : (
            <p className="text-sm text-white/30 italic">No summary generated yet. Let the AI help you understand this PR.</p>
          )}
        </div>
        
        {!summary && !isLoading && (
          <button 
            onClick={onGenerate}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-purple-500/20 active:scale-95"
          >
            <Sparkles size={14} />
            Generate Summary
          </button>
        )}
      </div>
    </div>
  );
}
