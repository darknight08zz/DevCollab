'use client';

import React from 'react';
import { Search, Code2, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { WorkspaceCreateModal } from './workspace-create-modal';
import { NotificationsDropdown } from './NotificationsDropdown';

export function Header() {
  return (
    <header className="h-16 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="relative w-96 max-w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
        <Input 
          placeholder="Search pull requests..." 
          className="pl-10 bg-white/5 border-white/10 h-10 focus-visible:ring-1 text-sm rounded-xl" 
        />
      </div>
      
      <div className="flex items-center gap-4">
        <NotificationsDropdown />
        
        <div className="w-[1px] h-6 bg-white/10 mx-2" />
        
        <WorkspaceCreateModal>
          <Button className="bg-indigo-600 hover:bg-indigo-500 gap-2 h-10 px-4 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all">
            <Plus className="w-4 h-4" />
            New Workspace
          </Button>
        </WorkspaceCreateModal>
      </div>
    </header>
  );
}
