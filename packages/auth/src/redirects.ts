import { getPrimaryRole, ROLE_LANDING_PATHS, type TalentOneRole } from "./roles";

export function getRoleLandingPath(role: TalentOneRole | null | undefined): string {
  return role ? ROLE_LANDING_PATHS[role] : "/login";
}

export function getRedirectPathForRoles(
  roles: readonly TalentOneRole[],
  fallbackPath = "/login",
): string {
  const role = getPrimaryRole(roles);
  return role ? ROLE_LANDING_PATHS[role] : fallbackPath;
}
