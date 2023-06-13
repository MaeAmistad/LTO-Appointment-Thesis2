$(function () {
  var selectedDates = [];

  datePicker = $('.datepickerr').datepicker({
      startDate: new Date(),
      endDate: '+2m',
      multidate: false,
      format: "dd - mm - yyyy",
      language: 'en',
      todayHighlight: true,
      daysOfWeekDisabled: [0, 6],
  });
  datePicker.on('changeDate', function (e) {
      if (e.dates.length <= 1) {
          selectedDates = e.dates;
      } 
      
  });
  $('#btn_nxt').on('click', function(e) {
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
      } else {
          console.log(get_date);
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
        localStorage.removeItem("addrss");
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

