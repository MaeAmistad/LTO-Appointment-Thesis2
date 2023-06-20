bcklic.addEventListener('click' , () => {
    window.location = "a_mvdashboard.html"
});

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
// // Monthly Filter 
// var currentmonth = new Date().getMonth() + 1;
// if (currentmonth < 10)  currentmonth = "0" + currentmonth;

// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day ;

let itmNo = 0;
    const querySnapshot2 = await getDocs(collection(db,"Motor Vehicle")); 
        querySnapshot2.forEach(doc2 => { 
            var dd = doc2.data().dt_App;
            var ddsp = dd.slice(0,2);
            var mmsp = dd.slice(5,7); 
            var yysp = dd.slice(10,14);
            var dtcon1 = yysp + "-" + mmsp + "-" + ddsp; 
        //Date Format
        var dd = doc2.data().dtrgstrd;
        var yysp = dd.slice(0,4);
        var mmsp = dd.slice(5,7);
        var ddsp = dd.slice(8,10);
        var dtcon = mmsp + "/" + ddsp + "/" + yysp;
        
          if(dtcon1 == today){
                let trow = document.createElement('tr');   
                let td1 = document.createElement('td'); 
                let td2 = document.createElement('td'); 
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td'); 
                let td6 = document.createElement('td'); 
                let td7 = document.createElement('td');
                let td8 = document.createElement('td'); 
                let td9 = document.createElement('td'); 
                let td10 = document.createElement('td'); 
                let td11 = document.createElement('td');
                let td12 = document.createElement('td');  
    
                td1.innerHTML = itmNo+=1;
                td2.innerHTML = doc2.data().pltno;
                td3.innerHTML = doc2.data().typel;
                td4.innerHTML = doc2.data().mksrs;
                td5.innerHTML = doc2.data().mtrno;
                td6.innerHTML = doc2.data().chassno;
                td7.innerHTML = doc2.data().color;
                td8.innerHTML = doc2.data().fuel;
                td9.innerHTML = doc2.data().fileno;
                td10.innerHTML = dtcon;
                td11.innerHTML = doc2.data().at;
                td12.innerHTML = doc2.data().deptagncy;
                
                trow.appendChild(td1);
                trow.appendChild(td2);
                trow.appendChild(td3);
                trow.appendChild(td4);
                trow.appendChild(td5);
                trow.appendChild(td6);
                trow.appendChild(td7);
                trow.appendChild(td8);
                trow.appendChild(td9);
                trow.appendChild(td10);
                trow.appendChild(td11);
                trow.appendChild(td12);
     
                tbody.appendChild(trow);
          }
});
