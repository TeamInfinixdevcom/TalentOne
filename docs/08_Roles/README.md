# RBAC And Route Protection

## Scope

This document defines the role model, permission boundaries, and route protection strategy for TalentOne.

It does not implement Firestore security rules or React guards.

## Roles

- `MASTER`: full system ownership.
- `ADMIN`: platform administration with limited controls.
- `COMPANY_OWNER`: full control over one company tenant.
- `COMPANY_USER`: standard company operations.
- `RECRUITER`: recruiting operations within a company.
- `CANDIDATE`: self-service applicant account.

## Permission Model

- `MASTER` can manage every platform area.
- `ADMIN` can manage platform configuration, users, and company oversight.
- `COMPANY_OWNER` can manage company data, members, and hiring workflows.
- `COMPANY_USER` can access scoped company workflows assigned by the owner.
- `RECRUITER` can manage candidate-facing recruiting workflows inside the company tenant.
- `CANDIDATE` can manage only personal candidate data and applications.

## Enforcement Layers

1. Firebase Authentication confirms identity.
2. Custom Claims provide the fast role check.
3. Firestore membership documents confirm company scope.
4. Route protection blocks unauthorized areas before data access.

## Route Protection Strategy

- `/admin/*` requires `MASTER` or `ADMIN`.
- `/company/*` requires `COMPANY_OWNER`, `COMPANY_USER`, or `RECRUITER` plus a valid organization membership.
- `/candidate/*` requires `CANDIDATE`.
- Public routes remain open but never trust client-side role state alone.

## Role Resolution Order

1. Read Firebase Auth session.
2. Read Custom Claims.
3. Resolve Firestore membership when a company tenant is involved.
4. Derive the active role for the current route context.
5. Deny access if any required check fails.

## Notes

- Custom Claims should be treated as derived authorization state.
- Firestore membership is the source of truth for company roles.
- Platform roles should not be granted through client-side code.