// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCAOGoX1RQQEnKjvXagtuDUYiuVsMnYTU4",
  authDomain: "typerivals.firebaseapp.com",
  projectId: "typerivals",
  storageBucket: "typerivals.firebasestorage.app",
  messagingSenderId: "1046514509961",
  appId: "1:1046514509961:web:986342fd6dcdd666b4fe58",
  measurementId: "G-6LMPVGQB32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app,auth };