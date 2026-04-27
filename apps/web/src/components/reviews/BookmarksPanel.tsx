'use client';

import React, { useEffect, useState } from 'react';
import * as Y from 'yjs';
import { Bookmark, Trash2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookmarkItem {
  id: string;
  filePath: string;
  lineNumber: number;
  label: string;
  author: string;
}

export function BookmarksPanel({ ydoc, onJump }: { ydoc: Y.Doc, onJump: (path: string, line: number) => void }) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const bookmarksArray = ydoc.getArray<BookmarkItem>('bookmarks');

  useEffect(() => {
    const update = () => {
      setBookmarks(bookmarksArray.toArray());
    };
    
    bookmarksArray.observe(update);
    update();
    
    return () => bookmarksArray.unobserve(update);
  }, [bookmarksArray]);

  const removeBookmark = (id: string) => {
    const index = bookmarks.findIndex(b => b.id === id);
    if (index !== -1) {
      bookmarksArray.delete(index);
    }
  };

  return (
    <aside className="w-80 border-l border-white/10 bg-white/2 backdrop-blur-xl flex flex-col h-full">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <Bookmark size={20} className="text-indigo-400" />
          <h2 className="font-semibold text-lg text-white">Session Bookmarks</h2>
        </div>
        <p className="text-white/30 text-xs">{bookmarks.length} important lines marked</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <AnimatePresence>
          {bookmarks.length === 0 ? (
            <div className="text-center py-10 opacity-20">
              <Bookmark size={40} className="mx-auto mb-2" />
              <p className="text-xs">No bookmarks yet</p>
            </div>
          ) : (
            bookmarks.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="group bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-white/40 truncate">{b.filePath}</p>
                    <p className="text-xs font-bold text-white mt-0.5">Line {b.lineNumber}</p>
                  </div>
                  <button 
                    onClick={() => removeBookmark(b.id)}
                    className="text-white/20 hover:text-rose-400 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                
                <p className="text-xs text-white/60 mb-3 line-clamp-2 italic">"{b.label}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-white/20 uppercase tracking-widest font-black">By {b.author}</span>
                  <button 
                    onClick={() => onJump(b.filePath, b.lineNumber)}
                    className="flex items-center gap-1 text-indigo-400 text-[10px] font-bold hover:underline"
                  >
                    Jump <ExternalLink size={10} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
