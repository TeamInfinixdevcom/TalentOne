import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
  type Firestore,
} from "firebase/firestore";

import { firestore } from "../lib/firebase/firestore";

import { jobPath, jobsCollectionPath, type Job } from "@talentone/database";

function requireFirestore(): Firestore {
  if (!firestore) {
    throw new Error("Firestore is not initialized.");
  }

  return firestore;
}

function jobRef(jobId: string) {
  return doc(requireFirestore(), jobPath(jobId));
}

function jobsCollectionRef() {
  return collection(requireFirestore(), jobsCollectionPath());
}

export async function getJobById(jobId: string): Promise<Job | null> {
  const snapshot = await getDoc(jobRef(jobId));
  return snapshot.exists() ? (snapshot.data() as Job) : null;
}

export async function listJobsByOrganization(organizationId: string): Promise<Job[]> {
  const snapshots = await getDocs(
    query(
      jobsCollectionRef(),
      where("organizationId", "==", organizationId),
      orderBy("updatedAt", "desc"),
    ),
  );

  return snapshots.docs.map((snapshot) => snapshot.data() as Job);
}

export async function listPublishedJobs(): Promise<Job[]> {
  const snapshots = await getDocs(
    query(
      jobsCollectionRef(),
      where("status", "==", "published"),
      where("visibility", "==", "public"),
      orderBy("publishedAt", "desc"),
    ),
  );

  return snapshots.docs.map((snapshot) => snapshot.data() as Job);
}

export async function createJobRecord(job: Job): Promise<void> {
  await setDoc(jobRef(job.jobId), job);
}

export async function updateJobRecord(
  jobId: string,
  payload: Partial<Job>,
): Promise<void> {
  await updateDoc(jobRef(jobId), payload as Record<string, unknown>);
}

export async function deleteJobRecord(jobId: string): Promise<void> {
  await deleteDoc(jobRef(jobId));
}
