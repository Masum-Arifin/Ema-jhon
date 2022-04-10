// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKBi6bj3IYObZnCcVjg4Px6Y80rbBtHVc",
  authDomain: "ema-jhon-simple-1c2a8.firebaseapp.com",
  projectId: "ema-jhon-simple-1c2a8",
  storageBucket: "ema-jhon-simple-1c2a8.appspot.com",
  messagingSenderId: "522197763791",
  appId: "1:522197763791:web:0b60acc76854d3d71999ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;