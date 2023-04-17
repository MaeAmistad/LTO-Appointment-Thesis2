// add_acc.addEventListener('click' ,(e) => {
//     window.location = "a_signup.html";
// })

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
//  import { create } from "domain";
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
const auth = getAuth();

var tbody = document.getElementById('tbody1');

function AddItemToTable(user_LN, user_FN, user_MN, user_Type, user_EID, user_E, user_PWD){

    var trow = document.createElement('tr'); 
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

window.onload = GetAllDataOnce;

// var table = document.getElementById("table");
// var rows = document.getElementsByTagName('tr');
// for(i = 1; i < rows.length; i++){
//   rows[i].onclick = function(){
//     console.log("working")
//   }
// }

//document.getElementById("edit_acc").disabled = true;
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

// MODAL ITEMS
const modalAdd = document.getElementById('user-modal');
const modalEdit = document.getElementById('edit-modal');
const openModal = document.querySelector('.add_acc');
const editModal = document.querySelector('.edit_acc')
const closeModal = document.querySelector('.close-modal');
const closeModalEdit = document.querySelector('.close-modal-edit');

openModal.addEventListener('click', () => {
  modalAdd.style.display = 'block';
});
closeModal.addEventListener('click', () => {
  modalAdd.style.display = 'none';
});
editModal.addEventListener('click', () => {
  modalEdit.style.display = 'block';
});
closeModalEdit.addEventListener('click', () => {
  modalEdit.style.display = 'none';
});

// window.addEventListener('click', (e) => {
//   if(e.target === modal){
//     modal.style.display = 'none';
//   }
// });

// FORM VALIDATION
//BLURRED BACKGROUND
function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');

  var popup = document.getElementById('user-modal');
  popup.classList.toggle('active');

  console.log("nice");
}

const form = document.getElementById('form');
const last_name = document.getElementById('lname');
const first_name = document.getElementById('fname');
const middle_name = document.getElementById('mname');
const emp_IDa = document.getElementById('emp_id');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const cpass = document.getElementById('cpass');

var user = document.querySelectorAll("input[name='emp']");

var selected ;
function findSelected(){
   selected = document.querySelector("input[name='emp']:checked").value;
   //console.log(selected)
}
findSelected();
//console.log(selected)
 

user.forEach(users => {
  users.addEventListener("change", findSelected);
});

//Show Error Message
function showError(input, message){
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation error'

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}

//show valid
function showValid(input){
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation valid'
}

//Letters only input

