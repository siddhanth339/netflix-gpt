// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxFSxbeLOoc7yQrHGq5Dw0Tq8qIfrj4ys",
  authDomain: "netflix-gpt-29d86.firebaseapp.com",
  projectId: "netflix-gpt-29d86",
  storageBucket: "netflix-gpt-29d86.appspot.com",
  messagingSenderId: "565236202447",
  appId: "1:565236202447:web:9e609bbeeaecc31dc6f0ba",
  measurementId: "G-GQPFE0XJ27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
