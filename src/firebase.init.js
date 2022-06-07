// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkm8jbbvFe-JXqOA31wHCiB46Oxk_Z_bk",
    authDomain: "e-commerce-3efc3.firebaseapp.com",
    projectId: "e-commerce-3efc3",
    storageBucket: "e-commerce-3efc3.appspot.com",
    messagingSenderId: "721433936087",
    appId: "1:721433936087:web:c66ce2e75dfdd29baa7092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth