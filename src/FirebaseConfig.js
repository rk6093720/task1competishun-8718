// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8zYGDzReLtiSGSjd7O6-9MUh92yqKbhk",
  authDomain: "emailandpassword-41d67.firebaseapp.com",
  projectId: "emailandpassword-41d67",
  storageBucket: "emailandpassword-41d67.appspot.com",
  messagingSenderId: "32939019133",
  appId: "1:32939019133:web:b264b06aafa356a3279a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}