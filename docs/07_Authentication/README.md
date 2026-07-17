# Authentication Flows

## Scope

This document defines the Firebase Authentication flow for TalentOne.

It does not implement the flow and it does not include UI or business logic.

## Authentication Strategy

- Use Firebase Authentication for sign-up, sign-in, password reset, email verification, and session persistence.
- Use Firestore to create the corresponding user profile after Auth account creation.
- Use Custom Claims to tag the authenticated user with coarse-grained access data.
- Keep authorization decisions out of the authentication layer.

## Base Flow

1. User creates or accesses a Firebase Auth account.
2. Firebase emits the authenticated `uid`.
3. The system creates or updates `users/{uid}`.
4. The system resolves domain-specific data such as company membership or candidate profile.
5. The system issues or refreshes Custom Claims.
6. Route protection uses claims first, then Firestore for membership validation.

## Candidate Registration Flow

1. Candidate signs up with Firebase Authentication.
2. Email verification is required before the account becomes active.
3. `users/{uid}` is created with `primaryContext = candidate`.
4. `candidateProfiles/{uid}` is created as an empty profile shell.
5. Custom Claims are set with `CANDIDATE`.
6. The user is routed to candidate onboarding.

## Company Registration Flow

1. Company owner signs up with Firebase Authentication.
2. Email verification is required before activation.
3. `users/{uid}` is created with `primaryContext = company`.
4. `organizations/{organizationId}` is created.
5. `organizations/{organizationId}/members/{uid}` is created with `COMPANY_OWNER`.
6. Custom Claims are set with the company-scoped role.
7. The user is routed to company onboarding.

## Session Rules

- Sessions must survive refresh through Firebase Auth persistence.
- Claims should be refreshed after privilege changes.
- Disabled or suspended users must be blocked at the route and access layer.