import {
  JOB_EMPLOYMENT_TYPES,
  JOB_MODALITIES,
  JOB_SENIORITIES,
  JOB_STATUSES,
  JOB_VISIBILITIES,
  type JobEmploymentType,
  type JobModality,
  type JobSeniority,
  type JobStatus,
  type JobVisibility,
} from "./types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === "string";
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isNullableNumber(value: unknown): value is number | null {
  return value === null || (typeof value === "number" && Number.isFinite(value));
}

export function isJobStatus(value: unknown): value is JobStatus {
  return typeof value === "string" && JOB_STATUSES.includes(value as JobStatus);
}

export function isJobVisibility(value: unknown): value is JobVisibility {
  return typeof value === "string" && JOB_VISIBILITIES.includes(value as JobVisibility);
}

export function isJobModality(value: unknown): value is JobModality {
  return typeof value === "string" && JOB_MODALITIES.includes(value as JobModality);
}

export function isJobSeniority(value: unknown): value is JobSeniority {
  return value === null || (typeof value === "string" && JOB_SENIORITIES.includes(value as JobSeniority));
}

export function isJobEmploymentType(
  value: unknown,
): value is JobEmploymentType {
  return typeof value === "string" && JOB_EMPLOYMENT_TYPES.includes(value as JobEmploymentType);
}

export function isJobData(data: Record<string, unknown>): boolean {
  return (
    isNonEmptyString(data.jobId) &&
    isNonEmptyString(data.organizationId) &&
    isNonEmptyString(data.recruiterId) &&
    isNonEmptyString(data.title) &&
    isNonEmptyString(data.description) &&
    isStringArray(data.requirements) &&
    isStringArray(data.responsibilities) &&
    isStringArray(data.skills) &&
    isStringArray(data.benefits) &&
    isJobModality(data.modality) &&
    isNullableString(data.location) &&
    (data.salary == null || typeof data.salary === "object") &&
    isNullableString(data.currency) &&
    isJobSeniority(data.seniority) &&
    isJobEmploymentType(data.employmentType) &&
    isJobStatus(data.status) &&
    isJobVisibility(data.visibility) &&
    data.publishedAt !== undefined &&
    data.closedAt !== undefined
  );
}

export function normalizeJobCurrency(value: string): string {
  return value.trim().toUpperCase();
}

export function isJobSalary(value: unknown): value is {
  min?: number | null;
  max?: number | null;
  period?: "hourly" | "monthly" | "yearly" | null;
} {
  if (value === null) {
    return true;
  }

  if (!value || typeof value !== "object") {
    return false;
  }

  const salary = value as Record<string, unknown>;
  return (
    isNullableNumber(salary.min) &&
    isNullableNumber(salary.max) &&
    (salary.period === null ||
      salary.period === "hourly" ||
      salary.period === "monthly" ||
      salary.period === "yearly")
  );
}
