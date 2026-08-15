import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  initializeAuth, 
  indexedDBLocalPersistence, 
  browserLocalPersistence 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Capacitor } from "@capacitor/core";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dollar-dine.firebaseapp.com",
  projectId: "dollar-dine",
  storageBucket: "dollar-dine.firebasestorage.app",
  messagingSenderId: "788321035335",
  appId: "1:788321035335:web:661e5aab2e107074243d62",
  measurementId: "G-XWDRFWYE5B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Uses IndexedDB persistence on iOS/Android native apps to bypass WKWebView network blocks
export const auth = Capacitor.isNativePlatform()
  ? initializeAuth(app, {
      persistence: [indexedDBLocalPersistence, browserLocalPersistence],
    })
  : getAuth(app);