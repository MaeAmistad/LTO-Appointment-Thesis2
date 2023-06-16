$(function () {
    let datePicker = $('[id*=txtdate]').datepicker({
        startDate: new Date(), 
        endDate: '+2m',
        multidate: false,
        format: "dd - mm - yyyy",
        daysOfWeekHighlighted: "0,6",
        language: 'en',
        todayHighlight: true,
        daysOfWeekDisabled: [0, 6]
    });
    datePicker.on('changeDate', function (e) { 
        var get_date =  $("#txtdate").val().toUpperCase();
        console.log(get_date) 
    });

  });