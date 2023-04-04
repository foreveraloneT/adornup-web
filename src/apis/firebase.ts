import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const app = initializeApp({
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
});

const appCheckKey = process.env.GATSBY_FIREBASE_APP_CHECK_KEY;
if (typeof appCheckKey !== 'string') throw new Error('[firebase]: please provide app-check key');

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window.self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(appCheckKey),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export const functions = getFunctions(appCheck.app);

export {
  httpsCallable,
};
