// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARkD9wFu8Vjfs-WwAfPtaLDdITDB3kP8I",
  authDomain: "reels-df.firebaseapp.com",
  projectId: "reels-df",
  storageBucket: "reels-df.appspot.com",
  messagingSenderId: "317909613292",
  appId: "1:317909613292:web:d649b7fb6d30b306e803c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const storage = getStorage();

const db = getFirestore();


export {auth,storage,db};
export default app;