import type { CandidateCompletionSnapshot, CandidateCompletionState } from "./types";

export interface CandidateCompletionResult {
  completionPercentage: number;
  completionState: CandidateCompletionState;
}

export function calculateCandidateCompletion(snapshot: CandidateCompletionSnapshot): CandidateCompletionResult {
  const checks = [
    Boolean(snapshot.headline?.trim()),
    Boolean(snapshot.location?.trim()),
    snapshot.skillsCount > 0,
    snapshot.experienceCount > 0,
    snapshot.hasCurrentCv,
  ];

  const completed = checks.filter(Boolean).length;
  const completionPercentage = Math.round((completed / checks.length) * 100);

  let completionState: CandidateCompletionState = "partial";
  if (completed === 0) {
    completionState = "empty";
  } else if (completed === checks.length) {
    completionState = "publishable";
  } else if (completed >= checks.length - 1) {
    completionState = "complete";
  }

  return { completionPercentage, completionState };
}
