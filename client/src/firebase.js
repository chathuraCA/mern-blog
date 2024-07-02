// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d3b30.firebaseapp.com",
  projectId: "mern-auth-d3b30",
  storageBucket: "mern-auth-d3b30.appspot.com",
  messagingSenderId: "488792936824",
  appId: "1:488792936824:web:22496883d218a57bcd388d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);