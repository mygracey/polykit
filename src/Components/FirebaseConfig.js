// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_07texKXKOmj4iNr5_lHQ6M8eh6gTN4",
  authDomain: "polykit-468c7.firebaseapp.com",
  databaseURL: "https://polykit-468c7-default-rtdb.firebaseio.com",
  projectId: "polykit-468c7",
  storageBucket: "polykit-468c7.firebasestorage.app",
  messagingSenderId: "637494038806",
  appId: "1:637494038806:web:ef63a47568a3555d8b8037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
export const auth=getAuth(app)