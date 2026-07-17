import { getStorage, type FirebaseStorage } from "firebase/storage";

import { app } from "./client";

export const storage: FirebaseStorage | null =
  app && typeof window !== "undefined" ? getStorage(app) : null;
