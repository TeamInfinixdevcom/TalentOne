/**
 * TalentOne Authentication Services
 * -------------------------------------------------------
 * Servicios reutilizables para autenticación con Firebase.
 */

import {
  GoogleAuthProvider,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type Auth,
  type User,
} from "firebase/auth";

import {
  normalizeClaims,
  type TalentOneClaims,
} from "./claims";

import { getRedirectPathForRoles } from "./redirects";

import type {
  EmailPasswordCredentials,
  SignUpWithEmailPasswordInput,
} from "./state";

/**
 * Espera una cantidad de milisegundos.
 */
function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

/**
 * Configura la persistencia local.
 */
async function ensureBrowserPersistence(
  auth: Auth,
): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  await setPersistence(
    auth,
    browserLocalPersistence,
  );
}

/**
 * Inicializa la persistencia.
 */
export async function initializeAuthPersistence(
  auth: Auth,
): Promise<void> {
  await ensureBrowserPersistence(auth);
}

/**
 * Login con Email y Password.
 */
export async function signInWithEmailPassword(
  auth: Auth,
  credentials: EmailPasswordCredentials,
): Promise<User> {
  await ensureBrowserPersistence(auth);

  const result =
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    );

  return result.user;
}

/**
 * Registro con Email y Password.
 */
export async function signUpWithEmailPassword(
  auth: Auth,
  input: SignUpWithEmailPasswordInput,
): Promise<User> {
  await ensureBrowserPersistence(auth);

  const result =
    await createUserWithEmailAndPassword(
      auth,
      input.email,
      input.password,
    );

  if (input.displayName) {
    await updateProfile(result.user, {
      displayName: input.displayName,
    });
  }

  await sendEmailVerification(result.user);

  return result.user;
}

/**
 * Login con Google.
 */
export async function signInWithGoogle(
  auth: Auth,
): Promise<User> {
  await ensureBrowserPersistence(auth);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  const result = await signInWithPopup(
    auth,
    provider,
  );

  return result.user;
}

/**
 * Recuperar contraseña.
 */
export async function resetPassword(
  auth: Auth,
  email: string,
): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}

/**
 * Reenviar correo de verificación.
 */
export async function sendVerificationEmail(
  auth: Auth,
): Promise<void> {
  if (!auth.currentUser) {
    throw new Error(
      "No authenticated user available.",
    );
  }

  await sendEmailVerification(auth.currentUser);
}

/**
 * Cerrar sesión.
 */
export async function logout(
  auth: Auth,
): Promise<void> {
  await signOut(auth);
}

/**
 * Fuerza la actualización del token.
 */
export async function refreshSession(
  auth: Auth,
): Promise<void> {
  if (!auth.currentUser) {
    return;
  }

  await auth.currentUser.getIdToken(true);
}
/**
 * Obtiene y normaliza los Custom Claims del usuario.
 */
export async function resolveClaimsForUser(
  user: User,
): Promise<TalentOneClaims> {
  const attempts = [true, true, false, false];

  for (let index = 0; index < attempts.length; index += 1) {
    const token = await user.getIdTokenResult(
      attempts[index],
    );

    const claims = normalizeClaims(
      token.claims as Record<string, unknown>,
    );

    if (
      claims.roles.length > 0 ||
      claims.role !== null ||
      claims.primaryContext !== null ||
      claims.currentOrganizationId !== null
    ) {
      return claims;
    }

    if (index < attempts.length - 1) {
      await delay(250 * (index + 1));
    }
  }

  const token = await user.getIdTokenResult(true);

  return normalizeClaims(
    token.claims as Record<string, unknown>,
  );
}

/**
 * Refresca y devuelve los claims actuales.
 */
export async function refreshClaims(
  auth: Auth,
): Promise<TalentOneClaims | null> {
  if (!auth.currentUser) {
    return null;
  }

  await auth.currentUser.getIdToken(true);

  return resolveClaimsForUser(auth.currentUser);
}

/**
 * Obtiene los claims actuales.
 */
export async function getCurrentClaims(
  auth: Auth,
): Promise<TalentOneClaims | null> {
  if (!auth.currentUser) {
    return null;
  }

  return resolveClaimsForUser(auth.currentUser);
}

/**
 * Obtiene el usuario autenticado.
 */
export function getCurrentUser(
  auth: Auth,
): User | null {
  return auth.currentUser;
}

/**
 * Obtiene la ruta inicial para el usuario autenticado.
 */
export async function getRedirectForCurrentUser(
  auth: Auth,
): Promise<string> {
  if (!auth.currentUser) {
    return "/";
  }

  const claims = await resolveClaimsForUser(
    auth.currentUser,
  );

  return getRedirectPathForRoles(claims.roles);
}

/**
 * Refresca la sesión y devuelve los claims actualizados.
 */
export async function refreshAuthentication(
  auth: Auth,
): Promise<TalentOneClaims | null> {
  if (!auth.currentUser) {
    return null;
  }

  await refreshSession(auth);

  return resolveClaimsForUser(
    auth.currentUser,
  );
}

/**
 * Indica si el correo está verificado.
 */
export function isEmailVerified(
  user: User | null,
): boolean {
  return user?.emailVerified ?? false;
}

/**
 * Devuelve el UID del usuario autenticado.
 */
export function getCurrentUserId(
  auth: Auth,
): string | null {
  return auth.currentUser?.uid ?? null;
}

/**
 * Devuelve el correo del usuario autenticado.
 */
export function getCurrentUserEmail(
  auth: Auth,
): string | null {
  return auth.currentUser?.email ?? null;
}
