bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
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

// MV REFRIGERANT
const mv_bc = await getDocs(collection(db, "Motor Vehicle"));
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
mv_bc.forEach((doc) => {
  // CAR
  if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
    if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
      var C1 = c1+=1;
      localStorage.setItem("car1",C1)
    } 
    else if (doc.data().refrigerant_type == "R12"){
      var C2 = c2+=1;
      localStorage.setItem("car2",C2)
    } 
    else if (doc.data().refrigerant_type == "R134A"){
      var C3 = c3+=1;
      localStorage.setItem("car3",C3)
    }
  }
  // UV
  else if (doc.data().typel == "UV"){
    if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
      var UV1 = uv1+=1;
      localStorage.setItem("UV_1",UV1)
    } 
    else if (doc.data().refrigerant_type == "R12"){
      var UV2 = uv2+=1;
      localStorage.setItem("UV_2",UV2)
    } 
    else if (doc.data().refrigerant_type == "R134A"){
      var UV3 = uv3+=1;
      localStorage.setItem("UV_3",UV3)
    }
  }
    // SUV
    else if (doc.data().typel == "SUV"){
      if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
        var SUV1 = suv1+=1;
        localStorage.setItem("SUV_1",SUV1)
      } 
      else if (doc.data().refrigerant_type == "R12"){
        var SUV2 = suv2+=1;
        localStorage.setItem("SUV_2",SUV2)
      } 
      else if (doc.data().refrigerant_type == "R134A"){
        var SUV3 = suv3+=1;
        localStorage.setItem("SUV_3",SUV3)
      }
    }
    // BUSES
    else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
      if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
        var BUS1 = bus1+=1;
        localStorage.setItem("BUS_1",BUS1)
      } 
      else if (doc.data().refrigerant_type == "R12"){
        var BUS2 = bus2+=1;
        localStorage.setItem("BUS_2",BUS2)
      } 
      else if (doc.data().refrigerant_type == "R134A"){
        var BUS3 = bus3+=1;
        localStorage.setItem("BUS_3",BUS3)
      }
    }
      // TRUCKS
    else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
      if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
        var TRCK1 = truck1+=1;
        localStorage.setItem("TRCK_1",TRCK1)
      } 
      else if (doc.data().refrigerant_type == "R12"){
        var TRCK2 = truck2+=1;
        localStorage.setItem("TRCK_2",TRCK2)
      } 
      else if (doc.data().refrigerant_type == "R134A"){
        var TRCK3 = truck3+=1;
        localStorage.setItem("TRCK_3",TRCK3)
      }
    }

    // YEAR MODEL

    if(doc.data().yr_modell == "2024" || doc.data().yr_modell == "2023" || doc.data().yr_modell == "2022" || doc.data().yr_modell == "2021" || doc.data().yr_modell == "2020" || doc.data().yr_modell == "2019"){
      var yrmdl1 = ym1+=1
      localStorage.setItem("yr_mdl1",yrmdl1);
    }
    else if(doc.data().yr_modell == "2018" || doc.data().yr_modell == "2017" || doc.data().yr_modell == "2016" || doc.data().yr_modell == "2015" || doc.data().yr_modell == "2014" || doc.data().yr_modell == "2013"){
      var yrmdl2 = ym2+=1
      localStorage.setItem("yr_mdl2",yrmdl2);
    }
    else if(doc.data().yr_modell == "2012" || doc.data().yr_modell == "2011" || doc.data().yr_modell == "2010" || doc.data().yr_modell == "2009" || doc.data().yr_modell == "2008" || doc.data().yr_modell == "2007"){
      var yrmdl3 = ym3+=1
      localStorage.setItem("yr_mdl3",yrmdl3);
    }
    else if(doc.data().yr_modell == "2006" || doc.data().yr_modell == "2005" || doc.data().yr_modell == "2004" || doc.data().yr_modell == "2003" || doc.data().yr_modell == "2002" || doc.data().yr_modell == "2001"){
      var yrmdl4 = ym4+=1
      localStorage.setItem("yr_mdl4",yrmdl4);
    }
    else if(doc.data().yr_modell == "2000" || doc.data().yr_modell == "1999" || doc.data().yr_modell == "1998" || doc.data().yr_modell == "1997" || doc.data().yr_modell == "1996"){
      var yrmdl5 = ym5+=1
      localStorage.setItem("yr_mdl5",yrmdl5);
    }
});

