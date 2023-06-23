$(function () {
    var selectedDates = [];
  
    datePicker = $('#dob').datepicker({
        startDate: new Date(),
        minDate: 0,
        multidate: true,
        dateFormat: "dd-mm-yyyy",
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
    })
});