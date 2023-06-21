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

// AGE CHART 1
let age1_1 = 0;
let age1_2 = 0;
let age1_3 = 0;
let age1_4 = 0;
let age1_5 = 0;
let age_all1 = 0;

// AGE CHART 2
let age2_1 = 0;
let age2_2 = 0;
let age2_3 = 0;
let age2_4 = 0;
let age2_5 = 0; 
let age_all2 = 0;

// AGE CHART 3
let age3_1 = 0;
let age3_2 = 0;
let age3_3 = 0;
let age3_4 = 0;
let age3_5 = 0;
let age_all3 = 0;

// AGE CHART 4
let age4_1 = 0;
let age4_2 = 0;
let age4_3 = 0;
let age4_4 = 0;
let age4_5 = 0;
let age_all4 = 0;

// AGE CHART 5
let age5_1 = 0;
let age5_2 = 0;
let age5_3 = 0;
let age5_4 = 0;
let age5_5 = 0;
let age_all5 = 0;

// AGE CHART 6
let age6_1 = 0;
let age6_2 = 0;
let age6_3 = 0;
let age6_4 = 0;
let age6_5 = 0;
let age_all6 = 0;

// AGE CHART 7
let age7_1 = 0;
let age7_2 = 0;
let age7_3 = 0;
let age7_4 = 0;
let age7_5 = 0;
let age_all7 = 0;

// AGE CHART 8
let age8_1 = 0;
let age8_2 = 0;
let age8_3 = 0;
let age8_4 = 0;
let age8_5 = 0;
let age_all8 = 0;

// AGE CHART 9
let age9_1 = 0;
let age9_2 = 0;
let age9_3 = 0;
let age9_4 = 0;
let age9_5 = 0;
let age_all9 = 0;

// AGE CHART 10
let age10_1 = 0;
let age10_2 = 0;
let age10_3 = 0;
let age10_4 = 0;
let age10_5 = 0;
let age10_6 = 0;
let age10_7 = 0;
let age10_8 = 0;
let age10_9 = 0;
let age10_10 = 0;
let age_all10 = 0;


lic_cnt.forEach((doc) => {
    // FOR AGE CHART
    let age = doc.data().User_BD;
    let age_yr = age.slice(0,4)
    // AGE1
    if(doc.data().dt_App == today){
        if (age_yr == "2007"){
            age1_1 = age1_1+=1
            age_all1 = age_all1+=1
        }
        else if (age_yr == "2006"){
            age1_2 = age1_2+=1
            age_all1 = age_all1+=1
        }
        else if (age_yr == "2005"){
            age1_3 = age1_3+=1
            age_all1 = age_all1+=1
        }
        else if (age_yr == "2004"){
            age1_4 = age1_4+=1
            age_all1 = age_all1+=1
        }
        else if (age_yr == "2003"){
            age1_5 = age1_5+=1
            age_all1 = age_all1+=1
        }
        // AGE2
        else if (age_yr == "2002"){
            age2_1 = age2_1+=1
            age_all2 = age_all2+=1
        }
        else if (age_yr == "2001"){
            age2_2 = age2_2+=1
            age_all2 = age_all2+=1
        }
        else if (age_yr == "2000"){
            age2_3 = age2_3+=1
            age_all2 = age_all2+=1
        }
        else if (age_yr == "1999"){
            age2_4 = age2_4+=1
            age_all2 = age_all2+=1
        }
        else if (age_yr == "1998"){
            age2_5 = age2_5+=1
            age_all2= age_all2+=1
        }
        // AGE3
        else if (age_yr == "1997"){
            age3_1 = age3_1+=1
            age_all3 = age_all3+=1
        }
        else if (age_yr == "1996"){
            age3_2 = age3_2+=1
            age_all3 = age_all3+=1
        }
        else if (age_yr == "1995"){
            age3_3 = age3_3+=1
            age_all3 = age_all3+=1
        }
        else if (age_yr == "1994"){
            age3_4 = age3_4+=1
            age_all3 = age_all3+=1
        }
        else if (age_yr == "1993"){
            age3_5 = age3_5+=1
            age_all3= age_all3+=1
        }
        // AGE4
        else if (age_yr == "1992"){
            age4_1 = age4_1+=1
            age_all4 = age_all4+=1
        }
        else if (age_yr == "1991"){
            age4_2 = age4_2+=1
            age_all4 = age_all4+=1
        }
        else if (age_yr == "1990"){
            age4_3 = age4_3+=1
            age_all4 = age_all4+=1
        }
        else if (age_yr == "1989"){
            age4_4 = age4_4+=1
            age_all4 = age_all4+=1
        }
        else if (age_yr == "1988"){
            age4_5 = age4_5+=1
            age_all4= age_all4+=1
        }
        // AGE5
        else if (age_yr == "1987"){
            age5_1 = age5_1+=1
            age_all5 = age_all5+=1
        }
        else if (age_yr == "1986"){
            age5_2 = age5_2+=1
            age_all5 = age_all5+=1
        }
        else if (age_yr == "1985"){
            age5_3 = age5_3+=1
            age_all5 = age_all5+=1
        }
        else if (age_yr == "1984"){
            age5_4 = age5_4+=1
            age_all5 = age_all5+=1
        }
        else if (age_yr == "1983"){
            age5_5 = age5_5+=1
            age_all5= age_all5+=1
        }
        // AGE6
        else if (age_yr == "1982"){
            age6_1 = age6_1+=1
            age_all6 = age_all6+=1
        }
        else if (age_yr == "1981"){
            age6_2 = age6_2+=1
            age_all6 = age_all6+=1
        }
        else if (age_yr == "1980"){
            age6_3 = age6_3+=1
            age_all6 = age_all6+=1
        }
        else if (age_yr == "1979"){
            age6_4 = age6_4+=1
            age_all6 = age_all6+=1
        }
        else if (age_yr == "1978"){
            age6_5 = age6_5+=1
            age_all6= age_all6+=1
        }
        // AGE7
        else if (age_yr == "1977"){
            age7_1 = age7_1+=1
            age_all7 = age_all7+=1
        }
        else if (age_yr == "1976"){
            age7_2 = age7_2+=1
            age_all7 = age_all7+=1
        }
        else if (age_yr == "1975"){
            age7_3 = age7_3+=1
            age_all7 = age_all7+=1
        }
        else if (age_yr == "1974"){
            age7_4 = age7_4+=1
            age_all7 = age_all7+=1
        }
        else if (age_yr == "1973"){
            age7_5 = age7_5+=1
            age_all7= age_all7+=1
        }
        // AGE8
        else if (age_yr == "1972"){
            age8_1 = age8_1+=1
            age_all8 = age_all8+=1
        }
        else if (age_yr == "1971"){
            age8_2 = age8_2+=1
            age_all8 = age_all8+=1
        }
        else if (age_yr == "1960"){
            age8_3 = age8_3+=1
            age_all8 = age_all8+=1
        }
        else if (age_yr == "1969"){
            age8_4 = age8_4+=1
            age_all8 = age_all8+=1
        }
        else if (age_yr == "1968"){
            age8_5 = age8_5+=1
            age_all8= age_all8+=1
        }
        // AGE9
        else if (age_yr == "1967"){
            age9_1 = age9_1+=1
            age_all9 = age_all9+=1
        }
        else if (age_yr == "1966"){
            age9_2 = age9_2+=1
            age_all9 = age_all9+=1
        }
        else if (age_yr == "1965"){
            age9_3 = age9_3+=1
            age_all9 = age_all9+=1
        }
        else if (age_yr == "1964"){
            age9_4 = age9_4+=1
            age_all9 = age_all9+=1
        }
        else if (age_yr == "1963"){
            age9_5 = age9_5+=1
            age_all9= age_all9+=1
        }
        // AGE10
        else if (age_yr == "1962"){
            age10_1 = age10_1+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1961"){
            age10_2 = age10_2+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1960"){
            age10_3 = age10_3+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1959"){
            age10_4 = age10_4+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1958"){
            age10_5 = age10_5+=1
            age_all10= age_all10+=1
        }
        else if (age_yr == "1957"){
            age10_6 = age10_6+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1956"){
            age10_7 = age10_7+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1955"){
            age10_8 = age10_8+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1954"){
            age10_9 = age10_9+=1
            age_all10 = age_all10+=1
        }
        else if (age_yr == "1953" || age_yr == "1952" || age_yr == "1951"){
            age10_10 = age10_10+=1
            age_all10= age_all10+=1
        }
    }

});

