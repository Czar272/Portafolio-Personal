// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUEWQv8BiGjQNDOM_7no2vtp5PaJDGU1c",
  authDomain: "portafolio-b80fc.firebaseapp.com",
  projectId: "portafolio-b80fc",
  storageBucket: "portafolio-b80fc.appspot.com",
  messagingSenderId: "816692932744",
  appId: "1:816692932744:web:73d5f6ae1e8447b65c2f3d",
  measurementId: "G-1KY6ELYK9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);