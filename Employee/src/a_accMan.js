import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, setDoc, doc, collection, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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

// FINAL
var tbody = document.getElementById('tbody1');

const querySnapshot = await getDocs(collection(db, "Users", "Employee", "EmployeeData"));
  querySnapshot.forEach(doc => {

    if(doc.data().user_Status == "Enabled"){
      var trow = document.createElement('tr'); 
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td'); 
      let td4 = document.createElement('td'); 
      let td5 = document.createElement('td');
      let td6 = document.createElement('td');
      let td7 = document.createElement('td'); 

      td1.innerHTML = doc.data().user_LN;
      td2.innerHTML = doc.data().user_FN;
      td3.innerHTML = doc.data().user_MN;
      td4.innerHTML = doc.data().user_Type;
      td5.innerHTML = doc.data().user_EID;
      td6.innerHTML = doc.data().user_E;
      td7.innerHTML = doc.data().user_PWD;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      trow.appendChild(td5);
      trow.appendChild(td6);
      trow.appendChild(td7);

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

                document.getElementById("edit_acc").disabled = false;
                document.getElementById("delete_acc").disabled = false;

                document.getElementById('lname-edit').value = doc.data().user_LN;
                document.getElementById('fname-edit').value = doc.data().user_FN;
                document.getElementById('mname-edit').value = doc.data().user_MN;
                document.getElementById('position-edit').value = doc.data().user_Type;
                document.getElementById('id-edit').value = doc.data().user_EID;
                document.getElementById('email-edit').value = doc.data().user_E;
                document.getElementById('pass-edit').value = doc.data().user_PWD; 
        }
        
      }
    });

    }
  });

// window.onload = GetAllDataOnce;

document.getElementById("edit_acc").disabled = true;
document.getElementById("delete_acc").disabled = true;


// FOR CREATE MODAL INPUT - FINAL
const modalAdd = document.getElementById('user-modal');
const modalEdit = document.getElementById('edit-modal');
const openModal = document.querySelector('.add_acc');
const editModal = document.querySelector('.edit_acc')
const closeModal = document.querySelector('.close-modal');
const closeModalEdit = document.querySelector('.close-modal-edit');



// ADD AND EDIT MODAL - FINAL
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

// FOR CREATE MODAL INPUT - FINAL
const form = document.getElementById('form');
const last_name = document.getElementById('lname');
const first_name = document.getElementById('fname');
const middle_name = document.getElementById('mname');
const emp_IDa = document.getElementById('emp_id');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const cpass = document.getElementById('cpass');

// FOR EDIT MODAL INPUT
const editForm = document.getElementById('form-edit');
const lname = document.getElementById('lname-edit');
const fname = document.getElementById('fname-edit');
const mname = document.getElementById('mname-edit');
const position = document.getElementById('position-edit');
const idEmp = document.getElementById('id-edit');
const emaill = document.getElementById('email-edit');
const passs = document.getElementById('pass-edit');
const cpasss = document.getElementById('cpass-edit');

// FOR EDIT MODAL CONFIRMATION - FINAL
const confirmation = document.getElementById('cnfrm_modal_edit')
const cancel = document.querySelector('.cnl')

cancel.addEventListener('click', () => {
    confirmation.style.display = 'none'
    modalEdit.style.display = 'block';
});


// GET TYPE OF EMPLOYEE - VALUE --- FINAL
var user = document.querySelectorAll("input[name='emp']");
var selected ;
function findSelected(){
   selected = document.querySelector("input[name='emp']:checked").value;
}
findSelected(); 
user.forEach(users => {
  users.addEventListener("change", findSelected);
});

//Show Error Message for create - FINAL
function showError(input, message){
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation error'

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}

//show valid message for create - FINAL
function showValid(input){
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation valid'
}

//Show Error Message for edit - FINAL
function showErrorEdit(input, message){
  const formValidation = input.parentElement;
  formValidation.className = 'edit-info error'

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}

//show valid message for edit - FINAL
function showValidEdit(input){
  const formValidation = input.parentElement;
  formValidation.className = 'edit-info valid'
}

// FINAL
const letters = /^[A-Za-z\s]*$/;
const numbers = /[0-9]{11}/g;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const position1 = 'CASHIER'
const position2 = 'EVALUATOR'
const position3 = 'EXAMINER'
const position4 = 'INSPECTOR'
const position5 = 'SYSTEM ADMINISTRATOR'

