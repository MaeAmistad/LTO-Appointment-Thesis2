import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, getDoc, setDoc, doc, collection, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


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
const auth = getAuth();
const built_in_acc = doc(db, "Users", "DevelopersAccount");
const docSnap = await getDoc(built_in_acc);

// FINAL
var tbody = document.getElementById('tbody1');

const querySnapshot = await getDocs(collection(db, "Users", "Employee", "EmployeeData"));
  querySnapshot.forEach(doc => {

    if(doc.data().user_Status == "Inactive"){
      var trow = document.createElement('tr'); 
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td'); 
      let td4 = document.createElement('td'); 
      let td5 = document.createElement('td');
      let td6 = document.createElement('td');

      td1.innerHTML = doc.data().user_DeletedBy;
      td2.innerHTML = doc.data().user_LN + " " + doc.data().user_FN + " " + doc.data().user_MN;
      td3.innerHTML = doc.data().user_Type;
      td4.innerHTML = doc.data().user_EID;
      td5.innerHTML = doc.data().user_E;
      td6.innerHTML = doc.data().user_DeletedDate;
      

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      trow.appendChild(td5);
      trow.appendChild(td6);


      tbody.appendChild(trow);


      trow.addEventListener('click', (e) =>{

        localStorage.setItem('ID', doc.id)
        //console.log(doc.id)

        //HIGHLIGHT TABLE ROW WHEN CLICKED - FINAL
        var table = document.getElementById("table");
        var rows = document.getElementsByTagName('tr');
        for(i = 1; i < rows.length; i++){
          var currentRow = table.rows[i];
          currentRow.onclick = function(){
            Array.from(this.parentElement.children).forEach(function(el){
              el.classList.remove('selected-row');
              
            });

            // [...this.parentElement.children].forEach((el) => el.classList.remove('selected-row'));
            this.classList.add('selected-row');

                document.getElementById("enabled").disabled = false;

                
        }
        
      }
    });

    }
  });

// window.onload = GetAllDataOnce;

document.getElementById("enabled").disabled = true; 

enabled.addEventListener('click', () => {
    document.getElementById('cnfrm_modal_enable').style.visibility = "visible";
});
cnl.addEventListener('click', (e) => {
    document.getElementById('cnfrm_modal_enable').style.visibility = "hidden";
  });

const querySnapshot2 = await getDocs(collection(db,"Users","Employee", "EmployeeData"));
querySnapshot2.forEach(doc2 => {   

      cnfrm.addEventListener('click', (e) => {
      const updateStat = doc(db, "Users","Employee", "EmployeeData" , doc2.id)
      var userID = localStorage.getItem("ID")

      if(userID == doc2.id){
        updateDoc(updateStat, {
            user_Status: "Active",
            user_DeletedBy: "",
            user_DeletedDate: ""
        }).then(() => {
          window.location = "a_accArchives.html"
        })
      }

      });

    
    }); 
