import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBSWBLkq8gRi_sWAB95UDyFEQ35TgkjhlA",
  authDomain: "departements-app.firebaseapp.com",
  projectId: "departements-app",
  storageBucket: "departements-app.appspot.com",
  messagingSenderId: "401100546992",
  appId: "1:401100546992:web:1b1584896de04c93f86c75"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };