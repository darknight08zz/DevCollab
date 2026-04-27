"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, ArrowRight, ChevronLeft } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <Link 
        href="/" 
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/20">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
          <CardDescription className="text-slate-500 dark:text-slate-400 mt-2">
            Continue to DevCollab to review your code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full h-12 text-base font-medium bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-3"
          >
            <ArrowRight className="w-5 h-5" />
            Continue with GitHub
          </Button>
          
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-8">
            By continuing, you agree to DevCollab&apos;s Terms of Service and Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
