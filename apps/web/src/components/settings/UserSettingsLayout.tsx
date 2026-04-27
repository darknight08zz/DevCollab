'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Mail, 
  Camera, 
  Save, 
  Loader2, 
  AlertTriangle,
  LogOut,
  ShieldCheck,
  Bell
} from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function UserSettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-2">
        <div className="mb-8 px-2">
          <h2 className="text-xl font-black tracking-tighter text-indigo-500">Settings</h2>
        </div>
        
        <nav className="space-y-1">
          {[
            { href: '/settings/profile', label: 'Profile', icon: <User size={18} /> },
            { href: '/settings/notifications', label: 'Notifications', icon: <Bell size={18} /> },
            { href: '/settings/security', label: 'Security', icon: <ShieldCheck size={18} /> },
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-all text-sm font-bold text-white/60 hover:text-white"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
           <button className="flex items-center gap-3 px-3 py-2 rounded-xl w-full hover:bg-rose-500/10 text-rose-400 transition-all text-sm font-bold">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-12 max-w-4xl">
        {children}
      </main>
    </div>
  );
}
