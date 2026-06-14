import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import standard getFirestore instead of the advanced initializer
import { getFirestore } from "firebase/firestore";

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

// Use the standard, ultra-lightweight database initialization
export const db = getFirestore(app);
export const auth = getAuth(app);