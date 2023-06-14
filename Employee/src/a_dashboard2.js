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

// Date Today
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = day + " - " + month + " - " + year;       

// Time Today
var now = new Date()
var time = now.getHours() + ":" + now.getMinutes();
console.log(time)

// card
// appntment_chrt.addEventListener('click',() => {
//   window.location = "a_appntmentCard.html"
// });
inspctor.addEventListener('click',() => {
  window.location = "a_applistins.html"
});
evluatr.addEventListener('click',() => {
  window.location = "a_applist.html"
});
cashr.addEventListener('click',() => {
  window.location = "a_applistca.html"
});
exminer.addEventListener('click',() => {
  window.location = "a_applistex.html"
});

// Evaluator Count
const card_count = await getDocs(collection(db, "Applicants"));
let totlAppT = 0;
let totlE = 0;
let totlI = 0;
let totlC = 0;
let totlEx = 0; 



card_count.forEach((doc) => {

// CARD COUNT
if (doc.data().User_D == today){

  document.getElementById("appnt").innerHTML = totlAppT+=1; 

  if(doc.data().User_TT == "LICENSING"){
      if(doc.data().User_Stat == "PENDING"){
          var total = totlE+=1;
          document.getElementById("evltr").innerHTML = total; 
      }
  }
  else if (doc.data().User_Stat == "APPROVED_TO_PROCEED"){
    var total = totlE+=1;
    document.getElementById("evltr").innerHTML = total; 
  }

  if (doc.data().User_TT == "MOTOR VEHICLE REGISTRATION"){
    if(doc.data().User_Stat == "PENDING"){
      var total = totlI+=1;
      document.getElementById("inspctr").innerHTML = total; 
  }
  }

  if(doc.data().User_Stat == "APPROVED_TO_CASHIER" || doc.data().User_Stat == "PASSED"){
    var total = totlC+=1;
    document.getElementById("cshr").innerHTML = total; 
}
if(doc.data().User_TT == "LICENSING"){
  if(doc.data().User_AT == "NEW" && doc.data().User_Laa == "DRIVER'S LICENSE" ){
    if(doc.data().User_Stat == "COMPLETED" ){
      var total = totlEx+=1;
      document.getElementById("exmnr").innerHTML = total; 
    }
  }
  else if(doc.data().User_Laa == "DRIVER'S LICENSE" && doc.data().User_AT == "ADDITIONAL DL CODE OR CATEGORY"){
    if(doc.data().User_Stat == "COMPLETED" ){
      var total = totlEx+=1;
      document.getElementById("exmnr").innerHTML = total; 
    }
  }
  else if( doc.data().User_Laa == "CONDUCTOR'S LICENSE" && doc.data().User_AT == "NEW"){
    if(doc.data().User_Stat == "COMPLETED" ){
      var total = totlEx+=1;
      document.getElementById("exmnr").innerHTML = total; 
    }
  }
}
}
  
});

// For License
const license = await getDocs(collection(db, "License"));
let mmlic1 = 0;
let mmlic2 = 0;
let mmlic3 = 0;

let lic_current = 0;
license.forEach((doc) => {

// For Monthly Area Chart
let dd = doc.data().dt_App;
let mmsp = dd.slice(3,5); 

  if (mmsp == "04"){
    let mm11 = mmlic1+=1;
    localStorage.setItem("mm_cnt1",mm11)
  }
  if (mmsp == "05"){
    let mm22 = mmlic2+=1;
    localStorage.setItem("mm_cnt2",mm22)
  }
  if (mmsp == "06"){
    let mm33 = mmlic3+=1;
    localStorage.setItem("mm_cnt3",mm33)
  }

// Current Count Chart
  if(dd == today){
    let liccnt = lic_current+=1;
    localStorage.setItem("lic_currentcnt",liccnt)
  }

});
// For MV
const mv = await getDocs(collection(db, "Motor Vehicle"));
let mmv1 = 0;
let mmv2 = 0;
let mmv3 = 0;

let mv_current = 0;
mv.forEach((doc) => {

// For Monthly Area Chart
let dd = doc.data().dt_App;
let mmsp = dd.slice(3,5);

  if (mmsp == "04"){
    let mv11 = mmv1+=1;
    localStorage.setItem("mmv_cnt1",mv11)
  }
  if (mmsp == "05"){
    let mv22 = mmv2+=1;
    localStorage.setItem("mmv_cnt2",mv22)
  }
  if (mmsp == "06"){
    let mv33 = mmv3+=1;
    localStorage.setItem("mmv_cnt3",mv33)
  }

  // Current Count Chart
  if(dd == today){
    let mvcnt = mv_current+=1;
    localStorage.setItem("mv_currentcnt",mvcnt)
  }

});

// If LocalStorage key Get Null
if (localStorage.getItem("lic_currentcnt") == null || localStorage.getItem("mv_currentcnt") == null){
  localStorage.setItem("lic_currentcnt",0);
  localStorage.setItem("mv_currentcnt",0);
}

document.getElementById("num_current_rel").innerHTML = parseInt(localStorage.getItem("lic_currentcnt")) + parseInt(localStorage.getItem("mv_currentcnt"));

// BAR CHART
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [localStorage.getItem("lic_currentcnt"), localStorage.getItem("mv_currentcnt")]
    }], 
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      events: {
        dataPointSelection: function(event, chartContext, config) {
          window.location = "a_licdashboard.html";
        }
      }
    },
    colors: [
      "#246dec",
      "#4f35a1"
    ],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true
    },
    xaxis: {
      categories: ["LICENSE", "MVR"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

// total Count in bar CHART

// MONTHLY count of appointment CHART

// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Licensing',
    data: [0, 0, 0, localStorage.getItem("mm_cnt1") ,localStorage.getItem("mm_cnt2"),localStorage.getItem("mm_cnt3")]
  }, {
    name: 'Motor Vehicle Registration',
    data: [0, 0, 0,    localStorage.getItem("mmv_cnt1"),localStorage.getItem("mmv_cnt2"),localStorage.getItem("mmv_cnt3")]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: true,
    }
  },
  colors: ["#246dec", "#4f35a1"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr","May","Jun"],
  markers: {
    size: 0
  },
  yaxis: [ 
    {
      title: {
        text: 'Motor Vehicle Registration',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Licensing',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();
