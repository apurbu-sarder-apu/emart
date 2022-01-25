// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// })

// export const auth = app.auth()
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwNOxKvbieoDvYHCtB21LIFKDbxhF9E8c",
  authDomain: "emart-6acc8.firebaseapp.com",
  databaseURL: "https://emart-6acc8-default-rtdb.firebaseio.com",
  projectId: "emart-6acc8",
  storageBucket: "emart-6acc8.appspot.com",
  messagingSenderId: "10041907391",
  appId: "1:10041907391:web:966abc3b499bbddb5e4e0a",
  measurementId: "G-91L92SVXQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);