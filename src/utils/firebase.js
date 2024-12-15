// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt1SeucunWDqR_saWeE6-WWt4C_m28xXM",
  authDomain: "netflixgpt-2ba46.firebaseapp.com",
  projectId: "netflixgpt-2ba46",
  storageBucket: "netflixgpt-2ba46.firebasestorage.app",
  messagingSenderId: "945683719660",
  appId: "1:945683719660:web:cb33e2b4f6a8039ac70cc9",
  measurementId: "G-X0GJY88NFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);