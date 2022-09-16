// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp)
db.settings({ timestampsInSnapshots: true })

export const analytics = getAnalytics(FirebaseApp);