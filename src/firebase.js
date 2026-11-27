
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr9ocLXRVe9FMNNoB6Zq2YWPTeF2wHWFY",
  authDomain: "cabifypool.firebaseapp.com",
  projectId: "cabifypool",
  storageBucket: "cabifypool.firebasestorage.app",
  messagingSenderId: "41445846957",
  appId: "1:41445846957:web:897957f0c18eeae783fb24"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
