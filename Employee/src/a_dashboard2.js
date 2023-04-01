// ---------- CHARTS ----------

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, query, collection,getCountFromServer,where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

const coll = collection(db,"Applicants");
const q = query(coll, where("User_TT", "==", "LICENSING"));
const snapshot = await getCountFromServer(q);
// console.log('count: ', snapshot.data().count);

const coll2 = collection(db,"Applicants");
const q2 = query(coll2, where("User_TT", "==", "MOTOR VEHICLE REGISTRATION"));
const snapshot2 = await getCountFromServer(q2);
// console.log('count: ', snapshot2.data().count);

// BAR CHART
var barChartOptions = {
    series: [{
      data: [snapshot.data().count, snapshot2.data().count]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
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
      show: false
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

document.getElementById("bar-chart").addEventListener('click', cl_Div);
function cl_Div() {
  window.location = "a_licdashboard.html"
}