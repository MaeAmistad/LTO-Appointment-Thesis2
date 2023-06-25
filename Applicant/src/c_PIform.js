import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, setDoc, doc, collection, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


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

const querySnapshot = await getDocs(collection(db, "Applicants"));


btn_cn.addEventListener('click', (e) => {
  // window.location = "c_Trnsctform.html";
  history.back();
})

btn_nxt.addEventListener('click', (e) => {
  // window.location = "c_Trnsctform.html";

  let last_name = document.getElementById('lname').value.toUpperCase();
  let first_name = document.getElementById('fname').value.toUpperCase();
  let middle_name = document.getElementById('mname').value.toUpperCase();
  let bday = document.getElementById('dob').value.toUpperCase();
  let gen = document.getElementById('gen').value.toUpperCase();
  let addrss = document.getElementById('addrss').value.toUpperCase();
  let con_num = document.getElementById('con_num').value.toUpperCase();
  let email = document.getElementById('email').value.toUpperCase();

  const letters = /^[A-Za-z\s]*$/;
  var numbers = /[0-9]{11}/g;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (last_name === '') {
    Swal.fire({
      title: "Please enter your Last Name.",
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  else if (!last_name.match(letters)) {
    // alert('Please input alphabet characters only. (Last Name)');
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
  else if (first_name === '') {
    // alert('First Name is required.');
    Swal.fire({
      title: 'Please enter your First Name.',
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  else if (!first_name.match(letters)) {
    // alert('Please input alphabet characters only. (First Name)');
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
  else if (bday === '') {
    // alert('Nationality is required.');
    Swal.fire({
      title: 'Please enter your Birthday.',
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  else if (gen == '') {
    // alert("Gender is Required");
    Swal.fire({
      title: "Please enter your Gender.",
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  else if (addrss === '') {
    // alert('Address is required.');
    Swal.fire({
      title: 'Your Address is Incomplete.',
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  // else if (con_num.length !== 11) {
  //   // alert('Invalid Number (Contact Number)');
  //   Swal.fire({
  //     title: 'Invalid Number (Contact Number)',
  //     confirmButtonColor: '#132aaa',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     }
  //   })
  // }
  // else if (!con_num.match(numbers)) {
  //   // alert('Invalid Number (Contact Number)');
  //   Swal.fire({
  //     title: 'Invalid Number (Contact Number)',
  //     confirmButtonColor: '#132aaa',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     }
  //   })
  // }
  else if (!email.match(re)) {
    // alert('Invalid Email.');
    Swal.fire({
      title: 'Invalid Email.',
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  else if (email === '') {
    // alert('Email is required.');
    Swal.fire({
      title: 'Please enter your Email.',
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  else {

    querySnapshot.forEach(doc => {
      if (email !== '' && email.match(re) && last_name !== '' && last_name.match(letters) && first_name !== '' &&
        first_name.match(letters) && bday !== '' && gen != '' && addrss !== '') {


        if (doc.data().User_Stat == "PENDING") {
          if (last_name == doc.data().User_LN && first_name == doc.data().User_FN && middle_name == doc.data().User_MN && gen == doc.data().User_GN && bday == doc.data().User_BD) {
            var date = doc.data().User_D;
            var time = doc.data().User_T;
            Swal.fire({
              title: "You still have an existing appointment application on \n" + date + " at " + time,
              confirmButtonColor: '#132aaa',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })

            console.log("existing application is " + date + " at " + time)
          }
        }

        if (doc.data().User_Stat == "APPROVED_TO_CASHIER" || doc.data().User_Stat == "APPROVED_TO_PROCEED") {
          if (last_name == doc.data().User_LN && first_name == doc.data().User_FN && middle_name == doc.data().User_MN && gen == doc.data().User_GN && bday == doc.data().User_BD) {
            var date = doc.data().User_D;
            var time = doc.data().User_T;
            Swal.fire({
              title: "You still have an ongoing transaction at the moment ",
              confirmButtonColor: '#132aaa',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })

            console.log("existing TRANSACTION")
          }
        }

        if (doc.data().User_Stat == "RELEASED" || doc.data().User_Stat == "REGISTERED" || doc.data().User_Stat == "MISSED") {
          if (last_name == doc.data().User_LN && first_name == doc.data().User_FN && middle_name == doc.data().User_MN && gen == doc.data().User_GN && bday == doc.data().User_BD) {

            localStorage.setItem("last_name", last_name);
            localStorage.setItem("first_name", first_name);
            localStorage.setItem("middle_name", middle_name);
            localStorage.setItem("bday", bday);
            localStorage.setItem("gen", gen);
            localStorage.setItem("addrss1", addrss);
            localStorage.setItem("con_num", con_num);
            localStorage.setItem("email", email);

            console.log("CAN APPLY AGAIN")
          }
        }
        if (last_name !== doc.data().User_LN && first_name !== doc.data().User_FN && bday !== doc.data().User_BD) {
          localStorage.setItem("last_name", last_name);
          localStorage.setItem("first_name", first_name);
          localStorage.setItem("middle_name", middle_name);
          localStorage.setItem("bday", bday);
          localStorage.setItem("gen", gen);
          localStorage.setItem("addrss1", addrss);
          localStorage.setItem("con_num", con_num);
          localStorage.setItem("email", email);

          window.location = "c_confirmation.html";
          console.log("no existing application")

        }

      }

    });

  }

});