// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHnxgWPLeT7OfdpMIPsoWxxRFjL8g-Yp4",
  authDomain: "mahc-f965e.firebaseapp.com",
  projectId: "mahc-f965e",
  storageBucket: "mahc-f965e.appspot.com",
  messagingSenderId: "453611162784",
  appId: "1:453611162784:web:aee8e547372bc999580dc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
