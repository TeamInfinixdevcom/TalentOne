import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

import { app } from "./client";
import { firebaseConfig } from "./config";

export const analyticsPromise: Promise<Analytics | null> =
  app && firebaseConfig.measurementId && typeof window !== "undefined"
    ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
    : Promise.resolve(null);
