import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbWuT_UN27aJNgQxj51S0el3EqLprBcHg",
    authDomain: "house-marktplace-app.firebaseapp.com",
    projectId: "house-marktplace-app",
    storageBucket: "house-marktplace-app.appspot.com",
    messagingSenderId: "225285165072",
    appId: "1:225285165072:web:812dd3ee63e07df541ba95",
    measurementId: "G-JVEV99G2Y5"
  };


// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
