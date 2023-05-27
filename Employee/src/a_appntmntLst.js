var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;       
document.getElementById("dte").value = today;

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

var tbody = document.getElementById('tbody1');

const appntmntList = await getDocs(collection(db, 'Applicants'));

appntmntList.forEach((doc) => {

                    let trow = document.createElement('tr'); 
                    let t_ID = document.createElement('td'); 
                    let td1 = document.createElement('td'); 
                    let td5 = document.createElement('td'); 
                    let td7 = document.createElement('td');
                    let td8 = document.createElement('td'); 

                    t_ID.innerHTML = doc.data().User_AppID; 
                    td1.innerHTML = doc.data().User_LN + ", " + doc.data().User_FN + " " + doc.data().User_MN ;
                    td5.innerHTML = doc.data().User_TT;
                    td7.innerHTML = doc.data().User_D + " at " + doc.data().User_T;
                    td8.innerHTML = doc.data().User_Stat;
                    
                    trow.appendChild(t_ID);
                    trow.appendChild(td1);
                    trow.appendChild(td5);
                    trow.appendChild(td7);
                    trow.appendChild(td8);
        
                    tbody.appendChild(trow);
    
});