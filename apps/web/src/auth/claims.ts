/**
 * TalentOne Claims
 * -------------------------------------------------------
 * Normalización de Firebase Custom Claims.
 */

import type { TalentOnePermission } from "./permissions";
import type { TalentOneRole } from "./roles";

export interface TalentOneClaims {
  uid: string | null;
  email: string | null;
  emailVerified: boolean;

  /**
   * Rol principal del usuario.
   */
  role: TalentOneRole | null;

  /**
   * Todos los roles asignados.
   */
  roles: TalentOneRole[];

  /**
   * Contexto principal del usuario.
   */
  primaryContext: string | null;

  /**
   * Organización activa.
   */
  currentOrganizationId: string | null;

  /**
   * Permisos efectivos.
   */
  permissions: TalentOnePermission[];
}

function toClaimString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value
    : null;
}

function toBoolean(value: unknown): boolean {
  return value === true;
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is string =>
      typeof item === "string" && item.trim().length > 0,
  );
}

/**
 * Convierte los Firebase Custom Claims a un objeto tipado.
 */
export function normalizeClaims(
  claims: Record<string, unknown>,
): TalentOneClaims {
  const role = toClaimString(claims.role) as TalentOneRole | null;

  const roles = toStringArray(
    claims.roles,
  ) as TalentOneRole[];

  const permissions = toStringArray(
    claims.permissions,
  ) as TalentOnePermission[];

  return {
    uid: toClaimString(claims.uid),
    email: toClaimString(claims.email),
    emailVerified: toBoolean(claims.email_verified),

    role,

    roles:
      roles.length > 0
        ? roles
        : role
          ? [role]
          : [],

    primaryContext: toClaimString(
      claims.primaryContext,
    ),

    currentOrganizationId: toClaimString(
      claims.currentOrganizationId,
    ),

    permissions,
  };
}
