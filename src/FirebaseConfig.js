// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMg3WGN2v8HEjM4cUPX8K3Q2rxb27qYZc",
  authDomain: "emailandpassword-4ab61.firebaseapp.com",
  projectId: "emailandpassword-4ab61",
  storageBucket: "emailandpassword-4ab61.appspot.com",
  messagingSenderId: "763406599884",
  appId: "1:763406599884:web:35f7800a3bf2823a45e469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}