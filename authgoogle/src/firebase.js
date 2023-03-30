// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuSq7nb5vwx9g-yl9VT45Xf-wl2eqlzwY",
  authDomain: "auth-3f6b7.firebaseapp.com",
  projectId: "auth-3f6b7",
  storageBucket: "auth-3f6b7.appspot.com",
  messagingSenderId: "263063997993",
  appId: "1:263063997993:web:0c0da06c6c5e6f7eaf9638",
  measurementId: "G-4KEV8DTFMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);