import {
  COMPANY_MEMBER_ROLES,
  COMPANY_MEMBER_STATUSES,
  COMPANY_ORGANIZATION_STATUSES,
  type CompanyMemberRole,
  type CompanyMemberStatus,
  type CompanyOrganizationStatus,
} from "./types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === "string";
}

export function normalizeCompanySlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function isCompanyOrganizationStatus(
  value: unknown,
): value is CompanyOrganizationStatus {
  return (
    typeof value === "string" &&
    COMPANY_ORGANIZATION_STATUSES.includes(
      value as CompanyOrganizationStatus,
    )
  );
}

export function isCompanyMemberStatus(
  value: unknown,
): value is CompanyMemberStatus {
  return (
    typeof value === "string" &&
    COMPANY_MEMBER_STATUSES.includes(value as CompanyMemberStatus)
  );
}

export function isCompanyMemberRole(
  value: unknown,
): value is CompanyMemberRole {
  return (
    typeof value === "string" &&
    COMPANY_MEMBER_ROLES.includes(value as CompanyMemberRole)
  );
}

export function isCompanyOrganizationData(
  data: Record<string, unknown>,
): boolean {
  return (
    isNonEmptyString(data.organizationId) &&
    isCompanyOrganizationStatus(data.status) &&
    isNullableString(data.name) &&
    isNullableString(data.legalName) &&
    isNullableString(data.slug) &&
    isNullableString(data.createdByUid)
  );
}

export function isCompanyMemberData(
  data: Record<string, unknown>,
): boolean {
  return (
    isNonEmptyString(data.uid) &&
    isNonEmptyString(data.organizationId) &&
    isCompanyMemberRole(data.role) &&
    isCompanyMemberStatus(data.status) &&
    isNullableString(data.invitedByUid)
  );
}