
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";;
import { getFirestore, collection , query,where,getCountFromServer, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";;

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

// GETDOCS LOCATION
const data = await getDocs(collection(db,"Applicants"))

// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = day + " - " + month + " - " + year ;

// DISABLE SPECIFIC DATE
var datesForDisable = [today];

$(function () {
  var selectedDates = [];

  let datePicker = $('.datepickerr').datepicker({
      startDate: new Date(), 
      endDate: '+2m',
      multidate: false,
      format: "dd - mm - yyyy",
      language: 'en',
      todayHighlight: true,
      daysOfWeekDisabled: [0, 6],
      datesDisabled: datesForDisable
  });
  datePicker.on('changeDate', function() {
    var get_date =  $("#txtdate").val().toUpperCase();
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    let c7 = 0;
    let c8 = 0;
    let slotcount = 12;
    data.forEach(doc => {
        if(doc.data().User_Stat == "PENDING"){
          if(doc.data().User_D == get_date){
            // 8 AM
            if (doc.data().User_T == "08:00 AM"){
              let cnt = c1+=1
              console.log("c1: " + cnt)
              if(cnt > slotcount){
                $('#b1').prop('disabled', true)
              }
              else{
                $('#b1').prop('disabled', false)
              }
            }
          // 9AM
            else if (doc.data().User_T == "09:00 AM"){
              let cnt = c2+=1
              console.log("c2: " + cnt)
              if(cnt > slotcount){
                $('#b2').prop('disabled', true)
              }
              else{
                $('#b2').prop('disabled', false)
              }
            }
            // 10AM
            else if (doc.data().User_T == "10:00 AM"){
              let cnt = c3+=1
              console.log("c3: " + cnt)
              if(cnt > slotcount){
                $('#b3').prop('disabled', true)
              }
              else{
                $('#b3').prop('disabled', false)
              }
            }
            // 11AM
            else if (doc.data().User_T == "11:00 AM"){
              let cnt = c4+=1
              console.log("c4: " + cnt)
              if(cnt > slotcount){
                $('#b4').prop('disabled', true)
              }
              else{
                $('#b4').prop('disabled', false)
              }
            }
            // 12PM
            else if (doc.data().User_T == "12:00 PM"){
              let cnt = c5+=1
              console.log("c5: " + cnt)
              if(cnt > slotcount){
                $('#b5').prop('disabled', true)
              }
              else{
                $('#b5').prop('disabled', false)
              }
            }
            // 1PM
            else if (doc.data().User_T == "01:00 PM"){
              let cnt = c6+=1
              console.log("c6: " + cnt)
              if(cnt > slotcount){
                $('#b6').prop('disabled', true)
              }
              else{
                $('#b6').prop('disabled', false)
              }
            }
            // 2PM
            else if (doc.data().User_T == "02:00 PM"){
              let cnt = c7+=1
              console.log("c7: " + cnt)
              if(cnt > slotcount){
                $('#b7').prop('disabled', true)
              }
              else{
                $('#b7').prop('disabled', false)
              }
            }
            // 3PM
            else if (doc.data().User_T == "03:00 PM"){
              let cnt = c8+=1
              console.log("c8: " + cnt)
              if(cnt > slotcount){
                $('#b8').prop('disabled', true)
              }
              else{
                $('#b8').prop('disabled', false)
              }
            }
          }
        }
    })

  });

  $('#btn_nxt').on('click', function() {
      $(this).css('color', 'white');
      var get_date =  $("#txtdate").val().toUpperCase();
      console.log(get_date) 

      if (get_date == '') {
          Swal.fire({
            title: "No date selected",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
      } 
      else if (localStorage.getItem("time") == null){
        Swal.fire({
          title: "No time selected",
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
          localStorage.setItem("date",get_date);
          window.location = "c_Trnsctform.html";
      }
  });
  $(".btn_cn").on("click", function() {
    Swal.fire({
      title: '<strong>Are you sure?</strong>', 
      showCloseButton: true,
      focusConfirm: false,
      reverseButtons: true,
      focusCancel: true,
      confirmButtonColor: '#132aaa',
      confirmButtonText:`OK`
    }).then((result) => {
      if (result.value) {
 
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
        localStorage.removeItem("ltmsID");

        window.location = "c_homepage.html";
      }
    }); 
  });
}); 

$(document).ready(function(){
  $(".btn1").click(function(){
    var btn = $(this).val();

    if (btn == "08:00 AM"){
      var b1 = document.getElementById("b1").value
      localStorage.setItem("time",b1)
      // console.log("08:00 AM")
      $(".td1").css("background-color","#032d89");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","inherit");
    }
    else if(btn == "09:00 AM"){
      var b2 = document.getElementById("b2").value
      localStorage.setItem("time",b2)
      console.log("09:00 AM")
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","#032d89");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","inherit");
    }
    else if(btn == "10:00 AM"){
      var b3 = document.getElementById("b3").value
      localStorage.setItem("time",b3)
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","#032d89");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","inherit");
    }
    else if(btn == "11:00 AM"){
      var b4 = document.getElementById("b4").value
      localStorage.setItem("time",b4)
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","#032d89");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","inherit");
      $(".td9").css("background-color","inherit");
    }
    else if(btn == "12:00 PM"){
      var b5 = document.getElementById("b5").value
      localStorage.setItem("time",b5)
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","#032d89");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","inherit");
    }
    else if(btn == "01:00 PM"){
      var b6 = document.getElementById("b6").value
      localStorage.setItem("time",b6)
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","#032d89");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","inherit");
    }
    else if(btn == "02:00 PM"){
      var b7 = document.getElementById("b7").value
      localStorage.setItem("time",b7)
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","#032d89");
      $(".td8").css("background-color","inherit");
    }
    else if(btn == "03:00 PM"){
      var b8 = document.getElementById("b8").value
      localStorage.setItem("time",b8)
      $(".td1").css("background-color","inherit");
      $(".td2").css("background-color","inherit");
      $(".td3").css("background-color","inherit");
      $(".td4").css("background-color","inherit");
      $(".td5").css("background-color","inherit");
      $(".td6").css("background-color","inherit");
      $(".td7").css("background-color","inherit");
      $(".td8").css("background-color","#032d89");
    }

  });

});

// IF TIME IS NOT NULL
var timme = localStorage.getItem("time")
if (timme !== null){
  if (timme == "08:00 AM"){
    $(".td1").css("background-color","#032d89");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","inherit");
  }
  else if(timme == "09:00 AM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","#032d89");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","inherit");
  }
  else if(timme == "10:00 AM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","#032d89");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","inherit");
  }
  else if(timme == "11:00 AM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","#032d89");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","inherit");
    $(".td9").css("background-color","inherit");
  }
  else if(timme == "12:00 PM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","#032d89");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","inherit");
  }
  else if(timme == "01:00 PM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","#032d89");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","inherit");
  }
  else if(timme == "02:00 PM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","#032d89");
    $(".td8").css("background-color","inherit");
  }
  else if(timme == "03:00 PM"){
    $(".td1").css("background-color","inherit");
    $(".td2").css("background-color","inherit");
    $(".td3").css("background-color","inherit");
    $(".td4").css("background-color","inherit");
    $(".td5").css("background-color","inherit");
    $(".td6").css("background-color","inherit");
    $(".td7").css("background-color","inherit");
    $(".td8").css("background-color","#032d89");
  }
}
