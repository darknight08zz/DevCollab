import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CommentThread } from '../../components/reviews/CommentThread';
import { useAuth } from '@/hooks/use-auth';
import axios from 'axios';

// Mock Dependencies
vi.mock('@/hooks/use-auth', () => ({
  useAuth: vi.fn(() => ({
    user: { id: 'user-1', name: 'Tester' },
    session: { accessToken: 'token' }
  }))
}));

vi.mock('axios');

describe('CommentThread Component', () => {
  const mockThread = {
    id: 'thread-1',
    body: 'Initial comment',
    author: { name: 'Author' },
    createdAt: new Date().toISOString(),
    status: 'OPEN',
    replies: []
  };

  it('should render the comment body', () => {
    render(<CommentThread comments={[mockThread as any]} onResolve={async () => {}} onReply={async () => {}} onDelete={async () => {}} onEdit={async () => {}} />);
    expect(screen.getByText('Initial comment')).toBeInTheDocument();
    expect(screen.getByText('Author')).toBeInTheDocument();
  });

  it('should show reply input when clicking Reply', () => {
    render(<CommentThread comments={[mockThread as any]} onResolve={async () => {}} onReply={async () => {}} onDelete={async () => {}} onEdit={async () => {}} />);
    const replyButton = screen.getByRole('button', { name: /reply/i });
    fireEvent.click(replyButton);
    
    expect(screen.getByPlaceholderText(/write a reply/i)).toBeInTheDocument();
  });

  it('should optimisticly update when adding a reply', async () => {
    vi.mocked(axios.post).mockResolvedValue({ 
      data: { id: 'reply-1', content: 'New reply', author: { name: 'Tester' } } 
    });

    render(<CommentThread comments={[mockThread as any]} onResolve={async () => {}} onReply={async () => {}} onDelete={async () => {}} onEdit={async () => {}} />);
    
    // Open reply
    fireEvent.click(screen.getByRole('button', { name: /reply/i }));
    
    // Type and Send
    const input = screen.getByPlaceholderText(/write a reply/i);
    fireEvent.change(input, { target: { value: 'My new reply' } });
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    // Verify optimistic update / render
    await waitFor(() => {
      expect(screen.getByText('My new reply')).toBeInTheDocument();
    });
  });

  it('should call onResolve when Resolve button is clicked', async () => {
    const onResolve = vi.fn().mockResolvedValue(undefined);
    vi.mocked(axios.patch).mockResolvedValue({ data: { status: 'RESOLVED' } });

    render(<CommentThread comments={[mockThread as any]} onResolve={onResolve} onReply={async () => {}} onDelete={async () => {}} onEdit={async () => {}} />);
    
    const resolveBtn = screen.getByRole('button', { name: /resolve/i });
    fireEvent.click(resolveBtn);

    await waitFor(() => {
      expect(onResolve).toHaveBeenCalled();
    });
  });
});
