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
  type Auth,
  type User,
  updateProfile,
} from "firebase/auth";

import { normalizeClaims, type TalentOneClaims } from "./claims";
import { getRedirectPathForRoles } from "./redirects";
import type { EmailPasswordCredentials, SignUpWithEmailPasswordInput } from "./state";

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function ensureBrowserPersistence(auth: Auth): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  await setPersistence(auth, browserLocalPersistence);
}

export async function initializeAuthPersistence(auth: Auth): Promise<void> {
  await ensureBrowserPersistence(auth);
}

export async function signInWithEmailPassword(
  auth: Auth,
  credentials: EmailPasswordCredentials,
): Promise<User> {
  await ensureBrowserPersistence(auth);
  const result = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
  return result.user;
}

export async function signUpWithEmailPassword(
  auth: Auth,
  input: SignUpWithEmailPasswordInput,
): Promise<User> {
  await ensureBrowserPersistence(auth);
  const result = await createUserWithEmailAndPassword(auth, input.email, input.password);

  if (input.displayName) {
    await updateProfile(result.user, { displayName: input.displayName });
  }

  await sendEmailVerification(result.user);
  return result.user;
}

export async function signInWithGoogle(auth: Auth): Promise<User> {
  await ensureBrowserPersistence(auth);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function resetPassword(auth: Auth, email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}

export async function sendVerificationEmail(auth: Auth): Promise<void> {
  if (!auth.currentUser) {
    throw new Error("No authenticated user available for email verification.");
  }

  await sendEmailVerification(auth.currentUser);
}

export async function logout(auth: Auth): Promise<void> {
  await signOut(auth);
}

export async function refreshSession(auth: Auth): Promise<void> {
  if (!auth.currentUser) {
    return;
  }

  await auth.currentUser.getIdToken(true);
}

export async function resolveClaimsForUser(user: User): Promise<TalentOneClaims> {
  const attempts = [true, true, false, false];

  for (let index = 0; index < attempts.length; index += 1) {
    const token = await user.getIdTokenResult(attempts[index]);
    const claims = normalizeClaims(token.claims as Record<string, unknown>);

    if (claims.roles.length > 0 || claims.role || claims.primaryContext || claims.currentOrganizationId) {
      return claims;
    }

    if (index < attempts.length - 1) {
      await delay(200 * (index + 1));
    }
  }

  const token = await user.getIdTokenResult(true);
  return normalizeClaims(token.claims as Record<string, unknown>);
}

export function getPostLoginRedirectPath(claims: TalentOneClaims): string {
  return getRedirectPathForRoles(claims.roles);
}
