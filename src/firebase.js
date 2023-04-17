// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbUbNndql6IuqUMjNODJgPEZoZx8FjBT8",
  authDomain: "login-module-f04da.firebaseapp.com",
  projectId: "login-module-f04da",
  storageBucket: "login-module-f04da.appspot.com",
  messagingSenderId: "699012671682",
  appId: "1:699012671682:web:00b5f36f30d8a6110c735b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);