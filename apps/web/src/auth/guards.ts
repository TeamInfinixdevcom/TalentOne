/**
 * TalentOne Authorization Guards
 * -------------------------------------------------------
 * Funciones reutilizables para validar acceso basado en
 * Roles y Permisos.
 */

import type { TalentOneClaims } from "./claims";
import {
  hasAllPermissions,
  hasAnyPermission,
  type TalentOnePermission,
} from "./permissions";
import {
  hasAllRoles,
  hasAnyRole,
  type TalentOneRole,
} from "./roles";

/**
 * Usuario autenticado.
 */
export function isAuthenticated(
  claims: TalentOneClaims | null | undefined,
): boolean {
  return claims !== null && claims.uid !== null;
}

/**
 * Usuario con email verificado.
 */
export function isVerified(
  claims: TalentOneClaims | null | undefined,
): boolean {
  return !!claims?.emailVerified;
}

/**
 * Verifica si posee un rol.
 */
export function canAccessRole(
  claims: TalentOneClaims,
  role: TalentOneRole,
): boolean {
  return hasAnyRole(claims.roles, [role]);
}

/**
 * Verifica si posee cualquiera de los roles.
 */
export function canAccessAnyRole(
  claims: TalentOneClaims,
  roles: readonly TalentOneRole[],
): boolean {
  return hasAnyRole(claims.roles, roles);
}

/**
 * Verifica si posee todos los roles.
 */
export function canAccessAllRoles(
  claims: TalentOneClaims,
  roles: readonly TalentOneRole[],
): boolean {
  return hasAllRoles(claims.roles, roles);
}

/**
 * Verifica un permiso.
 */
export function canAccessPermission(
  claims: TalentOneClaims,
  permission: TalentOnePermission,
): boolean {
  return hasAnyPermission(claims.permissions, [permission]);
}

/**
 * Verifica cualquiera de los permisos.
 */
export function canAccessAnyPermission(
  claims: TalentOneClaims,
  permissions: readonly TalentOnePermission[],
): boolean {
  return hasAnyPermission(
    claims.permissions,
    permissions,
  );
}

/**
 * Verifica todos los permisos.
 */
export function canAccessAllPermissions(
  claims: TalentOneClaims,
  permissions: readonly TalentOnePermission[],
): boolean {
  return hasAllPermissions(
    claims.permissions,
    permissions,
  );
}

/**
 * Super Administrador.
 */
export function isSuperAdmin(
  claims: TalentOneClaims,
): boolean {
  return canAccessRole(claims, "super_admin");
}

/**
 * Administrador de Empresa.
 */
export function isCompanyAdmin(
  claims: TalentOneClaims,
): boolean {
  return canAccessRole(claims, "company_admin");
}

/**
 * Reclutador.
 */
export function isRecruiter(
  claims: TalentOneClaims,
): boolean {
  return canAccessRole(claims, "recruiter");
}

/**
 * Candidato.
 */
export function isCandidate(
  claims: TalentOneClaims,
): boolean {
  return canAccessRole(claims, "candidate");
}

/**
 * Usuario de empresa.
 */
export function isCompanyUser(
  claims: TalentOneClaims,
): boolean {
  return canAccessRole(claims, "company_user");
}

/**
 * Valida organización.
 */
export function belongsToOrganization(
  claims: TalentOneClaims,
  organizationId: string,
): boolean {
  return (
    claims.currentOrganizationId === organizationId
  );
}

/**
 * Lanza excepción si no posee un rol.
 */
export function assertRole(
  claims: TalentOneClaims,
  roles: readonly TalentOneRole[],
): void {
  if (!canAccessAnyRole(claims, roles)) {
    throw new Error("Insufficient role permissions.");
  }
}

/**
 * Lanza excepción si no posee un permiso.
 */
export function assertPermission(
  claims: TalentOneClaims,
  permissions: readonly TalentOnePermission[],
): void {
  if (
    !canAccessAnyPermission(
      claims,
      permissions,
    )
  ) {
    throw new Error("Insufficient permissions.");
  }
}

/**
 * Método genérico de autorización.
 */
export function authorize(options: {
  claims: TalentOneClaims;
  roles?: readonly TalentOneRole[];
  permissions?: readonly TalentOnePermission[];
}): boolean {
  const {
    claims,
    roles = [],
    permissions = [],
  } = options;

  if (!isAuthenticated(claims)) {
    return false;
  }

  if (
    roles.length > 0 &&
    !canAccessAnyRole(claims, roles)
  ) {
    return false;
  }

  if (
    permissions.length > 0 &&
    !canAccessAnyPermission(
      claims,
      permissions,
    )
  ) {
    return false;
  }

  return true;
}
