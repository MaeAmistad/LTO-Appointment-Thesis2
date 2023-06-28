bcklic.addEventListener('click' , () => {
    window.location = "ca_licmonthfilter2.html"
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

var tbody = document.getElementById('tbody');
var tbody1 = document.getElementById('tbody1');

var currentmonth = new Date().getMonth() + 1;
if (currentmonth < 10)  currentmonth = "0" + currentmonth;

let itmNo = 0;
let num1 = [];
let num2 = [];
let num3 = [];
let numA = [];

const querySnapshot2 = await getDocs(collection(db,"License")); 
querySnapshot2.forEach(doc => { 

  // getting month
let dd = doc.data().dt_App;
let mmsp = dd.slice(5,7);

          if(mmsp == currentmonth){
            let trow = document.createElement('tr');    
            let td1 = document.createElement('td'); 
            let td2 = document.createElement('td'); 
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td'); 
            let td6 = document.createElement('td'); 
            
            td1.innerHTML = itmNo+=1; 
            td2.innerHTML = doc.data().User_OR
            td3.innerHTML = doc.id;
            td4.innerHTML = doc.data().User_name;
            td5.innerHTML = doc.data().laa;
            td6.innerHTML = doc.data().User_TotalPayment
        
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            trow.appendChild(td6);
  
                tbody.appendChild(trow);

  // FOR GETTING SUM
  if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){
    num1.push(parseInt(doc.data().User_TotalPayment));
    var numss1 = num1;
    var nums1 = 0; 
                
    for(var i=0; i < numss1.length; i++){
        nums1 = parseInt(nums1) + parseInt(numss1[i]);
    }
    document.getElementById('spttl').innerHTML = nums1 + ".00"
  }
  // DL
  else if(doc.data().laa == "DRIVER'S LICENSE"){
    num2.push(parseInt(doc.data().User_TotalPayment));
    var numss2 = num2;
    var nums2 = 0; 
                
    for(var i=0; i < numss2.length; i++){
        nums2 = parseInt(nums2) + parseInt(numss2[i]);
    }
    document.getElementById('dlttl').innerHTML = nums2 + ".00"
  }
  // CL
  else if(doc.data().laa == "CONDUCTOR'S LICENSE"){
    num3.push(parseInt(doc.data().User_TotalPayment));
    var numss3 = num3;
    var nums3 = 0; 
                
    for(var i=0; i < numss3.length; i++){
        nums3 = parseInt(nums3) + parseInt(numss3[i]);
    }
    document.getElementById('clttl').innerHTML = nums3 + ".00"
  }

  numA.push(parseInt(doc.data().User_TotalPayment));
  var numssA = numA;
  var numsA = 0; 
              
  for(var i=0; i < numssA.length; i++){
      numsA = parseInt(numsA) + parseInt(numssA[i]);
  }
  document.getElementById('ttlall').innerHTML = numsA + ".00"

          }
});