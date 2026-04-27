'use client';

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Copy, Check } from 'lucide-react';

interface FixModalProps {
  isOpen: boolean;
  onClose: () => void;
  fix: string | null;
}

export function FixModal({ isOpen, onClose, fix }: FixModalProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    if (!fix) return;
    navigator.clipboard.writeText(fix);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-[#0a0a0a] border-white/10 text-white p-0 overflow-hidden">
        <div className="bg-purple-500/10 p-6 border-b border-purple-500/20">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-purple-400" />
              <DialogTitle className="text-purple-400 font-black uppercase tracking-widest text-xs">AI Suggested Fix</DialogTitle>
            </div>
            <DialogDescription className="text-white/60 text-sm">
              DevCollab AI has analyzed the issue and suggested the following code correction.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          <div className="relative group">
            <pre className="bg-black/40 border border-white/5 rounded-xl p-4 overflow-x-auto text-[13px] font-mono leading-relaxed text-indigo-100/90 min-h-[100px]">
              {fix || 'Generating fix...'}
            </pre>
            
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-3 right-3 h-8 w-8 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white"
              onClick={copyToClipboard}
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </Button>
          </div>
        </div>

        <div className="p-4 bg-white/5 border-t border-white/10 flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose} className="text-white/40 hover:text-white">
            Dismiss
          </Button>
          <Button onClick={copyToClipboard} className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
            <Copy size={14} />
            Copy Suggestion
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
