/**
 * TalentOne Roles
 * -------------------------------------------------------
 * Definición de roles oficiales del sistema y utilidades
 * para validación y autorización.
 */

export const TALENTONE_ROLES = {
  SUPER_ADMIN: "super_admin",
  COMPANY_ADMIN: "company_admin",
  COMPANY_USER: "company_user",
  RECRUITER: "recruiter",
  CANDIDATE: "candidate",
} as const;

export type TalentOneRole =
  (typeof TALENTONE_ROLES)[keyof typeof TALENTONE_ROLES];

export const ALL_ROLES: readonly TalentOneRole[] = [
  TALENTONE_ROLES.SUPER_ADMIN,
  TALENTONE_ROLES.COMPANY_ADMIN,
  TALENTONE_ROLES.COMPANY_USER,
  TALENTONE_ROLES.RECRUITER,
  TALENTONE_ROLES.CANDIDATE,
] as const;

/**
 * Verifica si el valor recibido es un rol válido.
 */
export function isTalentOneRole(value: unknown): value is TalentOneRole {
  return (
    typeof value === "string" &&
    (ALL_ROLES as readonly string[]).includes(value)
  );
}

/**
 * Elimina roles inválidos y duplicados.
 */
export function normalizeRoles(
  roles: readonly unknown[],
): TalentOneRole[] {
  const unique = new Set<TalentOneRole>();

  for (const role of roles) {
    if (isTalentOneRole(role)) {
      unique.add(role);
    }
  }

  return [...unique];
}

/**
 * Verifica si el usuario posee un rol específico.
 */
export function hasRole(
  userRoles: readonly TalentOneRole[],
  requiredRole: TalentOneRole,
): boolean {
  return userRoles.includes(requiredRole);
}

/**
 * Verifica si el usuario posee al menos uno de los roles requeridos.
 */
export function hasAnyRole(
  userRoles: readonly TalentOneRole[],
  requiredRoles: readonly TalentOneRole[],
): boolean {
  if (requiredRoles.length === 0) {
    return true;
  }

  return requiredRoles.some((role) => userRoles.includes(role));
}

/**
 * Verifica si el usuario posee todos los roles requeridos.
 */
export function hasAllRoles(
  userRoles: readonly TalentOneRole[],
  requiredRoles: readonly TalentOneRole[],
): boolean {
  return requiredRoles.every((role) => userRoles.includes(role));
}

/**
 * Prioridad de roles.
 * Se utiliza para determinar el rol principal del usuario.
 */
const ROLE_PRIORITY: readonly TalentOneRole[] = [
  TALENTONE_ROLES.SUPER_ADMIN,
  TALENTONE_ROLES.COMPANY_ADMIN,
  TALENTONE_ROLES.RECRUITER,
  TALENTONE_ROLES.COMPANY_USER,
  TALENTONE_ROLES.CANDIDATE,
];

/**
 * Obtiene el rol de mayor prioridad.
 */
export function getHighestRole(
  roles: readonly TalentOneRole[],
): TalentOneRole | null {
  for (const role of ROLE_PRIORITY) {
    if (roles.includes(role)) {
      return role;
    }
  }

  return null;
}
