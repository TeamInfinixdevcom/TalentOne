export const COMPANY_ORGANIZATION_STATUSES = [
  "draft",
  "active",
  "suspended",
  "archived",
] as const;

export type CompanyOrganizationStatus =
  (typeof COMPANY_ORGANIZATION_STATUSES)[number];

export const COMPANY_MEMBER_STATUSES = [
  "invited",
  "active",
  "disabled",
] as const;

export type CompanyMemberStatus =
  (typeof COMPANY_MEMBER_STATUSES)[number];

export const COMPANY_MEMBER_ROLES = [
  "COMPANY_OWNER",
  "COMPANY_USER",
  "RECRUITER",
] as const;

export type CompanyMemberRole =
  (typeof COMPANY_MEMBER_ROLES)[number];

export interface CompanyOrganization {
  organizationId: string;
  status: CompanyOrganizationStatus;
  name: string | null;
  legalName: string | null;
  slug: string | null;
  createdByUid: string | null;
  createdAt: unknown;
  updatedAt: unknown;
}

export function createCompanyOrganizationShell(
  organizationId: string,
  createdByUid: string | null = null,
): CompanyOrganization {
  return {
    organizationId,
    status: "draft",
    name: null,
    legalName: null,
    slug: null,
    createdByUid,
    createdAt: null,
    updatedAt: null,
  };
}

export interface CompanyMember {
  uid: string;
  organizationId: string;
  role: CompanyMemberRole;
  status: CompanyMemberStatus;
  invitedByUid: string | null;
  joinedAt: unknown | null;
  createdAt: unknown;
  updatedAt: unknown;
}

export function createCompanyMemberShell(
  uid: string,
  organizationId: string,
  role: CompanyMemberRole,
): CompanyMember {
  return {
    uid,
    organizationId,
    role,
    status: "invited",
    invitedByUid: null,
    joinedAt: null,
    createdAt: null,
    updatedAt: null,
  };
}