//FieldName Error input - FINAL
function getFieldName(input){
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Event listener for create account button - FINAL
form.addEventListener('submit',(e) =>{
  e.preventDefault();


  //validationForm();
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
  // else if(last_name.value.match(letters)){
  //   showValid(last_name);
  // }

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
  // else if(first.value.match(letters)){
  //   showValid(first_name);
  // }

//MIDDLE NAME
  else if(!middle_name.value.match(letters) ){
    showError(middle_name, 'Please enter alphabet only');
  }
  else if(middle_name.value.match(numbers)){
    showError(middle_name, 'Please enter alphabet only');
  }
  // else if(middle_name.value === ''){
  //   showValid(middle_name);
  // }

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
  else if(emp_IDa.value.length < 15){
    showError(emp_IDa, `${getFieldName(emp_IDa)} must be ${15} numbers`);
  }
  else if(emp_IDa.value.length > 15){
    showError(emp_IDa, `${getFieldName(emp_IDa)} must be ${15} numbers only`);
  }
  // else if(emp_IDa.value.length == 15){
  //   showValid(emp_IDa);
  // }


  //Email
  else if(email.value.trim() === ''){
    showError(email, `${getFieldName(email)} is required`)
  }
  // else if(email.value.match(re)){
  //   showValid(email);
  // }

  //Password Length 
  else if(pass.value.length < 8){
    showError(pass, `${getFieldName(pass)} must be at least ${8} characters`);
  }
  // else if(pass.value.length >= 8){
  //   showValid(pass);
  // }
  
  // Password Match
  else if(pass.value !== cpass.value){
    showError(cpass, 'Password do not match')
  }
  // else if(pass.value == cpass.value){
  //   showValid(cpass);
  // }
  else{
    showValid(last_name);
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
            user_EID: emp_IDa.value,
            user_Status: "Enabled"
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
            user_EID: emp_IDa.value,
            user_Status: "Enabled"
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
            user_EID: emp_IDa.value,
            user_Status: "Enabled"
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
            user_EID: emp_IDa.value,
            user_Status: "Enabled"
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
            user_EID: emp_IDa.value,
            user_Status: "Enabled"
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


});  
   

//Event listener for edit account button - FINAL
editForm.addEventListener('submit',(e) =>{
  e.preventDefault();

      // LAST NAME
      if(!lname.value.match(letters) ){
        showErrorEdit(lname, 'Please enter alphabet only');
      }
      else if(lname.value.match(numbers)){
        showErrorEdit(lname, 'Please enter alphabet only');
      }
      else if(lname.value === ''){
        showErrorEdit(lname, `${getFieldName(lname)} is required`);
      }

      // // FIRST NAME
      else if(!fname.value.match(letters) ){
        showErrorEdit(fname, 'Please enter alphabet only');
      }
      else if(fname.value.match(numbers)){
        showErrorEdit(fname, 'Please enter alphabet only');
      }
      else if(fname.value === ''){
        showErrorEdit(fname, `${getFieldName(fname)} is required`);
      }

      // MIDDLE NAME
      else if(!mname.value.match(letters) ){
        showErrorEdit(mname, 'Please enter alphabet only');
      }
      else if(mname.value.match(numbers)){
        showErrorEdit(mname, 'Please enter alphabet only');
      }

      // // POSITION
      else if(!position.value.match(letters) ){
        showErrorEdit(position, 'Please enter alphabet only');
      }
      else if(position.value.match(numbers)){
        showErrorEdit(position, 'Please enter alphabet only');
      }
      else if(position.value === ''){
        showErrorEdit(position, 'Please enter position')
      }
      // else if(position.value !== position1 || position.value !== position2 || position.value !== position3 || position.value !== position4 || position.value !== position5){
      //   showErrorEdit(position, 'Position is invalid')
      // }

      
      //EMPLOYEE ID
      else if(!idEmp.value.match(numbers) ){
        showErrorEdit(idEmp, 'Please enter numbers only');
      }
      else if(idEmp.value.match(letters)){
        showErrorEdit(idEmp, 'Please enter numbers only');
      }
      else if(idEmp.value === ''){
        showErrorEdit(idEmp, `${getFieldName(idEmp)} is required`)
      }
      else if(idEmp.value.length < 15){
        showErrorEdit(idEmp, `${getFieldName(idEmp)} must be ${15} numbers`);
      }
      else if(idEmp.value.length > 15){
        showErrorEdit(idEmp, `${getFieldName(idEmp)} must be ${15} numbers only`);
      }

       //Email
       else if(emaill.value.trim() === ''){
        showErrorEdit(emaill, `${getFieldName(emaill)} is required`)
      }

      //Password Length 
      else if(passs.value.length < 8){
        showErrorEdit(passs, `${getFieldName(passs)} must be at least ${8} characters`);
      }

      //Confirm Password
      else if(cpasss.value.trim() === ''){
        showErrorEdit(cpasss, `${getFieldName(cpasss)} is required`)
      }
      else if(cpasss.value !== passs.value){
        showErrorEdit(cpasss, 'Password not matched');
      }
      else{
        showValidEdit(lname);
        showValidEdit(fname);
        showValidEdit(mname);
        showValidEdit(position);
        showValidEdit(idEmp);
        showValidEdit(emaill);
        showValidEdit(passs);
        showValidEdit(cpasss);

        confirmation.style.display = 'block';
        modalEdit.style.display = 'none';
        
      }       

     
      
});

//FINAL
const querySnapshot2 = await getDocs(collection(db,"Users","Employee", "EmployeeData"));
querySnapshot2.forEach(doc2 => {   

      cnfrm.addEventListener('click', (e) => {
      const updateStat = doc(db, "Users","Employee", "EmployeeData" , doc2.id)
      var userID = localStorage.getItem("ID")

      if(userID == doc2.id){
        updateDoc(updateStat, {
            user_LN: lname.value.toUpperCase(),
            user_FN: fname.value.toUpperCase(),
            user_MN: mname.value.toUpperCase(),
            user_Type: position.value.toUpperCase(),
            user_EID: idEmp.value,
            user_E: emaill.value.toUpperCase(),
            user_PWD: passs.value
        }).then(() => {
          confirmation.style.display = 'none'
          window.location = "a_accMan.html"
        })
      }

      });

      cnfrm2.addEventListener('click', (e) => {
        const updateStat = doc(db, "Users","Employee", "EmployeeData" , doc2.id)
        var userID = localStorage.getItem("ID")

        if(userID == doc2.id){
          updateDoc(updateStat, {
            user_Status: "Disabled"
          }).then(() => {
            window.location = "a_accMan.html"
          })
        }

      }); 
    
    }); 

    
// Event Listener for delete account button - FINAL
delete_acc.addEventListener('click', () => {
  document.getElementById('delete_acc_modal').style.visibility = "visible";
});
cnl2.addEventListener('click', (e) => {
  document.getElementById('delete_acc_modal').style.visibility = "hidden";
  window.location = "a_accMan.html"
});
