
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPhyAQfFJXSr_KmmSDkMxzK_54PpnqaM",
  authDomain: "assignment10-6bf05.firebaseapp.com",
  projectId: "assignment10-6bf05",
  storageBucket: "assignment10-6bf05.appspot.com",
  messagingSenderId: "985033642162",
  appId: "1:985033642162:web:d1873940cab4d0bc2ab9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;