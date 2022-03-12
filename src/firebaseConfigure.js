import { initializeApp , getApps , getApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDT9tAXlw4dNbe0h1aepEBl_kcrN74_x7o",
  authDomain: "my-articles-1ec8a.firebaseapp.com",
  projectId: "my-articles-1ec8a",
  storageBucket: "my-articles-1ec8a.appspot.com",
  messagingSenderId: "276889771220",
  appId: "1:276889771220:web:f19eee1dfb0bafed602f41"
};
const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp();



export const storage =getStorage(app);
export const db = getFirestore(app);