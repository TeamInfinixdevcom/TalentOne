import { getAuth } from 'firebase-admin/auth';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import type { UserRecord } from 'firebase-admin/auth';

import type { UserDocument, TalentOneRole } from '../types.js';

const DEFAULT_ROLES: TalentOneRole[] = ['CANDIDATE'];

function providerIds(record: UserRecord): string[] {
  return record.providerData.map((provider: { providerId?: string | null }) => provider.providerId).filter(Boolean) as string[];
}

export function buildUserDocument(record: UserRecord, existing?: UserDocument | null): UserDocument {
  const now = FieldValue.serverTimestamp();

  return {
    uid: record.uid,
    email: record.email ?? null,
    displayName: record.displayName ?? null,
    photoURL: record.photoURL ?? null,
    phoneNumber: record.phoneNumber ?? null,
    emailVerified: record.emailVerified,
    status: record.disabled ? 'suspended' : record.emailVerified ? 'active' : 'pending',
    primaryContext: existing?.primaryContext ?? 'candidate',
    currentOrganizationId: existing?.currentOrganizationId ?? null,
    currentRole: existing?.currentRole ?? 'CANDIDATE',
    roles: existing?.roles?.length ? existing.roles : DEFAULT_ROLES,
    providers: providerIds(record),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    lastLoginAt: now,
    claimsSyncedAt: existing?.claimsSyncedAt ?? now,
    claimsVersion: (existing?.claimsVersion ?? 0) + 1,
  };
}

export async function upsertUserDocument(record: UserRecord): Promise<UserDocument> {
  const db = getFirestore();
  const ref = db.collection('users').doc(record.uid);
  const snapshot = await ref.get();
  const document = buildUserDocument(record, snapshot.exists ? (snapshot.data() as UserDocument) : null);

  await ref.set(document, { merge: true });
  return document;
}

export async function markUserDeleted(uid: string): Promise<void> {
  await getFirestore().collection('users').doc(uid).set(
    {
      status: 'deleted',
      updatedAt: FieldValue.serverTimestamp(),
      claimsVersion: FieldValue.increment(1),
    },
    { merge: true },
  );
}
