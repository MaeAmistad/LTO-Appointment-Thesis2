bcklic.addEventListener('click' , () => {
    window.location = "a_licdashboard.html"
  })
//   btnReport.addEventListener('click',()=>{
//     window.location = "a_licreportdaily.html"
//   })
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
const lic_cnt = await getDocs(collection(db, "License"));

// Date Today
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = day + " - " + month + " - " + year;  

// SP
let spn_liccnt = 0;
let sprn_liccnt = 0;
let spd_liccnt = 0;
let mscn2 = 0;
// DL
let dln_liccnt = 0;
let dlrn_liccnt = 0;
let dld_liccnt = 0;
let mscn3 = 0;

// CL
let cln_liccnt = 0;
let clrn_liccnt = 0;
let cdld_liccnt = 0;
let mscn4 = 0;
lic_cnt.forEach((doc) => {
  if(doc.data().dt_App == today){
// SP
if (doc.data().laa == "STUDENT-DRIVER'S PERMIT"){
    if (doc.data().at == "NEW"){
        var mscn = spn_liccnt +=1;
         mscn2 = mscn2 +=1;
        localStorage.setItem("spn_liccnt",mscn);                    
    }
    else if (doc.data().at == "RENEWAL"){
      var mscn = sprn_liccnt +=1;
       mscn2 = mscn2 +=1;
      localStorage.setItem("sprn_liccnt",mscn);                      
    }
    else if (doc.data().at == "DUPLICATE"){
      var mscn = spd_liccnt +=1;
       mscn2 = mscn2 +=1;
      localStorage.setItem("spd_liccnt",mscn);                   
    }                  
}
// DL
else if(doc.data().laa == "DRIVER'S LICENSE"){
    if (doc.data().at == "NEW"){
        var mscn = dln_liccnt +=1;
         mscn3 = mscn3 +=1;
        localStorage.setItem("dln_liccnt",mscn);                    
    }
    else if (doc.data().at == "RENEWAL"){
      var mscn = dlrn_liccnt +=1;
       mscn3 = mscn3 +=1;
      localStorage.setItem("dlrn_liccnt",mscn);                     
    }
    else if (doc.data().at == "DUPLICATE"){
      var mscn = dld_liccnt +=1;
       mscn3 = mscn3 +=1;
      localStorage.setItem("dld_liccnt",mscn);                 
    } 
}
// CL
  else if(doc.data().laa == "CONDUCTOR'S LICENSE"){
    if (doc.data().at == "NEW"){
        var mscn = cln_liccnt +=1;
         mscn4 = mscn4 +=1;
        localStorage.setItem("cln_liccnt",mscn);                     
    }
    else if (doc.data().at == "RENEWAL"){
      var mscn = clrn_liccnt +=1;
       mscn4 = mscn4 +=1;
      localStorage.setItem("clrn_liccnt",mscn);                      
    }
    else if (doc.data().at == "DUPLICATE"){
      var mscn = cdld_liccnt +=1;
       mscn4 = mscn4 +=1;
      localStorage.setItem("cdld_liccnt",mscn);                     
    } 
  }
}
})

let spncnt = localStorage.getItem("spn_liccnt")
let sprncnt = localStorage.getItem("sprn_liccnt")
let spdcnt = localStorage.getItem("spd_liccnt")

document.getElementById("lic_transac").innerHTML = mscn2

var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ spncnt, sprncnt,spdcnt]
    }], 
    chart: { 
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      events: {
        dataPointSelection: function(event, chartContext, config) {
        //   window.location = "a_licdbdaily.html";
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
      categories: ["NEW", "RENEWAL", "DUPLICATE"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart-main"), barChartOptions);
  barChart.render();

// DL CHART

let dlncnt = localStorage.getItem("dln_liccnt")
let dlrncnt = localStorage.getItem("dlrn_liccnt")
let dldcnt = localStorage.getItem("dld_liccnt")

document.getElementById("num_current_licttal1").innerHTML = mscn3

var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ 0, 0,0 ]
    }], 
    chart: { 
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      events: {
        dataPointSelection: function(event, chartContext, config) {
        //   window.location = "a_licdbdaily.html";
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
      categories: ["NEW", "RENEWAL", "DUPLICATE"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
  barChart.render();

// CL CHART

let clncnt = localStorage.getItem("cln_liccnt")
let clrncnt = localStorage.getItem("clrn_liccnt")
let cldcnt = localStorage.getItem("cdld_liccnt")

document.getElementById("num_current_licttal2").innerHTML = mscn4

var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ clncnt, clrncnt,cldcnt]
    }], 
    chart: { 
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      events: {
        dataPointSelection: function(event, chartContext, config) {
        //   window.location = "a_licdbdaily.html";
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
      categories: ["NEW", "RENWAL", "DUPLICATE"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions);
  barChart.render();