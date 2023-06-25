bcklic.addEventListener('click' , () => {
    window.location = "a_mvweeklyfltr.html"
  }) 
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
   
  // Your web app's Firebase configuration
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
  
  var tbody = document.getElementById('tbody');
  var tbody1 = document.getElementById('tbody1');
  
// Weekly Date
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
      var today = day + " - " + month + " - " + year; 
      
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
  
      let d1 = new Date(start);
      let d2 = new Date(end);
      let today = getDatesInRange(d1, d2);
  
  // DATE TODAY
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  // TIME TODAY 
  let hrs = date.getHours();
  let mnts = date.getMinutes();
  let time = hrs + ":" + mnts;
  var today2 = month + "/" + day + "/" + year ;
  document.getElementById('datee').innerHTML = "June " + 26 + " - " + 30 + ", " + year
  document.getElementById('dtt').innerHTML = today2 + " " + time
  
  let itmNo = 0;
  
  const querySnapshot2 = await getDocs(collection(db,"Motor Vehicle")); 
  querySnapshot2.forEach(doc => { 
  
            if(today.includes(doc.data().dt_App)){
                  let trow = document.createElement('tr');   
                  let td1 = document.createElement('td'); 
                  let td2 = document.createElement('td'); 
                  let td3 = document.createElement('td');
                  let td4 = document.createElement('td');
                  let td5 = document.createElement('td'); 
      
                  td1.innerHTML = itmNo+=1;
                  td2.innerHTML = doc.id;
                  td3.innerHTML = doc.data().User_name;
                  td4.innerHTML = doc.data().at;
                  td5.innerHTML = doc.data().User_TotalPayment;
  
                  trow.appendChild(td1);
                  trow.appendChild(td2);
                  trow.appendChild(td3);
                  trow.appendChild(td4);
                  trow.appendChild(td5);
    
                  tbody.appendChild(trow);
            }
  });
  querySnapshot2.forEach(doc => { 
  
  if(today.includes(doc.data().dt_App)){
        let trow = document.createElement('tr');   
        let td1 = document.createElement('td'); 
        let td2 = document.createElement('td'); 
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td'); 
  
        td1.innerHTML = itmNo+=1;
        td2.innerHTML = doc.id;
        td3.innerHTML = doc.data().User_name;
        td4.innerHTML = doc.data().at;
        td5.innerHTML = doc.data().User_TotalPayment; 
  
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4); 
        trow.appendChild(td5);
  
        tbody1.appendChild(trow);
  }
  });