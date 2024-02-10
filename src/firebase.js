// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWWM8LmOlOf27Gfi-723m1XV6NLfEXQxQ",
  authDomain: "react-firebase-gym.firebaseapp.com",
  projectId: "react-firebase-gym",
  storageBucket: "react-firebase-gym.appspot.com",
  messagingSenderId: "333972308660",
  appId: "1:333972308660:web:93435b468da12397360de1",
  measurementId: "G-J491B5MLKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;