'use client';

import { useEffect, useState, useCallback } from 'react';
import { socketService } from '@/lib/socket';
import { useAuth } from '@/hooks/use-auth';

interface TypingState {
  userId: string;
  filePath: string;
  lineNumber: number;
  isTyping: boolean;
}

export function useReviewSession(sessionId: string) {
  const { session } = useAuth();
  const [typingUsers, setTypingUsers] = useState<Record<string, TypingState>>({});
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!session?.accessToken || !sessionId) return;

    const socket = socketService.connect(session.accessToken);

    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    const onUserLeft = ({ userId }: { userId: string }) => {
      setTypingUsers(prev => {
        const next = { ...prev };
        delete next[userId];
        return next;
      });
    };

    const onTypingIndicator = (data: TypingState) => {
      setTypingUsers(prev => ({ ...prev, [data.userId]: data }));
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('user-left', onUserLeft);
    socket.on('typing-indicator', onTypingIndicator);

    // Initial join
    socket.emit('join-session', { sessionId });
    setIsConnected(socket.connected);

    return () => {
      socket.emit('leave-session', { sessionId });
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('user-left', onUserLeft);
      socket.off('typing-indicator', onTypingIndicator);
    };
  }, [session?.accessToken, sessionId]);

  const updateTyping = useCallback((filePath: string, lineNumber: number, isTyping: boolean) => {
    const socket = socketService.getSocket();
    if (socket?.connected) {
      socket.emit('typing', { sessionId, filePath, lineNumber, isTyping });
    }
  }, [sessionId]);

  return { 
    typingUsers,
    isConnected, 
    updateTyping
  };
}
