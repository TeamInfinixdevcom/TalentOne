export const JOB_STATUSES = [
  "draft",
  "published",
  "paused",
  "closed",
  "archived",
] as const;

export type JobStatus = (typeof JOB_STATUSES)[number];

export const JOB_VISIBILITIES = ["public", "private"] as const;

export type JobVisibility = (typeof JOB_VISIBILITIES)[number];

export const JOB_MODALITIES = [
  "onsite",
  "hybrid",
  "remote",
] as const;

export type JobModality = (typeof JOB_MODALITIES)[number];

export const JOB_SENIORITIES = [
  "intern",
  "junior",
  "semi_senior",
  "senior",
  "lead",
] as const;

export type JobSeniority = (typeof JOB_SENIORITIES)[number];

export const JOB_EMPLOYMENT_TYPES = [
  "full_time",
  "part_time",
  "contract",
  "temporary",
  "internship",
  "freelance",
] as const;

export type JobEmploymentType = (typeof JOB_EMPLOYMENT_TYPES)[number];

export interface JobSalary {
  min?: number | null;
  max?: number | null;
  period?: "hourly" | "monthly" | "yearly" | null;
}

export interface Job {
  jobId: string;
  organizationId: string;
  recruiterId: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  benefits: string[];
  modality: JobModality;
  location: string | null;
  salary: JobSalary | null;
  currency: string | null;
  seniority: JobSeniority | null;
  employmentType: JobEmploymentType;
  status: JobStatus;
  visibility: JobVisibility;
  createdAt: unknown;
  updatedAt: unknown;
  publishedAt: unknown | null;
  closedAt: unknown | null;
}

export function createJobShell(
  jobId: string,
  organizationId: string,
  recruiterId: string,
): Job {
  return {
    jobId,
    organizationId,
    recruiterId,
    title: "",
    description: "",
    requirements: [],
    responsibilities: [],
    skills: [],
    benefits: [],
    modality: "remote",
    location: null,
    salary: null,
    currency: null,
    seniority: null,
    employmentType: "full_time",
    status: "draft",
    visibility: "private",
    createdAt: null,
    updatedAt: null,
    publishedAt: null,
    closedAt: null,
  };
}
