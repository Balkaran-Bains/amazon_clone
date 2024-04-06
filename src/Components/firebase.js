import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// const db = firebase.default.database();



export { auth };