// AGE1
document.getElementById('age_transac1').innerHTML = age_all1;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age1_1,age1_2,age1_3,age1_4,age1_5]
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
      categories: ["16", "17", "18","19","20"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart1"), barChartOptions);
  barChart.render();

// AGE2
document.getElementById('age_transac2').innerHTML = age_all2;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age2_1,age2_2,age2_3,age2_4,age2_5]
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
      categories: ["21", "22", "23","24","25"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
  barChart.render();

  // AGE3
document.getElementById('age_transac3').innerHTML = age_all3;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age3_1,age3_2,age3_3,age3_4,age3_5]
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
      categories: ["26", "27", "28","29","30"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions);
  barChart.render();

// AGE4
document.getElementById('age_transac4').innerHTML = age_all4;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age4_1,age4_2,age4_3,age4_4,age4_5]
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
      categories: ["31", "32", "33","34","35"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart4"), barChartOptions);
  barChart.render();

// AGE5
document.getElementById('age_transac5').innerHTML = age_all5;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age5_1,age5_2,age5_3,age5_4,age5_5]
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
      categories: ["36", "37", "38","39","40"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart5"), barChartOptions);
  barChart.render();

  // AGE6
document.getElementById('age_transac6').innerHTML = age_all6;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age6_1,age6_2,age6_3,age6_4,age6_5]
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
      categories: ["41", "42", "43","44","45"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart6"), barChartOptions);
  barChart.render();

    // AGE7
document.getElementById('age_transac7').innerHTML = age_all7;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age7_1,age7_2,age7_3,age7_4,age7_5]
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
      categories: ["46", "47", "48","49","50"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart7"), barChartOptions);
  barChart.render();

  // AGE8
document.getElementById('age_transac8').innerHTML = age_all8;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age8_1,age8_2,age8_3,age8_4,age8_5]
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
      categories: ["51", "52", "53","54","55"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart8"), barChartOptions);
  barChart.render();

    // AGE9
document.getElementById('age_transac9').innerHTML = age_all9;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age9_1,age9_2,age9_3,age9_4,age9_5]
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
      categories: ["56", "57", "58","59","60"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart9"), barChartOptions);
  barChart.render();

      // AGE10
document.getElementById('age_transac10').innerHTML = age_all10;
var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ age10_1,age10_2,age10_3,age10_4,age10_5,age10_6,age10_7,age10_8,age10_9,age10_10]
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
      categories: ["61", "62", "63","64","65","66","67","68","69","70 and above"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart10"), barChartOptions);
  barChart.render();