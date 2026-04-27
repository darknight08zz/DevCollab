'use client';

import { useEffect, useState, useCallback } from 'react';
import { socketService } from '@/lib/socket';
import { useAuth } from '@/hooks/use-auth';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export function useRealtimeComments(sessionId: string, initialComments: any[] = []) {
  const { user, session } = useAuth();
  const [comments, setComments] = useState<any[]>(initialComments);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  useEffect(() => {
    if (!session?.accessToken || !sessionId) return;

    const socket = socketService.getSocket() || socketService.connect(session.accessToken);

    const onNewComment = ({ comment }: { comment: any }) => {
      setComments(prev => {
        // Avoid duplicates if we created it locally already
        if (prev.find(c => c.id === comment.id)) return prev;
        return [...prev, comment];
      });
    };

    const onCommentResolved = ({ commentId }: { commentId: string }) => {
      setComments(prev => prev.map(c => 
        c.id === commentId ? { ...c, resolvedAt: new Date().toISOString() } : c
      ));
    };

    socket.on('new-comment', onNewComment);
    socket.on('comment-resolved', onCommentResolved);

    return () => {
      socket.off('new-comment', onNewComment);
      socket.off('comment-resolved', onCommentResolved);
    };
  }, [session?.accessToken, sessionId]);

  const addComment = useCallback(async (lineNumber: number, filePath: string, content: string, parentId?: string) => {
    if (!session?.accessToken || !sessionId) return;

    const tempId = Math.random().toString(36).substring(7);
    const newComment = {
      id: tempId,
      content,
      lineNumber,
      filePath,
      parentId,
      author: user,
      createdAt: new Date().toISOString(),
      resolvedAt: null
    };

    setComments(prev => [...prev, newComment]);

    try {
      const response = await axios.post(`${API_URL}/sessions/${sessionId}/comments`, {
        filePath,
        lineNumber,
        content,
        parentId
      }, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });

      const finalComment = response.data;
      setComments(prev => prev.map(c => c.id === tempId ? finalComment : c));

      // Broadcast via socket
      const socket = socketService.getSocket();
      if (socket?.connected) {
        socket.emit('comment-created', { sessionId, comment: finalComment });
      }
    } catch (error) {
      console.error('Failed to add comment:', error);
      setComments(prev => prev.filter(c => c.id !== tempId));
    }
  }, [session?.accessToken, sessionId, user]);

  const resolveComment = useCallback(async (commentId: string) => {
    if (!session?.accessToken) return;

    setComments(prev => prev.map(c => 
      c.id === commentId ? { ...c, resolvedAt: c.resolvedAt ? null : new Date().toISOString() } : c
    ));

    try {
      await axios.patch(`${API_URL}/comments/${commentId}/resolve`, {}, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });

      const socket = socketService.getSocket();
      if (socket?.connected) {
        socket.emit('comment-resolved', { sessionId, commentId });
      }
    } catch (error) {
      console.error('Failed to resolve comment:', error);
    }
  }, [session?.accessToken, sessionId]);

  const deleteComment = useCallback(async (commentId: string) => {
    if (!session?.accessToken) return;

    setComments(prev => prev.filter(c => c.id !== commentId));

    try {
      await axios.delete(`${API_URL}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      // We don't have a broadcast for delete in the backend spec but we could add it
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  }, [session?.accessToken]);

  return { comments, addComment, resolveComment, deleteComment };
}
