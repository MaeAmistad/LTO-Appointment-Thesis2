bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
})
btnReportYM.addEventListener('click',() =>{ 
  window.location = "a_mvymreportmnth.html"
});
btnReportFR.addEventListener('click',() =>{ 
  window.location = "a_licFinancialrmonthly.html" 
});
btnReporttransct.addEventListener('click',() =>{ 
  window.location = "a_mvreporttrnsctmnth.html"
});
// ---------- CHARTS ---------- 

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

// Monthly Filter
var currentmonth = new Date().getMonth() + 1;
if (currentmonth < 10)  currentmonth = "0" + currentmonth;


// MV REFRIGERANT
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c_all = 0;
let uv1 = 0;
let uv2 = 0;
let uv3 = 0;
let uv_all = 0;
let suv1 = 0;
let suv2 = 0;
let suv3 = 0; 
let suv_all = 0;
let bus1 = 0;
let bus2 = 0;
let bus3 = 0;
let bus_all = 0;
let truck1 = 0;
let truck2 = 0;
let truck3 = 0;
let truck_all = 0;

let ym1 = 0;
let ym2 = 0;
let ym3 = 0;
let ym4 = 0;
let ym5 = 0;
let ym6 = 0;
let ym7 = 0;
let ym8 = 0;
let ym9 = 0;
let ym10 = 0;
let ym11 = 0;
let ym12 = 0;
let ym13 = 0;
let ym14 = 0;
let ym15 = 0;
let yr_all = 0;

// TRANSACTION
let rn = 0;
let dplmt = 0;
let oev = 0;
let fh = 0;
let sar = 0;
let ros = 0;
let transct = 0;

// MV LIST
let mvwsc = 0;
let mvwosc = 0;
let car = 0;
let uv = 0;
let suv = 0;
let bus = 0;
let trucks = 0;
let mvlst_all = 0;

const mv_bc = await getDocs(collection(db, "Motor Vehicle"));
mv_bc.forEach((doc) => {

let dd = doc.data().dt_App;
let mmsp = dd.slice(5,7);

mmsp == currentmonth 
  // CAR
  if(mmsp == currentmonth){

      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
        car = car+=1
        mvlst_all = mvlst_all+=1
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          c1 = c1+=1;
          c_all = c_all+=1;
        } 
        else if (doc.data().refrigerant_type == "R12"){
          c2 = c2+=1;
          c_all = c_all+=1;
        } 
        else if (doc.data().refrigerant_type == "R134A"){
          c3 = c3+=1;
          c_all = c_all+=1;
        }
      }
      // UV
      else if (doc.data().typel == "UV"){
        uv = uv+=1
        mvlst_all = mvlst_all+=1
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          uv1 = uv1+=1;
          uv_all = uv_all+=1
        } 
        else if (doc.data().refrigerant_type == "R12"){
          uv2 = uv2+=1;
          uv_all = uv_all+=1
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          uv3 = uv3+=1;
          uv_all = uv_all+=1
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          suv = suv+=1
          mvlst_all = mvlst_all+=1
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            suv1 = suv1+=1;
            suv_all = suv_all+=1
          } 
          else if (doc.data().refrigerant_type == "R12"){
            suv2 = suv2+=1;
            suv_all = suv_all+=1
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            suv3 = suv3+=1;
            suv_all = suv_all+=1
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          bus = bus+=1
          mvlst_all = mvlst_all+=1
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            bus1 = bus1+=1;
            bus_all = bus_all+=1
          } 
          else if (doc.data().refrigerant_type == "R12"){
            bus2 = bus2+=1;
            bus_all = bus_all+=1
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            bus3 = bus3+=1;
            bus_all = bus_all+=1
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          trucks = trucks+=1
          mvlst_all = mvlst_all+=1
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            truck1 = truck1+=1;
            truck_all = truck_all+=1
          } 
          else if (doc.data().refrigerant_type == "R12"){
            truck2 = truck2+=1;
            truck_all = truck_all+=1
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            truck3 = truck3+=1;
            truck_all = truck_all+=1
          }
        }
        else if (doc.data().typel == "MOTORCYCLE WITH SIDECAR"){
          mvwsc = mvwsc+=1
        }
        else if (doc.data().typel == "MOTORCYCLE WITHOUT SIDECAR"){
          mvwosc = mvwosc+=1
        }
  }
    // YEAR MODEL

    let year_model1 = ["2024", "2023", "2022", "2021", "2020", "2019"]
    let year_model2 = [ "2018", "2017", "2016", "2015", "2014","2013"]
    let year_model3 = ["2012", "2011", "2010", "2009", "2008", "2007"]
    let year_model4 = [ "2006", "2005", "2004", "2003", "2002","2001"]
    let year_model5 = ["2000", "1999", "1998", "1997", "1996"]
    let year_model6 = [ "1986", "1987", "1988", "1989", "1990","1991","1992","1993","1994","1995"]
    let year_model7 = [ "1981", "1982", "1983", "1984", "1985"]
    let year_model8 = [ "1980", "1979", "1978", "1977", "1976","1975","1974","1973","1972","1971"]
    let year_model9 = [ "1970", "1969", "1968", "1967", "1966","1965","1964","1963","1962","1961"]
    let year_model10 = [ "1960", "1959", "1958", "1957", "1956","1955","1954","1953","1952","1951"]
    let year_model11 = [ "1950", "1949", "1948", "1947", "1946","1945","1944","1943","1942","1941"]
    let year_model12 = [ "1940", "1939", "1938", "1937", "1936","1935","1934","1933","1932","1931"]
    let year_model13 = [ "1930", "1929", "1928", "1927", "1926","1925","1924","1923","1922","1921"]
    let year_model14 = [ "1920", "1919", "1918", "1917", "1916","1915","1914","1913","1912","1911"]
    let year_model15 = [ "1910", "1909", "1908", "1907", "1906","1905","1904","1903","1902","1901","1900"]

    // console.log(year_model15) 

    if(mmsp == currentmonth){ 
        if (year_model1.includes(doc.data().yr_modell)) {
          ym1 = ym1+=1
          yr_all = yr_all+=1
        }
        if (year_model2.includes(doc.data().yr_modell)) {
          ym2 = ym2+=1
          yr_all = yr_all+=1
        }
        if (year_model3.includes(doc.data().yr_modell)) {
          ym3 = ym3+=1
          yr_all = yr_all+=1
        }
        if (year_model4.includes(doc.data().yr_modell)) {
          ym4 = ym4+=1
          yr_all = yr_all+=1
        }
        if (year_model5.includes(doc.data().yr_modell)) {
          ym5 = ym5+=1
          yr_all = yr_all+=1
        }
        if (year_model6.includes(doc.data().yr_modell)) {
          ym6 = ym6+=1
          yr_all = yr_all+=1
        }
        if (year_model7.includes(doc.data().yr_modell)) {
          ym7 = ym7+=1
          yr_all = yr_all+=1
        }
        if (year_model8.includes(doc.data().yr_modell)) {
          ym8 = ym8+=1
          yr_all = yr_all+=1
        }
        if (year_model9.includes(doc.data().yr_modell)) {
          ym9 = ym9+=1
          yr_all = yr_all+=1
        }
        if (year_model10.includes(doc.data().yr_modell)) {
          ym10 = ym10+=1
          yr_all = yr_all+=1
        }
        if (year_model11.includes(doc.data().yr_modell)) {
          ym11 = ym11+=1
          yr_all = yr_all+=1
        }
        if (year_model12.includes(doc.data().yr_modell)) {
          ym12 = ym12+=1
          yr_all = yr_all+=1
        }
        if (year_model13.includes(doc.data().yr_modell)) {
          ym13 = ym13+=1
          yr_all = yr_all+=1
        }
        if (year_model14.includes(doc.data().yr_modell)) {
          ym14 = ym14+=1
          yr_all = yr_all+=1
        }
        if (year_model15.includes(doc.data().yr_modell)) {
          ym15 = ym15+=1
          yr_all = yr_all+=1
        }

        // TRANSACTION
        if(doc.data().at == "RENEWAL"){
          rn = rn+=1
          transct = transct+=1
        }
        if(doc.data().at == "DIPLOMAT"){
          dplmt = dplmt+=1
          transct = transct+=1
        }
        if(doc.data().at == "OTHER EXEMPT VEHICLE (OEV) UNDER SPECIAL ECONOMIC ZONES"){
          oev = oev+=1
          transct = transct+=1
        }
        if(doc.data().at == "FOR HIRE"){
          fh = fh+=1
          transct = transct+=1
        }
        if(doc.data().at == "STOLEN AND RECOVERD"){
          sar = sar+=1
          transct = transct+=1
        }
        if(doc.data().at == "REACTIVATION OF STORAGE"){
          ros = ros+=1
          transct = transct+=1
        }
  }
});

