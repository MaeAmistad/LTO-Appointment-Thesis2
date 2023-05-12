

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

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;       
document.getElementById("dte").value = today;

var tbody = document.getElementById('tbody1'); 

    const querySnapshot2 = await getDocs(collection(db,"Applicants"));
        querySnapshot2.forEach(doc2 => {
// 
if(doc2.data().User_TT == "LICENSING"){
    if(doc2.data().User_Laa == "DRIVER'S LICENSE" ){
        if(doc2.data().User_AT == "NEW"){
            if (doc2.data().User_Stat == "COMPLETED" ){
                let trow = document.createElement('tr'); 
                let t_ID = document.createElement('td'); 
                let td1 = document.createElement('td'); 
                let td2 = document.createElement('td'); 
                let td3 = document.createElement('td');
                let td4 = document.createElement('td'); 

                t_ID.innerHTML = doc2.data().User_TransID; 
                td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                td2.innerHTML = doc2.data().User_TT;
                td3.innerHTML = doc2.data().User_D;
                td4.innerHTML = doc2.data().User_T;

                trow.appendChild(t_ID);
                trow.appendChild(td1);
                trow.appendChild(td2);
                trow.appendChild(td3);
                trow.appendChild(td4);

                tbody.appendChild(trow);

                trow.addEventListener('click', (e) =>{
                    trow.style.backgroundColor = 'rgb(218, 216, 216)';
                    localStorage.setItem('stat',doc2.data().User_TransID)    
                    localStorage.setItem('ID', doc2.id)

                    window.location = "a_reqdataex.html";
                });
                
                }
        }
        else if(doc2.data().User_AT == "ADDITIONAL DL CODE OR CATEGORY"){
            if (doc2.data().User_Stat == "COMPLETED" ){
                let trow = document.createElement('tr'); 
                let t_ID = document.createElement('td'); 
                let td1 = document.createElement('td'); 
                let td2 = document.createElement('td'); 
                let td3 = document.createElement('td');
                let td4 = document.createElement('td'); 

                t_ID.innerHTML = doc2.data().User_TransID; 
                td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                td2.innerHTML = doc2.data().User_TT;
                td3.innerHTML = doc2.data().User_D;
                td4.innerHTML = doc2.data().User_T;

                trow.appendChild(t_ID);
                trow.appendChild(td1);
                trow.appendChild(td2);
                trow.appendChild(td3);
                trow.appendChild(td4);

                tbody.appendChild(trow);

                trow.addEventListener('click', (e) =>{
                    trow.style.backgroundColor = 'rgb(218, 216, 216)';
                    localStorage.setItem('stat',doc2.data().User_TransID)    
                    localStorage.setItem('ID', doc2.id)

                    window.location = "a_reqdataex.html";
                });
                
                }
        }
        else if(doc2.data().User_AT == "CHANGE OF DL CLASSIFICATION"){
            if (doc2.data().User_Stat == "COMPLETED" ){
                let trow = document.createElement('tr'); 
                let t_ID = document.createElement('td'); 
                let td1 = document.createElement('td'); 
                let td2 = document.createElement('td'); 
                let td3 = document.createElement('td');
                let td4 = document.createElement('td'); 

                t_ID.innerHTML = doc2.data().User_TransID; 
                td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                td2.innerHTML = doc2.data().User_TT;
                td3.innerHTML = doc2.data().User_D;
                td4.innerHTML = doc2.data().User_T;

                trow.appendChild(t_ID);
                trow.appendChild(td1);
                trow.appendChild(td2);
                trow.appendChild(td3);
                trow.appendChild(td4);

                tbody.appendChild(trow);

                trow.addEventListener('click', (e) =>{
                    trow.style.backgroundColor = '#254894c0';
                    trow.style.color = "white";
                    localStorage.setItem('stat',doc2.data().User_AppID)    
                    localStorage.setItem('ID', doc2.id)
    
                    window.location = "a_reqdataex.html";
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
    }

    else if( doc2.data().User_Laa == "CONDUCTOR'S LICENSE" && doc2.data().User_AT == "NEW"){
        if (doc2.data().User_Stat == "COMPLETED" ){
            let trow = document.createElement('tr'); 
            let t_ID = document.createElement('td'); 
            let td1 = document.createElement('td'); 
            let td2 = document.createElement('td'); 
            let td3 = document.createElement('td');
            let td4 = document.createElement('td'); 

            t_ID.innerHTML = doc2.data().User_TransID; 
            td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
            td2.innerHTML = doc2.data().User_TT;
            td3.innerHTML = doc2.data().User_D;
            td4.innerHTML = doc2.data().User_T;

            trow.appendChild(t_ID);
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);

            tbody.appendChild(trow);

            trow.addEventListener('click', (e) =>{
                trow.style.backgroundColor = '#254894c0';
                trow.style.color = "white";
                localStorage.setItem('stat',doc2.data().User_AppID)    
                localStorage.setItem('ID', doc2.id)

                window.location = "a_reqdataex.html";
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
  } 
});