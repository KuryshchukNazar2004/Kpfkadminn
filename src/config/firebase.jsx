// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBezq3xuuuwW-_haft--AudzJvvsHsGsBY",
  authDomain: "user-b375f.firebaseapp.com",
  projectId: "user-b375f",
  storageBucket: "user-b375f.appspot.com",
  messagingSenderId: "455049295748",
  appId: "1:455049295748:web:6a5b66351c8b45a0af4fd1",
  measurementId: "G-9KSXKX3W70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();