// Total Count of MV
document.getElementById("num_current_mvttal").innerHTML =  c_all + uv_all + suv_all + bus_all + truck_all;

var barChartOptions = {
    series: [{
      name: "Non-AC",
      data: [ c1,uv1,suv1,bus1,truck1] 
    },{
        name: "R12 CFC", 
        data: [ c2,uv2,suv2,bus2,truck2] 
      },{
          name: "R134a CFC",  
          data: [ c3,uv3,suv3,bus3,truck3] 
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
        columnWidth: '40%',
        distributed: false
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
      categories: ["CARS", "UV","SUV","BUSES","TRUCKS"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chartmv"), barChartOptions);
  barChart.render();

  // Total count of YEAR MODEL

  let nineth1 =  ym6 + ym7 + ym8+ ym9 + ym10 + ym11 + ym12 + ym13 + ym14 + ym15;

  document.getElementById("num_current_mvymttal").innerHTML = yr_all;
  
  var barChartOptions = {
    series: [{
      data: [ ym1,ym2,ym3,ym4,ym5, nineth1] 
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
      categories: ["2024 - 2019", "2018 - 2013","2012 - 2007","2006 - 2001","2000 - 1996","1995 - below"]
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chartmvyrmdl"), barChartOptions);
  barChart.render();

// TRANSACTION
document.getElementById("num_current_mvtransac").innerHTML = transct;
var barChartOptions = {
  series: [{
    data: [ rn,dplmt,oev,fh,sar, ros] 
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
    categories: ["RENEWAL", "DIPLOMAT","OEV","FOR HIRE","STOLEN AND RECORD","ROS"]
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart-transac"), barChartOptions);
barChart.render();
// ["RENEWAL", "DIPLOMAT","OEV","FOR HIRE","STOLEN AND RECORD","REACTIVATION OF STORAGE"]

// MV LIST
document.getElementById("num_current_mvlst").innerHTML = mvlst_all;
var barChartOptions = {
  series: [{
    data: [ mvwsc,mvwosc,car,uv,suv, bus,trucks] 
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
    categories: ["M/CYCLE W/ SIDECAR", "M/CYCLE W/O SIDECAR","CAR","UV","SUV","BUS", "TRUCK"]
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chartmvlst"), barChartOptions);
barChart.render();