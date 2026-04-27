"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  GitPullRequest, 
  Settings, 
  ArrowRight, 
  Users, 
  Clock, 
  Search,
  Code2,
  Loader2,
  ChevronRight,
  Shield,
  ExternalLink
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RepoImportModal } from "@/components/dashboard/repo-import-modal";
import { MemberInviteModal } from "@/components/dashboard/member-invite-modal";
import { Sidebar } from "@/components/dashboard/sidebar";
import axios from "axios";
import Link from "next/link";

export default function WorkspacePage() {
  const { slug } = useParams();
  const { user, session } = useAuth();
  const [workspace, setWorkspace] = useState<any>(null);
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkspace = async () => {
    if (!session?.accessToken || !slug) return;
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/workspaces/${slug}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setWorkspace(response.data);
      
      // Also fetch all workspaces for the sidebar
      const wsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/workspaces`, {
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      setWorkspaces(wsResponse.data);
    } catch (error) {
      console.error("Failed to fetch workspace", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMember = async (userId: string) => {
    if (!confirm("Are you sure you want to remove this member?")) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/workspaces/${slug}/members/${userId}`, {
        headers: { Authorization: `Bearer ${session?.accessToken}` }
      });
      fetchWorkspace();
    } catch (error) {
      console.error("Failed to remove member", error);
    }
  };

  useEffect(() => {
    fetchWorkspace();
  }, [session?.accessToken, slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (!workspace) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 p-4">
        <h1 className="text-2xl font-bold mb-2">Workspace Not Found</h1>
        <Button asChild variant="link">
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar workspaces={workspaces} />

      {/* Main Content */}
      <main className="flex-1">
        <header className="h-16 border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link href="/dashboard" className="text-slate-500 hover:text-indigo-600">Workspaces</Link>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span>{workspace.name}</span>
          </div>
          <div className="flex items-center gap-4">
             <RepoImportModal slug={workspace.slug} onImported={fetchWorkspace} />
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Repositories */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-indigo-500" />
                    Repositories
                  </h2>
                </div>

                {workspace.repositories.length === 0 ? (
                  <Card className="bg-transparent border-dashed border-2 py-12 text-center">
                    <CardHeader>
                      <CardTitle className="text-lg">No Repositories Imported</CardTitle>
                      <CardDescription>Start by importing a repository from GitHub to begin code reviews.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RepoImportModal slug={workspace.slug} onImported={fetchWorkspace} />
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {workspace.repositories.map((repo: any) => (
                      <Card key={repo.id} className="border-none shadow-sm hover:shadow-md transition-shadow group">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-400">
                              <ArrowRight className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold flex items-center gap-2">
                                {repo.name}
                                {repo.isPrivate && <Shield className="w-3.5 h-3.5 text-amber-500" />}
                              </h4>
                              <p className="text-xs text-slate-500">{repo.fullName}</p>
                            </div>
                          </div>
                          <Button asChild size="sm" variant="ghost" className="gap-2 text-indigo-600">
                             <Link href={`/dashboard/${slug}/${repo.id}/prs`}>
                                <GitPullRequest className="w-4 h-4" />
                                Pull Requests
                             </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <GitPullRequest className="w-5 h-5 text-indigo-500" />
                  Recent Sessions
                </h2>
                <Card className="bg-transparent border-dashed border-2 py-8 text-center text-slate-500 text-sm">
                   No active review sessions found for this workspace.
                </Card>
              </section>
            </div>

            {/* Right Column: Members */}
            <div className="space-y-8">
              <Card className="border-none shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-bold">Members</CardTitle>
                  <MemberInviteModal slug={workspace.slug} onInvited={fetchWorkspace} />
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  {workspace.members.map((member: any) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.user.avatarUrl || ""} />
                          <AvatarFallback>{member.user.email?.[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{member.user.name || member.user.email.split('@')[0]}</p>
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{member.role}</p>
                        </div>
                      </div>
                      {member.userId !== user?.id && workspace.ownerId === user?.id && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                          onClick={() => handleRemoveMember(member.userId)}
                        >
                          <Users className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-indigo-600 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Pro Tip</CardTitle>
                  <CardDescription className="text-indigo-100">
                    Invite your team to review code together in real-time. Collaborative reviews are 2x faster than asynchronous ones.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
