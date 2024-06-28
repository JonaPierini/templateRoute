import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  OAuthProvider,
  getRedirectResult,
  signInWithPopup,
  onIdTokenChanged,
  signOut,
} from "firebase/auth";
import { FirebaseConfigInterface } from "../interface/firebase";

// Configuración de Firebase
const firebaseConfig: FirebaseConfigInterface = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

export {
  auth,
  googleProvider,
  microsoftProvider,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  onIdTokenChanged,
};
