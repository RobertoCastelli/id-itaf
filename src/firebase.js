import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTuaJ8xPSPrf5FEkVB2pWk8aUV6xizmsA",
  authDomain: "id-itaf-4be33.firebaseapp.com",
  projectId: "id-itaf-4be33",
  storageBucket: "id-itaf-4be33.appspot.com",
  messagingSenderId: "664147613407",
  appId: "1:664147613407:web:e0107c18f93ba33513fb6a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
