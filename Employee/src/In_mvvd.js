bck.addEventListener('click', () => {
    window.location = 'In_mvapprcd.html'
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

//get all data
const mvapprvdSnap = await getDocs(collection(db,"Applicants"));
var AppID = localStorage.getItem("AppID");

console.log(localStorage.getItem('AppID'))

mvapprvdSnap.forEach(doc => {
    if (AppID == doc.data().User_AppID){
        document.getElementById("plate_num").innerHTML = doc.data().pltno;
        document.getElementById("typee").innerHTML = doc.data().typel;
        document.getElementById("reftypee").innerHTML = doc.data().refrigerant_typ;
        document.getElementById("yrmdl").innerHTML = doc.data().yr_modell;
        document.getElementById("mk_seris").innerHTML = doc.data().mksrs;
        document.getElementById("mot_num").innerHTML = doc.data().mtrno; 
        document.getElementById("cha_num").innerHTML = doc.data().chassno;
        document.getElementById("colorr").innerHTML = doc.data().color;
        document.getElementById("fuell").innerHTML = doc.data().fuel;
        document.getElementById("filno").innerHTML = doc.data().fileno;
        document.getElementById("dt_reg").innerHTML = doc.data().dtrgstrd;
        document.getElementById("deptAgncy").innerHTML = doc.data().deptagncy;
        document.getElementById("transctionmv").innerHTML = doc.data().trnsctn;
    }

})