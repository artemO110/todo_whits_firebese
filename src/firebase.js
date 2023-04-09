// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCurpU1JjnkOB0Q_0bSTMhuOBEQ_6n42yg",
    authDomain: "todo-app-yt-3ce76.firebaseapp.com",
    projectId: "todo-app-yt-3ce76",
    storageBucket: "todo-app-yt-3ce76.appspot.com",
    messagingSenderId: "47281759637",
    appId: "1:47281759637:web:e5d486fed2289bae30429c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);