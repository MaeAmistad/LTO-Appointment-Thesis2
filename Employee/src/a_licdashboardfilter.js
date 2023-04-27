
  function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate);
    const dates = [];

// to push date in an array
    while (date <= endDate) {
      let dt = new Date(date)
      let day = dt.getDate();
      var month = dt.getMonth() + 1;
      var year = dt.getFullYear();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      var today = day + "-" + month + "-" + year; 
      
      dates.push(today); 
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }
// Getting date / Initialization
    let now = new Date();
//  For Getting the week date
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();
// Set a start date
    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
// Set an end date
    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));

  const d1 = new Date(start);
  const d2 = new Date(end);
  
  console.log(getDatesInRange(d1, d2));