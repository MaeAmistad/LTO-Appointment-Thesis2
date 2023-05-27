

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
var dte = document.getElementById("dte");
// date today
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;       
document.getElementById("dte").value = today;

    const querySnapshot2 = await getDocs(collection(db,"Applicants"));
        querySnapshot2.forEach(doc2 => {

            var dd = doc2.data().User_D;
            var ddsp = dd.slice(0,2);
            var mmsp = dd.slice(3,5);
            var yysp = dd.slice(6,10);
            var dtcon = yysp + "-" + mmsp + "-" + ddsp;

            // var time = doc2.data().User_T;
            // var tsl = time.slice(6,9); 

            // console.log(tsl == "AM")
            // if (tsl == "AM"){
            //     console.log(doc2.data().User_T)
            // }
            // console.log(doc2.data().User_T.slice(6,8))&& dte.value == dtcon|| doc2.data().User_Stat == "APPROVED" 

            if(today == dtcon){
                 if (doc2.data().User_TT == "LICENSING"){
                if (doc2.data().User_Stat == "PENDING"){
                    let trow = document.createElement('tr'); 
                    let t_ID = document.createElement('td'); 
                    let td1 = document.createElement('td'); 
                    let td5 = document.createElement('td'); 
                    let td7 = document.createElement('td');
                    let td8 = document.createElement('td'); 

                    t_ID.innerHTML = doc2.data().User_AppID; 
                    td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                    td5.innerHTML = doc2.data().User_TT;
                    td7.innerHTML = doc2.data().User_D;
                    td8.innerHTML = doc2.data().User_T;
                    
                    trow.appendChild(t_ID);
                    trow.appendChild(td1);
                    trow.appendChild(td5); 
                    trow.appendChild(td7);
                    trow.appendChild(td8);
        
                    tbody.appendChild(trow);

                    trow.addEventListener('click', (e) =>{
                        trow.style.backgroundColor = '#254894c0';
                        trow.style.color = "white";
                        localStorage.setItem('stat',doc2.data().User_AppID)    
                        localStorage.setItem('ID', doc2.id)
                        // console.log("ggg")
                        window.location = "pc_reqdata.html";
                    });

                    trow.addEventListener('mouseover',function(){
                        trow.style.backgroundColor = 'rgb(218, 216, 216)';
                        trow.style.color = "black";
                     })
                     trow.addEventListener('mouseleave',function(){
                        trow.style.backgroundColor = "";
                        trow.style.color = "";
                     })
                } 
            }

            if (doc2.data().User_Stat == "APPROVED_TO_PROCEED"){
                let trow = document.createElement('tr'); 
                let t_ID = document.createElement('td'); 
                let td1 = document.createElement('td'); 
                let td5 = document.createElement('td'); 
                let td7 = document.createElement('td');
                let td8 = document.createElement('td'); 

                t_ID.innerHTML = doc2.data().User_AppID; 
                td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                td5.innerHTML = doc2.data().User_TT;
                td7.innerHTML = doc2.data().User_D;
                td8.innerHTML = doc2.data().User_T;
                
                trow.appendChild(t_ID);
                trow.appendChild(td1);
                trow.appendChild(td5);
                trow.appendChild(td7);
                trow.appendChild(td8);
    
                tbody.appendChild(trow);

                trow.addEventListener('click', (e) =>{
                    trow.style.backgroundColor = '#254894c0';
                    trow.style.color = "white";
                    localStorage.setItem('stat',doc2.data().User_AppID)    
                    localStorage.setItem('ID', doc2.id)
                    // console.log("ggg")
                    window.location = "pc_reqdata.html";
                });

                trow.addEventListener('mouseover',function(){
                    trow.style.backgroundColor = 'rgb(218, 216, 216)';
                    trow.style.color = "black";
                 })
                 trow.addEventListener('mouseleave',function(){
                    trow.style.backgroundColor = "";
                    trow.style.color = "";
                 })
            }
            }
}); 