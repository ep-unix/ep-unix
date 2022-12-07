import firebase, { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, orderByChild, limitToLast, onValue } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, Auth, UserInfo} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZHdJUFlP_V7NJWOd9p13oef5jV7NEFUQ",
  authDomain: "chat-app-8c1c1.firebaseapp.com",
  projectId: "chat-app-8c1c1",
  storageBucket: "chat-app-8c1c1.appspot.com",
  messagingSenderId: "3776078901",
  appId: "1:3776078901:web:47949c856eacf823fe7d7c",
  measurementId: "G-YNG5Q6VDS1"
};

const app = initializeApp(firebaseConfig);

//reference for auth and db
export const db = getDatabase(app);
export const auth = getAuth(app);