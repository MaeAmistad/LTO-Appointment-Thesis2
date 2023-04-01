// ---------- CHARTS ----------

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, query, collection,getCountFromServer,where,getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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



// BAR CHART1

  const wrttn = collection(db,"Written");
  const w1 = query(wrttn, where("result", "==", "PASSED"));
  const w2 = query(wrttn, where("result", "==", "FAILED"));
  const wpass = await getCountFromServer(w1);
  const wfail = await getCountFromServer(w2);

  const prctcl = collection(db,"Practical");
  const p1 = query(prctcl, where("result", "==", "PASSED"));
  const p2 = query(prctcl, where("result", "==", "FAILED"));
  const ppass = await getCountFromServer(p1);
  const pfail = await getCountFromServer(p2);

var barChartOptions = {
    series: [{
      data: [wpass.data().count, ppass.data().count]
    }, {
      data: [wfail.data().count, pfail.data().count]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
    },
    colors: [
      "#4f35a1",
      "#FF8B13"
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
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["WRITTEN", "PRACTICAL"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart1"), barChartOptions);
  barChart.render();




// document.getElementById("bar-chart1").addEventListener('click', cl_Div1);
// function cl_Div1() {
//   window.location = "a_appList.html"
// }

// BAR CHART 2

const querySnapshot = await getDocs(collection(db, "Applicants"));
querySnapshot.forEach((doc) => {
  if(doc.data().User_TT == "LICENSING"){
    if(doc.data().User_AT == "NEW" || doc.data().User_AT == "RENEWAL"){
      if(doc.data().User_GN == "FEMALE"){
        // const coll = collection(db, "Applicants");
        // const snapshot = getCountFromServer(coll);
        // console.log('count: ', snapshot.data().count);

        var fem = doc.data().User_GN;
        console.log(fem)
      }

    }
    
  }
  
});

const dlpinw = collection(db,"Applicants");
const n1 = query(dlpinw, where("User_GN", "==", "FEMALE"));
const n2 = query(dlpinw, where("User_GN", "==", "MALE"));
const f1 = await getCountFromServer(n1); 
const m1 = await getCountFromServer(n2);

const dlpirnw = collection(db,"Applicants");
const r1 = query(dlpirnw, where("User_GN", "==", "FEMALE"));
const r2 = query(dlpirnw, where("User_GN", "==", "MALE"));
const f2 = await getCountFromServer(r1);
const m2 = await getCountFromServer(r2);

var barChartOptions = {
    series: [{
      data: [f1.data().count, f2.data().count]
    }, {
      data: [m1.data().count, m2.data().count]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
    },
    colors: [
      "#408E91",
      "#D27685"
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
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["NEW", "RENEWAL"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
  barChart.render();

// document.getElementById("bar-chart2").addEventListener('click', cl_Div2);
// function cl_Div2() {
//   window.location = "a_appList.html"
// }