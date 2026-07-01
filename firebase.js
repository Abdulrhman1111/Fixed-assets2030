import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8EYKmTyObV0m4V0XIHxYrt4aKRhbTyB8",
  authDomain: "ifrs-financial-statement-ee7ea.firebaseapp.com",
  projectId: "ifrs-financial-statement-ee7ea",
  storageBucket: "ifrs-financial-statement-ee7ea.firebasestorage.app",
  messagingSenderId: "149527869862",
  appId: "1:149527869862:web:bf76f92fd614d5eb66b767"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);