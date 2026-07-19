"use client";

import { useEffect, type ReactNode } from "react";

import { getRoleLandingPath } from "@talentone/auth";

import { useTalentOneAuthState } from "./auth-context";

export interface AuthRoleRedirectProps {
  children?: ReactNode;
  fallback?: ReactNode;
  targetPath?: string;
}

function redirect(path: string): void {
  if (typeof window !== "undefined") {
    window.location.replace(path);
  }
}

export function AuthRoleRedirect({
  children = null,
  fallback = null,
  targetPath,
}: AuthRoleRedirectProps) {
  const { loading, isAuthenticated, role } = useTalentOneAuthState();

  useEffect(() => {
    if (loading || !isAuthenticated || !role) {
      return;
    }

    redirect(targetPath ?? getRoleLandingPath(role));
  }, [isAuthenticated, loading, role, targetPath]);

  if (loading) {
    return <>{fallback}</>;
  }

  if (isAuthenticated && role) {
    return null;
  }

  return <>{children}</>;
}
