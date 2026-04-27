"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GitPullRequest, 
  Settings, 
  ArrowRight, 
  Users, 
  Clock, 
  Search,
  Bell,
  Code2,
  Loader2,
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WorkspaceCreateModal } from "@/components/dashboard/workspace-create-modal";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/Header";
import axios from "axios";
import Link from "next/link";

export default function DashboardPage() {
  const { user, session } = useAuth();
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      if (!session?.accessToken) return;
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/workspaces`, {
          headers: { Authorization: `Bearer ${session.accessToken}` }
        });
        setWorkspaces(response.data);
      } catch (error) {
        console.error("Failed to fetch workspaces", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkspaces();
  }, [session?.accessToken]);

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar workspaces={workspaces} />

      {/* Main Content */}
      <main className="flex-1">
        <Header />

        <div className="p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Workspaces</h1>
            <p className="text-slate-500 dark:text-slate-400">Select a workspace to manage your repositories and reviews.</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
          ) : workspaces.length === 0 ? (
            <Card className="border-dashed border-2 bg-transparent text-center py-20">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle>No Workspaces Yet</CardTitle>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Create your first workspace to start importing repositories and reviewing code with your team.
                </p>
              </CardHeader>
              <CardContent>
                <WorkspaceCreateModal>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Create My First Workspace</Button>
                </WorkspaceCreateModal>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workspaces.map((ws) => (
                <Card key={ws.id} className="border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer overflow-hidden">
                  <div className="h-2 bg-indigo-500"></div>
                  <Link href={`/dashboard/${ws.slug}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                      </div>
                      <CardTitle className="text-lg">{ws.name}</CardTitle>
                      <p className="text-sm text-slate-500 line-clamp-1">/{ws.slug}</p>
                    </CardHeader>
                    <CardContent className="pt-0 border-t bg-slate-50/50 dark:bg-slate-900/50 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <ArrowRight className="w-3.5 h-3.5" />
                          {ws._count.repositories} Repos
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {ws.members.length} Members
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function LayoutDashboard(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="15" rx="1" />
    </svg>
  )
}
