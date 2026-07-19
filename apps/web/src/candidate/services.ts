import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { auth } from "../lib/firebase/auth";
import { firestore } from "../lib/firebase/firestore";
import { storage } from "../lib/firebase/storage";

import {
  calculateCandidateCompletion,
  candidateCertificationsPath,
  candidateDocumentsPath,
  candidateEducationPath,
  candidateExperiencePath,
  candidateProfilePath,
  candidateSkillsPath,
  candidateStoragePath,
  createCandidateProfileShell,
  type CandidateCertification,
  type CandidateCompletionSnapshot,
  type CandidateDocumentMetadata,
  type CandidateDocumentType,
  type CandidateEducation,
  type CandidateExperience,
  type CandidateProfile,
  type CandidateSkill,
  type CandidateVisibility,
} from "@talentone/database";

import {
  assertCandidateModuleAccess,
  assertCandidateOwnershipOrAdmin,
  type CandidateAccessContext,
} from "./access";

export interface CandidateProfileUpdateInput {
  headline?: string | null;
  location?: string | null;
  summary?: string | null;
  visibility?: CandidateVisibility;
}

export type CandidateEducationInput = Omit<CandidateEducation, "createdAt" | "updatedAt">;
export type CandidateExperienceInput = Omit<CandidateExperience, "createdAt" | "updatedAt">;
export type CandidateCertificationInput = Omit<CandidateCertification, "createdAt" | "updatedAt">;
export type CandidateSkillInput = Omit<CandidateSkill, "createdAt" | "updatedAt">;

export interface CandidateFileUploadInput {
  file: File;
  title?: string;
  type?: CandidateDocumentType;
  isCurrent?: boolean;
}

function requireFirestore() {
  if (!firestore) {
    throw new Error("Firestore is not initialized.");
  }

  return firestore;
}

function requireStorage() {
  if (!storage) {
    throw new Error("Storage is not initialized.");
  }

  return storage;
}

function getCurrentUid(context: CandidateAccessContext): string {
  if (context.uid) {
    return context.uid;
  }

  if (auth?.currentUser?.uid) {
    return auth.currentUser.uid;
  }

  throw new Error("An authenticated user is required.");
}

function profileRef(uid: string) {
  return doc(requireFirestore(), candidateProfilePath(uid));
}

function sectionCollectionRef(uid: string, collectionPath: string) {
  return collection(requireFirestore(), collectionPath.startsWith("candidateProfiles/") ? collectionPath : `${candidateProfilePath(uid)}/${collectionPath}`);
}

function candidateCompletionSnapshot(
  profile: CandidateProfile,
  counts: Pick<CandidateCompletionSnapshot, "skillsCount" | "experienceCount" | "hasCurrentCv">,
): CandidateCompletionSnapshot {
  return {
    headline: profile.headline,
    location: profile.location,
    summary: profile.summary,
    ...counts,
  };
}

async function countDocuments(collectionPath: string): Promise<number> {
  const snapshots = await getDocs(collection(requireFirestore(), collectionPath));
  return snapshots.size;
}

async function loadCandidateProfile(uid: string): Promise<CandidateProfile | null> {
  const snapshot = await getDoc(profileRef(uid));
  return snapshot.exists() ? (snapshot.data() as CandidateProfile) : null;
}

async function refreshCandidateProgress(uid: string): Promise<CandidateProfile> {
  const currentProfile = (await loadCandidateProfile(uid)) ?? createCandidateProfileShell(uid);
  const currentCvQuery = query(
    collection(requireFirestore(), candidateDocumentsPath(uid)),
    where("type", "==", "cv"),
    where("isCurrent", "==", true),
    limit(1),
  );
  const [skillsCount, experienceCount, currentCvSnapshot] = await Promise.all([
    countDocuments(candidateSkillsPath(uid)),
    countDocuments(candidateExperiencePath(uid)),
    getDocs(currentCvQuery),
  ]);

  const completion = calculateCandidateCompletion(
    candidateCompletionSnapshot(currentProfile, {
      skillsCount,
      experienceCount,
      hasCurrentCv: !currentCvSnapshot.empty,
    }),
  );

  const nextProfile: CandidateProfile = {
    ...currentProfile,
    completionPercentage: completion.completionPercentage,
    completionState: completion.completionState,
    status:
      currentProfile.status === "archived" || currentProfile.status === "published"
        ? currentProfile.status
        : completion.completionState === "empty"
          ? "draft"
          : "in_progress",
    updatedAt: serverTimestamp(),
  };

  await setDoc(profileRef(uid), nextProfile, { merge: true });
  return nextProfile;
}

