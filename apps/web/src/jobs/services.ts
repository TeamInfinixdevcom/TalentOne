import { serverTimestamp } from "firebase/firestore";

import { auth } from "../lib/firebase/auth";

import {
  createJobRecord,
  deleteJobRecord,
  getJobById,
  listJobsByOrganization,
  listPublishedJobs,
  updateJobRecord,
} from "./repository";

import {
  assertJobManagementAccess,
  canExposePublicJob,
  canManageJobInOrganization,
  canReadJob,
  type JobAccessContext,
} from "./access";

import {
  createJobShell,
  isJobData,
  normalizeJobCurrency,
  type Job,
  type JobEmploymentType,
  type JobModality,
  type JobSalary,
  type JobSeniority,
  type JobStatus,
  type JobVisibility,
} from "@talentone/database";

export interface CreateJobInput {
  organizationId: string;
  recruiterId?: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  benefits: string[];
  modality: JobModality;
  location?: string | null;
  salary?: JobSalary | null;
  currency?: string | null;
  seniority?: JobSeniority | null;
  employmentType: JobEmploymentType;
  visibility?: JobVisibility;
}

export interface UpdateJobInput {
  title?: string;
  description?: string;
  requirements?: string[];
  responsibilities?: string[];
  skills?: string[];
  benefits?: string[];
  modality?: JobModality;
  location?: string | null;
  salary?: JobSalary | null;
  currency?: string | null;
  seniority?: JobSeniority | null;
  employmentType?: JobEmploymentType;
  visibility?: JobVisibility;
}

function getCurrentUid(context: JobAccessContext): string {
  if (context.uid) {
    return context.uid;
  }

  if (auth?.currentUser?.uid) {
    return auth.currentUser.uid;
  }

  throw new Error("An authenticated user is required.");
}

function normalizeStringArray(values: string[]): string[] {
  return Array.from(new Set(values.map((value) => value.trim()).filter((value) => value.length > 0)));
}

function ensureJobShape(job: Job): Job {
  if (!isJobData(job as unknown as Record<string, unknown>)) {
    throw new Error("Invalid job payload.");
  }

  return job;
}

export async function getJob(context: JobAccessContext, jobId: string): Promise<Job | null> {
  const job = await getJobById(jobId);
  if (!job) {
    return null;
  }

  if (!canReadJob(context, job)) {
    throw new Error("Job access denied.");
  }

  return job;
}

export async function listOrganizationJobs(
  context: JobAccessContext,
  organizationId: string,
): Promise<Job[]> {
  if (!canManageJobInOrganization(context, organizationId)) {
    throw new Error("Job access denied.");
  }

  return listJobsByOrganization(organizationId);
}

export async function listPublicJobs(): Promise<Job[]> {
  return listPublishedJobs();
}

export async function createJob(
  context: JobAccessContext,
  input: CreateJobInput,
): Promise<Job> {
  if (!canManageJobInOrganization(context, input.organizationId)) {
    throw new Error("Job creation denied.");
  }

  const jobId = crypto.randomUUID();
  const recruiterId = input.recruiterId ?? getCurrentUid(context);
  const currency = input.currency ? normalizeJobCurrency(input.currency) : null;
  const job = ensureJobShape({
    ...createJobShell(jobId, input.organizationId, recruiterId),
    title: input.title,
    description: input.description,
    requirements: normalizeStringArray(input.requirements),
    responsibilities: normalizeStringArray(input.responsibilities),
    skills: normalizeStringArray(input.skills),
    benefits: normalizeStringArray(input.benefits),
    modality: input.modality,
    location: input.location ?? null,
    salary: input.salary ?? null,
    currency,
    seniority: input.seniority ?? null,
    employmentType: input.employmentType,
    status: "draft",
    visibility: input.visibility ?? "private",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    publishedAt: null,
    closedAt: null,
  });

  await createJobRecord(job);
  return job;
}

