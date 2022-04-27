import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmedyij02Rsp2rNqMW4nplBGWWMNz7RtY",
  authDomain: "id-itaf.firebaseapp.com",
  projectId: "id-itaf",
  storageBucket: "id-itaf.appspot.com",
  messagingSenderId: "239260422199",
  appId: "1:239260422199:web:6db3575caf2cd4699bafb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
