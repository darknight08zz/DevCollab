"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WorkspaceCreateModal } from "./workspace-create-modal";
import { 
  GitPullRequest, 
  Settings, 
  Code2, 
  LayoutDashboard, 
  LogOut,
  ChevronRight,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  workspaces: any[];
}

export function Sidebar({ workspaces }: SidebarProps) {
  const { user, signOut } = useAuth();
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white dark:bg-slate-900 hidden md:flex flex-col sticky top-0 h-screen">
      <div className="p-6 flex items-center gap-2 border-b">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">DevCollab</span>
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-6 overflow-auto">
        <div className="space-y-1">
          <h3 className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main</h3>
          <Button 
            variant={pathname === "/dashboard" ? "secondary" : "ghost"} 
            asChild 
            className={cn(
              "w-full justify-start gap-3",
              pathname === "/dashboard" && "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
            )}
          >
            <Link href="/dashboard">
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </Link>
          </Button>
          <Button 
            variant={pathname === "/dashboard/prs" ? "secondary" : "ghost"} 
            asChild 
            className={cn(
              "w-full justify-start gap-3 text-slate-600 dark:text-slate-400",
              pathname === "/dashboard/prs" && "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
            )}
          >
            <Link href="/dashboard/prs">
              <GitPullRequest className="w-4 h-4" />
              Pull Requests
            </Link>
          </Button>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Workspaces</h3>
          </div>
          {workspaces.map((ws) => (
            <Button 
              key={ws.id} 
              variant={pathname.includes(`/dashboard/${ws.slug}`) ? "secondary" : "ghost"} 
              asChild 
              className={cn(
                "w-full justify-start gap-3 text-slate-600 dark:text-slate-400",
                pathname.includes(`/dashboard/${ws.slug}`) && "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
              )}
            >
              <Link href={`/dashboard/${ws.slug}`}>
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  pathname.includes(`/dashboard/${ws.slug}`) ? "bg-indigo-500" : "bg-slate-300"
                )}></div>
                {ws.name}
              </Link>
            </Button>
          ))}
          <WorkspaceCreateModal />
        </div>
      </div>

      <div className="p-4 border-t mt-auto space-y-2">
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.avatarUrl || ""} />
            <AvatarFallback>{user?.name?.[0] || user?.email?.[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">{user?.name || "User"}</p>
            <p className="text-xs text-slate-500 truncate">{user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="gap-2 text-xs" onClick={() => {}}>
              <Settings className="w-3.5 h-3.5" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="gap-2 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20" onClick={() => signOut()}>
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
