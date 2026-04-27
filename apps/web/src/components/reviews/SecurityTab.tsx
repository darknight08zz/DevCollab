'use client';

import React from 'react';
import { Shield, AlertTriangle, AlertOctagon, Info, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SecurityFinding {
  id: string;
  filePath: string;
  lineNumber: number;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  cweId?: string;
  description: string;
  remediation: string;
  isFalsePositive: boolean;
}

interface SecurityTabProps {
  findings: SecurityFinding[];
  score: number | null;
  onMarkFalsePositive: (id: string) => Promise<void>;
  onScrollToLine: (path: string, line: number) => void;
}

export function SecurityTab({ findings, score, onMarkFalsePositive, onScrollToLine }: SecurityTabProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      case 'high': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'medium': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'low': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      default: return 'text-white/40 bg-white/5 border-white/10';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertOctagon size={16} />;
      case 'high': return <AlertTriangle size={16} />;
      case 'medium': return <Info size={16} />;
      case 'low': return <Info size={16} />;
      default: return <Shield size={16} />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Score Header */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-between backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Security Audit</h2>
          <p className="text-white/40 text-sm max-w-md">
            Automated scan results powered by GPT-4o and regex heuristics. 
            Review each finding carefully to ensure application safety.
          </p>
        </div>
        <div className="text-right">
          <div className={`text-5xl font-black mb-1 ${
            (score || 100) >= 90 ? 'text-emerald-400' :
            (score || 100) >= 70 ? 'text-amber-400' :
            'text-rose-400'
          }`}>
            {score !== null ? score : '100'}
          </div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">Security Score</div>
        </div>
      </div>

      {findings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white/2 rounded-2xl border border-white/5 border-dashed">
          <Shield size={48} className="text-emerald-500/20 mb-4" />
          <p className="text-white/40 font-medium">No vulnerabilities detected. Good job!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {findings.map((finding) => (
            <motion.div
              layout
              key={finding.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
            >
              <div className="p-5 flex items-start gap-4">
                <div className={`p-2 rounded-lg border ${getSeverityColor(finding.severity)}`}>
                  {getSeverityIcon(finding.severity)}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-white/90 capitalize">{finding.category.replace('-', ' ')}</h3>
                      {finding.cweId && (
                        <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/40">
                          {finding.cweId}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onScrollToLine(finding.filePath, finding.lineNumber)}
                        className="p-1.5 hover:bg-white/10 rounded text-white/40 hover:text-white transition-all"
                        title="Jump to code"
                      >
                        <ExternalLink size={14} />
                      </button>
                      <button
                        onClick={() => onMarkFalsePositive(finding.id)}
                        className="text-[10px] font-bold text-white/20 hover:text-emerald-400 transition-all uppercase tracking-wider"
                      >
                        Mark as False Positive
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {finding.description}
                  </p>

                  <div className="bg-rose-500/5 border border-rose-500/10 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-rose-400/60 mb-1">Remediation</div>
                    <p className="text-xs text-rose-200/60 leading-relaxed italic">
                      {finding.remediation}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[10px] font-mono text-white/30 pt-1">
                    <span className="truncate max-w-[200px]">{finding.filePath}</span>
                    <span>•</span>
                    <span>Line {finding.lineNumber}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
