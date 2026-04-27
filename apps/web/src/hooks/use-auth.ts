"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { AuthUser } from "@devcollab/shared";

export function useAuth() {
  const { data: session, status } = useSession();

  return {
    user: session?.user as AuthUser | undefined,
    session,
    signIn: (provider = "github") => signIn(provider),
    signOut: () => signOut(),
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}
