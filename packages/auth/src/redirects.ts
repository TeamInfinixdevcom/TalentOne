import { getPrimaryRole, TALENTONE_ROLES, type TalentOneRole } from './roles';

export const ROLE_LANDING_PATHS: Record<TalentOneRole, string> = {
  [TALENTONE_ROLES.SUPER_ADMIN]: '/admin',
  [TALENTONE_ROLES.COMPANY_ADMIN]: '/company',
  [TALENTONE_ROLES.COMPANY_USER]: '/company',
  [TALENTONE_ROLES.RECRUITER]: '/recruiter',
  [TALENTONE_ROLES.CANDIDATE]: '/candidate',
};

export function getRoleLandingPath(role: TalentOneRole | null | undefined): string {
  return role ? ROLE_LANDING_PATHS[role] : '/login';
}

export function getRedirectPathForRoles(
  roles: readonly TalentOneRole[],
  fallbackPath = '/login',
): string {
  const role = getPrimaryRole(roles);

  return role ? ROLE_LANDING_PATHS[role] : fallbackPath;
}
