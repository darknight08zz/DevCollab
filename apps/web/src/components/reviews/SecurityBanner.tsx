'use client';

import React from 'react';
import { AlertOctagon, ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SecurityBannerProps {
  criticalCount: number;
  highCount: number;
  onViewDetails: () => void;
}

export function SecurityBanner({ criticalCount, highCount, onViewDetails }: SecurityBannerProps) {
  if (criticalCount === 0 && highCount === 0) return null;

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      className="bg-rose-600 text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-1.5 rounded-lg animate-pulse">
            <AlertOctagon size={18} />
          </div>
          <div className="text-sm font-medium">
            <span className="font-bold">Security Alert:</span> This pull request contains {' '}
            {criticalCount > 0 && <span className="font-black underline decoration-2 underline-offset-2">{criticalCount} critical</span>}
            {criticalCount > 0 && highCount > 0 && ' and '}
            {highCount > 0 && <span className="font-black underline decoration-2 underline-offset-2">{highCount} high-risk</span>}
            {' '} vulnerabilities.
          </div>
        </div>
        
        <button 
          onClick={onViewDetails}
          className="bg-white text-rose-600 px-4 py-1.5 rounded-full text-xs font-black hover:bg-white/90 transition-all shadow-lg active:scale-95"
        >
          View Findings
        </button>
      </div>
    </motion.div>
  );
}
