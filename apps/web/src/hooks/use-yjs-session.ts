'use client';

import { useEffect, useState, useMemo } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { useAuth } from '@/hooks/use-auth';

const YJS_WS_URL = process.env.NEXT_PUBLIC_YJS_WS_URL || 'ws://localhost:1234';

export function useYjsSession(sessionId: string) {
  const { user, session } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  
  // Yjs document and awareness are stable objects
  const ydoc = useMemo(() => new Y.Doc(), []);
  const [provider, setProvider] = useState<WebsocketProvider | null>(null);

  useEffect(() => {
    if (!sessionId || !session?.accessToken || !user) return;

    const wsProvider = new WebsocketProvider(
      YJS_WS_URL,
      sessionId,
      ydoc,
      { 
        params: { token: session.accessToken },
        connect: true
      }
    );

    // Setup awareness
    const { awareness } = wsProvider;
    awareness.setLocalStateField('user', {
      id: user.id,
      name: user.name,
      avatarUrl: user.avatarUrl,
      color: getUserColor(user.id) // Derived color from Prompt 08 logic
    });

    wsProvider.on('status', ({ status }: { status: string }) => {
      setIsConnected(status === 'connected');
    });

    setProvider(wsProvider);

    return () => {
      wsProvider.disconnect();
      wsProvider.destroy();
    };
  }, [sessionId, session?.accessToken, user, ydoc]);

  return { 
    ydoc, 
    provider, 
    awareness: provider?.awareness, 
    isConnected 
  };
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
