bcklic.addEventListener('click' , () => {
    window.location = "a_mvtypedashboadyr.html"
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

  // Yearly Filter
  var date = new Date();
  var year = date.getFullYear();
  

// DATE TODAY
var date = new Date();
var day = date.getDate(); 
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
// TIME TODAY 
let hrs = date.getHours();
let mnts = date.getMinutes(); 
let time = hrs + ":" + mnts;
var today2 = month + "/" + day + "/" + year ;
document.getElementById('datee').innerHTML =  "For the year of " + year
document.getElementById('dtt').innerHTML = today2 + " " + time


const mv = await getDocs(collection(db,"Motor Vehicle")); 

// ROW 1
let row1_1 = 0;
let row2_1 = 0;
let row3_1 = 0;
let row4_1 = 0;
let row5_1 = 0;
let row6_1 = 0;
let row7_1 = 0;
let all1 = 0;

// ROW 2
let row1_2 = 0;
let row2_2 = 0;
let row3_2 = 0;
let row4_2 = 0;
let row5_2 = 0;
let row6_2 = 0;
let row7_2 = 0;
let all2 = 0;

// ROW 3
let row1_3 = 0;
let row2_3 = 0;
let row3_3 = 0;
let row4_3 = 0;
let row5_3 = 0;
let row6_3 = 0;
let row7_3 = 0;
let all3 = 0;

mv.forEach(doc => {
    // getting Year
    let dd = doc.data().dt_App;
    let mmsp = dd.slice(10,15);

    if(mmsp == year){
      if(doc.data().classification == "PRIVATE"){
        if(doc.data().typel == "MOTORCYCLE WITH SIDECAR"){
            row1_1 = row1_1+=1;
            all1 = all1+=1;
        }
        else if(doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR" || doc.data().typel == "MC"){
            row2_1 = row2_1+=1;
            all1 = all1+=1;
        }
        else if(doc.data().typel == "CAR"){
            row3_1 = row3_1+=1;
            all1 = all1+=1;
        }
        else if(doc.data().typel == "UV"){
            row4_1 = row4_1+=1;
            all1 = all1+=1;
        }
        else if(doc.data().typel == "SUV"){
            row5_1 = row5_1+=1;
            all1 = all1+=1;
        }
        else if(doc.data().typel == "BUS"){
            row6_1 = row6_1+=1;
            all1 = all1+=1;
        }
        else if(doc.data().typel == "TAXI"){
            row7_1 = row7_1+=1;
            all1 = all1+=1;
        }
      }
      else if(doc.data().classification == "FOR HIRE" || doc.data().at == "FOR HIRE"){
        if(doc.data().typel == "MOTORCYCLE WITH SIDECAR"){
            row1_2 = row1_2+=1
            all2 = all2+=1
        }
        else if(doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR" || doc.data().typel == "MC"){
            row2_2 = row2_2+=1
            all2 = all2+=1
        }
        else if(doc.data().typel == "CAR"){
            row3_2 = row3_2+=1
            all2 = all2+=1
        }
        else if(doc.data().typel == "UV"){
            row4_2 = row4_2+=1
            all2 = all2+=1
        }
        else if(doc.data().typel == "SUV"){
            row5_2 = row5_2+=1
            all2 = all2+=1
        }
        else if(doc.data().typel == "BUS"){
            row6_2 = row6_2+=1
            all2 = all2+=1
        }
        else if(doc.data().typel == "TAXI"){
            row7_2 = row7_2+=1;
            all2 = all2+=1;
        }
      }
      else if(doc.data().classification == "GOVERNMENT"){
        if(doc.data().typel == "MOTORCYCLE WITH SIDECAR"){
            row1_3 = row1_3+=1
            all3 = all3+=1
        }
        else if(doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR" || doc.data().typel == "MC"){
            row2_3 = row2_3+=1
            all3 = all3+=1
        }
        else if(doc.data().typel == "CAR"){
            row3_3 = row3_3+=1
            all3 = all3+=1
        }
        else if(doc.data().typel == "UV"){
            row4_3 = row4_3+=1
            all3 = all3+=1
        }
        else if(doc.data().typel == "SUV"){
            row5_3 = row5_3+=1
            all3 = all3+=1
        }
        else if(doc.data().typel == "BUS"){
            row6_3 = row6_3+=1
            all3 = all3+=1
        }
        else if(doc.data().typel == "TAXI"){
            row7_3 = row7_3+=1
            all3 = all3+=1
        }
      }
    }
  });

  document.getElementById('mws1').innerHTML = row1_1
  document.getElementById('mws2').innerHTML = row1_2
  document.getElementById('mws3').innerHTML = row1_3

  document.getElementById('mwos1').innerHTML = row2_1
  document.getElementById('mwos2').innerHTML = row2_2
  document.getElementById('mwos3').innerHTML = row2_3

  document.getElementById('cr1').innerHTML = row3_1
  document.getElementById('cr2').innerHTML = row3_2
  document.getElementById('cr3').innerHTML = row3_3 
  
  document.getElementById('uv1').innerHTML = row4_1
  document.getElementById('uv2').innerHTML = row4_2
  document.getElementById('uv3').innerHTML = row4_3

  document.getElementById('suv1').innerHTML = row5_1
  document.getElementById('suv2').innerHTML = row5_2
  document.getElementById('suv3').innerHTML = row5_3

  document.getElementById('bus1').innerHTML = row6_1
  document.getElementById('bus2').innerHTML = row6_2
  document.getElementById('bus3').innerHTML = row6_3

  document.getElementById('tax1').innerHTML = row7_1
  document.getElementById('tax2').innerHTML = row7_2
  document.getElementById('tax3').innerHTML = row7_3

  document.getElementById('tl1').innerHTML = all1
  document.getElementById('tl2').innerHTML = all2
  document.getElementById('tl3').innerHTML = all3

  document.getElementById('ttl1').innerHTML = row1_1 + row1_2 + row1_3
  document.getElementById('ttl2').innerHTML = row2_1 + row2_2 + row2_3
  document.getElementById('ttl3').innerHTML = row3_1 + row3_2 + row3_3
  document.getElementById('ttl4').innerHTML = row4_1 + row4_2 + row4_3
  document.getElementById('ttl5').innerHTML = row5_1 + row5_2 + row5_3
  document.getElementById('ttl6').innerHTML = row6_1 + row6_2 + row6_3
  document.getElementById('ttl7').innerHTML = row7_1 + row7_2 + row7_3
  document.getElementById('ttl8').innerHTML = all1 + all2 + all3
// TABLE 2
  document.getElementById('mws1d').innerHTML = row1_1
  document.getElementById('mws2d').innerHTML = row1_2
  document.getElementById('mws3d').innerHTML = row1_3

  document.getElementById('mwos1d').innerHTML = row2_1
  document.getElementById('mwos2d').innerHTML = row2_2
  document.getElementById('mwos3d').innerHTML = row2_3

  document.getElementById('cr1d').innerHTML = row3_1
  document.getElementById('cr2d').innerHTML = row3_2
  document.getElementById('cr3d').innerHTML = row3_3
  
  document.getElementById('uv1d').innerHTML = row4_1
  document.getElementById('uv2d').innerHTML = row4_2
  document.getElementById('uv3d').innerHTML = row4_3

  document.getElementById('suv1d').innerHTML = row5_1
  document.getElementById('suv2d').innerHTML = row5_2
  document.getElementById('suv3d').innerHTML = row5_3

  document.getElementById('bus1d').innerHTML = row6_1
  document.getElementById('bus2d').innerHTML = row6_2
  document.getElementById('bus3d').innerHTML = row6_3

  document.getElementById('tax1d').innerHTML = row7_1
  document.getElementById('tax2d').innerHTML = row7_2
  document.getElementById('tax3d').innerHTML = row7_3

  document.getElementById('tl1d').innerHTML = all1
  document.getElementById('tl2d').innerHTML = all2
  document.getElementById('tl3d').innerHTML = all3

  document.getElementById('ttl1d').innerHTML = row1_1 + row1_2 + row1_3
  document.getElementById('ttl2d').innerHTML = row2_1 + row2_2 + row2_3
  document.getElementById('ttl3d').innerHTML = row3_1 + row3_2 + row3_3
  document.getElementById('ttl4d').innerHTML = row4_1 + row4_2 + row4_3
  document.getElementById('ttl5d').innerHTML = row5_1 + row5_2 + row5_3
  document.getElementById('ttl6d').innerHTML = row6_1 + row6_2 + row6_3
  document.getElementById('ttl7d').innerHTML = row7_1 + row7_2 + row7_3
  document.getElementById('ttl8d').innerHTML = all1 + all2 + all3