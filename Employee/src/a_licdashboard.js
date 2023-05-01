bcklic.addEventListener('click' , () => {
  window.location = "a_dashboard.html"
})
btnReport.addEventListener('click',()=>{
  window.location = "a_licreport.html"
})
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



// Applicants Examined Bar chart

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
      name: 'PASSED',
      data: [wpass.data().count, ppass.data().count]
    }, {
      name: 'FAILED',
      data: [wfail.data().count, pfail.data().count]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      
    },
    colors: [
      "#361626",
      "#c49baf"
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
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
  //   states: {
  //     active: {
  //         allowMultipleDataPointsSelection: true,
  //     },
  // },
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

// DL  & Permit Issued BarChart
const DLIPissued = await getDocs(collection(db, "License"));
let countn1 = 0;
let countn2 = 0;
let countrn1 = 0;
let countrn2 = 0;
DLIPissued.forEach((doc) => {
// NEW
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countn1+=1;
        localStorage.setItem("femn",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countn2+=1;
        localStorage.setItem("maln",malcount)
      }
//RENEWAL
    if (doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countrn1+=1;
        // console.log(femcount)
        localStorage.setItem("femrn",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countrn2+=1;
        localStorage.setItem("malrn",malcount)
      }
    }
    
  }
  
});

var barChartOptions = {
    series: [{
      name: 'FEMALE',
      data: [localStorage.getItem("femn"), localStorage.getItem("femrn")]
    }, {
      name: 'MALE',
      data: [localStorage.getItem("maln"), localStorage.getItem("malrn")]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
    },
    colors: [
      "#C59336",
      "#FAD48E"
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%'
      },
    },
    
    dataLabels: {
      enabled: false,
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

//main chart

// mscn txn
const querySnapshottotlmscn = await getDocs(collection(db, "Applicants"));
let mscntotl = 0;
querySnapshottotlmscn.forEach((doc) => {
  if (doc.data().User_AT == "DUPLICATE" || doc.data().User_AT == "REVISION OF RECORDS"){
      var mscn = mscntotl +=1;
      localStorage.setItem("mscntotal",mscn);
  }
})

const querySnapshottotlDLPI = await getDocs(collection(db, "License"));
let totl1 = 0;
querySnapshottotlDLPI.forEach((doc) => {
    if(doc.data().at == "NEW" || doc.data().at == "RENEWAL"){
      var sdp = totl1+=1;
      localStorage.setItem("totl_dlpi", sdp);
    }
    
});

// dlch
const dpch = collection(db,"Applicants");
const relLic = query(dpch, where("User_Stat", "==", "RELEASED"));
const incompLic = query(dpch, where("User_Stat", "==", "INCOMPLETED"));
const failed = query(dpch, where("User_Stat", "==", "FAILED"));
const RELIC = await getCountFromServer(relLic);
const INCOMLIC = await getCountFromServer(incompLic);
const FAILED = await getCountFromServer(failed);

// total of all
var AEtotl = wpass.data().count + ppass.data().count + wfail.data().count + pfail.data().count;
var dpchtotl = RELIC.data().count + INCOMLIC.data().count + + FAILED.data().count;
var DLPI = localStorage.getItem("totl_dlpi");
var MSCN = localStorage.getItem("mscntotal");
var barChartOptions = {
  series: [{
    name: "TOTAL",
    data: [ AEtotl , DLPI , MSCN , dpchtotl]
  }],
  chart: { 
    type: 'bar',
    height: 350,
    toolbar: {
      show: true
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        // console.log("Good")
        console.log(config.w.config.series[config.dataPointIndex])
      }
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: [
    '#89375F',
    '#F7B844',
    '#0EA293',
    '#B8621B'
  ],
  legend: {
    show: false,
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
    categories: ["APPLICANTS EXAMINED", "DL & PERMIT ISSUED", "MISC TXN", "DL & PERMITS CASES HANDLED"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions);
barChart.render();


