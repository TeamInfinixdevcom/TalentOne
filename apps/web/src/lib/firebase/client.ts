import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";

import { firebaseConfig, hasRequiredFirebaseConfig } from "./config";

export const app: FirebaseApp | null = hasRequiredFirebaseConfig()
	? getApps().length > 0
		? getApp()
		: initializeApp(firebaseConfig)
	: null;
