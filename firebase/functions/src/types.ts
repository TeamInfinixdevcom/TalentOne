export const TALENTONE_ROLES = [
  'MASTER',
  'ADMIN',
  'COMPANY_OWNER',
  'COMPANY_USER',
  'RECRUITER',
  'CANDIDATE',
] as const;

export type TalentOneRole = (typeof TALENTONE_ROLES)[number];

export const PRIMARY_CONTEXTS = ['platform', 'company', 'candidate'] as const;

export type PrimaryContext = (typeof PRIMARY_CONTEXTS)[number];

export interface UserDocument {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  emailVerified: boolean;
  status: 'pending' | 'active' | 'suspended' | 'deleted';
  primaryContext: PrimaryContext | null;
  currentOrganizationId: string | null;
  currentRole: TalentOneRole | null;
  roles: TalentOneRole[];
  providers: string[];
  createdAt: unknown;
  updatedAt: unknown;
  lastLoginAt: unknown;
  claimsSyncedAt: unknown | null;
  claimsVersion: number;
}

export interface ClaimsPayload {
  role: TalentOneRole | null;
  roles: TalentOneRole[];
  primaryContext: PrimaryContext | null;
  currentOrganizationId: string | null;
  emailVerified: boolean;
  claimsVersion: number;
}
