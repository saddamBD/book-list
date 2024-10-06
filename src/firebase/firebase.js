// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Hnx31NiZ0Jr1jq7unGfS4c5Za7C_7Es",
  authDomain: "book-list-c4170.firebaseapp.com",
  projectId: "book-list-c4170",
  storageBucket: "book-list-c4170.appspot.com",
  messagingSenderId: "650128056937",
  appId: "1:650128056937:web:a430a353d359e2502bb8f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
