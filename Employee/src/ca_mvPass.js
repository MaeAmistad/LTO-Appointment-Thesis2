bck_AL.addEventListener('click',(e) => {
    window.location = "ca_homepage.html";
});
incomp_btn.addEventListener('click',(e) => {
    window.location = "ca_mvIncomp.html";
});
pssexm_btn.addEventListener('click',(e) => {
    window.location = "ca_mvPass.html"; 
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
  const querySnapshot2 = await getDocs(collection(db,"Applicants"));
  var tbody = document.getElementById('tbody1');

      querySnapshot2.forEach(doc2 => {
//  
        if(doc2.data().User_Stat4 == "REGISTERED" && doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION"){

                    let trow = document.createElement('tr'); 
                    let t_ID = document.createElement('td'); 
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td'); 
                    let td4 = document.createElement('td'); 
                    let td9 = document.createElement('td'); 
                    let td10 = document.createElement('td'); 
                    let td11 = document.createElement('td'); 
                    let td12 = document.createElement('td'); 
                    let td13 = document.createElement('td'); 
                    let td14 = document.createElement('td');

                    t_ID.innerHTML = doc2.data().User_TransID; 
                    td1.innerHTML = doc2.data().User_OR
                    td2.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                    td3.innerHTML = doc2.data().User_BD;
                    td4.innerHTML = doc2.data().User_GN;
                    td9.innerHTML = doc2.data().User_ADD;
                    td10.innerHTML = doc2.data().User_D;
                    td11.innerHTML = doc2.data().User_T;
                    td12.innerHTML = doc2.data().User_CN;
                    td13.innerHTML = doc2.data().User_E;
                    td14.innerHTML ='<a href= "' + "a_accMan.html" + '>' + "view details" + '</a>';
                    

                    trow.appendChild(t_ID);
                    trow.appendChild(td1);
                    trow.appendChild(td2);
                    trow.appendChild(td3);
                    trow.appendChild(td4);
                    trow.appendChild(td9);
                    trow.appendChild(td10);
                    trow.appendChild(td11);
                    trow.appendChild(td12);
                    trow.appendChild(td13);
                    trow.appendChild(td14);

                    tbody.appendChild(trow);
                }
      
      });
