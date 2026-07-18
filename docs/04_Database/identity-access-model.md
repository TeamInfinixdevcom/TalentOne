# Identity And Access Data Model

## Collections

### `users/{uid}`

Canonical user profile for every authenticated account.

Suggested fields:

- `uid`
- `email`
- `displayName`
- `photoURL`
- `phoneNumber`
- `emailVerified`
- `status` (`pending`, `active`, `suspended`, `deleted`)
- `lastLoginAt`
- `createdAt`
- `updatedAt`
- `primaryContext` (`platform`, `company`, `candidate`)
- `currentOrganizationId` nullable
- `currentRole` nullable

### `organizations/{organizationId}`

Company profile and tenant boundary.

Suggested fields:

- `organizationId`
- `name`
- `legalName`
- `slug`
- `status`
- `createdByUid`
- `createdAt`
- `updatedAt`

### `organizations/{organizationId}/members/{uid}`

Company membership and role assignment.

Suggested fields:

- `uid`
- `organizationId`
- `role` (`COMPANY_OWNER`, `COMPANY_USER`, `RECRUITER`)
- `status` (`invited`, `active`, `disabled`)
- `invitedByUid`
- `joinedAt`
- `createdAt`
- `updatedAt`

### `candidateProfiles/{uid}`

Candidate-specific profile data.

Suggested fields:

- `uid`
- `firstName`
- `lastName`
- `headline`
- `location`
- `resumeUrl`
- `skills`
- `experienceSummary`
- `visibility`
- `createdAt`
- `updatedAt`

### `invitations/{invitationId}`

Pending candidate or company invites.

Suggested fields:

- `type` (`candidate`, `company`)
- `email`
- `organizationId` nullable
- `role` nullable
- `status` (`pending`, `accepted`, `expired`, `revoked`)
- `tokenHash`
- `createdByUid`
- `expiresAt`

## Relationships

```mermaid
erDiagram
  USERS ||--o{ CANDIDATE_PROFILES : has
  USERS ||--o{ ORGANIZATION_MEMBERS : belongs_to
  ORGANIZATIONS ||--o{ ORGANIZATION_MEMBERS : contains
  ORGANIZATIONS ||--o{ INVITATIONS : issues
  USERS ||--o{ INVITATIONS : creates

  USERS {
    string uid
    string email
    string status
    string primaryContext
    string currentOrganizationId
    string currentRole
  }

  ORGANIZATIONS {
    string organizationId
    string name
    string slug
    string status
  }

  ORGANIZATION_MEMBERS {
    string uid
    string organizationId
    string role
    string status
  }

  CANDIDATE_PROFILES {
    string uid
    string firstName
    string lastName
    string visibility
  }

  INVITATIONS {
    string invitationId
    string type
    string email
    string status
  }
```

## Data Ownership

- Firebase Authentication owns credential state.
- `users/{uid}` owns canonical profile state.
- `organizations/{organizationId}` owns company tenant state.
- Membership documents own company role assignments.
- Candidate profiles own candidate-specific data.

## Notes

- Platform roles should be reflected in Custom Claims and mirrored in `users/{uid}` only as derived metadata.
- Firestore remains the source of truth for membership relationships.