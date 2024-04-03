import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBthEQV7zXB1fB1p2q9u-hk7HzZ7iLTJ_E",
    authDomain: "clone-a22.firebaseapp.com",
    databaseURL: "https://clone-a22-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clone-a22",
    storageBucket: "clone-a22.appspot.com",
    messagingSenderId: "233930014585",
    appId: "1:233930014585:web:479da25b8a52b9888b79a8",
    measurementId: "G-9SF5PC7TRD"
  };

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(firebaseApp);



// Get Firestore instance
const db = getFirestore(firebaseApp);

export { auth, db };
