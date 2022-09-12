import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCWu3CxDXKlfjtOH_SOOO3bXLIDpU38CvQ",
  authDomain: "lab-note-26a20.firebaseapp.com",
  projectId: "lab-note-26a20",
  storageBucket: "lab-note-26a20.appspot.com",
  messagingSenderId: "414730709619",
  appId: "1:414730709619:web:2560454758565a42939806",
  measurementId: "G-879NVXSHBN"
};
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
