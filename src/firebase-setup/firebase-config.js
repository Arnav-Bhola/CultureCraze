// ** Imports **
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

console.log(process.env.NEXT_PUBLIC_apiKey);

// ** Keys to connect to firebase - Secret :) **
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messageSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

// ** Exporting everything else we might need in the code **
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
