// Import the functions you need from the SDKs you need
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByebH26g_gFLYzOpxK-rf_1ulBHB3JvRE",
  authDomain: "clone-656f4.firebaseapp.com",
  projectId: "clone-656f4",
  storageBucket: "clone-656f4.appspot.com",
  messagingSenderId: "1033872989910",
  appId: "1:1033872989910:web:6ffeca01f4e9427f7b7377",
  measurementId: "G-99W2XYD0E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);