import { getPrimaryRole, normalizeRoles, type TalentOneRole } from "./roles";

export type PrimaryContext = "platform" | "company" | "candidate";

export interface TalentOneClaims {
  role: TalentOneRole | null;
  roles: TalentOneRole[];
  primaryContext: PrimaryContext | null;
  currentOrganizationId: string | null;
  emailVerified: boolean | null;
  claimsVersion: number | null;
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function asBoolean(value: unknown): boolean | null {
  return typeof value === "boolean" ? value : null;
}

export function normalizeClaims(rawClaims: Record<string, unknown> | null | undefined): TalentOneClaims {
  const roles = normalizeRoles(rawClaims?.roles ?? rawClaims?.role);
  const role = getPrimaryRole(roles);
  const primaryContextValue = asString(rawClaims?.primaryContext);

  return {
    role,
    roles,
    primaryContext:
      primaryContextValue === "platform" ||
      primaryContextValue === "company" ||
      primaryContextValue === "candidate"
        ? primaryContextValue
        : null,
    currentOrganizationId: asString(rawClaims?.currentOrganizationId ?? rawClaims?.organizationId),
    emailVerified: asBoolean(rawClaims?.emailVerified),
    claimsVersion:
      typeof rawClaims?.claimsVersion === "number" && Number.isFinite(rawClaims.claimsVersion)
        ? rawClaims.claimsVersion
        : null,
  };
}