const letters = /^[A-Za-z\s]*$/;
const numbers = /[0-9]{11}/g;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//fieldName 
function getFieldName(input){
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function validationForm(){
  //FOR EMPLOYEE TYPE 

  // LAST NAME
    if(!last_name.value.match(letters) ){
      showError(last_name, 'Please enter alphabet only');
    }
    else if(last_name.value.match(numbers)){
      showError(last_name, 'Please enter alphabet only');
    }
    else if(last_name.value === ''){
      showError(last_name, `${getFieldName(last_name)} is required`)
    }
  
  //FIRST NAME
    else if(!first_name.value.match(letters) ){
      showError(first_name, 'Please enter alphabet only');
    }
    else if(first_name.value.match(numbers)){
      showError(first_name, 'Please enter alphabet only');
    }
    else if(first_name.value === ''){
      showError(first_name, `${getFieldName(first_name)} is required`)
    }
  
  //MIDDLE NAME
    else if(!middle_name.value.match(letters) ){
      showError(middle_name, 'Please enter alphabet only');
    }
    else if(middle_name.value.match(numbers)){
      showError(middle_name, 'Please enter alphabet only');
    }

  //EMPLOYEE ID
    else if(!emp_IDa.value.match(numbers) ){
      showError(emp_IDa, 'Please enter numbers only');
    }
    else if(emp_IDa.value.match(letters)){
      showError(emp_IDa, 'Please enter numbers only');
    }
    else if(emp_IDa.value === ''){
      showError(emp_IDa, `${getFieldName(emp_IDa)} is required`)
    }

    //Email
    else if(email.value.trim() === ''){
      showError(email, `${getFieldName(email)} is required`)
    }

    //Password Length 
    else if(pass.value.length< 8){
      showError(pass, `${getFieldName(pass)} must be at least ${8} characters`);
    }
    
    // Password Match
    else if(pass.value !== cpass.value){
      showError(cpass, 'Password do not match')
    }
    else{
      showValid(last_name) 
      showValid(first_name);
      showValid(middle_name);
      showValid(emp_IDa);
      showValid(email);
      showValid(pass);
      showValid(cpass);
   
      if(selected == 'evaluator'){
      //console.log("Evaluator");

        createUserWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "Users", "Employee", "EmployeeData", user.uid), {
              user_Type: "EVALUATOR",
              user_LN: last_name.value.toUpperCase(),
              user_FN: first_name.value.toUpperCase(),
              user_MN: middle_name.value.toUpperCase(),
              user_E: email.value.toUpperCase(),
              user_PWD: pass.value,
              user_EID: emp_IDa.value
            })
        sendEmailVerification(auth.currentUser)
        .then(() => {
          Swal.fire({
            title: '<strong> An email has been sent please verify.</strong>',
            showCloseButton: true,
            focusConfirm: false,
            reverseButtons: true,
            focusCancel: true,
            confirmButtonColor: '#132aaa',
            confirmButtonText:`OK`
          }).then((result) => {
            if(result.value){
              console.log("User Created for evaluator")
              modalAdd.style.display = 'none';
              toggle();
            }
          });
        });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
          //console.log("User Created"); 
      }

      else if(selected == 'cashier'){
        //console.log("Cashier");

        createUserWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "Users", "Employee", "EmployeeData", user.uid), {
              user_Type: "CASHIER",
              user_LN: last_name.value.toUpperCase(),
              user_FN: first_name.value.toUpperCase(),
              user_MN: middle_name.value.toUpperCase(),
              user_E: email.value.toUpperCase(),
              user_PWD: pass.value,
              user_EID: emp_IDa.value
            })
        sendEmailVerification(auth.currentUser)
          .then(() => {
            Swal.fire({
            title: '<strong> An email has been sent please verify.</strong>',
            showCloseButton: true,
            focusConfirm: false,
            reverseButtons: true,
            focusCancel: true,
            confirmButtonColor: '#132aaa',
            confirmButtonText:`OK`
        }).then((result) => {
            if(result.value){
              console.log("User Created for cashier")
              modalAdd.style.display = 'none';
              toggle();
            }
        });
        });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
          //console.log("User Created");
      }

      else if(selected == 'examiner'){
        //console.log("Examiner");

        createUserWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "Users", "Employee", "EmployeeData", user.uid), {
              user_Type: "EXAMINER",
              user_LN: last_name.value.toUpperCase(),
              user_FN: first_name.value.toUpperCase(),
              user_MN: middle_name.value.toUpperCase(),
              user_E: email.value.toUpperCase(),
              user_PWD: pass.value,
              user_EID: emp_IDa.value
            })
            sendEmailVerification(auth.currentUser)
            .then(() => {
              Swal.fire({
                title: '<strong> An email has been sent please verify.</strong>',
                showCloseButton: true,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                confirmButtonColor: '#132aaa',
                confirmButtonText:`OK`
              }).then((result) => {
                if(result.value){
                  console.log("User Created for examiner")
                  modalAdd.style.display = 'none';
                  toggle();
                }
              });
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage);
          });  
          //console.log("User Created");     
      }
      else if(selected == 'inspector'){
        //console.log("Inspector");

        createUserWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "Users", "Employee", "EmployeeData", user.uid), {
              user_Type: "INSPECTOR",
              user_LN: last_name.value.toUpperCase(),
              user_FN: first_name.value.toUpperCase(),
              user_MN: middle_name.value.toUpperCase(),
              user_E: email.value.toUpperCase(),
              user_PWD: pass.value,
              user_EID: emp_IDa.value
            })
            sendEmailVerification(auth.currentUser)
            .then(() => {
              Swal.fire({
                title: '<strong> An email has been sent please verify.</strong>',
                showCloseButton: true,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                confirmButtonColor: '#132aaa',
                confirmButtonText:`OK`
              }).then((result) => {
                if(result.value){
                  console.log("User Created for inspector")
                  modalAdd.style.display = 'none';
                  toggle();
                }
              });
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage);
          });  
          //console.log("User Created");     
      }
      else if(selected == 'admin'){
        // console.log("Admin");

        createUserWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "Users", "Employee", "EmployeeData", user.uid), {
              user_Type: "SYSTEM ADMINISTRATOR",
              user_LN: last_name.value.toUpperCase(),
              user_FN: first_name.value.toUpperCase(),
              user_MN: middle_name.value.toUpperCase(),
              user_E: email.value.toUpperCase(),
              user_PWD: pass.value,
              user_EID: emp_IDa.value
            })
            sendEmailVerification(auth.currentUser)
        .then(() => {
          Swal.fire({
            title: '<strong> An email has been sent please verify.</strong>',
            showCloseButton: true,
            focusConfirm: false,
            reverseButtons: true,
            focusCancel: true,
            confirmButtonColor: '#132aaa',
            confirmButtonText:`OK`
          }).then((result) => {
            if(result.value){
              console.log("User Created for admin")
              modalAdd.style.display = 'none';
              toggle();
            }
          });
        });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage);
          });    
          //console.log("User Created");        
      }
    }

}



