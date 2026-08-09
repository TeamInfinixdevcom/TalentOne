import type { TalentOneClaims } from "../auth/claims";

const PLATFORM_ROLES = ["MASTER", "ADMIN", "super_admin", "company_admin"] as const;
const COMPANY_ROLES = [
  "COMPANY_OWNER",
  "COMPANY_USER",
  "RECRUITER",
  "company_admin",
  "company_user",
  "recruiter",
] as const;

export interface CompanyAccessContext {
  uid: string | null;
  claims: TalentOneClaims | null;
}

function hasAnyRole(roles: readonly string[], allowedRoles: readonly string[]): boolean {
  return allowedRoles.some((role) => roles.includes(role));
}

export function canAccessCompanyModule(context: CompanyAccessContext): boolean {
  if (!context.claims) {
    return false;
  }

  return hasAnyRole(context.claims.roles as readonly string[], [...PLATFORM_ROLES, ...COMPANY_ROLES]);
}

export function canManageCompanyOrganization(context: CompanyAccessContext): boolean {
  return canAccessCompanyModule(context);
}

export function belongsToCurrentCompany(
  context: CompanyAccessContext,
  organizationId: string,
): boolean {
  return context.claims?.currentOrganizationId === organizationId;
}

export function assertCompanyModuleAccess(context: CompanyAccessContext): void {
  if (!canAccessCompanyModule(context)) {
    throw new Error("Company access requires a company or platform role.");
  }
}
