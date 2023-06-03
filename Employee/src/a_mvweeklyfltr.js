bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
})
btnReport.addEventListener('click',()=>{
  window.location = "a_mvreport.html"
})
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

 // Weekly Date
 function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate);
    const dates = [];
// to push date in an array
    while (date <= endDate) {
    let dt = new Date(date)
    let day = dt.getDate();
    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = day + "-" + month + "-" + year; 
    
    dates.push(today); 
    date.setDate(date.getDate() + 1);
    }
    return dates;
}
// Getting date / Initialization
    let now = new Date();
//  For Getting the week date
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();
// Set a start date
    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
// Set an end date
    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));

    let d1 = new Date(start);
    let d2 = new Date(end);
    let today = getDatesInRange(d1, d2);

// MV REFRIGERANT
let c1 = 0;
let c2 = 0;
let c3 = 0;
let uv1 = 0;
let uv2 = 0;
let uv3 = 0;
let suv1 = 0;
let suv2 = 0;
let suv3 = 0; 
let bus1 = 0;
let bus2 = 0;
let bus3 = 0;
let truck1 = 0;
let truck2 = 0;
let truck3 = 0;

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
const mv_bc = await getDocs(collection(db, "Motor Vehicle"));
mv_bc.forEach((doc) => {
  // CAR
// console.log(today) wk
  if(today.includes(doc.data().dt_App)){

      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var C1 = c1+=1;
          localStorage.setItem("car1wk",C1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var C2 = c2+=1;
          localStorage.setItem("car2wk",C2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){
          var C3 = c3+=1;
          localStorage.setItem("car3wk",C3)
        }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = uv1+=1;
          localStorage.setItem("UV_1wk",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = uv2+=1;
          localStorage.setItem("UV_2wk",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = uv3+=1;
          localStorage.setItem("UV_3wk",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = suv1+=1;
            localStorage.setItem("SUV_1wk",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = suv2+=1;
            localStorage.setItem("SUV_2wk",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = suv3+=1;
            localStorage.setItem("SUV_3wk",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = bus1+=1;
            localStorage.setItem("BUS_1wk",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = bus2+=1;
            localStorage.setItem("BUS_2wk",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = bus3+=1;
            localStorage.setItem("BUS_3wk",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = truck1+=1;
            localStorage.setItem("TRCK_1wk",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = truck2+=1;
            localStorage.setItem("TRCK_2wk",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = truck3+=1;
            localStorage.setItem("TRCK_3wk",TRCK3)
          }
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

    if(today.includes(doc.data().dt_App)){
        if (year_model1.includes(doc.data().yr_modell)) {
          var yrmdl1 = ym1+=1
          localStorage.setItem("yr_mdl1wk",yrmdl1);
        }
        if (year_model2.includes(doc.data().yr_modell)) {
          var yrmdl2 = ym2+=1
          localStorage.setItem("yr_mdl2wk",yrmdl2);
        }
        if (year_model3.includes(doc.data().yr_modell)) {
          var yrmdl3 = ym3+=1
          localStorage.setItem("yr_mdl3wk",yrmdl3);
        }
        if (year_model4.includes(doc.data().yr_modell)) {
          var yrmdl4 = ym4+=1
          localStorage.setItem("yr_mdl4wk",yrmdl4);
        }
        if (year_model5.includes(doc.data().yr_modell)) {
          var yrmdl5 = ym5+=1
          localStorage.setItem("yr_mdl5wk",yrmdl5);
        }
        if (year_model6.includes(doc.data().yr_modell)) {
          var yrmdl6 = ym6+=1
          localStorage.setItem("yr_mdl6wk",yrmdl6);
        }
        if (year_model7.includes(doc.data().yr_modell)) {
          var yrmdl7 = ym7+=1
          localStorage.setItem("yr_mdl7wk",yrmdl7);
        }
        if (year_model8.includes(doc.data().yr_modell)) {
          var yrmdl8 = ym8+=1
          localStorage.setItem("yr_mdl8wk",yrmdl8);
        }
        if (year_model9.includes(doc.data().yr_modell)) {
          var yrmdl9 = ym9+=1
          localStorage.setItem("yr_mdl9wk",yrmdl9);
        }
        if (year_model10.includes(doc.data().yr_modell)) {
          var yrmdl10 = ym10+=1
          localStorage.setItem("yr_mdl10wk",yrmdl10);
        }
        if (year_model11.includes(doc.data().yr_modell)) {
          var yrmdl11 = ym11+=1
          localStorage.setItem("yr_mdl11wk",yrmdl11);
        }
        if (year_model12.includes(doc.data().yr_modell)) {
          var yrmdl12 = ym12+=1
          localStorage.setItem("yr_mdl12wk",yrmdl12);
        }
        if (year_model13.includes(doc.data().yr_modell)) {
          var yrmdl13 = ym13+=1
          localStorage.setItem("yr_mdl13wk",yrmdl13);
        }
        if (year_model14.includes(doc.data().yr_modell)) {
          var yrmdl14 = ym14+=1
          localStorage.setItem("yr_mdl14wk",yrmdl14);
        }
        if (year_model15.includes(doc.data().yr_modell)) {
          var yrmdl15 = ym15+=1
          localStorage.setItem("yr_mdl15wk",yrmdl15);
        }
  }
});

// NaN to 0 
// For MV
if (localStorage.getItem("car1wk") == null || localStorage.getItem("car2wk") == null || localStorage.getItem("car3wk") == null){
  localStorage.setItem("car1wk",0)
  localStorage.setItem("car2wk",0)
  localStorage.setItem("car3wk",0)
}
if (localStorage.getItem("UV_1wk") == null || localStorage.getItem("UV_2wk") == null || localStorage.getItem("UV_3wk") == null){
  localStorage.setItem("UV_1wk",0)
  localStorage.setItem("UV_2wk",0)
  localStorage.setItem("UV_3wk",0)
}
if (localStorage.getItem("SUV_1wk") == null || localStorage.getItem("SUV_2wk") == null || localStorage.getItem("SUV_3wk") == null){
  localStorage.setItem("SUV_1wk",0)
  localStorage.setItem("SUV_2wk",0)
  localStorage.setItem("SUV_3wk",0)
}
if (localStorage.getItem("BUS_1wk") == null || localStorage.getItem("BUS_2wk") == null || localStorage.getItem("BUS_3wk") == null){
  localStorage.setItem("BUS_1wk",0)
  localStorage.setItem("BUS_2wk",0)
  localStorage.setItem("BUS_3wk",0)
}
if (localStorage.getItem("TRCK_1wk") == null || localStorage.getItem("TRCK_2wk") == null || localStorage.getItem("TRCK_3wk") == null){
  localStorage.setItem("TRCK_1wk",0)
  localStorage.setItem("TRCK_2wk",0)
  localStorage.setItem("TRCK_3wk",0)
}

// For Year Model
if (localStorage.getItem("yr_mdl1wk") == null || localStorage.getItem("yr_mdl2wk") == null || localStorage.getItem("yr_mdl3wk") == null){
  localStorage.setItem("yr_mdl1wk",0)
  localStorage.setItem("yr_mdl2wk",0)
  localStorage.setItem("yr_mdl3wk",0)
}
if (localStorage.getItem("yr_mdl4wk") == null || localStorage.getItem("yr_mdl5wk") == null || localStorage.getItem("yr_mdl6wk") == null){
  localStorage.setItem("yr_mdl4wk",0)
  localStorage.setItem("yr_mdl5wk",0)
  localStorage.setItem("yr_mdl6wk",0)
}
if (localStorage.getItem("yr_mdl7wk") == null || localStorage.getItem("yr_mdl8wk") == null || localStorage.getItem("yr_mdl9wk") == null){
  localStorage.setItem("yr_mdl7wk",0)
  localStorage.setItem("yr_mdl8wk",0)
  localStorage.setItem("yr_mdl9wk",0)
}
if (localStorage.getItem("yr_mdl10wk") == null || localStorage.getItem("yr_mdl11wk") == null || localStorage.getItem("yr_mdl12wk") == null){
  localStorage.setItem("yr_mdl10wk",0)
  localStorage.setItem("yr_mdl11wk",0)
  localStorage.setItem("yr_mdl12wk",0)
}
if (localStorage.getItem("yr_mdl13wk") == null || localStorage.getItem("yr_mdl14wk") == null || localStorage.getItem("yr_mdl15wk") == null){
  localStorage.setItem("yr_mdl13wk",0)
  localStorage.setItem("yr_mdl14wk",0)
  localStorage.setItem("yr_mdl15wk",0)
}

// Total Count of MV
var mv_totalcar = parseInt(localStorage.getItem("car1wk")) + parseInt(localStorage.getItem("car2wk")) + parseInt(localStorage.getItem("car3wk"))
var mv_totaluv = parseInt(localStorage.getItem("UV_1wk")) + parseInt(localStorage.getItem("UV_2wk")) + parseInt(localStorage.getItem("UV_3wk"))
var mv_totalsuv = parseInt(localStorage.getItem("SUV_1wk")) + parseInt(localStorage.getItem("SUV_2wk")) + parseInt(localStorage.getItem("SUV_3wk"))
var mv_totalbus = parseInt(localStorage.getItem("BUS_1wk")) + parseInt(localStorage.getItem("BUS_2wk")) + parseInt(localStorage.getItem("BUS_3wk"))
var mv_totaltruck = parseInt(localStorage.getItem("TRCK_1wk")) + parseInt(localStorage.getItem("TRCK_2wk")) + parseInt(localStorage.getItem("TRCK_3wk"))

document.getElementById("num_current_mvttal").innerHTML =  mv_totalcar + mv_totaluv + mv_totalsuv + mv_totalbus + mv_totaltruck;

var barChartOptions = {
    series: [{
      name: "Non-AC",
      data: [ localStorage.getItem("car1wk"),localStorage.getItem("UV_1wk"),localStorage.getItem("SUV_1wk"),localStorage.getItem("BUS_1wk"),localStorage.getItem("TRCK_1wk")] 
    },{
        name: "R12 CFC", 
        data: [  localStorage.getItem("car2wk"),localStorage.getItem("UV_2wk"),localStorage.getItem("SUV_2wk"),localStorage.getItem("BUS_2wk"),localStorage.getItem("TRCK_2wk")]
      },{
          name: "R134a CFC",  
          data: [  localStorage.getItem("car3wk"),localStorage.getItem("UV_3wk"),localStorage.getItem("SUV_3wk"),localStorage.getItem("BUS_3wk"),localStorage.getItem("TRCK_3wk")]
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
  let twnts1 = parseInt(localStorage.getItem("yr_mdl1wk"));
  let twnts2 = parseInt(localStorage.getItem("yr_mdl2wk"));
  let twnts3 = parseInt(localStorage.getItem("yr_mdl3wk"));
  let twnts4 = parseInt(localStorage.getItem("yr_mdl4wk"));
  let twnts5 = parseInt(localStorage.getItem("yr_mdl5wk"));

  let nineth1 =  parseInt(localStorage.getItem("yr_mdl6wk")) + parseInt(localStorage.getItem("yr_mdl7wk")) + parseInt(localStorage.getItem("yr_mdl8wk"));
  let nineth2 =  parseInt(localStorage.getItem("yr_mdl9wk")) + parseInt(localStorage.getItem("yr_mdl10wk")) + parseInt(localStorage.getItem("yr_mdl11wk"));
  let nineth3 =  parseInt(localStorage.getItem("yr_mdl12wk")) + parseInt(localStorage.getItem("yr_mdl13wk")) + parseInt(localStorage.getItem("yr_mdl14wk")) + parseInt(localStorage.getItem("yr_mdl15wk"));
  let nnth = nineth1 + nineth2 + nineth3;
  
  document.getElementById("num_current_mvymttal").innerHTML = twnts1 + twnts2 + twnts3 + twnts4 + twnts5 + nnth;
  
  var barChartOptions = {
    series: [{
      data: [ twnts1,twnts2,twnts3,twnts4,twnts5, nnth] 
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

//   // Time Today
// var now1 = new Date()
// var time = now1.getHours() + ":" + now1.getMinutes();
// console.log(time)

// if(time == "0:0"){
//   localStorage.removeItem("car1");
//   localStorage.removeItem("car2");
//   localStorage.removeItem("car3");
//   localStorage.removeItem("UV_1");
//   localStorage.removeItem("UV_2");
//   localStorage.removeItem("UV_3");
//   localStorage.removeItem("SUV_1"); 
//   localStorage.removeItem("SUV_2");
//   localStorage.removeItem("SUV_3");
//   localStorage.removeItem("BUS_1");
//   localStorage.removeItem("BUS_2");
//   localStorage.removeItem("BUS_3");
//   localStorage.removeItem("TRCK_1");
//   localStorage.removeItem("TRCK_2");
//   localStorage.removeItem("TRCK_3");

//   localStorage.removeItem("yr_mdl1");
//   localStorage.removeItem("yr_mdl2");
//   localStorage.removeItem("yr_mdl3");
//   localStorage.removeItem("yr_mdl4");
//   localStorage.removeItem("yr_mdl5");
//   localStorage.removeItem("yr_mdl6");
//   localStorage.removeItem("yr_mdl7");
//   localStorage.removeItem("yr_mdl8");
//   localStorage.removeItem("yr_mdl9");
//   localStorage.removeItem("yr_mdl10");
//   localStorage.removeItem("yr_mdl11");
//   localStorage.removeItem("yr_mdl12");
//   localStorage.removeItem("yr_mdl13");
//   localStorage.removeItem("yr_mdl14");
//   localStorage.removeItem("yr_mdl15");
// }

// Code

// switch (doc.data().yr_modell) {
    //   case "2024":
    //     var yrmdl1 = ym1+=1
    //     localStorage.setItem("yr_mdl1",yrmdl1);
    //   break;
    //   case "2023":
    //     var yrmdl1 = ym1+=1
    //     localStorage.setItem("yr_mdl1",yrmdl1);
    //   break;
    //   case "2022":
    //     var yrmdl1 = ym1+=1
    //     localStorage.setItem("yr_mdl1",yrmdl1);
    //   break;
    //   case "2021":
    //     var yrmdl1 = ym1+=1
    //     localStorage.setItem("yr_mdl1",yrmdl1);
    //   break;
    //   case "2020":
    //     var yrmdl1 = ym1+=1
    //     localStorage.setItem("yr_mdl1",yrmdl1);
    //   break;
    //   case "2019":
    //     var yrmdl1 = ym1+=1
    //     localStorage.setItem("yr_mdl1",yrmdl1);
    //   break;
    // }    
    
    // if(doc.data().yr_modell == "2024" || doc.data().yr_modell == "2023" || doc.data().yr_modell == "2022" || doc.data().yr_modell == "2021" || doc.data().yr_modell == "2020" || doc.data().yr_modell == "2019"){
    //   var yrmdl1 = ym1+=1
    //   localStorage.setItem("yr_mdl1",yrmdl1);
    // }
    // else if(doc.data().yr_modell == "2018" || doc.data().yr_modell == "2017" || doc.data().yr_modell == "2016" || doc.data().yr_modell == "2015" || doc.data().yr_modell == "2014" || doc.data().yr_modell == "2013"){
    //   var yrmdl2 = ym2+=1
    //   localStorage.setItem("yr_mdl2",yrmdl2);
    // }
    // else if(doc.data().yr_modell == "2012" || doc.data().yr_modell == "2011" || doc.data().yr_modell == "2010" || doc.data().yr_modell == "2009" || doc.data().yr_modell == "2008" || doc.data().yr_modell == "2007"){
    //   var yrmdl3 = ym3+=1
    //   localStorage.setItem("yr_mdl3",yrmdl3);
    // }
    // else if(doc.data().yr_modell == "2006" || doc.data().yr_modell == "2005" || doc.data().yr_modell == "2004" || doc.data().yr_modell == "2003" || doc.data().yr_modell == "2002" || doc.data().yr_modell == "2001"){
    //   var yrmdl4 = ym4+=1
    //   localStorage.setItem("yr_mdl4",yrmdl4);
    // }
    // else if(doc.data().yr_modell == "2000" || doc.data().yr_modell == "1999" || doc.data().yr_modell == "1998" || doc.data().yr_modell == "1997" || doc.data().yr_modell == "1996"){
    //   var yrmdl5 = ym5+=1
    //   localStorage.setItem("yr_mdl5",yrmdl5); 
    // }