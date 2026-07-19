export function candidateProfilePath(uid: string): string {
  return `candidateProfiles/${uid}`;
}

export function candidateEducationPath(uid: string): string {
  return `${candidateProfilePath(uid)}/education`;
}

export function candidateExperiencePath(uid: string): string {
  return `${candidateProfilePath(uid)}/experience`;
}

export function candidateCertificationsPath(uid: string): string {
  return `${candidateProfilePath(uid)}/certifications`;
}

export function candidateSkillsPath(uid: string): string {
  return `${candidateProfilePath(uid)}/skills`;
}

export function candidateDocumentsPath(uid: string): string {
  return `${candidateProfilePath(uid)}/documents`;
}

export function candidateStoragePath(uid: string, fileName: string): string {
  return `candidate-cv/${uid}/${fileName}`;
}
