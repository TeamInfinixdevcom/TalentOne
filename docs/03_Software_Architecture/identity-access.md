# Identity And Access Architecture

## Scope

This document defines the architecture for TalentOne identity and access management using Firebase Authentication, Firestore, and Custom Claims.

It intentionally excludes UI, business logic, and implementation code.

## Goals

- Establish a single, canonical user model.
- Support platform and company-level authorization.
- Keep authentication separate from authorization.
- Use Firebase Authentication for identity, Firestore for profile and membership data, and Custom Claims for coarse-grained access control.

## Architectural Principles

- Deny by default.
- Authorization is derived from claims plus Firestore membership checks.
- Platform roles and business roles are separated.
- Firestore remains the source of truth for profile and membership data.
- Custom Claims are the fast authorization cache, not the only source of truth.

## Identity Domains

- Platform domain: MASTER, ADMIN.
- Company domain: COMPANY_OWNER, COMPANY_USER, RECRUITER.
- Candidate domain: CANDIDATE.

## High-Level Flow

```mermaid
flowchart LR
  A[Firebase Authentication] --> B[Custom Claims]
  A --> C[users/{uid}]
  B --> D[Route Protection]
  C --> E[Domain Profiles]
  C --> F[Company Memberships]
  C --> G[Candidate Profile]
  D --> H[Authorized App Areas]
```

## Decisions

- One Firebase Auth user maps to one canonical `users/{uid}` document.
- Company access is managed through organization membership records in Firestore.
- Candidate-specific data lives in a dedicated candidate profile document.
- Platform-wide elevation is represented through Custom Claims.
- No role is hardcoded into the client; the client only consumes claim and Firestore state.

## Related Docs

- [Data model](../04_Database/identity-access-model.md)
- [Authentication flows](../07_Authentication/README.md)
- [RBAC and route protection](../08_Roles/README.md)
