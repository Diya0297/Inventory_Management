// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkNyoXQr52wqkzyT1uTcndnlPlIPfIJbQ",
  authDomain: "inventory-management-89252.firebaseapp.com",
  projectId: "inventory-management-89252",
  storageBucket: "inventory-management-89252.appspot.com",
  messagingSenderId: "99153380380",
  appId: "1:99153380380:web:f1c462d3b64ab607ef8bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };