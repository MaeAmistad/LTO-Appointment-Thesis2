cnl.addEventListener('click', (e) => {
  wrnngmsg.classList.remove("wrnngmsg-popup");
  document.body.classList.remove("wrnngmsg-popup");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, getDocs, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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

const querySnapshot = await getDocs(collection(db, "Users", "Employee", "EmployeeData"));
const built_in_acc = doc(db, "Users", "DevelopersAccount");
const docSnap = await getDoc(built_in_acc);

//FINAL
const form = document.getElementById('form');
const email = document.getElementById('emaill');
const password = document.getElementById('password');

//FINAL
var pass1 = 'Cashier'
const word1 = pass1.slice(1, 3)

var pass2 = 'Inspector'
const word2 = pass2.slice(1, 3)

var pass3 = 'Evaluator'
const word3 = pass3.slice(1, 3)

var pass4 = 'Examiner'
const word4 = pass4.slice(1, 3)

var pass5 = 'Admin'
const word5 = pass5.slice(1, 3)

//Show Error Message - FINAL
function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = 'login-form error'

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}



// LOGIN FORM - FINAL
form.addEventListener('submit', (e) => {
  e.preventDefault();




  if (email.value == '') {
    showError(email, 'Please enter your email')
  }
  else if (password.value == '') {
    showError(password, 'Please enter your password')
  }

  else {

    // if (email.value !== '' && password.value == '') {
    // if (email.value.toUpperCase() === docSnap.data().username && password.value == docSnap.data().password) {
    //   window.location = "a_dashboard.html"
    // }
    // }
    // else {

    querySnapshot.forEach(doc => {

      // if (email.value !== '' && password.value == '') {
      //   if (email.value !== doc.data().user_E && doc.data().user_Type !== "DEVELOPER") {
      //     // showError(email, 'Admin Email Invalid');
      //     console.log(email.value !== doc.data().user_E)
      //   }
      //   // else if (doc.data().user_PWD !== password.value && doc.data().user_Type === "DEVELOPER") {
      //   //   showError(password, 'Password Incorrect');
      //   // }
      //   // else{
      //   //   window.location = "a_dashboard.html"
      //   // }
      // }

      

      if (doc.data().user_E === email.value.toUpperCase() && doc.data().user_PWD === password.value) {


        if (doc.data().user_Type == "DEVELOPER") {
          window.location = "a_dashboard.html"
        }

        if (doc.data().user_Type == "CASHIER" && doc.data().user_Status == "Active") {
          signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              const user = userCredential.user;

              if (user.emailVerified == true) {
                var curPass = password.value;
                const current = curPass.slice(1, 3)
                console.log(current)
                console.log(word2)

                if (current == word2) {
                  window.location = "changePass.html"
                  localStorage.setItem("ID", doc.id)
                  localStorage.setItem("Password", curPass)
                }
                else {
                  window.location = "ca_homepage.html"
                }

              }
              else {
                wrnngmsg.classList.add("wrnngmsg-popup");
                document.body.classList.add("wrnngmsg-popup");
              }

              sndVrfctn.addEventListener('click', (e) => {
                wrnngmsg.classList.remove("wrnngmsg-popup");
                document.body.classList.remove("wrnngmsg-popup");

                sendEmailVerification(auth.currentUser)
                  .then(() => {
                    // console.log("Email send")
                    Swal.fire({
                      title: "Email has been sent.",
                      confirmButtonColor: '#132aaa',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                  });
              });


            })
            .catch((error) => {
              showError(email, "Email or Password is Incorrect")
              showError(password, "Email or Password is Incorrect")

              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
        }

        if (doc.data().user_Type == "INSPECTOR" && doc.data().user_Status == "Active") {
          signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              const user = userCredential.user;

              if (user.emailVerified == true) {
                var curPass = password.value;
                const current = curPass.slice(1, 3)
                console.log(current)
                console.log(word2)

                if (current == word2) {
                  window.location = "changePass.html"
                  localStorage.setItem("ID", doc.id)
                  localStorage.setItem("Password", curPass)
                }
                else {
                  window.location = "In_homepage.html"
                }

              }
              else {
                wrnngmsg.classList.add("wrnngmsg-popup");
                document.body.classList.add("wrnngmsg-popup");
              }

              sndVrfctn.addEventListener('click', (e) => {
                wrnngmsg.classList.remove("wrnngmsg-popup");
                document.body.classList.remove("wrnngmsg-popup");

                sendEmailVerification(auth.currentUser)
                  .then(() => {
                    // console.log("Email send")
                    Swal.fire({
                      title: "Email has been sent.",
                      confirmButtonColor: '#132aaa',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                  });
              });


            })
            .catch((error) => {
              showError(email, "Email or Password is Incorrect")
              showError(password, "Email or Password is Incorrect")

              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
        }

        if (doc.data().user_Type === "EVALUATOR" && doc.data().user_Status === "Active") {
          signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              const user = userCredential.user;

              if (user.emailVerified == true) {
                var curPass = password.value;
                const current = curPass.slice(1, 3)
                console.log(current)
                console.log(word3)

                if (current == word3) {
                  window.location = "changePass.html"
                  localStorage.setItem("ID", doc.id)
                  localStorage.setItem("Password", curPass)
                }
                else {
                  window.location = "pc_homepage.html"
                }

              }
              else {
                wrnngmsg.classList.add("wrnngmsg-popup");
                document.body.classList.add("wrnngmsg-popup");
              }

              sndVrfctn.addEventListener('click', (e) => {
                wrnngmsg.classList.remove("wrnngmsg-popup");
                document.body.classList.remove("wrnngmsg-popup");

                sendEmailVerification(auth.currentUser)
                  .then(() => {
                    // console.log("Email send")
                    Swal.fire({
                      title: "Email has been sent.",
                      confirmButtonColor: '#132aaa',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                  });
              });


            })
            .catch((error) => {
              showError(email, "Email or Password is Incorrect")
              showError(password, "Email or Password is Incorrect")

              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
        }

        if (doc.data().user_Type == "EXAMINER" && doc.data().user_Status == "Active") {
          signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              const user = userCredential.user;

              if (user.emailVerified == true) {
                var curPass = password.value;
                const current = curPass.slice(1, 3)
                console.log(current)
                console.log(word4)

                if (current == word4) {
                  window.location = "changePass.html"
                  localStorage.setItem("ID", doc.id)
                  localStorage.setItem("Password", curPass)
                }
                else {
                  window.location = "ex_homepage.html"
                }

              }
              else {
                wrnngmsg.classList.add("wrnngmsg-popup");
                document.body.classList.add("wrnngmsg-popup");
              }

              sndVrfctn.addEventListener('click', (e) => {
                wrnngmsg.classList.remove("wrnngmsg-popup");
                document.body.classList.remove("wrnngmsg-popup");

                sendEmailVerification(auth.currentUser)
                  .then(() => {
                    // console.log("Email send")
                    Swal.fire({
                      title: "Email has been sent.",
                      confirmButtonColor: '#132aaa',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                  });
              });


            })
            .catch((error) => {
              showError(email, "Email or Password is Incorrect")
              showError(password, "Email or Password is Incorrect")

              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
        }

        if (doc.data().user_Type == "SYSTEM ADMINISTRATOR" && doc.data().user_Status == "Active") {
          signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              const user = userCredential.user;

              if (user.emailVerified == true) {
                var curPass = password.value;
                const current = curPass.slice(1, 3)
                console.log(current)
                console.log(word5)

                if (current == word5) {
                  window.location = "changePass.html"
                  localStorage.setItem("ID", doc.id)
                  localStorage.setItem("Password", curPass)
                }
                else {
                  window.location = "a_homepage.html"
                }

              }
              else {
                wrnngmsg.classList.add("wrnngmsg-popup");
                document.body.classList.add("wrnngmsg-popup");
              }

              sndVrfctn.addEventListener('click', (e) => {
                wrnngmsg.classList.remove("wrnngmsg-popup");
                document.body.classList.remove("wrnngmsg-popup");

                sendEmailVerification(auth.currentUser)
                  .then(() => {
                    // console.log("Email send")
                    Swal.fire({
                      title: "Email has been sent.",
                      confirmButtonColor: '#132aaa',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                  });
              });


            })
            .catch((error) => {
              showError(email, "Email or Password is Incorrect")
              showError(password, "Email or Password is Incorrect")

              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
        }

        if (doc.data().user_Status == "Inactive") {
          showError(email, 'This user does not exist');
          showError(password, 'This user does not exist')
        }

      }


    });
  }





  // else if(email.value.toUpperCase() != docSnap.data().username){
  //   showError(email, 'Email Incorrect')
  // }
  // else if(password.value != docSnap.data().password){
  //   showError(password, 'Password Incorrect')
  // }





});
//Blurred background - FINAL
function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');

  var popup = document.getElementById('reset_pass');
  popup.classList.toggle('active');
}

// For reset password modal - FINAL
const resetPass = document.getElementById('reset_pass');
const closeModal = document.querySelector('.cnl2');
const forgotpass = document.querySelector('.reset');
const emailReset = document.getElementById('email_reset');

forgotpass.addEventListener('click', () => {
  resetPass.style.display = 'block';
});
closeModal.addEventListener('click', () => {
  resetPass.style.display = 'none';
});

resetPass.addEventListener('click', (e) => {
  sendPasswordResetEmail(auth, emailReset.value)
    .then(() => {
      Swal.fire({
        title: "Reset Password request has been sent to your email",
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then((result) => {
        if (result.value) {
          console.log("Reset password email sent")
          resetPass.style.display = 'none';
          toggle()
        }
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
});