export async function updateJob(
  context: JobAccessContext,
  jobId: string,
  input: UpdateJobInput,
): Promise<Job> {
  const existing = await getJobById(jobId);
  if (!existing) {
    throw new Error("Job not found.");
  }

  if (!canManageJobInOrganization(context, existing.organizationId)) {
    throw new Error("Job update denied.");
  }

  if (existing.status === "closed" || existing.status === "archived") {
    throw new Error("Closed or archived jobs cannot be edited.");
  }

  const nextJob: Job = ensureJobShape({
    ...existing,
    title: input.title ?? existing.title,
    description: input.description ?? existing.description,
    requirements: input.requirements ? normalizeStringArray(input.requirements) : existing.requirements,
    responsibilities: input.responsibilities ? normalizeStringArray(input.responsibilities) : existing.responsibilities,
    skills: input.skills ? normalizeStringArray(input.skills) : existing.skills,
    benefits: input.benefits ? normalizeStringArray(input.benefits) : existing.benefits,
    modality: input.modality ?? existing.modality,
    location: input.location ?? existing.location,
    salary: input.salary ?? existing.salary,
    currency: input.currency ? normalizeJobCurrency(input.currency) : existing.currency,
    seniority: input.seniority ?? existing.seniority,
    employmentType: input.employmentType ?? existing.employmentType,
    visibility: input.visibility ?? existing.visibility,
    updatedAt: serverTimestamp(),
  });

  await updateJobRecord(jobId, {
    title: nextJob.title,
    description: nextJob.description,
    requirements: nextJob.requirements,
    responsibilities: nextJob.responsibilities,
    skills: nextJob.skills,
    benefits: nextJob.benefits,
    modality: nextJob.modality,
    location: nextJob.location,
    salary: nextJob.salary,
    currency: nextJob.currency,
    seniority: nextJob.seniority,
    employmentType: nextJob.employmentType,
    visibility: nextJob.visibility,
    updatedAt: nextJob.updatedAt,
  });

  return nextJob;
}

export async function publishJob(
  context: JobAccessContext,
  jobId: string,
): Promise<Job> {
  const existing = await getJobById(jobId);
  if (!existing) {
    throw new Error("Job not found.");
  }

  if (!canManageJobInOrganization(context, existing.organizationId)) {
    throw new Error("Job publish denied.");
  }

  const nextJob: Job = {
    ...existing,
    status: "published",
    visibility: existing.visibility === "private" ? "public" : existing.visibility,
    publishedAt: existing.publishedAt ?? serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await updateJobRecord(jobId, {
    status: nextJob.status,
    visibility: nextJob.visibility,
    publishedAt: nextJob.publishedAt,
    updatedAt: nextJob.updatedAt,
  });

  return nextJob;
}

export async function pauseJob(
  context: JobAccessContext,
  jobId: string,
): Promise<Job> {
  const existing = await getJobById(jobId);
  if (!existing) {
    throw new Error("Job not found.");
  }

  if (!canManageJobInOrganization(context, existing.organizationId)) {
    throw new Error("Job pause denied.");
  }

  const nextJob: Job = {
    ...existing,
    status: "paused",
    updatedAt: serverTimestamp(),
  };

  await updateJobRecord(jobId, { status: nextJob.status, updatedAt: nextJob.updatedAt });
  return nextJob;
}

export async function closeJob(
  context: JobAccessContext,
  jobId: string,
): Promise<Job> {
  const existing = await getJobById(jobId);
  if (!existing) {
    throw new Error("Job not found.");
  }

  if (!canManageJobInOrganization(context, existing.organizationId)) {
    throw new Error("Job close denied.");
  }

  const nextJob: Job = {
    ...existing,
    status: "closed",
    closedAt: existing.closedAt ?? serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await updateJobRecord(jobId, {
    status: nextJob.status,
    closedAt: nextJob.closedAt,
    updatedAt: nextJob.updatedAt,
  });

  return nextJob;
}

export async function archiveJob(
  context: JobAccessContext,
  jobId: string,
): Promise<Job> {
  const existing = await getJobById(jobId);
  if (!existing) {
    throw new Error("Job not found.");
  }

  if (!canManageJobInOrganization(context, existing.organizationId)) {
    throw new Error("Job archive denied.");
  }

  const nextJob: Job = {
    ...existing,
    status: "archived",
    updatedAt: serverTimestamp(),
  };

  await updateJobRecord(jobId, { status: nextJob.status, updatedAt: nextJob.updatedAt });
  return nextJob;
}

export async function removeJob(
  context: JobAccessContext,
  jobId: string,
): Promise<void> {
  const existing = await getJobById(jobId);
  if (!existing) {
    return;
  }

  if (!canManageJobInOrganization(context, existing.organizationId)) {
    throw new Error("Job delete denied.");
  }

  await deleteJobRecord(jobId);
}

export function isPublicJob(job: Pick<Job, "status" | "visibility">): boolean {
  return canExposePublicJob(job);
}
