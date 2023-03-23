import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const app = initializeApp({
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
});

export const functions = getFunctions(app);

export {
  httpsCallable,
};
