import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

import type { ClaimsPayload, TalentOneRole, UserDocument } from '../types.js';

function isTalentOneRole(value: unknown): value is TalentOneRole {
  return typeof value === 'string' && ['MASTER', 'ADMIN', 'COMPANY_OWNER', 'COMPANY_USER', 'RECRUITER', 'CANDIDATE'].includes(value);
}

function normalizeRoles(value: unknown): TalentOneRole[] {
  if (Array.isArray(value)) {
    return Array.from(new Set(value.filter(isTalentOneRole)));
  }

  if (isTalentOneRole(value)) {
    return [value];
  }

  return [];
}

function getPrimaryRole(roles: readonly TalentOneRole[]): TalentOneRole | null {
  const priority: TalentOneRole[] = ['MASTER', 'ADMIN', 'COMPANY_OWNER', 'RECRUITER', 'COMPANY_USER', 'CANDIDATE'];
  return priority.find((role) => roles.includes(role)) ?? null;
}

export function buildClaimsFromUserDocument(user: UserDocument): ClaimsPayload {
  const roles = normalizeRoles(user.roles);
  return {
    role: user.currentRole ?? getPrimaryRole(roles),
    roles,
    primaryContext: user.primaryContext,
    currentOrganizationId: user.currentOrganizationId,
    emailVerified: user.emailVerified,
    claimsVersion: user.claimsVersion,
  };
}

export async function syncCustomClaims(uid: string, user: UserDocument): Promise<void> {
  const auth = getAuth();
  await auth.setCustomUserClaims(uid, buildClaimsFromUserDocument(user));
}

export async function loadUserDocument(uid: string): Promise<UserDocument | null> {
  const snapshot = await getFirestore().collection('users').doc(uid).get();
  return snapshot.exists ? (snapshot.data() as UserDocument) : null;
}
