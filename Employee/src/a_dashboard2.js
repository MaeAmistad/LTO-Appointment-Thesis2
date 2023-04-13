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

const coll = collection(db,"License");
const snapshot = await getCountFromServer(coll);
// console.log('count: ', snapshot.data().count);

const coll2 = collection(db,"Motor Vehicle");
const snapshot2 = await getCountFromServer(coll2);
// console.log('count: ', snapshot2.data().count);

document.getElementById("num_current_rel").innerHTML = snapshot.data().count + snapshot2.data().count;
// BAR CHART
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [snapshot.data().count, snapshot2.data().count]
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
  // document.getElementById("total").innerHTML = snapshot.data().count + snapshot2.data().count;
  // Appointments Count
const appnmts = collection(db,"Applicants");
const cnt = await getCountFromServer(appnmts);
document.getElementById("appnt").innerHTML = cnt.data().count; 

// Evaluator Count
const querySnapshottotlDLPI = await getDocs(collection(db, "Applicants"));
let totlE = 0;
let totlI = 0;
let totlC = 0;
let totlEx = 0;
querySnapshottotlDLPI.forEach((doc) => {
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


});
