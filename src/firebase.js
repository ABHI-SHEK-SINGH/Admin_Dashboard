// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "admin-dashboard-6b064.firebaseapp.com",
    projectId: "admin-dashboard-6b064",
    storageBucket: "admin-dashboard-6b064.appspot.com",
    messagingSenderId: "950335957780",
    appId: "1:950335957780:web:77a1a87fcbaa3c8efb3001",
    measurementId: "G-QTHTW02MJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()