import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useAuth } from '../../hooks/use-auth';
import { useSession } from 'next-auth/react';

// Mock next-auth
vi.mock('next-auth/react', () => ({
  useSession: vi.fn(),
  signIn: vi.fn(),
  signOut: vi.fn(),
}));

describe('useAuth Hook', () => {
  it('should return authenticated state when session exists', () => {
    const mockSession = {
      user: { name: 'Test User', email: 'test@example.com' },
      accessToken: 'fake-token',
      expires: 'tomorrow'
    };
    
    vi.mocked(useSession).mockReturnValue({
      data: mockSession,
      status: 'authenticated'
    } as any);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user?.email).toBe('test@example.com');
    expect(result.current.session?.accessToken).toBe('fake-token');
  });

  it('should return unauthenticated state when no session', () => {
    vi.mocked(useSession).mockReturnValue({
      data: null,
      status: 'unauthenticated'
    } as any);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBeNull();
  });

  it('should return loading state', () => {
    vi.mocked(useSession).mockReturnValue({
      data: null,
      status: 'loading'
    } as any);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoading).toBe(true);
  });
});
