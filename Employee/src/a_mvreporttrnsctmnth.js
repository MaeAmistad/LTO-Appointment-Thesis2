bcklic.addEventListener('click' , () => {
    window.location = "a_mvmonthfltr.html"
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

// Monthly Filter
var currentmonth = new Date().getMonth() + 1;
if (currentmonth < 10)  currentmonth = "0" + currentmonth;

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
document.getElementById('datee').innerHTML = "June " + " " + year
document.getElementById('dtt').innerHTML = today2 + " " + time

const mv = await getDocs(collection(db,"Motor Vehicle")); 

// COLUMN 1
let rnwl1 = 0;
let dplmt1 = 0;
let oev1 = 0;
let frhr1 = 0;
let stlnrcvrd1 = 0;
let rctvtn1 = 0;
let ttl1 = 0;
// COLUMN 2
let rnwl2 = 0;
let dplmt2 = 0;
let oev2 = 0;
let frhr2 = 0;
let stlnrcvrd2 = 0;
let rctvtn2 = 0;
let ttl2 = 0;
// COLUMN 3
let rnwl3 = 0;
let dplmt3 = 0;
let oev3 = 0;
let frhr3 = 0;
let stlnrcvrd3 = 0;
let rctvtn3 = 0;
let ttl3 = 0;
// COLUMN 4
let rnwl4 = 0;
let dplmt4 = 0;
let oev4 = 0;
let frhr4 = 0;
let stlnrcvrd4 = 0;
let rctvtn4 = 0;
let ttl4 = 0;
// COLUMN 5
let rnwl5 = 0;
let dplmt5 = 0;
let oev5 = 0;
let frhr5 = 0;
let stlnrcvrd5 = 0;
let rctvtn5 = 0;
let ttl5 = 0;
// COLUMN 6
let rnwl6 = 0;
let dplmt6 = 0;
let oev6 = 0;
let frhr6 = 0;
let stlnrcvrd6 = 0;
let rctvtn6 = 0;
let ttl6 = 0;
// COLUMN 7
let rnwl7 = 0;
let dplmt7 = 0;
let oev7 = 0;
let frhr7 = 0;
let stlnrcvrd7 = 0;
let rctvtn7 = 0;
let ttl7 = 0;
mv.forEach(doc => {

        // getting month
        let dd = doc.data().dt_App;
        let mmsp = dd.slice(5,7);

    if(mmsp == currentmonth){
        // RENEWAL
        if(doc.data().at == "RENEWAL"){
            if(doc.data().typel == "MOTORCYCLE W/ SIDECAR"){
                rnwl1 = rnwl1+=1
                ttl1 = ttl1+=1
            }
            else if(doc.data().typel == "MOTORCYCLE W/O SIDECAR"){
                rnwl2 = rnwl2+=1
                ttl2 = ttl2+=1
            }
            else if(doc.data().typel == "CAR"){
                rnwl3 = rnwl3+=1
                ttl3 = ttl3+=1
            }
            else if(doc.data().typel == "UV"){
                rnwl4 = rnwl4+=1
                ttl4 = ttl4+=1
            }
            else if(doc.data().typel == "SUV"){
                rnwl5 = rnwl5+=1
                ttl5 = ttl5+=1
            }
            else if(doc.data().typel == "BUS"){
                rnwl6 = rnwl6+=1
                ttl6 = ttl6+=1
            }
            else if(doc.data().typel == "TRUCK"){
                rnwl7 = rnwl7+=1
                ttl7 = ttl7+=1
            }
        } 
        // DIPLOMAT
        if(doc.data().at == "DIPLOMAT"){
            if(doc.data().typel == "MOTORCYCLE W/ SIDECAR"){
                dplmt1 = dplmt1+=1
                ttl1 = ttl1+=1
            }
            else if(doc.data().typel == "MOTORCYCLE W/O SIDECAR"){
                dplmt2 = dplmt2+=1
                ttl2 = ttl2+=1
            }
            else if(doc.data().typel == "CAR"){
                dplmt3 = dplmt3+=1
                ttl3 = ttl3+=1
            }
            else if(doc.data().typel == "UV"){
                dplmt4 = dplmt4+=1
                ttl4 = ttl4+=1
            }
            else if(doc.data().typel == "SUV"){
                dplmt5 = dplmt5+=1
                ttl5 = ttl5+=1
            }
            else if(doc.data().typel == "BUS"){
                dplmt6 = dplmt6+=1
                ttl6 = ttl6+=1
            }
            else if(doc.data().typel == "TRUCK"){
                dplmt7 = dplmt7+=1
                ttl7 = ttl7+=1
            }
        } 
        // OEV
        if(doc.data().at == "OTHER EXEMPT VEHICLE (OEV) UNDER SPECIAL ECONOMIC ZONES"){
            if(doc.data().typel == "MOTORCYCLE W/ SIDECAR"){
                oev1 = oev1+=1
                ttl1 = ttl1+=1
            }
            else if(doc.data().typel == "MOTORCYCLE W/O SIDECAR"){
                oev2 = oev2+=1
                ttl2 = ttl2+=1
            }
            else if(doc.data().typel == "CAR"){
                oev3 = oev3+=1
                ttl3 = ttl3+=1
            }
            else if(doc.data().typel == "UV"){
                oev4 = oev4+=1
                ttl4 = ttl4+=1
            }
            else if(doc.data().typel == "SUV"){
                oev5 = oev5+=1
                ttl5 = ttl5+=1
            }
            else if(doc.data().typel == "BUS"){
                oev6 = oev6+=1
                ttl6 = ttl6+=1
            }
            else if(doc.data().typel == "TRUCK"){
                oev7 = oev7+=1
                ttl7 = ttl7+=1
            }
        }
        // FOR HIRE
        if(doc.data().at == "FOR HIRE"){
            if(doc.data().typel == "MOTORCYCLE W/ SIDECAR"){
                frhr1 = frhr1+=1
                ttl1 = ttl1+=1
            }
            else if(doc.data().typel == "MOTORCYCLE W/O SIDECAR"){
                frhr2 = frhr2+=1
                ttl2 = ttl2+=1
            }
            else if(doc.data().typel == "CAR"){
                frhr3 = frhr3+=1
                ttl3 = ttl3+=1
            }
            else if(doc.data().typel == "UV"){
                frhr4 = frhr4+=1
                ttl4 = ttl4+=1
            }
            else if(doc.data().typel == "SUV"){
                frhr5 = frhr5+=1
                ttl5 = ttl5+=1
            }
            else if(doc.data().typel == "BUS"){
                frhr6 = frhr6+=1
                ttl6 = ttl6+=1
            }
            else if(doc.data().typel == "TRUCK"){
                frhr7 = frhr7+=1
                ttl7 = ttl7+=1
            }
        }
        // STOLEN AND RECOVERED
        if(doc.data().at == "STOLEN AND RECOVERED"){
            if(doc.data().typel == "MOTORCYCLE W/ SIDECAR"){
                stlnrcvrd1 = stlnrcvrd1+=1
                ttl1 = ttl1+=1
            }
            else if(doc.data().typel == "MOTORCYCLE W/O SIDECAR"){
                stlnrcvrd2 = stlnrcvrd2+=1
                ttl2 = ttl2+=1
            }
            else if(doc.data().typel == "CAR"){
                stlnrcvrd3 = stlnrcvrd3+=1
                ttl3 = ttl3+=1
            }
            else if(doc.data().typel == "UV"){
                stlnrcvrd4 = stlnrcvrd4+=1
                ttl4 = ttl4+=1
            }
            else if(doc.data().typel == "SUV"){
                stlnrcvrd5 = stlnrcvrd5+=1
                ttl5 = ttl5+=1
            }
            else if(doc.data().typel == "BUS"){
                stlnrcvrd6 = stlnrcvrd6+=1
                ttl6 = ttl6+=1
            }
            else if(doc.data().typel == "TRUCK"){
                stlnrcvrd7 = stlnrcvrd7+=1
                ttl7 = ttl7+=1
            }
        }
        // REACTIVATION OF STORAGE
        if(doc.data().at == "REACTIVATION OF STORAGE"){
            if(doc.data().typel == "MOTORCYCLE W/ SIDECAR"){
                rctvtn1 = rctvtn1+=1
                ttl1 = ttl1+=1
            }
            else if(doc.data().typel == "MOTORCYCLE W/O SIDECAR"){
                rctvtn2 = rctvtn2+=1
                ttl2 = ttl2+=1
            }
            else if(doc.data().typel == "CAR"){
                rctvtn3 = rctvtn3+=1
                ttl3 = ttl3+=1
            }
            else if(doc.data().typel == "UV"){
                rctvtn4 = rctvtn4+=1
                ttl4 = ttl4+=1
            }
            else if(doc.data().typel == "SUV"){
                rctvtn5 = rctvtn5+=1
                ttl5 = ttl5+=1
            }
            else if(doc.data().typel == "BUS"){
                rctvtn6 = rctvtn6+=1
                ttl6 = ttl6+=1
            }
            else if(doc.data().typel == "TRUCK"){
                rctvtn7 = rctvtn7+=1
                ttl7 = ttl7+=1
            }
        }
    }

})

document.getElementById('mwsc_rn1').innerHTML = rnwl1
document.getElementById('mwsc_rn2').innerHTML = rnwl2
document.getElementById('mwsc_rn3').innerHTML = rnwl3
document.getElementById('mwsc_rn4').innerHTML = rnwl4
document.getElementById('mwsc_rn5').innerHTML = rnwl5
document.getElementById('mwsc_rn6').innerHTML = rnwl6
document.getElementById('mwsc_rn7').innerHTML = rnwl7

document.getElementById('mwsc_dplmt1').innerHTML = dplmt1
document.getElementById('mwsc_dplmt2').innerHTML = dplmt2
document.getElementById('mwsc_dplmt3').innerHTML = dplmt3
document.getElementById('mwsc_dplmt4').innerHTML = dplmt4
document.getElementById('mwsc_dplmt5').innerHTML = dplmt5
document.getElementById('mwsc_dplmt6').innerHTML = dplmt6
document.getElementById('mwsc_dplmt7').innerHTML = dplmt7

document.getElementById('mwsc_oev1').innerHTML = oev1
document.getElementById('mwsc_oev2').innerHTML = oev2
document.getElementById('mwsc_oev3').innerHTML = oev3
document.getElementById('mwsc_oev4').innerHTML = oev4
document.getElementById('mwsc_oev5').innerHTML = oev5
document.getElementById('mwsc_oev6').innerHTML = oev6
document.getElementById('mwsc_oev7').innerHTML = oev7

document.getElementById('mwsc_fh1').innerHTML = frhr1
document.getElementById('mwsc_fh2').innerHTML = frhr2
document.getElementById('mwsc_fh3').innerHTML = frhr3
document.getElementById('mwsc_fh4').innerHTML = frhr4
document.getElementById('mwsc_fh5').innerHTML = frhr5
document.getElementById('mwsc_fh6').innerHTML = frhr6
document.getElementById('mwsc_fh7').innerHTML = frhr7

document.getElementById('mwsc_stlnrcvrd1').innerHTML = stlnrcvrd1
document.getElementById('mwsc_stlnrcvrd2').innerHTML = stlnrcvrd2
document.getElementById('mwsc_stlnrcvrd3').innerHTML = stlnrcvrd3
document.getElementById('mwsc_stlnrcvrd4').innerHTML = stlnrcvrd4
document.getElementById('mwsc_stlnrcvrd5').innerHTML = stlnrcvrd5
document.getElementById('mwsc_stlnrcvrd6').innerHTML = stlnrcvrd6
document.getElementById('mwsc_stlnrcvrd7').innerHTML = stlnrcvrd7

document.getElementById('mwsc_ros1').innerHTML = rctvtn1
document.getElementById('mwsc_ros2').innerHTML = rctvtn2
document.getElementById('mwsc_ros3').innerHTML = rctvtn3
document.getElementById('mwsc_ros4').innerHTML = rctvtn4
document.getElementById('mwsc_ros5').innerHTML = rctvtn5
document.getElementById('mwsc_ros6').innerHTML = rctvtn6
document.getElementById('mwsc_ros7').innerHTML = rctvtn7

// TOTAL
document.getElementById('mwsc_rn8').innerHTML = rnwl1+rnwl2+rnwl3+rnwl4+rnwl5+rnwl6+rnwl7
document.getElementById('mwsc_dplmt8').innerHTML = dplmt1+dplmt2+dplmt3+dplmt4+dplmt5+dplmt6+dplmt7
document.getElementById('mwsc_oev8').innerHTML = oev1+oev2+oev3+oev4+oev5+oev6+oev7
document.getElementById('mwsc_fh8').innerHTML = frhr1+frhr2+frhr3+frhr4+frhr5+frhr6+frhr7
document.getElementById('mwsc_stlnrcvrd8').innerHTML = stlnrcvrd1+stlnrcvrd2+stlnrcvrd3+stlnrcvrd4+stlnrcvrd5+stlnrcvrd6+stlnrcvrd7
document.getElementById('mwsc_ros8').innerHTML = rctvtn1+rctvtn2+rctvtn3+rctvtn4+rctvtn5+rctvtn6+rctvtn7

document.getElementById('ttl1').innerHTML = ttl1
document.getElementById('ttl2').innerHTML = ttl2
document.getElementById('ttl3').innerHTML = ttl3
document.getElementById('ttl4').innerHTML = ttl4
document.getElementById('ttl5').innerHTML = ttl5
document.getElementById('ttl6').innerHTML = ttl6
document.getElementById('ttl7').innerHTML = ttl7
document.getElementById('ttl8').innerHTML = ttl1+ttl2+ttl3+ttl4+ttl5+ttl6+ttl7

// 

document.getElementById('mwsc_rn1d').innerHTML = rnwl1
document.getElementById('mwsc_rn2d').innerHTML = rnwl2
document.getElementById('mwsc_rn3d').innerHTML = rnwl3
document.getElementById('mwsc_rn4d').innerHTML = rnwl4
document.getElementById('mwsc_rn5d').innerHTML = rnwl5
document.getElementById('mwsc_rn6d').innerHTML = rnwl6
document.getElementById('mwsc_rn7d').innerHTML = rnwl7

document.getElementById('mwsc_dplmt1d').innerHTML = dplmt1
document.getElementById('mwsc_dplmt2d').innerHTML = dplmt2
document.getElementById('mwsc_dplmt3d').innerHTML = dplmt3
document.getElementById('mwsc_dplmt4d').innerHTML = dplmt4
document.getElementById('mwsc_dplmt5d').innerHTML = dplmt5
document.getElementById('mwsc_dplmt6d').innerHTML = dplmt6
document.getElementById('mwsc_dplmt7d').innerHTML = dplmt7

document.getElementById('mwsc_oev1d').innerHTML = oev1
document.getElementById('mwsc_oev2d').innerHTML = oev2
document.getElementById('mwsc_oev3d').innerHTML = oev3
document.getElementById('mwsc_oev4d').innerHTML = oev4
document.getElementById('mwsc_oev5d').innerHTML = oev5
document.getElementById('mwsc_oev6d').innerHTML = oev6
document.getElementById('mwsc_oev7d').innerHTML = oev7

document.getElementById('mwsc_fh1d').innerHTML = frhr1
document.getElementById('mwsc_fh2d').innerHTML = frhr2
document.getElementById('mwsc_fh3d').innerHTML = frhr3
document.getElementById('mwsc_fh4d').innerHTML = frhr4
document.getElementById('mwsc_fh5d').innerHTML = frhr5
document.getElementById('mwsc_fh6d').innerHTML = frhr6
document.getElementById('mwsc_fh7d').innerHTML = frhr7

document.getElementById('mwsc_stlnrcvrd1d').innerHTML = stlnrcvrd1
document.getElementById('mwsc_stlnrcvrd2d').innerHTML = stlnrcvrd2
document.getElementById('mwsc_stlnrcvrd3d').innerHTML = stlnrcvrd3
document.getElementById('mwsc_stlnrcvrd4d').innerHTML = stlnrcvrd4
document.getElementById('mwsc_stlnrcvrd5d').innerHTML = stlnrcvrd5
document.getElementById('mwsc_stlnrcvrd6d').innerHTML = stlnrcvrd6
document.getElementById('mwsc_stlnrcvrd7d').innerHTML = stlnrcvrd7

document.getElementById('mwsc_ros1d').innerHTML = rctvtn1
document.getElementById('mwsc_ros2d').innerHTML = rctvtn2
document.getElementById('mwsc_ros3d').innerHTML = rctvtn3
document.getElementById('mwsc_ros4d').innerHTML = rctvtn4
document.getElementById('mwsc_ros5d').innerHTML = rctvtn5 
document.getElementById('mwsc_ros6d').innerHTML = rctvtn6
document.getElementById('mwsc_ros7d').innerHTML = rctvtn7

// TOTAL
document.getElementById('mwsc_rn8d').innerHTML = rnwl1+rnwl2+rnwl3+rnwl4+rnwl5+rnwl6+rnwl7
document.getElementById('mwsc_dplmt8d').innerHTML = dplmt1+dplmt2+dplmt3+dplmt4+dplmt5+dplmt6+dplmt7
document.getElementById('mwsc_oev8d').innerHTML = oev1+oev2+oev3+oev4+oev5+oev6+oev7
document.getElementById('mwsc_fh8d').innerHTML = frhr1+frhr2+frhr3+frhr4+frhr5+frhr6+frhr7
document.getElementById('mwsc_stlnrcvrd8d').innerHTML = stlnrcvrd1+stlnrcvrd2+stlnrcvrd3+stlnrcvrd4+stlnrcvrd5+stlnrcvrd6+stlnrcvrd7
document.getElementById('mwsc_ros8d').innerHTML = rctvtn1+rctvtn2+rctvtn3+rctvtn4+rctvtn5+rctvtn6+rctvtn7

document.getElementById('ttl1d').innerHTML = ttl1
document.getElementById('ttl2d').innerHTML = ttl2
document.getElementById('ttl3d').innerHTML = ttl3
document.getElementById('ttl4d').innerHTML = ttl4
document.getElementById('ttl5d').innerHTML = ttl5
document.getElementById('ttl6d').innerHTML = ttl6
document.getElementById('ttl7d').innerHTML = ttl7
document.getElementById('ttl8d').innerHTML = ttl1+ttl2+ttl3+ttl4+ttl5+ttl6+ttl7