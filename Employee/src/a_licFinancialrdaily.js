bcklic.addEventListener('click' , () => {
  window.location = "a_licdashboard.html"
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

var tbody = document.getElementById('tbody');
var tbody1 = document.getElementById('tbody1');

// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day ;
// TIME TODAY 
let hrs = date.getHours();
let mnts = date.getMinutes(); 
let time = hrs + ":" + mnts;
var today2 = month + "/" + day + "/" + year ;
document.getElementById('datee').innerHTML = "June " + day + " " + year
document.getElementById('dtt').innerHTML = today2 + " " + time

let itmNo = 0;

const querySnapshot2 = await getDocs(collection(db,"License")); 
querySnapshot2.forEach(doc => { 

          var dd = doc.data().dt_App;
          var ddsp = dd.slice(0,2);
          var mmsp = dd.slice(5,7); 
          var yysp = dd.slice(10,14);
          var dtcon1 = yysp + "-" + mmsp + "-" + ddsp;  

          if(dtcon1 == today){
                let trow = document.createElement('tr');   
                let td1 = document.createElement('td'); 
                let td2 = document.createElement('td'); 
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td'); 
    
                td1.innerHTML = itmNo+=1;
                td2.innerHTML = doc.id;
                td3.innerHTML = doc.data().User_name;
                td4.innerHTML = doc.data().laa;
                td5.innerHTML = doc.data().User_TotalPayment;

                trow.appendChild(td1);
                trow.appendChild(td2);
                trow.appendChild(td3);
                trow.appendChild(td4);
                trow.appendChild(td5);
  
                tbody.appendChild(trow);
          }
});
querySnapshot2.forEach(doc => { 

  var dd = doc.data().dt_App;
  var ddsp = dd.slice(0,2);
  var mmsp = dd.slice(5,7); 
  var yysp = dd.slice(10,14);
  var dtcon1 = yysp + "-" + mmsp + "-" + ddsp;  

if(dtcon1 == today){
      let trow = document.createElement('tr');   
      let td1 = document.createElement('td'); 
      let td2 = document.createElement('td'); 
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td'); 

      td1.innerHTML = itmNo+=1;
      td2.innerHTML = doc.id;
      td3.innerHTML = doc.data().User_name;
      td4.innerHTML = doc.data().laa;
      td5.innerHTML = doc.data().User_TotalPayment;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4); 
      trow.appendChild(td5);

      tbody1.appendChild(trow);
}
});