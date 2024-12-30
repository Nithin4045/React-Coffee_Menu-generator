// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx5tC22aKW5soy_DvdzuCVblG1jp265kM",
  authDomain: "login-bab04.firebaseapp.com",
  projectId: "login-bab04",
  storageBucket: "login-bab04.firebasestorage.app",
  messagingSenderId: "602809684593",
  appId: "1:602809684593:web:6a07aeebd216d9ad7841d0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 export {auth}