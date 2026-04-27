'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, X, Loader2 } from 'lucide-react';

interface CommentBoxProps {
  onSubmit: (content: string) => Promise<void>;
  onCancel: () => void;
  onChange?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export function CommentBox({ onSubmit, onCancel, onChange, placeholder = "Add a comment...", autoFocus = true }: CommentBoxProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onChange?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      await onSubmit(content);
      setContent('');
    } catch (error) {
      console.error('Failed to submit comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-3 mt-2 shadow-2xl backdrop-blur-md overflow-hidden relative group">
      {/* Glossy gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
      
      <Textarea
        value={content}
        onChange={handleContentChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="bg-transparent border-none focus-visible:ring-0 resize-none min-h-[80px] p-0 text-sm text-white placeholder:text-white/20"
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            handleSubmit(e);
          }
        }}
      />
      
      <div className="flex items-center justify-between relative z-10 pt-2 border-t border-white/5">
        <p className="text-[10px] text-white/20 font-mono">
          <span className="font-bold text-white/40">⌘ + Enter</span> to post
        </p>
        <div className="flex items-center gap-2">
          <Button 
            type="button" 
            variant="ghost" 
            size="sm" 
            onClick={onCancel}
            className="h-8 text-white/40 hover:text-white hover:bg-white/5 text-xs px-3"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            size="sm" 
            disabled={!content.trim() || isSubmitting}
            className="h-8 bg-indigo-600 hover:bg-indigo-700 text-white gap-2 text-xs px-4 rounded-lg shadow-lg shadow-indigo-500/20"
          >
            {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            Comment
          </Button>
        </div>
      </div>
    </form>
  );
}
