// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZBoBZSeilZjIzquKLSxTHgnb5fBscF9U",
  authDomain: "cuartavolei.firebaseapp.com",
  projectId: "cuartavolei",
  storageBucket: "cuartavolei.appspot.com",
  messagingSenderId: "979249688928",
  appId: "1:979249688928:web:d416b98df2b9f80a00ee05",
  measurementId: "G-N29KCLLXB1"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    export const storage = getStorage(app);
    export const db = getFirestore(app);