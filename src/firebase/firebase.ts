
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyA8EC-KStXh4nRwwXn1hnfyrrn8jQHad-8",
   authDomain: "elfredy-portfolio.firebaseapp.com",
   projectId: "elfredy-portfolio",
   storageBucket: "elfredy-portfolio.firebasestorage.app",
   messagingSenderId: "74331361771",
   appId: "1:74331361771:web:22758df1e443b7bfa109ae",
   measurementId: "G-8D5KSE3WRN"
 };


// Eğer daha önce bir app initialize edilmediyse başlat
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);