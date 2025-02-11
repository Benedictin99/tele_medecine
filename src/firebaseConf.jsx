// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7HGeqh6CzdIjqlpEs3lkfkhn05UBRYSE",
  authDomain: "tele-medecine.firebaseapp.com",
  projectId: "tele-medecine",
  storageBucket: "tele-medecine.firebasestorage.app",
  messagingSenderId: "850289362887",
  appId: "1:850289362887:web:bfe5c5609914b43180fbe2",
  measurementId: "G-2WL3SYB0W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
