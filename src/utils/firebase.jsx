// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2H4OKPCiL_r5WbvyB9bO5lFOdsrtHX-E",
  authDomain: "netflix-clone-5c5a1.firebaseapp.com",
  projectId: "netflix-clone-5c5a1",
  storageBucket: "netflix-clone-5c5a1.appspot.com",
  messagingSenderId: "87995945596",
  appId: "1:87995945596:web:b011b3086b079c655eaff9",
  measurementId: "G-G83975Y9RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();