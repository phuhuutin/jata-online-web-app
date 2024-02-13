// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4bpNtxdKjbnTR-E2WIiA0DyetTvjMPcQ",
  authDomain: "jata-online-market.firebaseapp.com",
  projectId: "jata-online-market",
  storageBucket: "jata-online-market.appspot.com",
  messagingSenderId: "206428474927",
  appId: "1:206428474927:web:df91c9d7c793c652df00da",
  measurementId: "G-EXY201W76H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);