import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, collection,doc, getDoc, updateDoc  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, updatePassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyCyNToos3S0HwLl0cZMRdiVjFJcBb4FWFo",
 authDomain: "lto-online-appointment-setter.firebaseapp.com",
 projectId: "lto-online-appointment-setter",
 storageBucket: "lto-online-appointment-setter.appspot.com",
 messagingSenderId: "382579903791",
 appId: "1:382579903791:web:5d98bbe4ea8b38a43065da"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// const user = auth.currentUser; 

const querySnapshot = await getDocs(collection(db, "Users", "Employee", "EmployeeData"));
const docRef = doc(db, "Users", "DevelopersAccount");
const docSnap = await getDoc(docRef);

const form = document.getElementById('form');
const currentPass = document.getElementById('current');
const newPass = document.getElementById('newss');
const confirmPass = document.getElementById('confirm');


// onAuthStateChanged(auth, (user) => {
//     console.log(user.email)
// });



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


//blurred background
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('cnfrm_modal');
    popup.classList.toggle('active');
}

const closeModal = document.querySelector('.cnl');
const modalConfirm = document.getElementById('cnfrm_modal');

closeModal.addEventListener('click', () => {
    modalConfirm.style.display = 'none';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var pass = localStorage.getItem("Password")

    if(currentPass.value == ''){
        showError(currentPass, 'Please enter current password')
    }
    else if(!currentPass.value == pass){
        showError(currentPass, 'Wrong Password')
    }
    else if(newPass.value == ''){
        showError(newPass, 'Please enter new password')
    }
    else if(confirmPass.value == ''){
        showError(confirmPass, 'Please confirm your new password')
    }
    else if(newPass.length < 8){
        showError(newPass, 'Please enter atleast 8 characters')
    }
    else if(newPass.value !== confirmPass.value){
        showError(confirmPass, 'Password do not match')
    }
    else{
       
        querySnapshot.forEach((doc1) =>{

        var userID = localStorage.getItem("ID") 
        
        if(currentPass.value == doc1.data().user_PWD && confirmPass.value == newPass.value && doc1.id == userID){
           // document.getElementById('cnfrm_modal').style.visibility = "visible";
            modalConfirm.style.display = 'block';
            toggle();
              
         cnfrm.addEventListener('click', (e) => {
                    const updateStat = doc(db, "Users","Employee", "EmployeeData" , doc1.id)
                    const newPassword = confirmPass.value;

                    updateDoc(updateStat, {   
                        user_PWD: newPassword
                    }).then(() => {
                        Swal.fire({
                            title: "Successfully changed password. Please login to your account",
                            confirmButtonColor: '#132aaa',
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                          }).then((result) => {
                            if(result.value){
                              console.log("password has been changed")
                              modalConfirm.style.display = 'none';
                              toggle()
                            }
                          })
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
            
                        console.log(errorMessage);
                    });    

                // console.log(user)
                onAuthStateChanged(auth, (user) => {
                    console.log(user)

                updatePassword(user, newPassword)
                .then(() => {
                    window.location = "a_login.html"
                    console.log("User password updated in firebase auth")
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
          
                    console.log(errorMessage);
                })

                });

                localStorage.removeItem("ID")
                localStorage.removeItem("Password")
               
            });
        }
       
    });
    }
   
});


newPass.onfocus = function(){
    document.getElementById("error1").style.display = "none";
}
newPass.onblur = function(){
    document.getElementById("error1").style.display = "none";
    document.getElementById("lowercase").style.display = "none";
    document.getElementById("uppercase").style.display = "none";
    document.getElementById("num").style.display = "none";
    document.getElementById("length").style.display = "none";
    document.getElementById("spclchrctr").style.display = "none";
}
newPass.onkeyup = function(){
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var spclchrctr = /[!@#$%^&*]/g;

    if(newPass.value.length < 8) { 
        document.getElementById("error1").style.display = "none";
        document.getElementById("length").style.display = "block";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("num").style.display = "none";
        document.getElementById("spclchrctr").style.display = "none";
    }
    else if(!newPass.value.match(lowerCaseLetters)) {  
        document.getElementById("error1").style.display = "none";
        document.getElementById("lowercase").style.display = "block";
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("num").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("spclchrctr").style.display = "none";
    } 
    else if(!newPass.value.match(upperCaseLetters)) {
        document.getElementById("error1").style.display = "none";  
        document.getElementById("uppercase").style.display = "block";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("num").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("spclchrctr").style.display = "none";
    } 
    else if(!newPass.value.match(numbers)) {  
        document.getElementById("error1").style.display = "none";
        document.getElementById("num").style.display = "block";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("spclchrctr").style.display = "none";
    }
    else if(!newPass.value.match(spclchrctr)) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("spclchrctr").style.display = "block";
        document.getElementById("length").style.display = "none";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("num").style.display = "none";
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