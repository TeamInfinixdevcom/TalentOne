import { getFirestore, type Firestore } from "firebase/firestore";

import { app } from "./client";

export const firestore: Firestore | null =
  app && typeof window !== "undefined" ? getFirestore(app) : null;
