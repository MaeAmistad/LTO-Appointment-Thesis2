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
const DLIPissued = await getDocs(collection(db, "Applicants"));
let countn1 = 0;
let countn2 = 0;
let countrn1 = 0;
let countrn2 = 0;
DLIPissued.forEach((doc) => {
  if(doc.data().User_TT == "LICENSING"){
    if(doc.data().User_AT == "NEW"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countn1+=1;
        // console.log(femcount)
        localStorage.setItem("femn",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countn2+=1;
        localStorage.setItem("maln",malcount)
      }

    }

    if (doc.data().User_AT == "RENEWAL"){
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
const querySnapshottotlDLPI = await getDocs(collection(db, "Applicants"));
let totl1 = 0;
querySnapshottotlDLPI.forEach((doc) => {
  if(doc.data().User_Stat == "COMPLETED"){
    if(doc.data().User_TT == "LICENSING"){
      if(doc.data().User_AT == "NEW" || doc.data().User_AT == "RENEWAL"){
        if(doc.data().User_GN == "FEMALE" || doc.data().User_GN == "MALE"){
          var total = totl1+=1;
          localStorage.setItem("totl",total)
          // console.log(doc.data().User_GN)
        } 
      }
    }
  }

});

const dpch = collection(db,"Applicants");
const sp = query(dpch, where("User_Laa", "==", "STUDENT-DRIVER'S PERMIT"));
const cl = query(dpch, where("User_Laa", "==", "CONDUCTOR'S LICENSE"));
const dl = query(dpch, where("User_Laa", "==", "DRIVER'S LICENSE"));
const spt = await getCountFromServer(sp);
const clt = await getCountFromServer(cl);
const dlt = await getCountFromServer(dl);

var AEtotl = wpass.data().count + ppass.data().count + wfail.data().count + pfail.data().count;
var dpchtotl = spt.data().count + clt.data().count + dlt.data().count;
var DLItotl = localStorage.getItem("totl");

var barChartOptions = {
  series: [{
    name: "TOTAL",
    data: [ AEtotl , DLItotl , 0 , dpchtotl]
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


