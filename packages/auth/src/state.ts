import type { User } from "firebase/auth";

import type { TalentOneClaims } from "./claims";
import type { TalentOneRole } from "./roles";

export interface AuthSessionState {
  user: User | null;
  claims: TalentOneClaims | null;
  roles: TalentOneRole[];
  role: TalentOneRole | null;
  isAuthenticated: boolean;
  isEmailVerified: boolean;
  loading: boolean;
  error: Error | null;
}

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface SignUpWithEmailPasswordInput extends EmailPasswordCredentials {
  displayName?: string;
}
