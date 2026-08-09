export function companyOrganizationPath(organizationId: string): string {
  return `organizations/${organizationId}`;
}

export function companyOrganizationMembersPath(
  organizationId: string,
): string {
  return `${companyOrganizationPath(organizationId)}/members`;
}

export function companyOrganizationMemberPath(
  organizationId: string,
  uid: string,
): string {
  return `${companyOrganizationMembersPath(organizationId)}/${uid}`;
}