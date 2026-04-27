'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import { 
  Settings, 
  Users, 
  CreditCard, 
  Share2, 
  History,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/Header';

export function WorkspaceSettingsLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const slug = params.slug as string;

  const navItems = [
    { href: `/dashboard/${slug}/settings/general`, label: 'General', icon: <Settings size={18} /> },
    { href: `/dashboard/${slug}/settings/members`, label: 'Members', icon: <Users size={18} /> },
    { href: `/dashboard/${slug}/settings/integrations`, label: 'Integrations', icon: <Share2 size={18} /> },
    { href: `/dashboard/${slug}/settings/audit-log`, label: 'Audit Log', icon: <History size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar workspaces={[]} /> {/* Sidebar will fetch its own data or can be passed */}

      <main className="flex-1 flex flex-col">
        <Header />
        
        <div className="flex-1 flex">
          {/* Settings Nav */}
          <aside className="w-64 border-r border-white/10 p-8 space-y-8">
            <div>
              <Link 
                href={`/dashboard/${slug}`}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs mb-6 group"
              >
                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
              </Link>
              <h2 className="text-xl font-black tracking-tighter">Workspace Settings</h2>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-sm font-bold ${
                      isActive 
                        ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.2)]' 
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Settings Content */}
          <section className="flex-1 p-12 max-w-5xl overflow-y-auto">
            {children}
          </section>
        </div>
      </main>
    </div>
  );
}
