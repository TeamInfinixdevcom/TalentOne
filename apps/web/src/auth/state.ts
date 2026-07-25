/**
 * TalentOne Authentication State
 * -------------------------------------------------------
 * Tipos compartidos para autenticación.
 */

import type { User } from "firebase/auth";

import type { TalentOneClaims } from "./claims";

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface SignUpWithEmailPasswordInput {
  email: string;
  password: string;
  displayName?: string;
}

export interface AuthState {
  /**
   * Usuario autenticado en Firebase.
   */
  user: User | null;

  /**
   * Claims normalizados.
   */
  claims: TalentOneClaims | null;

  /**
   * Indica si la sesión ya fue inicializada.
   */
  initialized: boolean;

  /**
   * Indica si existe un usuario autenticado.
   */
  authenticated: boolean;

  /**
   * Indica si se está cargando el estado.
   */
  loading: boolean;
}

export interface AuthContextValue extends AuthState {
  /**
   * Refresca los claims del usuario.
   */
  refreshClaims(): Promise<void>;

  /**
   * Cierra la sesión.
   */
  logout(): Promise<void>;
}

export const INITIAL_AUTH_STATE: AuthState = {
  user: null,
  claims: null,
  initialized: false,
  authenticated: false,
  loading: true,
};

/**
 * Construye un estado de autenticación consistente.
 */
export function createAuthState(
  user: User | null,
  claims: TalentOneClaims | null,
  initialized = true,
): AuthState {
  return {
    user,
    claims,
    initialized,
    authenticated: user !== null,
    loading: !initialized,
  };
}

/**
 * Reinicia completamente el estado.
 */
export function resetAuthState(): AuthState {
  return {
    ...INITIAL_AUTH_STATE,
  };
}
