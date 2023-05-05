import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_6-Ae6gEmy6nIp6UBfydzNW2xH91fki8",
  authDomain: "tahiti-client-project.firebaseapp.com",
  projectId: "tahiti-client-project",
  storageBucket: "tahiti-client-project.appspot.com",
  messagingSenderId: "965891902613",
  appId: "1:965891902613:web:5253f7385e24766f861f9c",
  measurementId: "G-N54QF047CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

