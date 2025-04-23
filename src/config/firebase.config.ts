import { initializeApp,getApps,getApp } from "firebase/app"; 
import {getFirestore,enableNetwork } from "firebase/firestore";

const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
    appId:import.meta.env.VITE_FIREBASE_APP_ID
}

console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const app = getApps.length > 0 ? getApp() :initializeApp(firebaseConfig);

const db = getFirestore(app);

await enableNetwork(db);

export {db};