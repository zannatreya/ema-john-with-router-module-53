// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZhcKKKE1MGO3cWoDpiuz2rimeui0GJHg",
  authDomain: "ema-john-simple-88601.firebaseapp.com",
  projectId: "ema-john-simple-88601",
  storageBucket: "ema-john-simple-88601.appspot.com",
  messagingSenderId: "208739418102",
  appId: "1:208739418102:web:a1505b10f95a14c96b11d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
