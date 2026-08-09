import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

import { app } from "./client";
import { firebaseConfig } from "./config";

const analyticsApp = app;

export const analyticsPromise: Promise<Analytics | null> =
  analyticsApp && firebaseConfig.measurementId && typeof window !== "undefined"
    ? isSupported().then((supported) => (supported ? getAnalytics(analyticsApp) : null))
    : Promise.resolve(null);
