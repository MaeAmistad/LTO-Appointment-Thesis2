function getWeekDates() {

    let now = new Date();
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();

    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);

    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));
  
    return [start, end];
  }
  
  let [start, end] = getWeekDates();
  
  console.log(start.toLocaleString(), end.toLocaleString());
 