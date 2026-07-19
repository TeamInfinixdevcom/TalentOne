# Claims Refresh Strategy

## Goal

Keep Firebase Auth tokens, Firestore user metadata, and Custom Claims aligned without relying on UI timing.

## Source Of Truth

- Firebase Auth owns identity.
- Firestore `users/{uid}` owns profile and role metadata.
- Custom Claims are derived from Firestore and used for fast authorization checks.

## Refresh Flow

1. A user registers or signs in.
2. Firebase Auth creates or updates the Auth user record.
3. Backend triggers mirror the user into Firestore.
4. A Firestore trigger recomputes Custom Claims.
5. The client forces a token refresh and retries until claims are visible.
6. Route protection consumes the refreshed token.

## Refresh Rules

- Claims must be recomputed after any change to `roles`, `primaryContext`, `currentOrganizationId`, or `status`.
- Client-side route guards should never assume the token is already synchronized.
- If claims are not ready yet, the client must retry token refresh before redirecting.

## Operational Notes

- Claims updates should be idempotent.
- Claim writes should not mutate the Firestore user document.
- Security rules must trust claims for coarse-grained RBAC but still verify Firestore membership for tenant-scoped access.