//Event listener for create account button
form.addEventListener('submit',(e) =>{
  e.preventDefault();

  validationForm();

});

// password.onfocus = function() {
//   document.getElementById("error1").style.display = "block";
//  }

// password.onblur = function() {
//   document.getElementById("error1").style.display = "none";
//   document.getElementById("lowercase").style.display = "none";
//   document.getElementById("uppercase").style.display = "none";
//   document.getElementById("num").style.display = "none";
//   document.getElementById("length").style.display = "none";
//   document.getElementById("spclchrctr").style.display = "none";
//  }

// password.onkeyup = function() {
//   var upperCaseLetters = /[A-Z]/g;
//   var lowerCaseLetters = /[a-z]/g;
//   var numbers = /[0-9]/g;
//   var spclchrctr = /[!@#$%^&*]/g;
  
//   document.getElementById("error1").style.display = "none";

//   if(!password.value.match(lowerCaseLetters)) {  
//       document.getElementById("lowercase").style.display = "block";
//       document.getElementById("uppercase").style.display = "none";
//       document.getElementById("num").style.display = "none";
//       document.getElementById("length").style.display = "none";
//       document.getElementById("spclchrctr").style.display = "none";
//   } 
//   else if(!password.value.match(upperCaseLetters)) {  
//       document.getElementById("uppercase").style.display = "block";
//       document.getElementById("lowercase").style.display = "none";
//       document.getElementById("num").style.display = "none";
//       document.getElementById("length").style.display = "none";
//       document.getElementById("spclchrctr").style.display = "none";
//   } 
//   else if(!password.value.match(numbers)) {  
//       document.getElementById("num").style.display = "block";
//       document.getElementById("lowercase").style.display = "none";
//       document.getElementById("uppercase").style.display = "none";
//       document.getElementById("length").style.display = "none";
//       document.getElementById("spclchrctr").style.display = "none";
//   }
//   else if(!password.value.match(spclchrctr)) {
//       document.getElementById("spclchrctr").style.display = "block";
//       document.getElementById("length").style.display = "none";
//       document.getElementById("lowercase").style.display = "none";
//       document.getElementById("uppercase").style.display = "none";
//       document.getElementById("num").style.display = "none";
//     }
//   else if(password.value.length < 8) {
//       document.getElementById("length").style.display = "block";
//       document.getElementById("lowercase").style.display = "none";
//       document.getElementById("uppercase").style.display = "none";
//       document.getElementById("num").style.display = "none";
//       document.getElementById("spclchrctr").style.display = "none";
//   } 
//   else{
//       document.getElementById("error1").style.display = "none";
//       document.getElementById("lowercase").style.display = "none";
//       document.getElementById("uppercase").style.display = "none";
//       document.getElementById("num").style.display = "none";
//       document.getElementById("length").style.display = "none";
//       document.getElementById("spclchrctr").style.display = "none";
//   }
//   }
                    