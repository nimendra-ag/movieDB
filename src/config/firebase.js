// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ONZaM6Ioi_5U4B5mEs1c9LOWsy04rsE",
  authDomain: "moviedb-818ab.firebaseapp.com",
  projectId: "moviedb-818ab",
  storageBucket: "moviedb-818ab.appspot.com",
  messagingSenderId: "577570449633",
  appId: "1:577570449633:web:70e1c96189c145def6efa0",
  measurementId: "G-1V8MYJLQLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);