// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaBvD5LAWTUmHanX7s1JdpAW3sWvi3yZM",
  authDomain: "partyplannerbo.firebaseapp.com",
  projectId: "partyplannerbo",
  storageBucket: "partyplannerbo.appspot.com",
  messagingSenderId: "118507702240",
  appId: "1:118507702240:web:ff1c8f18276cebbb3b4d85",
  measurementId: "G-QLJHW4HT59",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
