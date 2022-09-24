// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAHRxUxnC1aSFYlwY8y_KzFAG2uQBgxd0I",
  authDomain: "react-6ec90.firebaseapp.com",
  databaseURL: "https://react-6ec90-default-rtdb.firebaseio.com",
  projectId: "react-6ec90",
  storageBucket: "react-6ec90.appspot.com",
  messagingSenderId: "327433348602",
  appId: "1:327433348602:web:594e843d878f17c8503043",
  measurementId: "G-4GEF42JFB7"
};

const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp)
export const storage=getStorage(FirebaseApp)
export const auth=getAuth(FirebaseApp)
