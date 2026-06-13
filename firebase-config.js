// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dollar-dine.firebaseapp.com",
  projectId: "dollar-dine",
  storageBucket: "dollar-dine.firebasestorage.app",
  messagingSenderId: "788321035335",
  appId: "1:788321035335:web:661e5aab2e107074243d62",
  measurementId: "G-XWDRFWYE5B"
};

// ... your firebaseConfig object and initializeApp are up here ...

const app = initializeApp(firebaseConfig);

// CRUCIAL: Make sure the word "export" is in front of both of these!
export const auth = getAuth(app);
export const db = getFirestore(app);