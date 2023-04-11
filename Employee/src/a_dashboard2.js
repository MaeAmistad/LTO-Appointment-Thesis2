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
const q = query(coll, where("User_TT", "==", "LICENSING"));
const snapshot = await getCountFromServer(q);
// console.log('count: ', snapshot.data().count);

const coll2 = collection(db,"Motor Vehicle");
const q2 = query(coll2, where("User_TT", "==", "MOTOR VEHICLE REGISTRATION"));
const snapshot2 = await getCountFromServer(q2);
// console.log('count: ', snapshot2.data().count);

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
let totlC = 0;
let totlEx = 0;
querySnapshottotlDLPI.forEach((doc) => {
  if(doc.data().User_Stat == "PENDING"){
          var total = totlE+=1;
          document.getElementById("evltr").innerHTML = total; 
  }
  if(doc.data().User_Stat == "APPROVED" || doc.data().User_Stat == "PASSED"){
    var total = totlC+=1;
    document.getElementById("cshr").innerHTML = total; 
}
if(doc.data().User_Stat == "COMPLETED" ){
  var total = totlEx+=1;
  document.getElementById("exmnr").innerHTML = total; 
}

});
