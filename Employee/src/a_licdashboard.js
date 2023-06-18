bcklic.addEventListener('click' , () => {
  window.location = "a_dashboard.html"
})
btnReport.addEventListener('click',()=>{
  window.location = "a_licreportdaily.html"
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

// Date Today
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = day + " - " + month + " - " + year;  

// Applicants Examined Bar chart

const wrttnlicexam = await getDocs(collection(db, "Written"));
let wrttn1 = 0;
let wrttn2 = 0;

wrttnlicexam.forEach((doc) => {
// Current Count
    if(doc.data().dt_App == today){
      if(doc.data().result == "PASSED"){
        var wrtnn_examP = wrttn1+=1;
        localStorage.setItem("wrtnn_examP",wrtnn_examP)
      }
      if(doc.data().result == "FAILED"){
        var wrtnn_examF = wrttn2+=1;
        localStorage.setItem("wrtnn_examF",wrtnn_examF)
      } 
    }
  
});

const praclicexam = await getDocs(collection(db, "Practical"));
let prac1 = 0;
let prac2 = 0;

praclicexam.forEach((doc) => {
// Current Count
    if(doc.data().dt_App == today){
      if(doc.data().result == "PASSED"){
        var prac_examP = prac1+=1;
        localStorage.setItem("prac_examP",prac_examP)
      }
      if(doc.data().result == "FAILED"){
        var prac_examF = prac2+=1;
        localStorage.setItem("prac_examF",prac_examF)
      } 
    }
  
});

// If LocalStorage key Get Null
if (localStorage.getItem("wrtnn_examP") == null || localStorage.getItem("wrtnn_examF") == null){
  localStorage.setItem("wrtnn_examP",0);
  localStorage.setItem("wrtnn_examF",0);
}
if (localStorage.getItem("prac_examP") == null || localStorage.getItem("prac_examF") == null){
  localStorage.setItem("prac_examP",0);
  localStorage.setItem("prac_examF",0);
}

let wrtnprac = parseInt(localStorage.getItem("wrtnn_examP")) + parseInt(localStorage.getItem("wrtnn_examF")) + parseInt(localStorage.getItem("prac_examP")) + parseInt(localStorage.getItem("prac_examF"))
document.getElementById("num_current_exttal").innerHTML = wrtnprac;

var barChartOptions = {
    series: [{
      name: 'PASSED',
      data: [localStorage.getItem("wrtnn_examP"), localStorage.getItem("prac_examP")]
    }, {
      name: 'FAILED',
      data: [localStorage.getItem("wrtnn_examF"), localStorage.getItem("prac_examF")]
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
if(doc.data().dt_App == today){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countn1+=1;
        localStorage.setItem("femn",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countn2+=1;
        localStorage.setItem("maln",malcount)
      }
    }
//RENEWAL
    if (doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countrn1+=1;
        localStorage.setItem("femrn",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countrn2+=1;
        localStorage.setItem("malrn",malcount)
      }
    }
}
  
});

if (localStorage.getItem("femn") == null || localStorage.getItem("femrn") == null){
  localStorage.setItem("femn",0)
  localStorage.setItem("femrn",0)
}
if (localStorage.getItem("maln") == null || localStorage.getItem("malrn") == null){
  localStorage.setItem("maln",0)
  localStorage.setItem("malrn",0)
}

document.getElementById("num_current_issttal").innerHTML = parseInt(localStorage.getItem("femn")) + parseInt(localStorage.getItem("femrn")) + parseInt(localStorage.getItem("maln")) + parseInt(localStorage.getItem("malrn"));
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
const totlmscn = await getDocs(collection(db, "Applicants"));
let mscntotl = 0;
totlmscn.forEach((doc) => {
  if(doc.data().dt_App == today){
  if (doc.data().User_AT == "DUPLICATE" || doc.data().User_AT == "REVISION OF RECORDS"){
      var mscn = mscntotl +=1;
      localStorage.setItem("mscntotal",mscn);
  }
}
})

const totlDLPI = await getDocs(collection(db, "License"));
let totl1 = 0;
totlDLPI.forEach((doc) => {
  if(doc.data().dt_App == today){
    if(doc.data().at == "NEW" || doc.data().at == "RENEWAL"){
      var sdp = totl1+=1;
      localStorage.setItem("totl_dlpi", sdp);
    } 
  }
});

// If LocalStorage key Get Null
if (localStorage.getItem("mscntotal") == null || localStorage.getItem("totl_dlpi") == null){
  localStorage.setItem("mscntotal",0);
  localStorage.setItem("totl_dlpi",0);
}

// dlch
const dlch_total = await getDocs(collection(db, "Applicants"));
let dlch1 = 0;
let dlch2 = 0;
let dlch3 = 0;
let dlch4 = 0;
dlch_total.forEach((doc) => {
  // Current Count
      if(doc.data().User_D   == today){
        if(doc.data().User_Stat == "RELEASED"){
          let dlch_cnt = dlch1+=1;
          localStorage.setItem("dlch_cnt1",dlch_cnt);
        }
        else if(doc.data().User_Stat == "FAILED"){
          let dlch_cnt = dlch4+=1;
          localStorage.setItem("dlch_cnt4",dlch_cnt);
        }

        if(doc.data().User_TT == "License"){
          if(doc.data().User_Stat == "INCOMPLETED"){
          let dlch_cnt = dlch2+=1;
          localStorage.setItem("dlch_cnt2",dlch_cnt);
        }
        else if(doc.data().User_Stat == "DECLINED"){
          let dlch_cnt = dlch3+=1;
          localStorage.setItem("dlch_cnt3",dlch_cnt);
        }
      }
      }
  });

  if (localStorage.getItem("dlch_cnt1") == null || localStorage.getItem("dlch_cnt2") == null || localStorage.getItem("dlch_cnt3") == null || localStorage.getItem("dlch_cnt4") == null){
    localStorage.setItem("dlch_cnt1",0);
    localStorage.setItem("dlch_cnt2",0);
    localStorage.setItem("dlch_cnt3",0);
    localStorage.setItem("dlch_cnt4",0);
  }
// total of all
var AEtotl = wrtnprac;
var dpchtotl = parseInt(localStorage.getItem("dlch_cnt1")) + parseInt(localStorage.getItem("dlch_cnt2")) + parseInt(localStorage.getItem("dlch_cnt3")) +  parseInt(localStorage.getItem("dlch_cnt4"));
var DLPI = localStorage.getItem("totl_dlpi");
var MSCN = localStorage.getItem("mscntotal"); 

document.getElementById("num_current_licttal").innerHTML = dpchtotl;
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

// Time Today
var now = new Date()
var time = now.getHours() + ":" + now.getMinutes();
console.log(time)

if(time == "0:0"){
  localStorage.removeItem("wrtnn_examP");
  localStorage.removeItem("wrtnn_examF");
  localStorage.removeItem("prac_examP");
  localStorage.removeItem("prac_examF");
  localStorage.removeItem("femn");
  localStorage.removeItem("maln");
  localStorage.removeItem("femrn");
  localStorage.removeItem("malrn");
  localStorage.removeItem("mscntotal");
  localStorage.removeItem("totl_dlpi");
  localStorage.removeItem("dlch_cnt1");
  localStorage.removeItem("dlch_cnt2");
  localStorage.removeItem("dlch_cnt3");
  localStorage.removeItem("dlch_cnt4");
}

// CODE

  // const wrttn = collection(db,"Written");
  // const w1 = query(wrttn, where("result", "==", "PASSED"));
  // const w2 = query(wrttn, where("result", "==", "FAILED"));
  // const wpass = await getCountFromServer(w1);
  // const wfail = await getCountFromServer(w2);
 
  // const prctcl = collection(db,"Practical");
  // const p1 = query(prctcl, where("result", "==", "PASSED"));
  // const p2 = query(prctcl, where("result", "==", "FAILED"));
  // const ppass = await getCountFromServer(p1);
  // const pfail = await getCountFromServer(p2);

  // const dpch = collection(db,"Applicants");
// const relLic = query(dpch, where("User_Stat", "==", "RELEASED"));
// const incompLic = query(dpch, where("User_Stat", "==", "INCOMPLETED"));
// const failed = query(dpch, where("User_Stat", "==", "FAILED"));
// const RELIC = await getCountFromServer(relLic);
// const INCOMLIC = await getCountFromServer(incompLic);
// const FAILED = await getCountFromServer(failed);