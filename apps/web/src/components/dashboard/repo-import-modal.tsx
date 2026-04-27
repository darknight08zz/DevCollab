"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Plus, Loader2 } from "lucide-react";
import axios from "axios";
import { useSession } from "next-auth/react";

export function RepoImportModal({ slug, onImported }: { slug: string, onImported?: () => void }) {
  const [open, setOpen] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState<string | null>(null);
  const { data: session } = useSession();

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/workspaces/${slug}/repos/import`, {
        headers: { Authorization: `Bearer ${session?.accessToken}` }
      });
      setRepos(response.data);
    } catch (error) {
      console.error("Failed to fetch repos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) fetchRepos();
  }, [open]);

  const handleImport = async (repo: any) => {
    setImporting(repo.id);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/workspaces/${slug}/repos`, {
        githubRepoId: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        defaultBranch: repo.default_branch,
        isPrivate: repo.private
      }, {
        headers: { Authorization: `Bearer ${session?.accessToken}` }
      });
      if (onImported) onImported();
      setOpen(false);
    } catch (error) {
      console.error("Failed to import repo", error);
    } finally {
      setImporting(null);
    }
  };

  const filteredRepos = repos.filter(r => 
    r.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Plus className="w-4 h-4" />
          Import Repository
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Import Repository</DialogTitle>
          <DialogDescription>
            Select a repository from your GitHub account to import into this workspace.
          </DialogDescription>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search repositories..." 
              className="pl-10 h-10 bg-slate-50 dark:bg-slate-900 border-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto p-6 pt-2">
          {loading ? (
            <div className="flex items-center justify-center h-full gap-2 text-slate-500">
              <Loader2 className="w-5 h-5 animate-spin" />
              Fetching repositories...
            </div>
          ) : (
            <div className="space-y-2">
              {filteredRepos.map((repo) => (
                <div key={repo.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium">{repo.name}</p>
                      <p className="text-xs text-slate-500">{repo.full_name}</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => handleImport(repo)}
                    disabled={importing !== null}
                  >
                    {importing === repo.id ? <Loader2 className="w-4 h-4 animate-spin" /> : "Import"}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
