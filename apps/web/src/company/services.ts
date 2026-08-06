import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { auth } from "../lib/firebase/auth";
import { firestore } from "../lib/firebase/firestore";

import {
  companyOrganizationMemberPath,
  companyOrganizationMembersPath,
  companyOrganizationPath,
  normalizeCompanySlug,
  type CompanyMember,
  type CompanyMemberRole,
  type CompanyOrganization,
} from "@talentone/database";

import {
  assertCompanyModuleAccess,
  canManageCompanyOrganization,
  type CompanyAccessContext,
} from "./access";

export interface CompanyOrganizationInput {
  organizationId?: string;
  name: string;
  legalName?: string | null;
  slug?: string | null;
}

export interface CompanyOrganizationUpdateInput {
  name?: string | null;
  legalName?: string | null;
  slug?: string | null;
  status?: CompanyOrganization["status"];
}

export interface CompanyMemberInput {
  uid: string;
  role: CompanyMemberRole;
  status?: CompanyMember["status"];
  invitedByUid?: string | null;
}

function requireFirestore() {
  if (!firestore) {
    throw new Error("Firestore is not initialized.");
  }

  return firestore;
}

function getCurrentUid(context: CompanyAccessContext): string {
  if (context.uid) {
    return context.uid;
  }

  if (auth?.currentUser?.uid) {
    return auth.currentUser.uid;
  }

  throw new Error("An authenticated user is required.");
}

function organizationRef(organizationId: string) {
  return doc(requireFirestore(), companyOrganizationPath(organizationId));
}

function memberRef(organizationId: string, uid: string) {
  return doc(requireFirestore(), companyOrganizationMemberPath(organizationId, uid));
}

function membersCollectionRef(organizationId: string) {
  return collection(requireFirestore(), companyOrganizationMembersPath(organizationId));
}

export async function getCompanyOrganization(
  context: CompanyAccessContext,
  organizationId: string,
): Promise<CompanyOrganization | null> {
  assertCompanyModuleAccess(context);

  const snapshot = await getDoc(organizationRef(organizationId));
  return snapshot.exists() ? (snapshot.data() as CompanyOrganization) : null;
}

export async function getCompanyMember(
  context: CompanyAccessContext,
  organizationId: string,
  uid: string,
): Promise<CompanyMember | null> {
  assertCompanyModuleAccess(context);

  const snapshot = await getDoc(memberRef(organizationId, uid));
  return snapshot.exists() ? (snapshot.data() as CompanyMember) : null;
}

export async function createCompanyOrganization(
  context: CompanyAccessContext,
  input: CompanyOrganizationInput,
): Promise<CompanyOrganization> {
  assertCompanyModuleAccess(context);

  const organizationId = input.organizationId ?? normalizeCompanySlug(input.name);
  if (!organizationId) {
    throw new Error("Company organization ID cannot be empty.");
  }

  const createdByUid = getCurrentUid(context);
  const slug = input.slug ? normalizeCompanySlug(input.slug) : normalizeCompanySlug(input.name);

  if (!slug) {
    throw new Error("Company organization slug cannot be empty.");
  }

  const organization: CompanyOrganization = {
    organizationId,
    status: "draft",
    name: input.name,
    legalName: input.legalName ?? input.name,
    slug,
    createdByUid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(organizationRef(organizationId), organization);

  await setDoc(memberRef(organizationId, createdByUid), {
    uid: createdByUid,
    organizationId,
    role: "COMPANY_OWNER",
    status: "active",
    invitedByUid: null,
    joinedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return organization;
}

export async function updateCompanyOrganization(
  context: CompanyAccessContext,
  organizationId: string,
  input: CompanyOrganizationUpdateInput,
): Promise<CompanyOrganization> {
  if (!canManageCompanyOrganization(context)) {
    throw new Error("Company organization access denied.");
  }

  const existing = await getCompanyOrganization(context, organizationId);
  if (!existing) {
    throw new Error("Company organization not found.");
  }

  const nextOrganization: CompanyOrganization = {
    ...existing,
    name: input.name ?? existing.name,
    legalName: input.legalName ?? existing.legalName,
    slug: input.slug ? normalizeCompanySlug(input.slug) || existing.slug : existing.slug,
    status: input.status ?? existing.status,
    updatedAt: serverTimestamp(),
  };

  await updateDoc(organizationRef(organizationId), {
    name: nextOrganization.name,
    legalName: nextOrganization.legalName,
    slug: nextOrganization.slug,
    status: nextOrganization.status,
    updatedAt: nextOrganization.updatedAt,
  });
  return nextOrganization;
}

export async function upsertCompanyMember(
  context: CompanyAccessContext,
  organizationId: string,
  input: CompanyMemberInput,
): Promise<CompanyMember> {
  if (!canManageCompanyOrganization(context)) {
    throw new Error("Company organization access denied.");
  }

  const existing = await getCompanyMember(context, organizationId, input.uid);
  const nextMember: CompanyMember = {
    uid: input.uid,
    organizationId,
    role: input.role,
    status: input.status ?? existing?.status ?? "invited",
    invitedByUid: input.invitedByUid ?? existing?.invitedByUid ?? null,
    joinedAt: existing?.joinedAt ?? (input.status === "active" ? serverTimestamp() : null),
    createdAt: existing?.createdAt ?? serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(memberRef(organizationId, input.uid), nextMember);
  return nextMember;
}

export async function removeCompanyMember(
  context: CompanyAccessContext,
  organizationId: string,
  uid: string,
): Promise<void> {
  if (!canManageCompanyOrganization(context)) {
    throw new Error("Company organization access denied.");
  }

  await deleteDoc(memberRef(organizationId, uid));
}

export async function listCompanyMembers(
  context: CompanyAccessContext,
  organizationId: string,
): Promise<CompanyMember[]> {
  assertCompanyModuleAccess(context);

  const snapshots = await getDocs(
    query(membersCollectionRef(organizationId), orderBy("createdAt", "asc")),
  );

  return snapshots.docs.map((snapshot) => snapshot.data() as CompanyMember);
}
