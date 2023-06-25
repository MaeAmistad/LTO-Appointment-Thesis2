bcklic.addEventListener('click' , () => {
    window.location = "a_mvdashboard.html"
});  
btnReporttransct.addEventListener('click' , () => {
  window.location = "a_mvtypereportdaily.html"
});  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection,getCountFromServer,getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
 
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
const mv = await getDocs(collection(db, "Motor Vehicle"));

// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day ;

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
let p6 = 0;
let pall = 0;

let fh1 = 0;
let fh2 = 0;
let fh3 = 0;
let fh4 = 0;
let fh5 = 0;
let fh6 = 0;
let fhall = 0;

let g1 = 0;
let g2 = 0;
let g3 = 0;
let g4 = 0;
let g5 = 0;
let g6 = 0;
let gall = 0;

mv.forEach(doc => {

  var dd = doc.data().dt_App;
  var ddsp = dd.slice(0,2);
  var mmsp = dd.slice(5,7); 
  var yysp = dd.slice(10,14);
  var dtcon1 = yysp + "-" + mmsp + "-" + ddsp;  

  if(dtcon1 == today){
    if(doc.data().classification == "PRIVATE"){
      if(doc.data().typel == "MOTORCYCLE WITH SIDECAR"){
        p1 = p1+=1;
        pall = pall+=1;
      }
      else if(doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR" || doc.data().typel == "MC"){
        p2 = p2+=1;
        pall = pall+=1;
      }
      else if(doc.data().typel == "CAR"){
        p3 = p3+=1;
        pall = pall+=1;
      }
      else if(doc.data().typel == "UV"){
        p4 = p4+=1;
        pall = pall+=1;
      }
      else if(doc.data().typel == "SUV"){
        p5 = p5+=1;
        pall = pall+=1;
      }
      else if(doc.data().typel == "BUS"){
        p6 = p6+=1;
        pall = pall+=1;
      }
    }
    else if(doc.data().classification == "FOR HIRE" || doc.data().at == "FOR HIRE"){
      if(doc.data().typel == "MOTORCYCLE WITH SIDECAR"){
        fh1 = fh1+=1
        fhall = fhall+=1
      }
      else if(doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR" || doc.data().typel == "MC"){
        fh2 = fh2+=1
        fhall = fhall+=1
      }
      else if(doc.data().typel == "CAR"){
        fh3 = fh3+=1
        fhall = fhall+=1
      }
      else if(doc.data().typel == "UV"){
        fh4 = fh4+=1
        fhall = fhall+=1
      }
      else if(doc.data().typel == "SUV"){
        fh5 = fh5+=1
        fhall = fhall+=1
      }
      else if(doc.data().typel == "BUS"){
        fh6 = fh6+=1
        fhall = fhall+=1
      }
    }
    else if(doc.data().classification == "GOVERNMENT"){
      if(doc.data().typel == "MOTORCYCLE WITH SIDECAR" ){
        g1 = g1+=1
        gall = gall+=1
      }
      else if(doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR" || doc.data().typel == "MC"){
        g2 = g2+=1
        gall = gall+=1
      }
      else if(doc.data().typel == "CAR"){
        g3 = g3+=1
        gall = gall+=1
      }
      else if(doc.data().typel == "UV"){
        g4 = g4+=1
        gall = gall+=1
      }
      else if(doc.data().typel == "SUV"){
        g5 = g5+=1
        gall = gall+=1
      }
      else if(doc.data().typel == "BUS"){
        g6 = g6+=1
        gall = gall+=1
      }
    }
  }
});
// PRIVATE
var barChartOptions = {
    series: [{
      data: [ p1,p2,p3,p4,p5,p6] 
    }
  ],
    chart: {
      type: 'bar', 
      height: 350,
      toolbar: {
        show: true
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '35%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [
      '#89375F', 
      '#F7B844',
      '#4F4557'
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
      categories: ["M/CYCLE W/ SIDECAR", "M/CYCLE W/O SIDECAR","CAR","UV","SUV","BUS",]
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart-priv"), barChartOptions);
  barChart.render();

// FOR HIRE
var barChartOptions = {
    series: [{
      data: [ fh1,fh2,fh3,fh4,fh5,fh6] 
    }
  ],
    chart: {
      type: 'bar', 
      height: 350,
      toolbar: {
        show: true
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '35%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [
      '#89375F', 
      '#F7B844',
      '#4F4557'
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
      categories: ["M/CYCLE W/ SIDECAR", "M/CYCLE W/O SIDECAR","TAXI","UV","SUV","BUS",]
    },
    yaxis: { 
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart-fh"), barChartOptions);
  barChart.render();

// GOVERNMENT
  var barChartOptions = {
    series: [{
      data: [ g1,g2,g3,g4,g5,g6] 
    }
  ],
    chart: {
      type: 'bar', 
      height: 350,
      toolbar: {
        show: true
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '35%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [
      '#89375F', 
      '#F7B844',
      '#4F4557'
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
      categories: ["M/CYCLE W/ SIDECAR", "M/CYCLE W/O SIDECAR","CAR","UV","SUV","BUS",]
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart-gov"), barChartOptions);
  barChart.render();