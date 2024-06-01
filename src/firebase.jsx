import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-store-cf0c0.firebaseapp.com",
  projectId: "tutorial-store-cf0c0",
  storageBucket: "tutorial-store-cf0c0.appspot.com",
  messagingSenderId: "742554538120",
  appId: "1:742554538120:web:a0560629cd5bbb6caecf3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();