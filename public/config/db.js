// src/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYhzSitfgrlizB2Xj8UekfJqUmDZ5iXKc",
  authDomain: "ai-app-8ca0d.firebaseapp.com",
  projectId: "ai-app-8ca0d",
  storageBucket: "ai-app-8ca0d.firebasestorage.app",
  messagingSenderId: "797853021876",
  appId: "1:797853021876:web:b2f595a87c02c718e6c9e1",
  measurementId: "G-31FVMDTJ4G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
