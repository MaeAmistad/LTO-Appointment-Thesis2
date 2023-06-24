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
var mmsp = dd.slice(5,7);

  if (mmsp == "04"){
    mmlic1 = mmlic1+=1;
  }
  if (mmsp == "05"){
    mmlic2 = mmlic2+=1;
  }
  if (mmsp == "06"){
    mmlic3 = mmlic3+=1;
  }

// Current Count Chart
  if(dd == today){
    lic_current = lic_current+=1;
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
var mmsp = dd.slice(5,7);

  if (mmsp == "04"){
    mmv1 = mmv1+=1;
  }
  if (mmsp == "05"){
    mmv2 = mmv2+=1;
  }
  if (mmsp == "06"){
    mmv3 = mmv3+=1;
  }

  // Current Count Chart
  if(dd == today){
    mv_current = mv_current+=1;
  }

});
document.getElementById("num_current_rel").innerHTML = lic_current + mv_current;

// BAR CHART
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [lic_current, mv_current]
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
    data: [0, 0, 0,0,0,mmlic3]
  }, {
    name: 'Motor Vehicle Registration',
    data: [0, 0, 0,0,0,mmv3]
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

license.forEach(doc =>{
  if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){

  }
  else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){

  }
})
var barChartOptions = {
  series: [{
    name: "LICENSE",
    data: [0,0,0,0,0,0,0,0,0,0,0]
  },
  {
    name: "MVR ",
    data: [0,0,0,0,0,0,0,0,0,0,0]
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