export const CANDIDATE_PROFILE_STATUSES = [
  "draft",
  "in_progress",
  "in_review",
  "published",
  "archived",
] as const;

export type CandidateProfileStatus = (typeof CANDIDATE_PROFILE_STATUSES)[number];

export const CANDIDATE_VISIBILITIES = ["private", "public", "restricted"] as const;

export type CandidateVisibility = (typeof CANDIDATE_VISIBILITIES)[number];

export const CANDIDATE_COMPLETION_STATES = ["empty", "partial", "complete", "publishable"] as const;

export type CandidateCompletionState = (typeof CANDIDATE_COMPLETION_STATES)[number];

export const CANDIDATE_DOCUMENT_TYPES = ["cv", "cover_letter", "portfolio", "other"] as const;

export type CandidateDocumentType = (typeof CANDIDATE_DOCUMENT_TYPES)[number];

export const CANDIDATE_SKILL_LEVELS = ["beginner", "intermediate", "advanced", "expert"] as const;

export type CandidateSkillLevel = (typeof CANDIDATE_SKILL_LEVELS)[number];

export const CANDIDATE_EMPLOYMENT_TYPES = [
  "full_time",
  "part_time",
  "contract",
  "temporary",
  "internship",
  "freelance",
] as const;

export type CandidateEmploymentType = (typeof CANDIDATE_EMPLOYMENT_TYPES)[number];

export interface CandidateProfile {
  uid: string;
  status: CandidateProfileStatus;
  visibility: CandidateVisibility;
  completionPercentage: number;
  completionState: CandidateCompletionState;
  headline: string | null;
  location: string | null;
  summary: string | null;
  currentCVId: string | null;
  primaryCVPath: string | null;
  primaryCVUrl: string | null;
  lastPublishedAt: unknown | null;
  createdAt: unknown;
  updatedAt: unknown;
}

export function createCandidateProfileShell(uid: string): CandidateProfile {
  return {
    uid,
    status: "draft",
    visibility: "private",
    completionPercentage: 0,
    completionState: "empty",
    headline: null,
    location: null,
    summary: null,
    currentCVId: null,
    primaryCVPath: null,
    primaryCVUrl: null,
    lastPublishedAt: null,
    createdAt: null,
    updatedAt: null,
  };
}

export interface CandidateEducation {
  id?: string;
  schoolName: string;
  degree: string | null;
  fieldOfStudy: string | null;
  startDate: string | null;
  endDate: string | null;
  currentlyStudying: boolean;
  description: string | null;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface CandidateExperience {
  id?: string;
  companyName: string;
  title: string | null;
  employmentType: CandidateEmploymentType | null;
  location: string | null;
  startDate: string | null;
  endDate: string | null;
  currentlyWorking: boolean;
  summary: string | null;
  responsibilities: string[];
  createdAt: unknown;
  updatedAt: unknown;
}

export interface CandidateCertification {
  id?: string;
  name: string;
  issuer: string | null;
  issueDate: string | null;
  expirationDate: string | null;
  credentialId: string | null;
  credentialUrl: string | null;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface CandidateSkill {
  id?: string;
  name: string;
  level: CandidateSkillLevel | null;
  yearsOfExperience: number | null;
  verified: boolean;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface CandidateDocumentMetadata {
  id?: string;
  type: CandidateDocumentType;
  title: string;
  storagePath: string;
  downloadUrl: string | null;
  fileName: string;
  mimeType: string;
  fileSize: number;
  version: number;
  isCurrent: boolean;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface CandidateCompletionSnapshot {
  headline: string | null;
  location: string | null;
  summary: string | null;
  skillsCount: number;
  experienceCount: number;
  hasCurrentCv: boolean;
}
