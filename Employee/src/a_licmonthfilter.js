bcklic.addEventListener('click' , () => {
  window.location = "a_dashboard.html"
})
btnReporttransct.addEventListener('click',()=>{
  window.location = "a_licreporttrnsctmnthly.html" 
})
btnReportFR.addEventListener('click',()=>{
  window.location = "a_licFinancialrmonthly.html" 
}) 
btnReport.addEventListener('click',()=>{
  window.location = "a_licreportmthly.html" 
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

  // getting month
  // let dd = doc.data().User_D;
  // let mmsp = dd.slice(5,7);
  
  // mmsp == currentmonth

// Applicants Examined Bar chart
const wrttnlicexam = await getDocs(collection(db, "Written"));
let wrttn1 = 0;
let wrttn2 = 0;
let wrttn_all = 0;
wrttnlicexam.forEach((doc) => { 

  // getting month
  let dd = doc.data().dt_App;
  let mmsp = dd.slice(5,7);

    if(mmsp == currentmonth){
      if(doc.data().result == "PASSED"){
        wrttn1 = wrttn1+=1;
        wrttn_all =  wrttn_all+=1
      }
      if(doc.data().result == "FAILED"){
        wrttn2 = wrttn2+=1;
        wrttn_all =  wrttn_all+=1
      } 
    }
  
});

const praclicexam = await getDocs(collection(db, "Practical"));
let prac1 = 0;
let prac2 = 0;
let prac_all = 0;
praclicexam.forEach((doc) => {
 // getting month
 let dd = doc.data().dt_App;
 let mmsp = dd.slice(5,7);

    if(mmsp == currentmonth){
      if(doc.data().result == "PASSED"){
        prac1 = prac1+=1;
        prac_all = prac_all+=1
      }
      if(doc.data().result == "FAILED"){
        prac2 = prac2+=1;
        prac_all = prac_all+=1
      } 
    }
  
});


document.getElementById("num_current_exttal").innerHTML = wrttn_all + prac_all;

var barChartOptions = {
    series: [{
      name: 'PASSED',
      data: [wrttn1, prac1]
    }, {
      name: 'FAILED',
      data: [wrttn2, prac2]
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
let femcountn = 0;
let malcountn = 0;
let malfemcntn = 0;

let femcountrn = 0;
let malcountrn = 0; 
let malfemcntrn = 0;
DLIPissued.forEach((doc) => {

   // getting month
 let dd = doc.data().dt_App;
 let mmsp = dd.slice(5,7);

// NEW
if(mmsp == currentmonth){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "FEMALE"){
        femcountn = femcountn+=1;
        malfemcntn = malfemcntn+=1;
      }
      if(doc.data().User_GN == "MALE"){
        malcountn = malcountn+=1;
        malfemcntn = malfemcntn+=1;
      }
    }
//RENEWAL
    if (doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "FEMALE"){
        femcountrn = femcountrn+=1;
        malfemcntrn = malfemcntrn+=1;
      }
      if(doc.data().User_GN == "MALE"){
        malcountrn = malcountrn+=1;
        malfemcntrn = malfemcntrn+=1;
      }
    }
}
  
}); 

document.getElementById("num_current_issttal").innerHTML = malfemcntn + malfemcntrn;
var barChartOptions = {
    series: [{
      name: 'FEMALE',
      data: [femcountn, femcountrn]
    }, {
      name: 'MALE',
      data: [malcountn, malcountrn]
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

//second chart

// mscn txn
const totl = await getDocs(collection(db, "License"));
let mscntotl = 0;
totl.forEach((doc) => {

   // getting month
 let dd = doc.data().dt_App;
 let mmsp = dd.slice(5,7);

  if(mmsp == currentmonth){
  if (doc.data().at == "DUPLICATE" || doc.data().at == "REVISION OF RECORDS"){
      mscntotl = mscntotl +=1;                    
  }
}
})

// DLPI
let dlpittl = 0;
totl.forEach((doc) => {

   // getting month
 let dd = doc.data().dt_App;
 let mmsp = dd.slice(5,7);

  if(mmsp == currentmonth){
    if(doc.data().at == "NEW" || doc.data().at == "RENEWAL"){
      dlpittl = dlpittl+=1;
    } 
  }
});

// dlch
const dlch_total = await getDocs(collection(db, "Applicants"));
let dlch1 = 0;
let dlch2 = 0;
let dlch3 = 0;
let dlch4 = 0;
let dlchall = 0;
dlch_total.forEach((doc) => {
  // Current Count
   // getting month
 let dd = doc.data().User_D;
 let mmsp = dd.slice(5,7);

      if(mmsp == currentmonth){
        if(doc.data().User_Stat == "RELEASED"){
          dlch1 = dlch1+=1;
          dlchall = dlchall+=1;
        }
        else if(doc.data().User_Stat == "FAILED"){
          dlch4 = dlch4+=1;
          dlchall = dlchall+=1;
        }

        if(doc.data().User_TT == "License"){
          if(doc.data().User_Stat == "INCOMPLETED"){
            dlch2 = dlch2+=1;
            dlchall = dlchall+=1;
        }
        else if(doc.data().User_Stat == "DECLINED"){
          dlch3 = dlch3+=1;
          dlchall = dlchall+=1;
        }
      }
      }
  });
// total of all
var AEtotl = wrttn_all + prac_all;
document.getElementById("num_current_licttal").innerHTML = dlchall;
var barChartOptions = {
  series: [{
    name: "TOTAL",
    data: [ AEtotl , dlpittl , mscntotl , dlchall]
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


// MAIN

let age1 = ["2007", "2006","2005","2004","2003"]
let age2 = ["2002", "2001","2000","1999","1998"]
let age3 = ["1997", "1996","1995","1994","1993"]
let age4 = ["1992", "1991","1990","1989","1988"]
let age5 = ["1987", "1986","1985","1984","1983"]
let age6 = ["1982", "1981","1980","1979","1978"]
let age7 = ["1977", "1976","1975","1974","1973"]
let age8 = ["1972", "1971","1970","1969","1968"]
let age9 = ["1967", "1966","1965","1964","1963"] 
let age10 = ["1962", "1961","1960","1959","1958","1957","1956","1955","1954","1953","1952","1951","1950","1949","1948"]

// LIC
let sp_liccnt = 0;
let dl_liccnt = 0;
let cl_liccnt = 0;
let lic_all = 0;

// AGE
let age_1 = 0;
let age_2 = 0;
let age_3 = 0;
let age_4 = 0;
let age_5 = 0;
let age_6 = 0;
let age_7 = 0;
let age_8 = 0;
let age_9 = 0;
let age_10 = 0;
let age_all = 0;

totl.forEach((doc) => {

   // getting month
 let dd = doc.data().dt_App;
 let mmsp = dd.slice(5,7);

  if(mmsp == currentmonth){
    if (doc.data().laa == "STUDENT-DRIVER'S PERMIT"){
      sp_liccnt = sp_liccnt +=1;
        lic_all = lic_all+=1                
    }
    else if (doc.data().laa == "DRIVER'S LICENSE"){
      dl_liccnt = dl_liccnt +=1;
      lic_all = lic_all+=1                    
    }
    else if (doc.data().laa == "CONDUCTOR'S LICENSE"){
      cl_liccnt = cl_liccnt +=1;
      lic_all = lic_all+=1                    
    }
    // FOR AGE CHART
    let age = doc.data().User_BD;
    let age_yr = age.slice(0,4)

    if(age1.includes(age_yr)){
      age_1 = age_1 +=1;
      age_all = age_all+=1
    }
    else if(age2.includes(age_yr)){
      age_2 = age_2 +=1;
      age_all = age_all+=1
    }
    else if(age3.includes(age_yr)){
      age_3 = age_3 +=1;
      age_all = age_all+=1
    }
    else if(age4.includes(age_yr)){
      age_4 = age_4 +=1;
      age_all = age_all+=1
    }
    else if(age5.includes(age_yr)){
      age_5 = age_5 +=1;
      age_all = age_all+=1
    }
    else if(age6.includes(age_yr)){
      age_6 = age_6 +=1;
      age_all = age_all+=1
    }
    else if(age7.includes(age_yr)){
      age_7 = age_7 +=1;
      age_all = age_all+=1
    }
    else if(age8.includes(age_yr)){
      age_8 = age_8 +=1;
      age_all = age_all+=1
    }
    else if(age9.includes(age_yr)){
      age_9 = age_9 +=1;
      age_all = age_all+=1
    }
    else if(age10.includes(age_yr)){
      age_10 = age_10 +=1;
      age_all = age_all+=1
    }
  }
})

document.getElementById("lic_transac").innerHTML = lic_all

var barChartOptions = {
  series: [{
    name: "TOTAL",
    data: [ sp_liccnt, dl_liccnt,cl_liccnt ]
  }], 
  chart: { 
    type: 'bar',
    height: 350,
    toolbar: {
      show: true
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        window.location = "a_licdbmonthly.html";
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
    categories: ["STUDENT-DRIVER'S PERMIT", "DRIVER'S LICENSE", "CONDUCTOR'S LICENSE"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart-main"), barChartOptions);
barChart.render();

// AGE
document.getElementById("age_transac").innerHTML = age_all
var barChartOptions = {
  series: [{
    name: "TOTAL",
    data: [ age_1,age_2,age_3,age_4,age_5,age_6,age_7,age_8,age_9,age_10 ]
  }], 
  chart: { 
    type: 'bar',
    height: 350,
    toolbar: {
      show: true
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        window.location = "a_licdbagemonthly.html";
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
    categories: ["16-20", "21-25", "26-30","31-35","36-40","41-45","46-50","51-60","61-65","66-Above"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart-age"), barChartOptions);
barChart.render();