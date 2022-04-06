import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBvqVBl35a_8YC4IGo61DcDjX_hlK199M",
  authDomain: "react-vape.firebaseapp.com",
  projectId: "react-vape",
  storageBucket: "react-vape.appspot.com",
  messagingSenderId: "34451929508",
  appId: "1:34451929508:web:9005a87c878841b50ae931"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productosCollection = collection(db, "productos")