// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsNvI2Jvs19gd8GjEDjWUX1cS6kT1ubpM",

  authDomain: "mahc-7c309.firebaseapp.com",

  projectId: "mahc-7c309",

  storageBucket: "mahc-7c309.appspot.com",

  messagingSenderId: "698855905473",

  appId: "1:698855905473:web:0694eafc7901b495f61c40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
