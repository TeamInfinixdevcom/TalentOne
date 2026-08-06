import { PERMISSIONS } from "../auth/permissions";
import type { TalentOneClaims } from "../auth/claims";

import type { Job, JobVisibility } from "@talentone/database";

export interface JobAccessContext {
  uid: string | null;
  claims: TalentOneClaims | null;
}

const PLATFORM_ROLE_ALIASES = ["MASTER", "ADMIN", "super_admin", "company_admin"] as const;
const COMPANY_ROLE_ALIASES = [
  "COMPANY_OWNER",
  "COMPANY_USER",
  "RECRUITER",
  "company_admin",
  "company_user",
  "recruiter",
] as const;

function hasAnyRole(roles: readonly string[], allowedRoles: readonly string[]): boolean {
  return allowedRoles.some((role) => roles.includes(role));
}

function hasAnyPermission(permissions: readonly string[] | undefined, allowedPermissions: readonly string[]): boolean {
  if (!permissions) {
    return false;
  }

  return allowedPermissions.some((permission) => permissions.includes(permission));
}

export function isPlatformAdmin(context: JobAccessContext): boolean {
  return !!context.claims && hasAnyRole(context.claims.roles as readonly string[], PLATFORM_ROLE_ALIASES);
}

export function belongsToCurrentOrganization(
  context: JobAccessContext,
  organizationId: string,
): boolean {
  return context.claims?.currentOrganizationId === organizationId;
}

export function canManageJobs(context: JobAccessContext): boolean {
  if (!context.claims) {
    return false;
  }

  return (
    isPlatformAdmin(context) ||
    hasAnyRole(context.claims.roles as readonly string[], [...PLATFORM_ROLE_ALIASES, ...COMPANY_ROLE_ALIASES]) ||
    hasAnyPermission(context.claims.permissions, [
      PERMISSIONS.VACANCY_CREATE,
      PERMISSIONS.VACANCY_UPDATE,
      PERMISSIONS.VACANCY_DELETE,
      PERMISSIONS.VACANCY_PUBLISH,
    ])
  );
}

export function canAccessJobsModule(context: JobAccessContext): boolean {
  return isPlatformAdmin(context) || canManageJobs(context);
}

export function canManageJobInOrganization(
  context: JobAccessContext,
  organizationId: string,
): boolean {
  if (isPlatformAdmin(context)) {
    return true;
  }

  return canManageJobs(context) && belongsToCurrentOrganization(context, organizationId);
}

export function canReadJob(
  context: JobAccessContext,
  job: Pick<Job, "organizationId" | "status" | "visibility">,
): boolean {
  if (job.status === "published" && job.visibility === "public") {
    return true;
  }

  return isPlatformAdmin(context) || belongsToCurrentOrganization(context, job.organizationId) || hasAnyRole(
    context.claims?.roles as readonly string[] ?? [],
    [...PLATFORM_ROLE_ALIASES, ...COMPANY_ROLE_ALIASES],
  );
}

export function assertJobManagementAccess(context: JobAccessContext): void {
  if (!canAccessJobsModule(context)) {
    throw new Error("Job management access denied.");
  }
}

export function canExposePublicJob(job: Pick<Job, "status" | "visibility">): boolean {
  return job.status === "published" && job.visibility === "public";
}

export function normalizeJobVisibility(value: JobVisibility): JobVisibility {
  return value;
}
