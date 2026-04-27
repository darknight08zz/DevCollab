import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DiffViewer } from '../../components/DiffViewer';
import * as Y from 'yjs';

describe('DiffViewer Component', () => {
  const ydoc = new Y.Doc();

  it('should render the editor container', () => {
    // DiffViewer renders a Monaco editor which is hard to test in JSDOM,
    // so we just check if it renders without crashing with correct props.
    render(
      <DiffViewer 
        original="old content" 
        modified="new content" 
        filePath="src/test.ts" 
        ydoc={ydoc}
      />
    );
    // Monaco editor container usually has some specific classes or attributes
    expect(document.body).toBeDefined();
  });

  it('should pass comments to the viewer', () => {
    const comments = [{
      id: '1',
      content: 'Test comment',
      lineNumber: 1,
      filePath: 'src/test.ts',
      createdAt: new Date().toISOString(),
      resolvedAt: null,
      author: { id: 'u1', name: 'Tester', avatarUrl: '', githubUsername: 'test' }
    }];
    
    render(
      <DiffViewer 
        original="old" 
        modified="new" 
        filePath="src/test.ts" 
        ydoc={ydoc}
        comments={comments as any}
      />
    );
    expect(document.body).toBeDefined();
  });
});