if (localStorage.getItem("car1") == null || localStorage.getItem("car2") == null || localStorage.getItem("car3") == null){
  localStorage.setItem("car1",0)
  localStorage.setItem("car2",0)
  localStorage.setItem("car3",0)
}
if (localStorage.getItem("UV_1") == null || localStorage.getItem("UV_2") == null || localStorage.getItem("UV_3") == null){
  localStorage.setItem("UV_1",0)
  localStorage.setItem("UV_2",0)
  localStorage.setItem("UV_3",0)
}
if (localStorage.getItem("SUV_1") == null || localStorage.getItem("SUV_2") == null || localStorage.getItem("SUV_3") == null){
  localStorage.setItem("SUV_1",0)
  localStorage.setItem("SUV_2",0)
  localStorage.setItem("SUV_3",0)
}
if (localStorage.getItem("BUS_1") == null || localStorage.getItem("BUS_2") == null || localStorage.getItem("BUS_3") == null){
  localStorage.setItem("BUS_1",0)
  localStorage.setItem("BUS_2",0)
  localStorage.setItem("BUS_3",0)
}
if (localStorage.getItem("TRCK_1") == null || localStorage.getItem("TRCK_2") == null || localStorage.getItem("TRCK_3") == null){
  localStorage.setItem("TRCK_1",0)
  localStorage.setItem("TRCK_2",0)
  localStorage.setItem("TRCK_3",0)
}

var mv_totalcar = parseInt(localStorage.getItem("car1")) + parseInt(localStorage.getItem("car2")) + parseInt(localStorage.getItem("car3"))
var mv_totaluv = parseInt(localStorage.getItem("UV_1")) + parseInt(localStorage.getItem("UV_2")) + parseInt(localStorage.getItem("UV_3"))
var mv_totalsuv = parseInt(localStorage.getItem("SUV_1")) + parseInt(localStorage.getItem("SUV_2")) + parseInt(localStorage.getItem("SUV_3"))
var mv_totalbus = parseInt(localStorage.getItem("BUS_1")) + parseInt(localStorage.getItem("BUS_2")) + parseInt(localStorage.getItem("BUS_3"))
var mv_totaltruck = parseInt(localStorage.getItem("TRCK_1")) + parseInt(localStorage.getItem("TRCK_2")) + parseInt(localStorage.getItem("TRCK_3"))

document.getElementById("num_current_mvttal").innerHTML =  mv_totalcar + mv_totaluv + mv_totalsuv + mv_totalbus + mv_totaltruck;
var barChartOptions = {
    series: [{
      name: "Non-AC",
      data: [ localStorage.getItem("car1"),localStorage.getItem("UV_1"),localStorage.getItem("SUV_1"),localStorage.getItem("BUS_1"),localStorage.getItem("TRCK_1")] 
    },{
        name: "R12 CFC", 
        data: [  localStorage.getItem("car2"),localStorage.getItem("UV_2"),localStorage.getItem("SUV_2"),localStorage.getItem("BUS_2"),localStorage.getItem("TRCK_2")]
      },{
          name: "R134a CFC",  
          data: [  localStorage.getItem("car3"),localStorage.getItem("UV_3"),localStorage.getItem("SUV_3"),localStorage.getItem("BUS_3"),localStorage.getItem("TRCK_3")]
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

  // YEAR MODEL

  var barChartOptions = {
    series: [{
      data: [ localStorage.getItem("yr_mdl1"),localStorage.getItem("yr_mdl2"),localStorage.getItem("yr_mdl3"),localStorage.getItem("yr_mdl4"),localStorage.getItem("yr_mdl5"),5] 
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
      categories: ["2024 - 2019", "2018 - 2013","2012 - 2007","2006 - 2001","2000 - 1996","1991 - below"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chartmvyrmdl"), barChartOptions);
  barChart.render();