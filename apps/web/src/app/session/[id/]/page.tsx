"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { useSocket } from "@/hooks/use-socket";
import { 
  Code2, 
  Users, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown, 
  FileCode,
  Share2,
  CheckCircle2,
  MoreVertical,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

export default function ReviewSessionPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { socket, isConnected } = useSocket();
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const [cursors, setCursors] = useState<Record<string, { x: number; y: number; name: string }>>({});
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socket || !id) return;

    socket.emit("join-session", { sessionId: id });

    socket.on("user-joined", ({ onlineUsers }) => {
      setOnlineUsers(onlineUsers);
    });

    socket.on("user-left", ({ userId, onlineUsers }) => {
      setOnlineUsers(onlineUsers);
      setCursors(prev => {
        const next = { ...prev };
        delete next[userId];
        return next;
      });
    });

    socket.on("cursor-update", ({ userId, filePath, lineNumber }) => {
      // For this mockup, we'll just track user presence. 
      // In a real editor, we'd map lineNumber to pixels.
    });

    return () => {
      socket.emit("leave-session", { sessionId: id });
      socket.off("user-joined");
      socket.off("user-left");
      socket.off("cursor-update");
    };
  }, [socket, id]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!socket || !id || !editorRef.current) return;
    
    // In a real implementation, we'd throttle this and send line/col
    // For now, we're just demonstrating the connection.
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-white dark:bg-slate-900 z-20">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="bg-indigo-600 p-1 rounded-md">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500">devcollab</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500">api</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="font-semibold">auth.ts</span>
          </div>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-red-500'} animate-pulse`} title={isConnected ? 'Connected' : 'Disconnected'}></div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2 mr-4">
            <AnimatePresence>
              {onlineUsers.map((u) => (
                <motion.div
                  key={u.id}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                >
                  <Avatar className="h-8 w-8 ring-2 ring-white dark:ring-slate-900 border-2 border-transparent">
                    <AvatarImage src={u.avatarUrl || ""} />
                    <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs">
                      {u.name?.[0]}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Approve
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer */}
        <aside className="w-64 border-r bg-slate-50 dark:bg-slate-900/50 hidden lg:flex flex-col">
          <div className="p-4 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Files
          </div>
          <ScrollArea className="flex-1">
            <div className="px-2 space-y-0.5">
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer text-sm font-medium">
                <ChevronDown className="w-4 h-4 text-slate-400" />
                src
              </div>
              <div className="pl-6">
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer text-sm text-slate-600 dark:text-slate-400">
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  middleware
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 cursor-pointer text-sm font-medium">
                  <FileCode className="w-4 h-4" />
                  auth.ts
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Editor Area */}
        <main 
          className="flex-1 bg-white dark:bg-slate-950 flex flex-col relative"
          ref={editorRef}
          onMouseMove={handleMouseMove}
        >
          <div className="flex-1 p-6 font-mono text-sm overflow-auto">
             <pre className="text-slate-800 dark:text-slate-300 leading-relaxed">
              <code>{`import { Router } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { prisma } from '../lib/prisma';

const router = Router();

router.post('/github/callback', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ message: 'Code is required' });
  }

  try {
    // 1. Exchange code for access token
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );`}</code>
             </pre>
          </div>
        </main>

        {/* Activity/Comments Sidebar */}
        <aside className="w-80 border-l bg-slate-50 dark:bg-slate-900/50 flex flex-col">
          <div className="h-12 border-b flex items-center px-4 gap-2 text-sm font-semibold">
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            Comments
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://avatar.iran.liara.run/public/1" />
                  </Avatar>
                  <span className="text-xs font-bold">Sarah Chen</span>
                  <span className="text-[10px] text-slate-500 italic">20m ago</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 text-sm">
                  Should we add a check for the redirect URI here to prevent phishing?
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://avatar.iran.liara.run/public/2" />
                  </Avatar>
                  <span className="text-xs font-bold">Alex Rivera</span>
                  <span className="text-[10px] text-slate-500 italic">Just now</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 text-sm">
                  Good point. I&apos;ll add it in the next commit.
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="p-4 border-t bg-white dark:bg-slate-900">
            <div className="relative">
              <Input placeholder="Write a comment..." className="pr-10 bg-slate-100 dark:bg-slate-800 border-none h-10" />
              <Button size="icon" variant="ghost" className="absolute right-1 top-1 h-8 w-8 text-indigo-600">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
