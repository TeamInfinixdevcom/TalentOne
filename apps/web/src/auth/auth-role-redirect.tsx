"use client";

import { useEffect, type ReactNode } from "react";

import { getRoleLandingPath } from "./redirects";
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
  const {
    loading,
    authenticated,
    claims,
  } = useTalentOneAuthState();

  const role = claims?.role ?? null;

  useEffect(() => {
    if (loading || !authenticated || !role) {
      return;
    }

    redirect(
      targetPath ?? getRoleLandingPath(role),
    );
  }, [
    authenticated,
    loading,
    role,
    targetPath,
  ]);

  if (loading) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
