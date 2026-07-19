import { hasAnyRole, type TalentOneClaims } from "@talentone/auth";

export interface CandidateAccessContext {
  uid: string | null;
  claims: TalentOneClaims | null;
}

export function canAccessCandidateModule(context: CandidateAccessContext): boolean {
  if (!context.claims) {
    return false;
  }

  return (
    hasAnyRole(context.claims.roles, ["MASTER", "ADMIN"]) ||
    hasAnyRole(context.claims.roles, ["CANDIDATE"]) ||
    context.claims.role === "CANDIDATE"
  );
}

export function assertCandidateModuleAccess(context: CandidateAccessContext): void {
  if (!canAccessCandidateModule(context)) {
    throw new Error("Candidate access requires a candidate or platform admin role.");
  }
}

export function assertCandidateOwnershipOrAdmin(
  context: CandidateAccessContext,
  candidateUid: string,
): void {
  assertCandidateModuleAccess(context);

  const isAdmin =
    !!context.claims && hasAnyRole(context.claims.roles, ["MASTER", "ADMIN"]);
  const ownsProfile = context.uid === candidateUid;

  if (!isAdmin && !ownsProfile) {
    throw new Error("This action is limited to the owning candidate or a platform admin.");
  }
}
