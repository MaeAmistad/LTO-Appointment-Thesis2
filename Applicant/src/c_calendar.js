$(function () {
  var selectedDates = [];

  datePicker = $('.datepickerr').datepicker({
      startDate: new Date(),
      minDate: 0,
      multidate: true,
      format: "mm/dd/yyyy",
      // daysOfWeekHighlighted: "0,6",
      language: 'en',
      todayHighlight: true,
      daysOfWeekDisabled: [0, 6]
  });

  datePicker.on('changeDate', function (e) {
      if (e.dates.length <= 1) {
          selectedDates = e.dates;
      } else {
          datePicker.data('datepicker').setDates(selectedDates);
          // alert('You can only select 1 dates.');
          Swal.fire({
            title: 'You can only select 1 dates.',
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
      }
  });
  $('.btn_sv').on('click', function(e) {
      // $('.datepicker').datepicker('getDates').valueOf() ;
      $(this).css('color', 'white');
      var get_date =  $("#txtdate").data('datepicker').getFormattedDate('mm-dd-yyyy');
      if (get_date == '') {
          // alert("No date selected");
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
          window.location = "c_PIform.html";
      }
     
  });
  $(".btn_cn").on("click", function() {
    // $(".wrnngmsg").addClass("active");
    window.location = "c_homepage.html";

  });

});
