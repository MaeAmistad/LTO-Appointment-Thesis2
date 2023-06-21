bcklic.addEventListener('click' , () => {
    window.location = "a_licyearlyfltr.html"
  })
//   btnReport.addEventListener('click',()=>{
//     window.location = "a_licreportdaily.html"
//   })
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
const lic_cnt = await getDocs(collection(db, "License"));

  // Yearly Filter
  var date = new Date();
  var year = date.getFullYear();

// SP
let spn_liccnt = 0;
let sprn_liccnt = 0;
let spd_liccnt = 0;
let mscn2 = 0;
// DL
let dln_liccnt = 0;
let dlrn_liccnt = 0;
let dld_liccnt = 0;
let dlrr_liccnt = 0;
let dladc_liccnt = 0;
let dlothrs_liccnt = 0;
let mscn3 = 0;
// CL
let cln_liccnt = 0;
let clrn_liccnt = 0;
let cdld_liccnt = 0;
let clrr_liccnt = 0;
let cladc_liccnt = 0;
let clothrs_liccnt = 0;
let mscn4 = 0;
lic_cnt.forEach((doc) => { 

    // getting Year
    let dd = doc.data().dt_App;
    let mmsp = dd.slice(10,15);

if(mmsp == year){
// SP
if (doc.data().laa == "STUDENT-DRIVER'S PERMIT"){
    if (doc.data().at == "NEW"){
        spn_liccnt = spn_liccnt +=1;
         mscn2 = mscn2 +=1;                 
    }
    else if (doc.data().at == "RENEWAL"){
        sprn_liccnt = sprn_liccnt +=1;
       mscn2 = mscn2 +=1;                     
    }
    else if (doc.data().at == "DUPLICATE"){
        spd_liccnt = spd_liccnt +=1;
       mscn2 = mscn2 +=1;                
    }                  
}
// DL
else if(doc.data().laa == "DRIVER'S LICENSE"){
    if (doc.data().at == "NEW"){
        dln_liccnt = dln_liccnt +=1;
         mscn3 = mscn3 +=1;                   
    }
    else if (doc.data().at == "RENEWAL"){
        dlrn_liccnt = dlrn_liccnt +=1;
       mscn3 = mscn3 +=1;                   
    }
    else if (doc.data().at == "DUPLICATE"){
        dld_liccnt = dld_liccnt +=1;
       mscn3 = mscn3 +=1;          
    } 
    else if (doc.data().at == "REVISION OF RECORDS"){
        dlrr_liccnt = dlrr_liccnt +=1;
       mscn3 = mscn3 +=1;        
    }
    else if (doc.data().at == "ADDITIONAL DL CODE OR CATEGORY"){
        dladc_liccnt = dladc_liccnt +=1;
       mscn3 = mscn3 +=1;            
    }
    else if (doc.data().at == "CONVERSION OF FOREIGN DL"){
        dlothrs_liccnt = dlothrs_liccnt +=1;
       mscn3 = mscn3 +=1;              
    }
    else if (doc.data().at == "CHANGE OF DL CLASSIFICATION"){
        dlothrs_liccnt = dlothrs_liccnt +=1;
       mscn3 = mscn3 +=1;           
    }
    else if (doc.data().at == "EXPIRED DL WITH VALID FDL"){
        dlothrs_liccnt = dlothrs_liccnt +=1;
       mscn3 = mscn3 +=1;           
    }
    else if (doc.data().at == "CHANGE OF CLUTCH TYPE"){
        dlothrs_liccnt = dlothrs_liccnt +=1;
       mscn3 = mscn3 +=1;            
    }
    else if (doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        dlothrs_liccnt = dlothrs_liccnt +=1;
       mscn3 = mscn3 +=1;              
    }
}
// CL
  else if(doc.data().laa == "CONDUCTOR'S LICENSE"){
    if (doc.data().at == "NEW"){
        cln_liccnt = cln_liccnt +=1;
         mscn4 = mscn4 +=1;                  
    }
    else if (doc.data().at == "RENEWAL"){
        clrn_liccnt = clrn_liccnt +=1;
       mscn4 = mscn4 +=1;                    
    }
    else if (doc.data().at == "DUPLICATE"){
        cdld_liccnt = cdld_liccnt +=1;
       mscn4 = mscn4 +=1;                    
    }
    else if (doc.data().at == "REVISION OF RECORDS"){
        clrr_liccnt = clrr_liccnt +=1;
       mscn4 = mscn4 +=1;   
    }
    else if (doc.data().at == "ADDITIONAL DL CODE OR CATEGORY"){
        cladc_liccnt = cladc_liccnt +=1;
       mscn4 = mscn4 +=1;       
    }
    else if (doc.data().at == "CONVERSION OF FOREIGN DL"){
        clothrs_liccnt = clothrs_liccnt +=1;
       mscn4 = mscn4 +=1;           
    }
    else if (doc.data().at == "CHANGE OF DL CLASSIFICATION"){
        clothrs_liccnt = clothrs_liccnt +=1;
       mscn4 = mscn4 +=1;          
    }
    else if (doc.data().at == "EXPIRED DL WITH VALID FDL"){
        clothrs_liccnt = clothrs_liccnt +=1;
       mscn4 = mscn4 +=1;               
    }
    else if (doc.data().at == "CHANGE OF CLUTCH TYPE"){
        clothrs_liccnt = clothrs_liccnt +=1;
       mscn4 = mscn4 +=1;                 
    }
    else if (doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        clothrs_liccnt = clothrs_liccnt +=1;
       mscn4 = mscn4 +=1;              
    } 
  }
}
})

document.getElementById("lic_transac").innerHTML = mscn2

var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ spn_liccnt, sprn_liccnt,spd_liccnt]
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

document.getElementById("num_current_licttal1").innerHTML = mscn3

var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ dln_liccnt, dlrn_liccnt,dld_liccnt,dlrr_liccnt,dladc_liccnt,dlothrs_liccnt ]
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
      categories: ["NEW", "RENEWAL", "DUPLICATE","REVISION OF RECORDS", "ADD'L DL CODE", "OTHERS"],
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


document.getElementById("num_current_licttal2").innerHTML = mscn4 

var barChartOptions = {
    series: [{
      name: "TOTAL",
      data: [ cln_liccnt, clrn_liccnt,cdld_liccnt,clrr_liccnt,cladc_liccnt,clothrs_liccnt]
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
      categories: ["NEW", "RENEWAL", "DUPLICATE","REVISION OF RECORDS", "ADD'L DL CODE", "OTHERS"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions);
  barChart.render();