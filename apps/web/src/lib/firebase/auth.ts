import { getAuth, type Auth } from "firebase/auth";

import { app } from "./client";

export const auth: Auth | null = app && typeof window !== "undefined" ? getAuth(app) : null;
