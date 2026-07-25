  "use client";

  import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
  } from "react";

  import {
    onIdTokenChanged,
    type Auth,
    type User,
  } from "firebase/auth";

  import { auth as defaultAuth } from "../lib/firebase/auth";

  import type { TalentOneClaims } from "./claims";
  import { getRedirectPathForRoles } from "./redirects";

  import {
    initializeAuthPersistence,
    logout,
    refreshClaims,
    refreshSession,
    resolveClaimsForUser,
    resetPassword,
    sendVerificationEmail,
    signInWithEmailPassword,
    signInWithGoogle,
    signUpWithEmailPassword,
  } from "./services";

  import type {
    AuthState,
    EmailPasswordCredentials,
    SignUpWithEmailPasswordInput,
  } from "./state";

  import type { TalentOneRole } from "./roles";

  export interface AuthContextValue extends AuthState {
    signInWithEmailPassword(
      credentials: EmailPasswordCredentials,
    ): Promise<void>;

    signUpWithEmailPassword(
      input: SignUpWithEmailPasswordInput,
    ): Promise<void>;

    signInWithGoogle(): Promise<void>;

    logout(): Promise<void>;

    refreshSession(): Promise<void>;

    refreshClaims(): Promise<void>;

    resetPassword(email: string): Promise<void>;

    sendVerificationEmail(): Promise<void>;

    getRedirectPath(): string;
  }

  const AuthContext =
    createContext<AuthContextValue | null>(null);

  const INITIAL_STATE: AuthState = {
    user: null,
    claims: null,
    initialized: false,
    authenticated: false,
    loading: true,
  }

  export interface TalentOneAuthProviderProps {
    children: ReactNode;
    authInstance?: Auth | null;
  }

  export function TalentOneAuthProvider({
    children,
    authInstance = defaultAuth,
  }: TalentOneAuthProviderProps) {
    const auth = authInstance;

    const [state, setState] =
      useState<AuthState>(INITIAL_STATE);

    useEffect(() => {
      if (!auth) {
        setState({
          ...INITIAL_STATE,
          loading: false,
          initialized: true,
        });

        return;
      }

      let mounted = true;

      let unsubscribe = () => {};

      void initializeAuthPersistence(auth)
        .catch(console.error)
        .finally(() => {
          if (!mounted) {
            return;
          }

          unsubscribe = onIdTokenChanged(
            auth,
            async (user: User | null) => {
              if (!mounted) {
                return;
              }

              if (!user) {
                setState({
                  user: null,
                  claims: null,
                  authenticated: false,
                  initialized: true,
                  loading: false,
                });

                return;
              }

              try {
                const claims =
                  await resolveClaimsForUser(user);

                setState({
                  user,
                  claims,
                  authenticated: true,
                  initialized: true,
                  loading: false,
                });
              } catch (error) {
                console.error(error);

                setState({
                  user,
                  claims: null,
                  authenticated: true,
                  initialized: true,
                  loading: false,
                });
              }
            },
          );
        });

      return () => {
        mounted = false;
        unsubscribe();
      };
      }, [auth]);
    const value = useMemo<AuthContextValue>(() => ({
      ...state,

      async signInWithEmailPassword(credentials) {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await signInWithEmailPassword(auth, credentials);
      },

      async signUpWithEmailPassword(input) {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await signUpWithEmailPassword(auth, input);
      },

      async signInWithGoogle() {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await signInWithGoogle(auth);
      },

      async logout() {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await logout(auth);
      },

      async refreshSession() {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await refreshSession(auth);

        const claims = await refreshClaims(auth);

        setState((current) => ({
          ...current,
          claims,
        }));
      },

      async refreshClaims() {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        const claims = await refreshClaims(auth);

        setState((current) => ({
          ...current,
          claims,
        }));
      },

      async resetPassword(email) {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await resetPassword(auth, email);
      },

      async sendVerificationEmail() {
        if (!auth) {
          throw new Error("Firebase Auth is not initialized.");
        }

        await sendVerificationEmail(auth);
      },

      getRedirectPath() {
        return getRedirectPathForRoles(
          state.claims?.roles ?? [],
        );
      },
    }), [auth, state]);

    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }

  export function useTalentOneAuth(): AuthContextValue {
    const context = useContext(AuthContext);

    if (!context) {
      throw new Error(
        "useTalentOneAuth must be used within TalentOneAuthProvider.",
      );
    }

    return context;
  }

  export function useTalentOneAuthState(): AuthState {
    const {
      user,
      claims,
      authenticated,
      initialized,
      loading,
    } = useTalentOneAuth();

    return {
      user,
      claims,
      authenticated,
      initialized,
      loading,
    };
  }

  export function useTalentOneRole(): TalentOneRole | null {
    return (
      useTalentOneAuth().claims?.role ??
      null
    );
  }

  export function useTalentOneClaims(): TalentOneClaims | null {
    return useTalentOneAuth().claims;
  }

  export function useAuthenticatedUser(): User | null {
    return useTalentOneAuth().user;
  }
