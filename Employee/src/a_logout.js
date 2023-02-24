// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getFirestore, getDocs, collection,doc, getDoc  } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js";
 import { getAuth, signInWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyNToos3S0HwLl0cZMRdiVjFJcBb4FWFo",
  authDomain: "lto-online-appointment-setter.firebaseapp.com",
  projectId: "lto-online-appointment-setter",
  storageBucket: "lto-online-appointment-setter.appspot.com",
  messagingSenderId: "382579903791",
  appId: "1:382579903791:web:5d98bbe4ea8b38a43065da"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

logout.addEventListener('click', (e) => {

    signOut(auth).then(() => {
        window.location = "a_login.html";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
   
        alert(errorMessage);
      });


});