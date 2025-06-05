// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkVrf8JQL2J-05CGjHqw9zcJnyVy2AnDs",
  authDomain: "react-villa.firebaseapp.com",
  projectId: "react-villa",
  storageBucket: "react-villa.firebasestorage.app",
  messagingSenderId: "708909252086",
  appId: "1:708909252086:web:9f74356feefb8016a2dbd7"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)