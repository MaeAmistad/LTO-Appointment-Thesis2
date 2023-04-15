bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
})

// btnReport.addEventListener('click',()=>{
//   window.location = ".html"
// })
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
});

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