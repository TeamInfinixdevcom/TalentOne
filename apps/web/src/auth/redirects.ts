/**
 * TalentOne Role Redirects
 * -------------------------------------------------------
 * Define la ruta inicial para cada rol del sistema.
 */

import {
  getHighestRole,
  TALENTONE_ROLES,
  type TalentOneRole,
} from "./roles";

/**
 * Landing por rol.
 */
export const ROLE_LANDING_PATH: Record<TalentOneRole, string> = {
  [TALENTONE_ROLES.SUPER_ADMIN]: "/admin",

  [TALENTONE_ROLES.COMPANY_ADMIN]: "/company",

  [TALENTONE_ROLES.COMPANY_USER]: "/company",

  [TALENTONE_ROLES.RECRUITER]: "/recruiter",

  [TALENTONE_ROLES.CANDIDATE]: "/candidate",
};

/**
 * Obtiene la ruta principal de un rol.
 */
export function getRoleLandingPath(
  role: TalentOneRole,
): string {
  return ROLE_LANDING_PATH[role] ?? "/";
}

/**
 * Obtiene la mejor ruta para una colección de roles.
 */
export function getRedirectPathForRoles(
  roles: readonly TalentOneRole[],
): string {
  const highestRole = getHighestRole(roles);

  if (!highestRole) {
    return "/";
  }

  return getRoleLandingPath(highestRole);
}

/**
 * Alias para mantener compatibilidad con el resto del proyecto.
 */
export const getPostLoginRedirectPath =
  getRedirectPathForRoles;

/**
 * Determina si el usuario ya está en una ruta válida.
 */
export function isValidLandingPath(
  pathname: string,
  roles: readonly TalentOneRole[],
): boolean {
  const expected = getRedirectPathForRoles(roles);

  return pathname.startsWith(expected);
}

/**
 * Obtiene la ruta de acceso denegado.
 */
export function getAccessDeniedPath(): string {
  return "/403";
}

/**
 * Obtiene la ruta de login.
 */
export function getLoginPath(): string {
  return "/login";
}

/**
 * Obtiene la ruta por defecto.
 */
export function getDefaultPath(): string {
  return "/";
}
