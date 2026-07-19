export const AUTH_ROLES = [
  "MASTER",
  "ADMIN",
  "COMPANY_OWNER",
  "COMPANY_USER",
  "RECRUITER",
  "CANDIDATE",
] as const;

export type TalentOneRole = (typeof AUTH_ROLES)[number];

export const ROLE_PRIORITY: readonly TalentOneRole[] = [
  "MASTER",
  "ADMIN",
  "COMPANY_OWNER",
  "RECRUITER",
  "COMPANY_USER",
  "CANDIDATE",
] as const;

export const ROLE_LANDING_PATHS: Record<TalentOneRole, string> = {
  MASTER: "/admin",
  ADMIN: "/admin",
  COMPANY_OWNER: "/company",
  COMPANY_USER: "/company",
  RECRUITER: "/company",
  CANDIDATE: "/candidate",
};

export function isTalentOneRole(value: unknown): value is TalentOneRole {
  return typeof value === "string" && AUTH_ROLES.includes(value as TalentOneRole);
}

export function normalizeRoles(value: unknown): TalentOneRole[] {
  if (Array.isArray(value)) {
    return Array.from(new Set(value.filter(isTalentOneRole)));
  }

  if (isTalentOneRole(value)) {
    return [value];
  }

  return [];
}

export function getPrimaryRole(roles: readonly TalentOneRole[]): TalentOneRole | null {
  for (const role of ROLE_PRIORITY) {
    if (roles.includes(role)) {
      return role;
    }
  }

  return roles[0] ?? null;
}

export function hasAnyRole(
  userRoles: readonly TalentOneRole[],
  allowedRoles: readonly TalentOneRole[],
): boolean {
  return allowedRoles.some((role) => userRoles.includes(role));
}
