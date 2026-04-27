'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './button';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-rose-500/5 rounded-[32px] border border-rose-500/10 space-y-6">
          <div className="p-4 bg-rose-500/10 rounded-full text-rose-500">
            <AlertTriangle size={48} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white">Something went wrong</h2>
            <p className="text-white/40 max-w-md mx-auto">
              We've encountered an unexpected error. Don't worry, our team has been notified.
            </p>
          </div>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-white text-black hover:bg-white/90 h-12 px-8 rounded-2xl font-bold flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Refresh Page
          </Button>
          {process.env.NODE_ENV === 'development' && (
            <pre className="mt-4 p-4 bg-black/40 rounded-xl text-xs text-rose-400 text-left overflow-auto max-w-full">
              {this.state.error?.message}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
