bcklic.addEventListener('click' , () => {
  window.location = "a_dashboard.html"
})
btnReport.addEventListener('click',()=>{
  window.location = "a_licreport.html"
})
// ---------- CHARTS ---------- 

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection,getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

// Monthly Filter
var currentmonth = new Date().getMonth() + 1;
if (currentmonth < 10)  currentmonth = "0" + currentmonth;

// Applicants Examined Bar chart

const wrttnlicexam = await getDocs(collection(db, "Written"));
let wrttn1 = 0;
let wrttn2 = 0;

wrttnlicexam.forEach((doc) => {
// getting month mon
let dd = doc.data().dt_App;
let mmsp = dd.slice(5,7);
// Current Count
    if(mmsp == currentmonth){ 
      if(doc.data().result == "PASSED"){
        var wrtnn_examP = wrttn1+=1;
        localStorage.setItem("wrtnn_examPmon",wrtnn_examP)
      }
      if(doc.data().result == "FAILED"){
        var wrtnn_examF = wrttn2+=1;
        localStorage.setItem("wrtnn_examFmon",wrtnn_examF)
      } 
    }
  
});

const praclicexam = await getDocs(collection(db, "Practical"));
let prac1 = 0;
let prac2 = 0;

praclicexam.forEach((doc) => {
// getting month
let dd = doc.data().dt_App;
var mmsp = dd.slice(5,7);
// console.log(mmsp) mon
// Current Count
    if(mmsp == currentmonth){
      if(doc.data().result == "PASSED"){
        var prac_examP = prac1+=1;
        localStorage.setItem("prac_examPmon",prac_examP)
      }
      if(doc.data().result == "FAILED"){
        var prac_examF = prac2+=1;
        localStorage.setItem("prac_examFmon",prac_examF)
      } 
    }
  
});

// If LocalStorage key Get Null
if (localStorage.getItem("wrtnn_examPmon") == null || localStorage.getItem("wrtnn_examFmon") == null){
  localStorage.setItem("wrtnn_examPmon",0);
  localStorage.setItem("wrtnn_examFmon",0);
}
if (localStorage.getItem("prac_examPmon") == null || localStorage.getItem("prac_examFmon") == null){
  localStorage.setItem("prac_examPmon",0);
  localStorage.setItem("prac_examFmon",0);
}

let wrtnprac = parseInt(localStorage.getItem("wrtnn_examPmon")) + parseInt(localStorage.getItem("wrtnn_examFmon")) + parseInt(localStorage.getItem("prac_examPmon")) + parseInt(localStorage.getItem("prac_examFmon"))
document.getElementById("num_current_exttal").innerHTML = wrtnprac;

var barChartOptions = {
    series: [{
      name: 'PASSED',
      data: [localStorage.getItem("wrtnn_examPmon"), localStorage.getItem("prac_examPmon")]
    }, {
      name: 'FAILED',
      data: [localStorage.getItem("wrtnn_examFmon"), localStorage.getItem("prac_examFmon")]
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
// getting month
let dd = doc.data().dt_App;
var mmsp = dd.slice(5,7);
// NEW
if(mmsp == currentmonth){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countn1+=1;
        localStorage.setItem("femnmon",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countn2+=1;
        localStorage.setItem("malnmon",malcount)
      }
    }
//RENEWAL
    if (doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "FEMALE"){
        var femcount = countrn1+=1;
        localStorage.setItem("femrnmon",femcount)
      }
      if(doc.data().User_GN == "MALE"){
        var malcount = countrn2+=1;
        localStorage.setItem("malrnmon",malcount)
      }
    }
}
  
});

if (localStorage.getItem("femnmon") == null || localStorage.getItem("femrnmon") == null){
  localStorage.setItem("femnmon",0)
  localStorage.setItem("femrnmon",0)
}
if (localStorage.getItem("malnmon") == null || localStorage.getItem("malrnmon") == null){
  localStorage.setItem("malnmon",0)
  localStorage.setItem("malrnmon",0)
}

