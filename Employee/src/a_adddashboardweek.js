bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
  })
  btnReportadd.addEventListener('click' , () => {
    window.location = "a_transactaddreportwk.html"
  })
  
  // ---------- CHARTS ----------
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getFirestore, query, collection,getCountFromServer,where, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
  
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
  
  const license = await getDocs(collection(db, "License"));
  const mv = await getDocs(collection(db, "Motor Vehicle"));
  
// WEEK DATE
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
  console.log(today)

  
  // MUNICIPAL ADDRESS CHART
  
  let lic1 = 0;
  let lic2 = 0;
  let lic3 = 0;
  let lic4 = 0;
  let lic5 = 0;
  let lic6 = 0;
  let lic7 = 0;
  let lic8 = 0;
  let lic9 = 0;
  let lic10 = 0;
  let lic11 = 0; 
  
  let mv1 = 0;
  let mv2 = 0;
  let mv3 = 0;
  let mv4 = 0;
  let mv5 = 0;
  let mv6 = 0;
  let mv7 = 0;
  let mv8 = 0; 
  let mv9 = 0;
  let mv10 = 0;
  let mv11 = 0; 
  
  let licmv = 0;
  license.forEach(doc =>{
  
  if(today.includes(doc.data().dt_App)){
    if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
      lic1 = lic1+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
      lic2 = lic2+=1
      licmv = licmv+=1 
    }
    else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
      lic3 = lic3+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
      lic4 = lic4+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
      lic5 = lic5+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
      lic6 = lic6+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
      lic7 = lic7+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
      lic8 = lic8+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
      lic9 = lic9+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
      lic10 = lic10+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
      lic11 = lic11+=1
      licmv = licmv+=1
    }
  }
  });
  
  mv.forEach(doc =>{
  if(today.includes(doc.data().dt_App)){
    if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
      mv1 = mv1+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
      mv2 = mv2+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
      mv3 = mv3+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
      mv4 = mv4+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
      mv5 = mv5+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
      mv6 = mv6+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
      mv7 = mv7+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
      mv8 = mv8+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
      mv9 = mv9+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
      mv10 = mv10+=1
      licmv = licmv+=1
    }
    else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
      mv11 = mv11+=1
      licmv = licmv+=1
    }
  }
  });
  
  document.getElementById("num_current_add").innerHTML = licmv;
  
  var barChartOptions = {
    series: [{
      name: "LICENSE",
      data: [lic1,lic2,lic3,lic4,lic5,lic6,lic7,lic8,lic9,lic10,lic11]
    },
    {
      name: "MVR",
      data: [mv1,mv2,mv3,mv4,mv5,mv6,mv7,mv8,mv9,mv10,mv11]
    }], 
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      events: {
        dataPointSelection: function(event, chartContext, config) {
          // window.location = "a_licdashboard.html";
        }
      }
    },
    colors: [
      "#246dec",
      "#4f35a1"
    ],
    plotOptions: {
      bar: {
          borderRadius: 4,
          horizontal: false,
          columnWidth: '40%'
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
        onItemHover: {
          highlightDataSeries: true
        }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["San Ildefonso", "Vigan City","Bantay","San Vicente","Sta. Catalina","Caoayan","Sto. Domingo","Magsingal","San Juan", "Cabugao","Sinait"],
    },
    yaxis: { 
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart-add"), barChartOptions);
  barChart.render();