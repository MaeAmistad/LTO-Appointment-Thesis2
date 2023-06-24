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

const mv = await getDocs(collection(db,"Motor Vehicle")); 

// ROW 1
let row1_1 = 0;
let row1_2 = 0;
let row1_3 = 0;
let row1_4 = 0;
let row1_5 = 0;
let row1_6 = 0;
let row1_7 = 0;

// ROW 2
let row_1 = 0;
let row2_2 = 0;
let row2_3 = 0;
let row2_4 = 0;
let row2_5 = 0;
let row2_6 = 0;
let row2_7 = 0;

// ROW 3
let row3_1 = 0;
let row3_2 = 0;
let row3_3 = 0;
let row3_4 = 0;
let row3_5 = 0;
let row3_6 = 0;
let row3_7 = 0;

// ROW 4
let row4_1 = 0;
let row4_2 = 0;
let row4_3 = 0;
let row4_4 = 0;
let row4_5 = 0;
let row4_6 = 0;
let row4_7 = 0;

// ROW 5
let row5_1 = 0;
let row5_2 = 0;
let row5_3 = 0;
let row5_4 = 0;
let row5_5 = 0;
let row5_6 = 0;
let row5_7 = 0;

// ROW 6
let row6_1 = 0;
let row6_2 = 0;
let row6_3 = 0;
let row6_4 = 0;
let row6_5 = 0;
let row6_6 = 0;
let row6_7 = 0;

// ROW 7
let row7_1 = 0;
let row7_2 = 0;
let row7_3 = 0;
let row7_4 = 0;
let row7_5 = 0;
let row7_6 = 0;
let row7_7 = 0;

// ROW 8
let row8_1 = 0;
let row8_2 = 0;
let row8_3 = 0;
let row8_4 = 0;
let row8_5 = 0;
let row8_6 = 0;
let row8_7 = 0;