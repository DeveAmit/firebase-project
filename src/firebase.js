
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2vL9LyLTdGeNe1Pzrh-2SLzxXSwgziXI",
  authDomain: "assignment-2571e.firebaseapp.com",
  projectId: "assignment-2571e",
  storageBucket: "assignment-2571e.appspot.com",
  messagingSenderId: "841604858682",
  appId: "1:841604858682:web:2ecffc241914d0132b8603",
  measurementId: "G-M46DT6LR03"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users')
}

export const storage = firebase.storage()