document.getElementById("num_current_issttal").innerHTML = parseInt(localStorage.getItem("femnmon")) + parseInt(localStorage.getItem("femrnmon")) + parseInt(localStorage.getItem("malnmon")) + parseInt(localStorage.getItem("malrnmon"));
var barChartOptions = {
    series: [{
      name: 'FEMALE',
      data: [localStorage.getItem("femnmon"), localStorage.getItem("femrnmon")]
    }, {
      name: 'MALE',
      data: [localStorage.getItem("malnmon"), localStorage.getItem("malrnmon")]
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
const totlmscn = await getDocs(collection(db, "License"));
let mscntotl = 0;
totlmscn.forEach((doc) => {
  // getting month
let dd = doc.data().dt_App;
var mmsp = dd.slice(5,7);

if(mmsp == currentmonth){
  if (doc.data().at == "DUPLICATE" || doc.data().at == "REVISION OF RECORDS"){
      var mscn = mscntotl +=1;
      localStorage.setItem("mscntotalmon",mscn);
  }
}
})

const totlDLPI = await getDocs(collection(db, "License"));
let totl1 = 0;
totlDLPI.forEach((doc) => {
  // getting month
let dd = doc.data().dt_App;
var mmsp = dd.slice(5,7);

  if(mmsp == currentmonth){
    if(doc.data().at == "NEW" || doc.data().at == "RENEWAL"){
      var sdp = totl1+=1;
      localStorage.setItem("totl_dlpimon", sdp);
    } 
  }
});

// If LocalStorage key Get Null
if (localStorage.getItem("mscntotalmon") == null || localStorage.getItem("totl_dlpimon") == null){
  localStorage.setItem("mscntotalmon",0);
  localStorage.setItem("totl_dlpimon",0);
}

// dlch
const dlch_total = await getDocs(collection(db, "Applicants"));
let dlch1 = 0;
let dlch2 = 0;
let dlch3 = 0;
let dlch4 = 0;
dlch_total.forEach((doc) => {
  // getting month
let dd = doc.data().User_D;
let mmsp = dd.slice(5,7);

  // Current Count
      if(mmsp == currentmonth){
        if(doc.data().User_Stat == "RELEASED"){
          let dlch_cnt = dlch1+=1;
          localStorage.setItem("dlch_cnt1mon",dlch_cnt);
        }
        else if(doc.data().User_Stat == "FAILED"){
          let dlch_cnt = dlch4+=1;
          localStorage.setItem("dlch_cnt4mon",dlch_cnt);
        }

        if(doc.data().User_TT == "License"){
          if(doc.data().User_Stat == "INCOMPLETED"){
          let dlch_cnt = dlch2+=1;
          localStorage.setItem("dlch_cnt2mon",dlch_cnt);
        }
        else if(doc.data().User_Stat == "DECLINED"){
          let dlch_cnt = dlch3+=1;
          localStorage.setItem("dlch_cnt3mon",dlch_cnt);
        } 
      }
      }
  });

  if (localStorage.getItem("dlch_cnt1mon") == null || localStorage.getItem("dlch_cnt2mon") == null || localStorage.getItem("dlch_cnt3mon") == null || localStorage.getItem("dlch_cnt4mon") == null){
    localStorage.setItem("dlch_cnt1mon",0);
    localStorage.setItem("dlch_cnt2mon",0);
    localStorage.setItem("dlch_cnt3mon",0);
    localStorage.setItem("dlch_cnt4mon",0);
  }
// total of all
var AEtotl = wrtnprac;
var dpchtotl = parseInt(localStorage.getItem("dlch_cnt1mon")) + parseInt(localStorage.getItem("dlch_cnt2mon")) + parseInt(localStorage.getItem("dlch_cnt3mon")) +  parseInt(localStorage.getItem("dlch_cnt4mon"));
var DLPI = localStorage.getItem("totl_dlpimon");
var MSCN = localStorage.getItem("mscntotalmon"); 

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

if(time == "1:0"){
  localStorage.removeItem("wrtnn_examPmon");
  localStorage.removeItem("wrtnn_examFmon");
  localStorage.removeItem("prac_examPmon");
  localStorage.removeItem("prac_examFmon");
  localStorage.removeItem("femnmon");
  localStorage.removeItem("malnmon");
  localStorage.removeItem("femrnmon");
  localStorage.removeItem("malrnmon");
  localStorage.removeItem("mscntotalmon");
  localStorage.removeItem("totl_dlpimon");
  localStorage.removeItem("dlch_cnt1mon");
  localStorage.removeItem("dlch_cnt2mon");
  localStorage.removeItem("dlch_cnt3mon");
  localStorage.removeItem("dlch_cnt4mon");
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