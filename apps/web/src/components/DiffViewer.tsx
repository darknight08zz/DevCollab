'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { DiffEditor, useMonaco } from '@monaco-editor/react';
import { createPortal } from 'react-dom';
import * as Y from 'yjs';
import { Bookmark, Highlighter, Trash2, Lock } from 'lucide-react';
import { CommentBox } from './reviews/CommentBox';
import { CommentThread } from './reviews/CommentThread';
import { Plus } from 'lucide-react';
import { LiveCursor, TypingIndicator } from './reviews/RealtimeUI';

interface Comment {
  id: string;
  content: string;
  lineNumber: number;
  filePath: string;
  createdAt: string;
  resolvedAt: string | null;
  author: {
    id: string;
    name: string;
    avatarUrl: string;
    githubUsername: string;
  };
}

interface Cursor {
  userId: string;
  name: string;
  filePath: string;
  lineNumber: number;
}

interface DiffViewerProps {
  original: string;
  modified: string;
  filePath: string;
  language?: string;
  comments?: Comment[];
  onAddComment?: (lineNumber: number, content: string) => Promise<void>;
  onResolveComment?: (commentId: string) => Promise<void>;
  onDeleteComment?: (commentId: string) => Promise<void>;
  revealLine?: number;
  currentUser?: any;
  ydoc: Y.Doc;
  awareness?: any;
  typingUsers?: Record<string, { userId: string, filePath: string, lineNumber: number, isTyping: boolean }>;
  onlineUsers?: any[];
  onTyping?: (lineNumber: number, isTyping: boolean) => void;
  onSuggestFix?: (commentId: string) => Promise<void>;
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
  original,
  modified,
  filePath,
  language,
  comments = [],
  onAddComment,
  onResolveComment,
  onDeleteComment,
  revealLine,
  currentUser,
  ydoc,
  awareness,
  typingUsers = {},
  onlineUsers = [],
  onTyping,
  onSuggestFix,
}) => {
  const monaco = useMonaco();
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && revealLine) {
      const modifiedEditor = editorRef.current.getModifiedEditor();
      modifiedEditor.revealLineInCenter(revealLine);
      modifiedEditor.setPosition({ lineNumber: revealLine, column: 1 });
      modifiedEditor.focus();
    }
  }, [revealLine]);
  const [activeCommentLine, setActiveCommentLine] = useState<number | null>(null);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [yCursors, setYCursors] = useState<Record<string, Cursor>>({});
  const [highlights, setHighlights] = useState<Record<number, string>>({});

  const highlightsMap = useMemo(() => ydoc.getMap<string>(`highlights:${filePath}`), [ydoc, filePath]);
  const bookmarksArray = useMemo(() => ydoc.getArray<any>('bookmarks'), [ydoc]);

  useEffect(() => {
    const update = () => {
      setHighlights(highlightsMap.toJSON());
    };
    highlightsMap.observe(update);
    update();
    return () => highlightsMap.unobserve(update);
  }, [highlightsMap]);

  useEffect(() => {
    if (!awareness) return;
    const update = () => {
      const states = awareness.getStates();
      const newCursors: Record<string, Cursor> = {};
      states.forEach((state: any, clientId: number) => {
        if (state.user && state.cursor && state.cursor.filePath === filePath && state.user.id !== currentUser?.id) {
          newCursors[clientId] = {
            userId: state.user.id,
            name: state.user.name,
            filePath: state.cursor.filePath,
            lineNumber: state.cursor.lineNumber
          };
        }
      });
      setYCursors(newCursors);
    };
    awareness.on('change', update);
    update();
    return () => awareness.off('change', update);
  }, [awareness, filePath, currentUser?.id]);

  const getLanguageFromPath = (path: string) => {
    const ext = path.split('.').pop()?.toLowerCase();
    const map: Record<string, string> = {
      js: 'javascript', jsx: 'javascript', ts: 'typescript', tsx: 'typescript',
      py: 'python', go: 'go', java: 'java', cpp: 'cpp', c: 'cpp', cs: 'csharp',
      html: 'html', css: 'css', json: 'json', md: 'markdown', yml: 'yaml', yaml: 'yaml'
    };
    return map[ext || ''] || 'plaintext';
  };

  const resolvedLanguage = language || getLanguageFromPath(filePath);

  // Group comments by line number
  const groupedComments = comments.reduce((acc, comment) => {
    if (comment.filePath !== filePath) return acc;
    if (!acc[comment.lineNumber]) acc[comment.lineNumber] = [];
    acc[comment.lineNumber].push(comment);
    return acc;
  }, {} as Record<number, Comment[]>);

  const handleEditorMount = (editor: any) => {
    editorRef.current = editor;
    const modifiedEditor = editor.getModifiedEditor();

    modifiedEditor.onMouseMove((e: any) => {
      if (e.target.type === 2) {
        const line = e.target.position.lineNumber;
        setHoveredLine(line);
        
        if (awareness) {
          awareness.setLocalStateField('cursor', {
            filePath,
            lineNumber: line
          });
        }
      } else {
        setHoveredLine(null);
      }
    });

    updateViewZones(modifiedEditor);
  };

  const toggleHighlight = (line: number) => {
    if (highlights[line]) {
      highlightsMap.delete(line.toString());
    } else {
      highlightsMap.set(line.toString(), '#4f46e5'); // indigo
    }
  };

  const addBookmark = (line: number) => {
    const label = window.prompt("Label for this bookmark?", `Line ${line} in ${filePath.split('/').pop()}`);
    if (label) {
      bookmarksArray.push([{
        id: Math.random().toString(36).substring(7),
        filePath,
        lineNumber: line,
        label,
        author: currentUser?.name || 'Someone'
      }]);
    }
  };

  const updateViewZones = (editor: any) => {
    editor.changeViewZones((accessor: any) => {
      // Clear existing zones if needed or manage them
      // In a real app, we'd track zone IDs to remove/update
    });
  };

  return (
    <div className="w-full border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl relative group/viewer">
      <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-mono text-white/70 tracking-tight">{filePath}</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/40 uppercase tracking-widest font-bold border border-white/5">
          {resolvedLanguage}
        </span>

      </div>
      
      <div className="h-[500px] relative">
        <DiffEditor
          original={original}
          modified={modified}
          language={resolvedLanguage}
          theme="vs-dark"
          onMount={handleEditorMount}
          options={{
            renderSideBySide: true,
            readOnly: true,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 13,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            padding: { top: 20, bottom: 20 },
            renderMarginRevertIcon: false,
            diffWordWrap: 'on'
          }}
        />

        {/* Inline Overlay for Comments */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
           <div className="relative w-full h-full">
              {Object.entries(groupedComments).map(([line, lineComments]) => (
                <div 
                  key={line}
                  className="absolute left-[calc(50%+60px)] right-4 pointer-events-auto"
                  style={{ top: `${(parseInt(line)) * 19 + 40}px` }}
                >
                  <CommentThread 
                    comments={lineComments}
                    currentUser={currentUser}
                    onReply={async (content) => onAddComment?.(parseInt(line), content)}
                    onResolve={async (id) => onResolveComment?.(id)}
                    onDelete={async (id) => onDeleteComment?.(id)}
                    onEdit={async () => {}}
                    onSuggestFix={onSuggestFix}
                  />
                </div>
              ))}

              {activeCommentLine && (
                <div 
                  className="absolute left-[calc(50%+60px)] right-4 pointer-events-auto"
                  style={{ top: `${activeCommentLine * 19 + 40}px` }}
                >
                  <CommentBox 
                    onCancel={() => {
                      onTyping?.(activeCommentLine, false);
                      setActiveCommentLine(null);
                    }}
                    onSubmit={async (content) => {
                      await onAddComment?.(activeCommentLine, content);
                      onTyping?.(activeCommentLine, false);
                      setActiveCommentLine(null);
                    }}
                    onChange={() => onTyping?.(activeCommentLine, true)}
                  />
                </div>
              )}

              {/* Real-time Indicators */}
              {Object.values(yCursors).map(cursor => (
                <LiveCursor 
                  key={cursor.userId}
                  userId={cursor.userId}
                  name={cursor.name}
                  lineNumber={cursor.lineNumber}
                  filePath={cursor.filePath}
                  currentFilePath={filePath}
                />
              ))}

              {/* Shared Highlights */}
              {Object.entries(highlights).map(([line, color]) => (
                <div 
                  key={line}
                  className="absolute left-0 right-0 h-[19px] pointer-events-none opacity-20"
                  style={{ 
                    top: `${(parseInt(line) - 1) * 19 + 20}px`,
                    backgroundColor: color 
                  }}
                />
              ))}

              {Object.values(typingUsers).filter(t => t.filePath === filePath && t.isTyping).map(t => {
                const typingUser = onlineUsers.find(u => u.id === t.userId);
                return (
                  <div 
                    key={t.userId}
                    className="absolute left-[calc(50%+60px)] pointer-events-none"
                    style={{ top: `${t.lineNumber * 19 + 40}px` }}
                  >
                    <TypingIndicator users={[typingUser?.name || 'Someone']} />
                  </div>
                );
              })}
           </div>
        </div>

        {/* Floating Actions Menu */}
        {hoveredLine && !activeCommentLine && (
          <div 
            className="absolute z-50 left-[calc(50%+30px)] flex gap-1 pointer-events-none"
            style={{ top: `${(hoveredLine - 1) * 19 + 20}px` }}
          >
            <button 
              onClick={() => setActiveCommentLine(hoveredLine)}
              className="pointer-events-auto bg-indigo-600 text-white rounded-md p-1 shadow-lg hover:scale-110 transition-all flex items-center justify-center -translate-x-full"
              title="Add Comment"
            >
              <Plus size={14} strokeWidth={3} />
            </button>
            <button 
              onClick={() => toggleHighlight(hoveredLine)}
              className={`pointer-events-auto rounded-md p-1 shadow-lg hover:scale-110 transition-all flex items-center justify-center -translate-x-full ${highlights[hoveredLine] ? 'bg-amber-500 text-white' : 'bg-white/10 text-white/40 hover:text-white'}`}
              title="Highlight Line"
            >
              <Highlighter size={14} />
            </button>
            <button 
              onClick={() => addBookmark(hoveredLine)}
              className="pointer-events-auto bg-white/10 text-white/40 hover:text-white rounded-md p-1 shadow-lg hover:scale-110 transition-all flex items-center justify-center -translate-x-full"
              title="Bookmark Line"
            >
              <Bookmark size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
