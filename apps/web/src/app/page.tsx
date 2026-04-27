"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { API_ENDPOINTS } from "@devcollab/shared";
import { Code2, Users, Zap, ArrowRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-md dark:bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">DevCollab</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button asChild size="sm" className="bg-indigo-600 hover:bg-indigo-700 gap-2">
                <Link href="/dashboard">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/login">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 px-3 py-1 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Now in Public Beta
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
              Real-time Code Review <br />for Modern Teams
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Review code together in real-time. Boost your team&apos;s velocity and code quality with the first collaborative review platform designed for the AI era.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div className="relative w-full sm:w-80">
                <Input placeholder="Enter your work email" className="h-12 pr-32 bg-white dark:bg-slate-900 shadow-sm" />
                <Button asChild className="absolute right-1 top-1 h-10 bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/login">Join Beta</Link>
                </Button>
              </div>
              <Button asChild variant="outline" className="h-12 gap-2 w-full sm:w-auto px-8 border-slate-200 dark:border-slate-800">
                <Link href="/login">
                  <ArrowRight className="w-5 h-5" />
                  Connect GitHub
                </Link>
              </Button>
            </div>
            
            {/* API Endpoint usage demonstration */}
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              Fetching from: <span className="text-indigo-500">{API_ENDPOINTS.SESSIONS}</span>
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md bg-slate-50/50 dark:bg-slate-800/50 hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>Experience zero-latency collaborative editing and commenting on your pull requests.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-md bg-slate-50/50 dark:bg-slate-800/50 hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <CardTitle>Multiplayer Review</CardTitle>
                  <CardDescription>See cursor movements and live edits. Review code like you&apos;re in the same room.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-md bg-slate-50/50 dark:bg-slate-800/50 hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <CardTitle>AI-Powered Insights</CardTitle>
                  <CardDescription>Automated security checks and architectural suggestions for every line of code.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2026 DevCollab Inc. Built with Next.js 14 and Tailwind v4.</p>
        </div>
      </footer>
    </div>
  );
}
