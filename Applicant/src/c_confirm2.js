
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";;
import { getFirestore, collection , addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";;

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

var ln = localStorage.getItem("last_name")
var fn = localStorage.getItem("first_name")
var mn = localStorage.getItem("middle_name");
var bd = localStorage.getItem("bday");
var gn = localStorage.getItem("gen");
var addrss = localStorage.getItem("addrss");
var cn = localStorage.getItem("con_num");
var email = localStorage.getItem("email");
var date = localStorage.getItem("date");
var time = localStorage.getItem("time");
var tt = localStorage.getItem("tot");
var at = localStorage.getItem("toa");
var laa = localStorage.getItem("laa");
var rr = localStorage.getItem("rvsnofrcrds");

function makeid(l)
{
var text = "";
var number = "0123456789"
var char_list = (number)
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(6));

cnfrm.addEventListener('click', (e) => {

const TranID = makeid(6);

if (tt == "Motor Vehicle Registration"){

  addDoc (collection(db,"Appointment"),{
    User_Stat: "Pending",
    User_AppID: TranID, 
    User_LN: ln,
    User_FN: fn,
    User_MN: mn,
    User_BD: bd,
    User_GN: gn,
    User_ADD: addrss,
    User_CN: cn,
    User_E: email,
    User_D: date,
    User_T: time,
    User_TT: tt,
    User_AT: at
}).then(() => {

    var full_name = "Mr/Miss " + localStorage.getItem("last_name") + ", " + localStorage.getItem("first_name") + " " + localStorage.getItem("middle_name");
    const tt = "Hi " + full_name + ",";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "advocsbscs@gmail.com",
        Password : "436A106EEF29101EB7EDEE2AB028A1BFBEB9",
        To : email,
        From : "advocsbscs@gmail.com",
        Subject : "LTO APPOINTMENT APPLICATION",
        Body : tt
    }).then(
        Swal.fire({
            title: 'Your proof of appointment has been sent to your email.',
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then(() =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Application has been sent',
                showConfirmButton: false,
                timer: 2000
            })
            
            window.location = "c_homepage.html";
            // console.log("Email Sent")
          })
    );

localStorage.removeItem("last_name")
localStorage.removeItem("first_name")
localStorage.removeItem("middle_name");
localStorage.removeItem("bday");
localStorage.removeItem("gen");
localStorage.removeItem("addrss");
localStorage.removeItem("con_num");
localStorage.removeItem("email");
localStorage.removeItem("date");
localStorage.removeItem("time");
localStorage.removeItem("laa");
localStorage.removeItem("tot");
localStorage.removeItem("toa");

// window.location = "c_homepage.html";
    // c
})
}
else if (tt == "License"){
  if (at == "Revision of Records"){
    addDoc (collection(db,"Appointment"),{
      User_Stat: "Pending",
      User_AppID: TranID,
      User_Laa: laa,
      User_Rev: rr, 
      User_LN: ln,
      User_FN: fn,
      User_MN: mn,
      User_BD: bd,
      User_GN: gn,
      User_ADD: addrss,
      User_CN: cn,
      User_E: email,
      User_D: date,
      User_T: time,
      User_TT: tt,
      User_AT: at
  }).then(() => {
  
      var full_name = "Mr/Miss " + localStorage.getItem("last_name") + ", " + localStorage.getItem("first_name") + " " + localStorage.getItem("middle_name");
      const tt = "Hi " + full_name + ",";
  
      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "advocsbscs@gmail.com",
          Password : "436A106EEF29101EB7EDEE2AB028A1BFBEB9",
          To : email,
          From : "advocsbscs@gmail.com",
          Subject : "LTO APPOINTMENT APPLICATION",
          Body : tt
      }).then(
          Swal.fire({
              title: 'Your proof of appointment has been sent to your email.',
              confirmButtonColor: '#132aaa',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            }).then(() =>{
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your Application has been sent',
                  showConfirmButton: false,
                  timer: 2000
              })
              
              window.location = "c_homepage.html";
              // console.log("Email Sent")
            })
      );
  
  localStorage.removeItem("last_name")
  localStorage.removeItem("first_name")
  localStorage.removeItem("middle_name");
  localStorage.removeItem("bday");
  localStorage.removeItem("gen");
  localStorage.removeItem("addrss");
  localStorage.removeItem("con_num");
  localStorage.removeItem("email");
  localStorage.removeItem("date");
  localStorage.removeItem("time");
  localStorage.removeItem("laa");
  localStorage.removeItem("tot");
  localStorage.removeItem("toa");
  
  // window.location = "c_homepage.html";
      // c
  })
  }
  else{
    addDoc (collection(db,"Appointment"),{
      User_Stat: "Pending",
      User_AppID: TranID,
      User_Laa: laa,
      User_LN: ln,
      User_FN: fn,
      User_MN: mn,
      User_BD: bd,
      User_GN: gn,
      User_ADD: addrss,
      User_CN: cn,
      User_E: email,
      User_D: date,
      User_T: time,
      User_TT: tt,
      User_AT: at
  }).then(() => {
  
      var full_name = "Mr/Miss " + localStorage.getItem("last_name") + ", " + localStorage.getItem("first_name") + " " + localStorage.getItem("middle_name");
      const tt = "Hi " + full_name + ",";
  
      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "advocsbscs@gmail.com",
          Password : "436A106EEF29101EB7EDEE2AB028A1BFBEB9",
          To : email,
          From : "advocsbscs@gmail.com",
          Subject : "LTO APPOINTMENT APPLICATION",
          Body : tt
      }).then(
          Swal.fire({
              title: 'Your proof of appointment has been sent to your email.',
              confirmButtonColor: '#132aaa',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            }).then(() =>{
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your Application has been sent',
                  showConfirmButton: false,
                  timer: 2000
              })
              
              window.location = "c_homepage.html";
              // console.log("Email Sent")
            })
      );
  
  localStorage.removeItem("last_name")
  localStorage.removeItem("first_name")
  localStorage.removeItem("middle_name");
  localStorage.removeItem("bday");
  localStorage.removeItem("gen");
  localStorage.removeItem("addrss");
  localStorage.removeItem("con_num");
  localStorage.removeItem("email");
  localStorage.removeItem("date");
  localStorage.removeItem("time");
  localStorage.removeItem("laa");
  localStorage.removeItem("tot");
  localStorage.removeItem("toa");
  
  // window.location = "c_homepage.html";
      // c
  })
  }
}


})
 
