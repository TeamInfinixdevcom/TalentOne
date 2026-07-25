/**
 * TalentOne Permissions
 * -------------------------------------------------------
 * Define todos los permisos disponibles y la relación
 * entre Roles -> Permisos.
 */

import {
  TALENTONE_ROLES,
  type TalentOneRole,
} from "./roles";

export const PERMISSIONS = {
  // Candidate
  CANDIDATE_READ: "candidate.read",
  CANDIDATE_UPDATE: "candidate.update",
  CANDIDATE_DELETE: "candidate.delete",
  CANDIDATE_UPLOAD_DOCUMENT: "candidate.upload_document",

  // Vacancies
  VACANCY_READ: "vacancy.read",
  VACANCY_CREATE: "vacancy.create",
  VACANCY_UPDATE: "vacancy.update",
  VACANCY_DELETE: "vacancy.delete",
  VACANCY_PUBLISH: "vacancy.publish",

  // Applications
  APPLICATION_READ: "application.read",
  APPLICATION_CREATE: "application.create",
  APPLICATION_UPDATE: "application.update",
  APPLICATION_DELETE: "application.delete",

  // Recruiters
  RECRUITER_READ: "recruiter.read",
  RECRUITER_CREATE: "recruiter.create",
  RECRUITER_UPDATE: "recruiter.update",
  RECRUITER_DELETE: "recruiter.delete",

  // Companies
  COMPANY_READ: "company.read",
  COMPANY_CREATE: "company.create",
  COMPANY_UPDATE: "company.update",
  COMPANY_DELETE: "company.delete",
  COMPANY_MANAGE_USERS: "company.manage_users",

  // Administration
  ADMIN_PANEL: "admin.panel",
  USERS_MANAGE: "users.manage",
  ROLES_MANAGE: "roles.manage",
  SETTINGS_MANAGE: "settings.manage",

  // Analytics
  ANALYTICS_VIEW: "analytics.view",

  // Notifications
  NOTIFICATIONS_SEND: "notifications.send",
} as const;

export type TalentOnePermission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const ROLE_PERMISSIONS: Record<
  TalentOneRole,
  readonly TalentOnePermission[]
> = {
  [TALENTONE_ROLES.SUPER_ADMIN]: Object.values(PERMISSIONS),

  [TALENTONE_ROLES.COMPANY_ADMIN]: [
    PERMISSIONS.COMPANY_READ,
    PERMISSIONS.COMPANY_UPDATE,
    PERMISSIONS.COMPANY_MANAGE_USERS,

    PERMISSIONS.VACANCY_READ,
    PERMISSIONS.VACANCY_CREATE,
    PERMISSIONS.VACANCY_UPDATE,
    PERMISSIONS.VACANCY_DELETE,
    PERMISSIONS.VACANCY_PUBLISH,

    PERMISSIONS.APPLICATION_READ,
    PERMISSIONS.APPLICATION_UPDATE,

    PERMISSIONS.RECRUITER_READ,
    PERMISSIONS.RECRUITER_CREATE,
    PERMISSIONS.RECRUITER_UPDATE,
    PERMISSIONS.RECRUITER_DELETE,

    PERMISSIONS.ANALYTICS_VIEW,
  ],

  [TALENTONE_ROLES.COMPANY_USER]: [
    PERMISSIONS.COMPANY_READ,

    PERMISSIONS.VACANCY_READ,

    PERMISSIONS.APPLICATION_READ,
    PERMISSIONS.APPLICATION_UPDATE,
  ],

  [TALENTONE_ROLES.RECRUITER]: [
    PERMISSIONS.CANDIDATE_READ,

    PERMISSIONS.APPLICATION_READ,
    PERMISSIONS.APPLICATION_UPDATE,

    PERMISSIONS.VACANCY_READ,

    PERMISSIONS.ANALYTICS_VIEW,
  ],

  [TALENTONE_ROLES.CANDIDATE]: [
    PERMISSIONS.CANDIDATE_READ,
    PERMISSIONS.CANDIDATE_UPDATE,
    PERMISSIONS.CANDIDATE_UPLOAD_DOCUMENT,

    PERMISSIONS.APPLICATION_CREATE,
    PERMISSIONS.APPLICATION_READ,
  ],
};

/**
 * Obtiene todos los permisos de una colección de roles.
 */
export function getPermissionsForRoles(
  roles: readonly TalentOneRole[],
): TalentOnePermission[] {
  const permissions = new Set<TalentOnePermission>();

  for (const role of roles) {
    const rolePermissions = ROLE_PERMISSIONS[role] ?? [];

    for (const permission of rolePermissions) {
      permissions.add(permission);
    }
  }

  return [...permissions];
}

/**
 * Verifica un permiso específico.
 */
export function hasPermission(
  permissions: readonly TalentOnePermission[],
  permission: TalentOnePermission,
): boolean {
  return permissions.includes(permission);
}

/**
 * Verifica si posee cualquiera de los permisos.
 */
export function hasAnyPermission(
  permissions: readonly TalentOnePermission[],
  requiredPermissions: readonly TalentOnePermission[],
): boolean {
  if (requiredPermissions.length === 0) {
    return true;
  }

  return requiredPermissions.some((permission) =>
    permissions.includes(permission),
  );
}

/**
 * Verifica si posee todos los permisos.
 */
export function hasAllPermissions(
  permissions: readonly TalentOnePermission[],
  requiredPermissions: readonly TalentOnePermission[],
): boolean {
  return requiredPermissions.every((permission) =>
    permissions.includes(permission),
  );
}
