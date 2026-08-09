"use client";

import { useEffect, type ReactNode } from "react";

import { useTalentOneAuthState } from "./auth-context";
import { getRoleLandingPath } from "./redirects";
import { hasAnyRole, type TalentOneRole } from "./roles";

export interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: readonly TalentOneRole[];
  loadingFallback?: ReactNode;
  unauthenticatedRedirect?: string;
  unauthorizedRedirect?: string;
  requireEmailVerified?: boolean;
}

function redirect(path: string): void {
  if (typeof window !== "undefined") {
    window.location.replace(path);
  }
}

export function ProtectedRoute({
  children,
  allowedRoles,
  loadingFallback = null,
  unauthenticatedRedirect = "/login",
  unauthorizedRedirect,
  requireEmailVerified = true,
}: ProtectedRouteProps) {
  const { loading, authenticated, claims } = useTalentOneAuthState();
  const isEmailVerified = claims?.emailVerified ?? false;
  const roles = claims?.roles ?? [];
  const role = claims?.role ?? null;

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!authenticated) {
      redirect(unauthenticatedRedirect);
      return;
    }

    if (requireEmailVerified && !isEmailVerified) {
      redirect("/verify-email");
      return;
    }

    if (allowedRoles?.length && !hasAnyRole(roles, allowedRoles)) {
      redirect(unauthorizedRedirect ?? (role ? getRoleLandingPath(role) : "/"));
    }
  }, [
    allowedRoles,
    authenticated,
    isEmailVerified,
    loading,
    role,
    roles,
    requireEmailVerified,
    unauthenticatedRedirect,
    unauthorizedRedirect,
  ]);

  if (loading) {
    return <>{loadingFallback}</>;
  }

  return <>{children}</>;
}
