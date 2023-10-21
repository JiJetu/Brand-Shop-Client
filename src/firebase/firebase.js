// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB92a2Umlpl5EOSqRBP8ZZCpUfYYdbZ_xI",
  authDomain: "assignment-10-4908f.firebaseapp.com",
  projectId: "assignment-10-4908f",
  storageBucket: "assignment-10-4908f.appspot.com",
  messagingSenderId: "349048652461",
  appId: "1:349048652461:web:4d7d54560e9ae1632bbc24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
