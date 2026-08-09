export const TALENTONE_ROLES = {
  SUPER_ADMIN: 'super_admin',
  COMPANY_ADMIN: 'company_admin',
  COMPANY_USER: 'company_user',
  RECRUITER: 'recruiter',
  CANDIDATE: 'candidate',
} as const;

export type TalentOneRole = (typeof TALENTONE_ROLES)[keyof typeof TALENTONE_ROLES];

export const ALL_ROLES: readonly TalentOneRole[] = [
  TALENTONE_ROLES.SUPER_ADMIN,
  TALENTONE_ROLES.COMPANY_ADMIN,
  TALENTONE_ROLES.COMPANY_USER,
  TALENTONE_ROLES.RECRUITER,
  TALENTONE_ROLES.CANDIDATE,
] as const;

const ROLE_PRIORITY: readonly TalentOneRole[] = [
  TALENTONE_ROLES.SUPER_ADMIN,
  TALENTONE_ROLES.COMPANY_ADMIN,
  TALENTONE_ROLES.RECRUITER,
  TALENTONE_ROLES.COMPANY_USER,
  TALENTONE_ROLES.CANDIDATE,
];

export function isTalentOneRole(value: unknown): value is TalentOneRole {
  return typeof value === 'string' && (ALL_ROLES as readonly string[]).includes(value);
}

export function normalizeRoles(roles: readonly unknown[]): TalentOneRole[] {
  const unique = new Set<TalentOneRole>();

  for (const role of roles) {
    if (isTalentOneRole(role)) {
      unique.add(role);
    }
  }

  return [...unique];
}

export function getPrimaryRole(roles: readonly TalentOneRole[]): TalentOneRole | null {
  for (const role of ROLE_PRIORITY) {
    if (roles.includes(role)) {
      return role;
    }
  }

  return null;
}

export function hasRole(userRoles: readonly TalentOneRole[], requiredRole: TalentOneRole): boolean {
  return userRoles.includes(requiredRole);
}

export function hasAnyRole(
  userRoles: readonly TalentOneRole[],
  requiredRoles: readonly TalentOneRole[],
): boolean {
  if (requiredRoles.length === 0) {
    return true;
  }

  return requiredRoles.some((role) => userRoles.includes(role));
}

export function hasAllRoles(
  userRoles: readonly TalentOneRole[],
  requiredRoles: readonly TalentOneRole[],
): boolean {
  return requiredRoles.every((role) => userRoles.includes(role));
}
