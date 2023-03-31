// add_acc.addEventListener('click' ,(e) => {
//     window.location = "a_signup.html";
// })
add_acc.addEventListener('click',() => {
    document.getElementById('createAcc_modal').style.visibility = "visible"

});
closePop.addEventListener('click',() => {
    document.getElementById('createAcc_modal').style.visibility = "hidden"

});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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

function AddItemToTable(user_LN, user_FN, user_MN, user_Type, user_EID, user_E, user_PWD){

    let trow = document.createElement('tr'); 
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td'); 
    let td4 = document.createElement('td'); 
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td'); 

    td1.innerHTML = user_LN;
    td2.innerHTML = user_FN;
    td3.innerHTML = user_MN;
    td4.innerHTML = user_Type;
    td5.innerHTML = user_EID;
    td6.innerHTML = user_E;
    td7.innerHTML = user_PWD;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    tbody.appendChild(trow);
}

function AddAllItemsToTable (Transact){
    tbody.innerHTML="";

    Transact.forEach(element => {
        AddItemToTable(element.user_LN, element.user_FN, element.user_MN, element.user_Type, element.user_EID, element.user_E, element.user_PWD);

    });
}
//get all data
    
async function GetAllDataOnce(){
    const querySnapshot = await getDocs(collection(db,"Users","Employee", "EmployeeData"));

    var transation = [];

    querySnapshot.forEach(doc => {
        transation.push(doc.data());
    });

    AddAllItemsToTable(transation);

}

window
.onload = GetAllDataOnce;

document.getElementById("edit_acc").disabled = true;
document.getElementById("delete_acc").disabled = true;

/*
trow.addEventListener('click', (e) =>{
    document.getElementById("edit_acc").disabled = false;
    document.getElementById("delete_acc").disabled = false;
});

if (trow.click()){
    document.getElementById("edit_acc").disabled = false;
    document.getElementById("delete_acc").disabled = false;
    trow.style.backgroundColor = 'gainsboro';
}
*/