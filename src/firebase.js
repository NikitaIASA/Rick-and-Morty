import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPsAnD17z53XBIcQsYZlpO1Krd_XnSDrc",
  authDomain: "auth-184d7.firebaseapp.com",
  projectId: "auth-184d7",
  storageBucket: "auth-184d7.appspot.com",
  messagingSenderId: "570838242771",
  appId: "1:570838242771:web:6afe2e7d8a4a1806710b26"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);