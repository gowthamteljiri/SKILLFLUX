import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLe8tp0nMBtLAtBuwBd-SKO8D2tOtce-8",
  authDomain: "skillflux-6b908.firebaseapp.com",
  projectId: "skillflux-6b908",
  storageBucket: "skillflux-6b908.firebasestorage.app",
  messagingSenderId: "844900565835",
  appId: "1:844900565835:web:95bed691be633390b01ece",
  measurementId: "G-TCGW1LFQKV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
