import { FieldValue, getFirestore } from 'firebase-admin/firestore';

import type { UserDocument } from '../types.js';

function companyRoles(): readonly string[] {
  return ['COMPANY_OWNER', 'COMPANY_USER', 'RECRUITER'];
}

function normalizeRoles(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return typeof value === 'string' ? [value] : [];
  }

  return Array.from(new Set(value.filter((item): item is string => typeof item === 'string')));
}

function getPrimaryRole(roles: readonly string[]): string | null {
  return roles.find((role) => companyRoles().includes(role)) ?? null;
}

function shouldSyncCompany(user: UserDocument): boolean {
  return Boolean(
    user.currentOrganizationId &&
      (user.primaryContext === 'company' ||
        normalizeRoles(user.roles).some((role) => companyRoles().includes(role)) ||
        companyRoles().includes(user.currentRole ?? '')),
  );
}

function buildOrganizationDocument(uid: string, user: UserDocument): Record<string, unknown> {
  return {
    organizationId: user.currentOrganizationId,
    status: 'draft',
    name: null,
    legalName: null,
    slug: null,
    createdByUid: uid,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function buildMemberDocument(uid: string, user: UserDocument): Record<string, unknown> {
  const roles = normalizeRoles(user.roles);
  const role = user.currentRole ?? getPrimaryRole(roles) ?? 'COMPANY_OWNER';

  return {
    uid,
    organizationId: user.currentOrganizationId,
    role,
    status: user.emailVerified ? 'active' : 'invited',
    invitedByUid: null,
    joinedAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
}

export async function ensureCompanyShell(uid: string, user: UserDocument): Promise<void> {
  if (!shouldSyncCompany(user) || !user.currentOrganizationId) {
    return;
  }

  const db = getFirestore();
  const organizationRef = db.collection('organizations').doc(user.currentOrganizationId);
  const memberRef = organizationRef.collection('members').doc(uid);

  const [organizationSnapshot, memberSnapshot] = await Promise.all([
    organizationRef.get(),
    memberRef.get(),
  ]);

  if (!organizationSnapshot.exists) {
    await organizationRef.set(buildOrganizationDocument(uid, user));
  }

  if (!memberSnapshot.exists) {
    await memberRef.set(buildMemberDocument(uid, user));
  }
}