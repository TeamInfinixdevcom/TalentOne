"use client";

import { useEffect, type ReactNode } from "react";

import { getRoleLandingPath, hasAnyRole, type TalentOneRole } from "@talentone/auth";

import { useTalentOneAuthState } from "./auth-context";

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
  const { loading, isAuthenticated, isEmailVerified, roles, role } = useTalentOneAuthState();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!isAuthenticated) {
      redirect(unauthenticatedRedirect);
      return;
    }

    if (requireEmailVerified && !isEmailVerified) {
      redirect("/verify-email");
      return;
    }

    if (allowedRoles?.length && !hasAnyRole(roles, allowedRoles)) {
      redirect(unauthorizedRedirect ?? getRoleLandingPath(role));
    }
  }, [
    allowedRoles,
    isAuthenticated,
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
