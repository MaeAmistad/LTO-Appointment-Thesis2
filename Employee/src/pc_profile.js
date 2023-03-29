
  
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc,onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
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

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user.uid)
      onSnapshot(doc(db, "Users", "Employee","EmployeeData",user.uid), (doc1) => {
        
        if (doc1.data().user_Type == "Processing Officer"){
           document.getElementById('fn').innerHTML= doc1.data().user_LN + ", " + doc1.data().user_FN + " " + doc1.data().user_MN;
            document.getElementById('empID').innerHTML= doc1.data().user_EID;
            document.getElementById('eml').innerHTML= doc1.data().user_E;
        }
  
           

        });
      }
});

