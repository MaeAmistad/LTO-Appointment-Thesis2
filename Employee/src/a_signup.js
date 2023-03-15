
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getFirestore, setDoc,doc  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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

signup.addEventListener('click', (e) => {

var user = document.querySelector('input[name="emp"]:checked');
var last_name  = document.getElementById('lname').value;
var first_name = document.getElementById('fname').value;
var middle_name = document.getElementById('mname').value;
var emp_IDa = document.getElementById('emp_id').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var cpass = document.getElementById('cpass').value;
 /**
 if(validateInputs()){
    e.preventDefault();
 }*/
const letters = /^[A-Za-z\s]*$/;
var numbers = /[0-9]{11}/g;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 if (last_name === '' ){
    // alert("Last Name is required.")
    // console.log("1")
     Swal.fire({
        title: "Please enter Last Name.",
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
 }
 else if (!last_name.match(letters)){
        //  alert('Please input alphabet characters only. (Last Name)');
         console.log("2")
         Swal.fire({
            title: 'Please input alphabet characters only. (Last Name)',
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
 }
 else if (first_name === ''){
    //  alert('First Name is required.');
     console.log("3")
     Swal.fire({
        title: 'Please enter First Name.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
 }
 else if (!first_name.match(letters)){
        //  alert('Please input alphabet characters only. (First Name)');
         console.log("4")
         Swal.fire({
            title: 'Please input alphabet characters only. (First Name)',
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
 }
  else if (middle_name === ''){
    //  alert('Please input N/A if not Applicable. (Middle Name)');
     console.log("6")
     Swal.fire({
        title: 'Please input N/A if not Applicable. (Middle Name)',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
 }
 else if (!middle_name.match(letters)){
    //  alert('Please input alphabet characters only. (Middle Name)');
     console.log("7")
     Swal.fire({
        title: 'Please input alphabet characters only. (Middle Name)',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
 }
 else if (emp_IDa === ''){
    // alert('Employee ID is required.');
     console.log("5")
     Swal.fire({
        title: 'Please enter Employee ID.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })  
 }
 else if(!emp_IDa.match(numbers)){
    // alert('Invalid Employee ID.');
    console.log("10")
    Swal.fire({
        title: 'Invalid Employee ID.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
} 
else if(password === ''){
    // alert('Password is required.');
     console.log("8")
     Swal.fire({
        title: 'Please enter Password.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
 } 
 else if (!email.match(re)){
    //  alert('Email is invalid.');
     console.log("9.1")
     Swal.fire({
        title: 'Email is invalid.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
 } 
 else if (email === ''){
    // alert('Email is required.');
    console.log("9")
    Swal.fire({
        title: 'Please enter Email.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

}
else if(cpass !== password){
    // alert('Password not match.');
    Swal.fire({
        title: 'Password not match.',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
  }
else{
    if (user.value == '0') {
        console.log("User Created");
        
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        setDoc (doc(db, "Users","Employee","EmployeeData", user.uid), {
            user_Type: "Processing_Officer",
            user_LN: last_name,
            user_FN: first_name,
            user_MN: middle_name,
            user_E: email,
            user_PWD: password,
            user_EID: emp_IDa
        });
        sendEmailVerification(auth.currentUser)
        .then(() => {

            Swal.fire({
                title: '<strong>An email has been sent please verify.</strong>', 
                showCloseButton: true,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                confirmButtonColor: '#132aaa',
                confirmButtonText:`OK`
              }).then((result) => {
                if (result.value) {
                    window.location = ("a_accMan.html")
                }
              });
        // window.location = ("a_login.html")
        });
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        });
        
    } else if (user.value == '1') {
        console.log("User Created");
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        setDoc (doc(db, "Users","Employee","EmployeeData",user.uid) , {
        user_Type: "System Administrator",
        user_LN: last_name,
        user_FN: first_name,
        user_MN: middle_name,
        user_E: email,
        user_PWD: password,
        user_EID: emp_IDa
            
        });

        sendEmailVerification(auth.currentUser)
        .then(() => {

            Swal.fire({
                title: '<strong>An email has been sent please verify.</strong>', 
                showCloseButton: true,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                confirmButtonColor: '#132aaa',
                confirmButtonText:`OK`
              }).then((result) => {
                if (result.value) {
                    window.location = ("a_accMan.html")
                }
              });
        });
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        });

}

}

});
    password.onfocus = function() {
        document.getElementById("error1").style.display = "block";
       }
     
     password.onblur = function() {
        document.getElementById("error1").style.display = "none";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("num").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("spclchrctr").style.display = "none";
       }
    
    password.onkeyup = function() {
        var upperCaseLetters = /[A-Z]/g;
        var lowerCaseLetters = /[a-z]/g;
        var numbers = /[0-9]/g;
        var spclchrctr = /[!@#$%^&*]/g;
        
        document.getElementById("error1").style.display = "none";

        if(!password.value.match(lowerCaseLetters)) {  
            document.getElementById("lowercase").style.display = "block";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        } 
        else if(!password.value.match(upperCaseLetters)) {  
            document.getElementById("uppercase").style.display = "block";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        } 
        else if(!password.value.match(numbers)) {  
            document.getElementById("num").style.display = "block";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        }
        else if(!password.value.match(spclchrctr)) {
            document.getElementById("spclchrctr").style.display = "block";
            document.getElementById("length").style.display = "none";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
          }
        else if(password.value.length < 8) {
            document.getElementById("length").style.display = "block";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        } 
        else{
            document.getElementById("error1").style.display = "none";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        }
        }
    