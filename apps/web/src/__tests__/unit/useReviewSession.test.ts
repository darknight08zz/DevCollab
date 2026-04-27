import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useReviewSession } from '../../hooks/use-review-session';
import { socketService } from '@/lib/socket';
import { useAuth } from '@/hooks/use-auth';

// Mock Dependencies
vi.mock('@/lib/socket', () => ({
  socketService: {
    connect: vi.fn().mockReturnValue({
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
      connected: true
    }),
    getSocket: vi.fn()
  }
}));

vi.mock('@/hooks/use-auth', () => ({
  useAuth: vi.fn()
}));

describe('useReviewSession Hook', () => {
  const sessionId = 'session-123';
  const mockSocket = {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
    connected: true
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAuth).mockReturnValue({
      session: { accessToken: 'fake-token' }
    } as any);
    vi.mocked(socketService.connect).mockReturnValue(mockSocket as any);
    vi.mocked(socketService.getSocket).mockReturnValue(mockSocket as any);
  });

  it('should connect to socket and join session on mount', () => {
    renderHook(() => useReviewSession(sessionId));

    expect(socketService.connect).toHaveBeenCalledWith('fake-token');
    expect(mockSocket.emit).toHaveBeenCalledWith('join-session', { sessionId });
  });

  it('should handle typing indicator updates', () => {
    const { result } = renderHook(() => useReviewSession(sessionId));

    // Find the 'typing-indicator' handler
    const typingCall = mockSocket.on.mock.calls.find(call => call[0] === 'typing-indicator');
    expect(typingCall).toBeDefined();
    const onTyping = typingCall![1];

    act(() => {
      onTyping({ userId: 'user-1', filePath: 'test.ts', lineNumber: 10, isTyping: true });
    });

    expect(result.current.typingUsers['user-1']).toMatchObject({
      filePath: 'test.ts',
      isTyping: true
    });
  });

  it('should emit typing events via updateTyping', () => {
    const { result } = renderHook(() => useReviewSession(sessionId));

    act(() => {
      result.current.updateTyping('app.ts', 20, true);
    });

    expect(mockSocket.emit).toHaveBeenCalledWith('typing', {
      sessionId,
      filePath: 'app.ts',
      lineNumber: 20,
      isTyping: true
    });
  });

  it('should disconnect and leave session on unmount', () => {
    const { unmount } = renderHook(() => useReviewSession(sessionId));
    unmount();

    expect(mockSocket.emit).toHaveBeenCalledWith('leave-session', { sessionId });
    expect(mockSocket.off).toHaveBeenCalled();
  });
});
