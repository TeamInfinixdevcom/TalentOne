import { logger } from 'firebase-functions';
import { user as authUser } from 'firebase-functions/v1/auth';
import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';

import { loadUserDocument, syncCustomClaims } from './lib/claims.js';
import { ensureCandidateProfileShell } from './lib/candidate.js';
import { markUserDeleted, upsertUserDocument } from './lib/user-sync.js';

initializeApp();

export const syncUserOnCreate = authUser().onCreate(async (record) => {
  if (!record) {
    return;
  }

  const syncedUser = await upsertUserDocument(record);
  await syncCustomClaims(record.uid, syncedUser);
  await ensureCandidateProfileShell(record.uid, syncedUser);
});

export const syncUserOnDelete = authUser().onDelete(async (record) => {
  if (!record) {
    return;
  }

  await markUserDeleted(record.uid);
});

export const syncClaimsOnUserWrite = onDocumentWritten('users/{uid}', async (event) => {
  const uid = event.params.uid as string;
  const after = event.data?.after;

  if (!after?.exists) {
    return;
  }

  const user = after.data() as Awaited<ReturnType<typeof loadUserDocument>>;
  if (!user) {
    logger.warn('No user document found for claim sync', { uid });
    return;
  }

  await syncCustomClaims(uid, user);
  await ensureCandidateProfileShell(uid, user);
});
