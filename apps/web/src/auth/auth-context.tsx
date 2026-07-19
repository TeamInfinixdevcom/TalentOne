"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { onIdTokenChanged, type Auth } from "firebase/auth";

import { auth as defaultAuth } from "../lib/firebase/auth";
import {
  getRedirectPathForRoles,
  initializeAuthPersistence,
  logout as signOut,
  refreshSession as refreshAuthSession,
  resolveClaimsForUser,
  resetPassword,
  sendVerificationEmail,
  signInWithEmailPassword,
  signInWithGoogle,
  signUpWithEmailPassword,
  type AuthSessionState,
  type EmailPasswordCredentials,
  type SignUpWithEmailPasswordInput,
  type TalentOneClaims,
  type TalentOneRole,
} from "@talentone/auth";

type AuthContextValue = AuthSessionState & {
  claims: TalentOneClaims | null;
  signInWithEmailPassword: (credentials: EmailPasswordCredentials) => Promise<void>;
  signUpWithEmailPassword: (input: SignUpWithEmailPasswordInput) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
  getRedirectPath: () => string;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function emptyState(): AuthSessionState {
  return {
    user: null,
    claims: null,
    roles: [],
    role: null,
    isAuthenticated: false,
    isEmailVerified: false,
    loading: true,
    error: null,
  };
}

export interface TalentOneAuthProviderProps {
  children: ReactNode;
  authInstance?: Auth | null;
}

export function TalentOneAuthProvider({
  children,
  authInstance = defaultAuth,
}: TalentOneAuthProviderProps) {
  const [state, setState] = useState<AuthSessionState>(emptyState);
  const activeAuth = authInstance;

  useEffect(() => {
    if (!activeAuth) {
      setState((current) => ({ ...current, loading: false }));
      return;
    }

    let mounted = true;
    let unsubscribe = () => {};

    void initializeAuthPersistence(activeAuth)
      .catch((error: unknown) => {
        if (!mounted) {
          return;
        }

        setState((current) => ({
          ...current,
          error: error instanceof Error ? error : new Error("Failed to initialize auth persistence."),
        }));
      })
      .finally(() => {
        if (!mounted) {
          return;
        }

        unsubscribe = onIdTokenChanged(activeAuth, async (user) => {
          if (!mounted) {
            return;
          }

          if (!user) {
            setState({
              user: null,
              claims: null,
              roles: [],
              role: null,
              isAuthenticated: false,
              isEmailVerified: false,
              loading: false,
              error: null,
            });
            return;
          }

          try {
            const claims = await resolveClaimsForUser(user);
            if (!mounted) {
              return;
            }

            setState({
              user,
              claims,
              roles: claims.roles,
              role: claims.role,
              isAuthenticated: true,
              isEmailVerified: Boolean(user.emailVerified || claims.emailVerified),
              loading: false,
              error: null,
            });
          } catch (error: unknown) {
            if (!mounted) {
              return;
            }

            setState({
              user,
              claims: null,
              roles: [],
              role: null,
              isAuthenticated: true,
              isEmailVerified: Boolean(user.emailVerified),
              loading: false,
              error: error instanceof Error ? error : new Error("Failed to resolve auth claims."),
            });
          }
        });
      });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [activeAuth]);

  const value: AuthContextValue = {
    ...state,
    signInWithEmailPassword: async (credentials) => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await signInWithEmailPassword(activeAuth, credentials);
    },
    signUpWithEmailPassword: async (input) => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await signUpWithEmailPassword(activeAuth, input);
    },
    signInWithGoogle: async () => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await signInWithGoogle(activeAuth);
    },
    resetPassword: async (email) => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await resetPassword(activeAuth, email);
    },
    sendVerificationEmail: async () => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await sendVerificationEmail(activeAuth);
    },
    logout: async () => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await signOut(activeAuth);
    },
    refreshSession: async () => {
      if (!activeAuth) {
        throw new Error("Firebase Auth is not initialized.");
      }

      await refreshAuthSession(activeAuth);
    },
    getRedirectPath: () => getRedirectPathForRoles(state.roles),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useTalentOneAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useTalentOneAuth must be used inside TalentOneAuthProvider.");
  }

  return context;
}

export function useTalentOneAuthState(): AuthSessionState {
  const context = useTalentOneAuth();
  return {
    user: context.user,
    claims: context.claims,
    roles: context.roles,
    role: context.role,
    isAuthenticated: context.isAuthenticated,
    isEmailVerified: context.isEmailVerified,
    loading: context.loading,
    error: context.error,
  };
}

export function useTalentOneRole(): TalentOneRole | null {
  return useTalentOneAuth().role;
}