export async function ensureCandidateProfile(context: CandidateAccessContext, candidateUid?: string): Promise<CandidateProfile> {
  const uid = candidateUid ?? getCurrentUid(context);
  assertCandidateOwnershipOrAdmin(context, uid);

  const existing = await loadCandidateProfile(uid);
  if (existing) {
    return existing;
  }

  const shell = createCandidateProfileShell(uid);
  const profile: CandidateProfile = {
    ...shell,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(profileRef(uid), profile);
  return profile;
}

export async function updateCandidateProfile(
  context: CandidateAccessContext,
  candidateUid: string,
  input: CandidateProfileUpdateInput,
): Promise<CandidateProfile> {
  assertCandidateOwnershipOrAdmin(context, candidateUid);

  const existing = await ensureCandidateProfile(context, candidateUid);
  const nextProfile: CandidateProfile = {
    ...existing,
    headline: input.headline ?? existing.headline,
    location: input.location ?? existing.location,
    summary: input.summary ?? existing.summary,
    visibility: input.visibility ?? existing.visibility,
    updatedAt: serverTimestamp(),
  };

  await setDoc(profileRef(candidateUid), nextProfile, { merge: true });
  return refreshCandidateProgress(candidateUid);
}

async function upsertSectionDocument<T extends DocumentData>(
  context: CandidateAccessContext,
  candidateUid: string,
  collectionPath: string,
  input: T & { id?: string },
): Promise<string> {
  assertCandidateOwnershipOrAdmin(context, candidateUid);

  const db = requireFirestore();
  const targetCollection = collection(db, collectionPath);
  const documentId = input.id ?? doc(targetCollection).id;
  const targetRef = doc(targetCollection, documentId);
  const existing = await getDoc(targetRef);
  const createdAt = existing.exists() ? existing.data().createdAt ?? serverTimestamp() : serverTimestamp();

  await setDoc(
    targetRef,
    {
      ...input,
      id: documentId,
      createdAt,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  await refreshCandidateProgress(candidateUid);
  return documentId;
}

async function deleteSectionDocument(
  context: CandidateAccessContext,
  candidateUid: string,
  collectionPath: string,
  documentId: string,
): Promise<void> {
  assertCandidateOwnershipOrAdmin(context, candidateUid);
  await deleteDoc(doc(requireFirestore(), collectionPath, documentId));
  await refreshCandidateProgress(candidateUid);
}

export function getCandidateProfile(context: CandidateAccessContext, candidateUid: string): Promise<CandidateProfile | null> {
  assertCandidateOwnershipOrAdmin(context, candidateUid);
  return loadCandidateProfile(candidateUid);
}

export function saveCandidateEducation(
  context: CandidateAccessContext,
  candidateUid: string,
  input: CandidateEducationInput,
): Promise<string> {
  return upsertSectionDocument(context, candidateUid, candidateEducationPath(candidateUid), input);
}

export function removeCandidateEducation(
  context: CandidateAccessContext,
  candidateUid: string,
  educationId: string,
): Promise<void> {
  return deleteSectionDocument(context, candidateUid, candidateEducationPath(candidateUid), educationId);
}

export function saveCandidateExperience(
  context: CandidateAccessContext,
  candidateUid: string,
  input: CandidateExperienceInput,
): Promise<string> {
  return upsertSectionDocument(context, candidateUid, candidateExperiencePath(candidateUid), input);
}

export function removeCandidateExperience(
  context: CandidateAccessContext,
  candidateUid: string,
  experienceId: string,
): Promise<void> {
  return deleteSectionDocument(context, candidateUid, candidateExperiencePath(candidateUid), experienceId);
}

export function saveCandidateCertification(
  context: CandidateAccessContext,
  candidateUid: string,
  input: CandidateCertificationInput,
): Promise<string> {
  return upsertSectionDocument(context, candidateUid, candidateCertificationsPath(candidateUid), input);
}

export function removeCandidateCertification(
  context: CandidateAccessContext,
  candidateUid: string,
  certificationId: string,
): Promise<void> {
  return deleteSectionDocument(context, candidateUid, candidateCertificationsPath(candidateUid), certificationId);
}

export function saveCandidateSkill(
  context: CandidateAccessContext,
  candidateUid: string,
  input: CandidateSkillInput,
): Promise<string> {
  return upsertSectionDocument(context, candidateUid, candidateSkillsPath(candidateUid), input);
}

export function removeCandidateSkill(
  context: CandidateAccessContext,
  candidateUid: string,
  skillId: string,
): Promise<void> {
  return deleteSectionDocument(context, candidateUid, candidateSkillsPath(candidateUid), skillId);
}

function normalizeFileName(fileName: string): string {
  return fileName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function markCurrentDocument(
  candidateUid: string,
  documentId: string,
  document: CandidateDocumentMetadata,
): Promise<void> {
  const db = requireFirestore();
  const documentsCollection = collection(db, candidateDocumentsPath(candidateUid));
  const currentDocuments = await getDocs(query(documentsCollection, where("type", "==", "cv"), where("isCurrent", "==", true)));
  const batch = writeBatch(db);
  const targetRef = doc(db, candidateDocumentsPath(candidateUid), documentId);

  currentDocuments.forEach((snapshot: QueryDocumentSnapshot<DocumentData>) => {
    if (snapshot.id !== documentId) {
      batch.update(snapshot.ref, { isCurrent: false, updatedAt: serverTimestamp() });
    }
  });

  batch.update(targetRef, {
    isCurrent: true,
    updatedAt: serverTimestamp(),
  });
  batch.update(profileRef(candidateUid), {
    currentCVId: documentId,
    primaryCVPath: document.storagePath,
    primaryCVUrl: document.downloadUrl,
    updatedAt: serverTimestamp(),
  });

  await batch.commit();
}

export async function uploadCandidateDocument(
  context: CandidateAccessContext,
  candidateUid: string,
  input: CandidateFileUploadInput,
): Promise<CandidateDocumentMetadata> {
  assertCandidateOwnershipOrAdmin(context, candidateUid);

  const storageInstance = requireStorage();
  const db = requireFirestore();
  const normalizedFileName = normalizeFileName(input.file.name || input.title || "candidate-document");
  const storagePath = candidateStoragePath(candidateUid, normalizedFileName);
  const storageRef = ref(storageInstance, storagePath);
  const uploadResult = await uploadBytes(storageRef, input.file, {
    contentType: input.file.type,
    customMetadata: {
      candidateUid,
      documentType: input.type ?? "cv",
      title: input.title ?? input.file.name,
    },
  });

  const downloadUrl = await getDownloadURL(uploadResult.ref);
  const documentsCollection = collection(db, candidateDocumentsPath(candidateUid));
  const documentRef = doc(documentsCollection);
  const metadata: CandidateDocumentMetadata = {
    id: documentRef.id,
    type: input.type ?? "cv",
    title: input.title ?? input.file.name,
    storagePath,
    downloadUrl,
    fileName: input.file.name,
    mimeType: input.file.type,
    fileSize: input.file.size,
    version: 1,
    isCurrent: input.isCurrent ?? (input.type ?? "cv") === "cv",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(documentRef, metadata);

  if (metadata.isCurrent && metadata.type === "cv") {
    await markCurrentDocument(candidateUid, documentRef.id, metadata);
  } else {
    await refreshCandidateProgress(candidateUid);
  }

  return metadata;
}

export async function removeCandidateDocument(
  context: CandidateAccessContext,
  candidateUid: string,
  documentId: string,
): Promise<void> {
  assertCandidateOwnershipOrAdmin(context, candidateUid);

  const db = requireFirestore();
  const snapshot = await getDoc(doc(db, candidateDocumentsPath(candidateUid), documentId));
  if (!snapshot.exists()) {
    return;
  }

  const document = snapshot.data() as CandidateDocumentMetadata;
  await deleteDoc(snapshot.ref);

  if (document.storagePath) {
    await deleteObject(ref(requireStorage(), document.storagePath));
  }

  if (document.isCurrent && document.type === "cv") {
    await setDoc(profileRef(candidateUid), {
      currentCVId: null,
      primaryCVPath: null,
      primaryCVUrl: null,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  }

  await refreshCandidateProgress(candidateUid);
}
