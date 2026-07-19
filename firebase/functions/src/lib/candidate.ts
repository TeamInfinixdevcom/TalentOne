import { FieldValue, getFirestore } from 'firebase-admin/firestore';

import type { UserDocument } from '../types.js';

function shouldCreateCandidateProfile(user: UserDocument): boolean {
  return user.primaryContext === 'candidate' || user.roles.includes('CANDIDATE');
}

export async function ensureCandidateProfileShell(uid: string, user: UserDocument): Promise<Record<string, unknown> | null> {
  if (!shouldCreateCandidateProfile(user)) {
    return null;
  }

  const db = getFirestore();
  const ref = db.collection('candidateProfiles').doc(uid);
  const snapshot = await ref.get();

  if (snapshot.exists) {
    return snapshot.data() as Record<string, unknown>;
  }

  const shell = {
    uid,
    status: 'draft',
    visibility: 'private',
    completionPercentage: 0,
    completionState: 'empty',
    headline: null,
    location: null,
    summary: null,
    currentCVId: null,
    primaryCVPath: null,
    primaryCVUrl: null,
    lastPublishedAt: null,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };

  await ref.set(shell);
  return shell;
}
