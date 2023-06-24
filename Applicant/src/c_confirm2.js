
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
var addrss1 = localStorage.getItem("addrss1");
var cn = localStorage.getItem("con_num");
var email = localStorage.getItem("email");
var date = localStorage.getItem("date");
var time = localStorage.getItem("time");
var tt = localStorage.getItem("tot");
var at = localStorage.getItem("toa");
var laa = localStorage.getItem("laa");
var rr = localStorage.getItem("rvsnofrcrds");
var fee = localStorage.getItem("fees");

console.log(email.toLowerCase())

//change birthday date format
var birthday = gn;
var dd = birthday.slice(0,2);
var mm = birthday.slice(5,7);
var yy = birthday.slice(10,14);
var bdFormat = dd + "/" + mm + "/" + yy;

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

var yy = new Date().getFullYear().toString().substr(2);
var mm = new Date().getMonth() + 1;
var mmm = ("0" + mm).slice(-2);
var dd = new Date().getDate();
var ddd = ("0" + dd).slice(-2);
var hh = new Date().getHours();
var hhh = ("0" + hh).slice(-2);
var m = new Date().getMinutes(); 
var mnn = ("0" + m).slice(-2);

var trnid = yy+mmm+ddd+hhh+mnn+makeid(2);

document.getElementById('transctNum').innerHTML = trnid;
cnfrm.addEventListener('click', (e) => {

  // PDF
    var element = document.getElementById('proof_of_app1');
    var opt = {
    filename:     'LTO_proof_of_appointment.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage: 
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    // html2pdf(element, opt);

// Save to firestore

const TranID = trnid;

if (tt == "MOTOR VEHICLE REGISTRATION"){

  addDoc (collection(db,"Applicants"),{
    User_Stat: "PENDING",
    User_AppID: TranID, 
    User_LN: ln,
    User_FN: fn,
    User_MN: mn,
    User_BD: bd,
    User_GN: gn,
    User_ADD: addrss1,
    User_CN: cn,
    User_E: email,
    User_D: date,
    User_T: time,
    User_Payment: fee,
    User_TT: tt,
    User_AT: at,
}).then(() => {

    // var full_name = localStorage.getItem("first_name");
    // const tt = "Hi " + full_name + "<br/>" + "<br/>";
    // const r2 = "YOUR APPLICATION FOR " + "<u>" +  at  + " HAS BEEN SET SUCCESFULLY." + "</u>" + "<br/>" + "<br/>";
    // const r3 = "Come to the office on " + localStorage.getItem("date") + " at " + localStorage.getItem("time");
    // const r4 = " and please remember to bring your requirements together with your proof of appointment. " + TranID + "<br/>" + "<br/>";
    // const r5 = "If you didn't set an appointment, please disregard this email."

    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "advocsbscs@gmail.com", 
    //     Password : "342E004513CF8CC2EC61B156D52548F2EF93",
    //     To : email.toLowerCase(),
    //     From : "advocsbscs@gmail.com",
    //     Subject : "LTO APPOINTMENT APPLICATION",
    //     Body : tt + r2 + r3 + r4 + r5
    // }).then( 
    //     Swal.fire({
    //         title: 'Your proof of appointment has been sent to your email.',
    //         confirmButtonColor: '#132aaa',
    //         showClass: {
    //           popup: 'animate__animated animate__fadeInDown'
    //         },
    //         hideClass: {
    //           popup: 'animate__animated animate__fadeOutUp'
    //         }
    //       }).then(() =>{
    //         Swal.fire({
    //             position: 'center',
    //             icon: 'success',
    //             title: 'Your Application has been sent',
    //             showConfirmButton: false,
    //             timer: 2000
    //         })
            
    //         // window.location = "index.html";
    //         console.log("Email Sent")
    //       })
    // );

    window.location = "index.html";

localStorage.removeItem("last_name")
localStorage.removeItem("first_name")
localStorage.removeItem("middle_name");
localStorage.removeItem("bday");
localStorage.removeItem("gen");
localStorage.removeItem("addrss1");
localStorage.removeItem("con_num");
localStorage.removeItem("email");
localStorage.removeItem("date");
localStorage.removeItem("time");
localStorage.removeItem("laa");
localStorage.removeItem("tot");
localStorage.removeItem("toa");
localStorage.removeItem("ID");
localStorage.removeItem("stat");
localStorage.removeItem("rvsnofrcrds");
localStorage.removeItem("fees")

})
} 
else if (tt == "LICENSING"){
  if (at == "REVISION OF RECORDS"){
    addDoc (collection(db,"Applicants"),{
      User_Stat: "PENDING",
      User_AppID: TranID,
      User_Laa: laa,
      User_Rev: rr, 
      User_LN: ln,
      User_FN: fn,
      User_MN: mn,
      User_BD: bd,
      User_GN: gn,
      User_ADD: addrss1,
      User_CN: cn,
      User_E: email,
      User_D: date,
      User_T: time,
      User_Payment: fee,
      User_TT: tt,
      User_AT: at,
  }).then(() => {
  
    // var full_name = localStorage.getItem("first_name");
    // const tt = "Hi " + full_name + "<br/>" + "<br/>";
    // const r2 = "YOUR APPLICATION FOR " + "<u>" + laa + at  + " HAS BEEN SET SUCCESFULLY." + "</u>" + "<br/>" + "<br/>";
    // const r3 = "Come to the office on " + localStorage.getItem("date") + " at " + localStorage.getItem("time");
    // const r4 = " and please remember to bring your requirements together with your proof of appointment. " + TranID + "<br/>" + "<br/>";
    // const r5 = "If you didn't set an appointment, please disregard this email."
  
    //   Email.send({
    //       Host : "smtp.elasticemail.com",
    //       Username : "advocsbscs@gmail.com",
    //       Password : "342E004513CF8CC2EC61B156D52548F2EF93",
    //       To : email.toLowerCase(),
    //       From : "advocsbscs@gmail.com",
    //       Subject : "LTO APPOINTMENT APPLICATION",
    //       Body : tt + r2 + r3 + r4 + r5
    //   }).then(
    //       Swal.fire({
    //           title: 'Your proof of appointment has been sent to your email.',
    //           confirmButtonColor: '#132aaa',
    //           showClass: {
    //             popup: 'animate__animated animate__fadeInDown'
    //           },
    //           hideClass: {
    //             popup: 'animate__animated animate__fadeOutUp'
    //           }
    //         }).then(() =>{
    //           Swal.fire({
    //               position: 'center',
    //               icon: 'success',
    //               title: 'Your Application has been sent',
    //               showConfirmButton: false,
    //               timer: 2000
    //           })
              
    //           // window.location = "index.html";
    //           console.log("Email Sent")
    //         })
    //   );

    window.location = "index.html";

  localStorage.removeItem("last_name")
  localStorage.removeItem("first_name")
  localStorage.removeItem("middle_name");
  localStorage.removeItem("bday");
  localStorage.removeItem("gen");
  localStorage.removeItem("addrss1");
  localStorage.removeItem("con_num");
  localStorage.removeItem("email");
  localStorage.removeItem("date");
  localStorage.removeItem("time");
  localStorage.removeItem("laa");
  localStorage.removeItem("tot");
  localStorage.removeItem("toa");
  localStorage.removeItem("fees")
  })
  }
  else{
    addDoc (collection(db,"Applicants"),{
      User_Stat: "PENDING",
      User_AppID: TranID,
      User_Laa: laa,
      User_LN: ln,
      User_FN: fn,
      User_MN: mn,
      User_BD: bd,
      User_GN: gn, 
      User_ADD: addrss1,
      User_CN: cn,
      User_E: email,
      User_D: date,
      User_T: time,
      User_Payment: fee,
      User_TT: tt,
      User_AT: at
  }).then(() => {
  
    // var full_name = localStorage.getItem("first_name");
    // const tt = "Hi " + full_name + "," + "<br/>" + "<br/>";
    // const r2 = "YOUR APPLICATION FOR " + "<u>" + laa + at  + " HAS BEEN SET SUCCESFULLY.  " + "</u>" + "<br/>" + "<br/>";
    // const r3 = "Come to the office on " + localStorage.getItem("date") + " at " + localStorage.getItem("time");
    // const r4 = " and please remember to bring your requirements together with your proof of appointment. " + TranID + "<br/>" + "<br/>";
    // const r5 = "If you didn't set an appointment, please disregard this email."
  
    //   Email.send({ 
    //       Host : "smtp.elasticemail.com",
    //       Username : "advocsbscs@gmail.com",
    //       Password : "342E004513CF8CC2EC61B156D52548F2EF93",
    //       To : email.toLowerCase(),
    //       From : "advocsbscs@gmail.com",
    //       Subject : "LTO APPOINTMENT APPLICATION",
    //       Body : tt + r2 + r3 + r4 + r5
    //   }).then(
    //       Swal.fire({
    //           title: 'Your proof of appointment has been sent to your email.',
    //           confirmButtonColor: '#132aaa',
    //           showClass: {
    //             popup: 'animate__animated animate__fadeInDown'
    //           },
    //           hideClass: {
    //             popup: 'animate__animated animate__fadeOutUp'
    //           }
    //         }).then(() =>{
    //           Swal.fire({
    //               position: 'center',
    //               icon: 'success',
    //               title: 'Your Application has been sent',
    //               showConfirmButton: false,
    //               timer: 2000
    //           })
              
    //           // window.location = "index.html";
    //           console.log("Email Sent")
    //         })
    //   );

    window.location = "index.html";

    localStorage.removeItem("last_name")
    localStorage.removeItem("first_name")
    localStorage.removeItem("middle_name");
    localStorage.removeItem("bday");
    localStorage.removeItem("gen");
    localStorage.removeItem("addrss1");
    localStorage.removeItem("con_num");
    localStorage.removeItem("email");
    localStorage.removeItem("date");
    localStorage.removeItem("time");
    localStorage.removeItem("laa");
    localStorage.removeItem("tot");
    localStorage.removeItem("toa");
    localStorage.removeItem("fees")

    })
  }
}

})
 
