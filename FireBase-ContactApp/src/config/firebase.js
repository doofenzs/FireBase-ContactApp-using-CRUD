// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // Initialize Firebase app
export const db = getFirestore(app); // Get Firestore instance

// You might want to handle errors here, if initialization fails or db setup fails
// For example:
// try {
//    const app = initializeApp(firebaseConfig);
//    const db = getFirestore(app);
// } catch(error) {
//    console.error("Error initializing Firebase:", error);
// }
