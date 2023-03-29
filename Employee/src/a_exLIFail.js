
comp_btn.addEventListener('click',(e) => {
    window.location = "a_exLIPass.html";
});

incomp_btn.addEventListener('click',(e) => {
    window.location = "a_exLIFail.html";
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
 


//get all data
  const querySnapshot2 = await getDocs(collection(db,"Appointment"));
  var tbody = document.getElementById('tbody1');

      querySnapshot2.forEach(doc2 => {
//  
        if(doc2.data().User_Stat == "FAILED" && doc2.data().User_TT == "LICENSING"){

                if (doc2.data().User_AT == "REVISION OF RECORDS"){
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

                        window.location = "a_reqdata2.html";
                    });

                }
                else{
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

                        window.location = "a_reqdata2.html";
                    });
                }

        }

      });



        // export function user(){

        // }