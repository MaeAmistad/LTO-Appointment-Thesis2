bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
  })
  btnReport.addEventListener('click',()=>{
    window.location = "a_licreport.html"
  })
  // ---------- CHARTS ---------- 
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getFirestore, query, collection,getCountFromServer,getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
  
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

// Applicants Examined Bar chart
  const wrttnlicexam = await getDocs(collection(db, "Written"));
  let wrttn1 = 0;
  let wrttn2 = 0;
  wrttnlicexam.forEach((doc) => {

  // Current Count
      if(today.includes(doc.data().dt_App)){
        if(doc.data().result == "PASSED"){
          var wrtnn_examP = wrttn1+=1;
          localStorage.setItem("wrtnn_examPwk",wrtnn_examP)
        }
        if(doc.data().result == "FAILED"){
          var wrtnn_examF = wrttn2+=1;
          localStorage.setItem("wrtnn_examFwk",wrtnn_examF)
        } 
      }
  });
  
  const praclicexam = await getDocs(collection(db, "Practical"));
  let prac1 = 0;
  let prac2 = 0;
  
  praclicexam.forEach((doc) => {
  // Current Count
      if(today.includes(doc.data().dt_App)){
        if(doc.data().result == "PASSED"){
          var prac_examP = prac1+=1;
          localStorage.setItem("prac_examPwk",prac_examP)
        }
        if(doc.data().result == "FAILED"){
          var prac_examF = prac2+=1;
          localStorage.setItem("prac_examFwk",prac_examF)
        } 
      }
    
  });
  
  // If LocalStorage key Get Null
  if (localStorage.getItem("wrtnn_examPwk") == null || localStorage.getItem("wrtnn_examFwk") == null){
    localStorage.setItem("wrtnn_examPwk",0);
    localStorage.setItem("wrtnn_examFwk",0);
  }
  if (localStorage.getItem("prac_examPwk") == null || localStorage.getItem("prac_examFwk") == null){
    localStorage.setItem("prac_examPwk",0);
    localStorage.setItem("prac_examFwk",0);
  }
  
  let wrtnprac = parseInt(localStorage.getItem("wrtnn_examPwk")) + parseInt(localStorage.getItem("wrtnn_examFwk")) + parseInt(localStorage.getItem("prac_examPwk")) + parseInt(localStorage.getItem("prac_examFwk"))
  document.getElementById("num_current_exttal").innerHTML = wrtnprac;
  
  var barChartOptions = {
      series: [{
        name: 'PASSED',
        data: [localStorage.getItem("wrtnn_examPwk"), localStorage.getItem("prac_examPwk")]
      }, {
        name: 'FAILED',
        data: [localStorage.getItem("wrtnn_examFwk"), localStorage.getItem("prac_examFwk")]
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
  // NEW
  if(today.includes(doc.data().dt_App)){
      if(doc.data().at == "NEW"){
        if(doc.data().User_GN == "FEMALE"){
          var femcount = countn1+=1;
          localStorage.setItem("femnwk",femcount)
        }
        if(doc.data().User_GN == "MALE"){
          var malcount = countn2+=1;
          localStorage.setItem("malnwk",malcount)
        }
      }
  //RENEWAL
      if (doc.data().at == "RENEWAL"){
        if(doc.data().User_GN == "FEMALE"){
          var femcount = countrn1+=1;
          localStorage.setItem("femrnwk",femcount)
        }
        if(doc.data().User_GN == "MALE"){
          var malcount = countrn2+=1;
          localStorage.setItem("malrnwk",malcount)
        }
      }
  }
    
  });
  
  if (localStorage.getItem("femnwk") == null || localStorage.getItem("femrnwk") == null){
    localStorage.setItem("femnwk",0)
    localStorage.setItem("femrnwk",0)
  }
  if (localStorage.getItem("malnwk") == null || localStorage.getItem("malrnwk") == null){
    localStorage.setItem("malnwk",0)
    localStorage.setItem("malrnwk",0)
  }
  
  document.getElementById("num_current_issttal").innerHTML = parseInt(localStorage.getItem("femnwk")) + parseInt(localStorage.getItem("femrnwk")) + parseInt(localStorage.getItem("malnwk")) + parseInt(localStorage.getItem("malrnwk"));
  var barChartOptions = {
      series: [{
        name: 'FEMALE',
        data: [localStorage.getItem("femnwk"), localStorage.getItem("femrnwk")]
      }, {
        name: 'MALE',
        data: [localStorage.getItem("malnwk"), localStorage.getItem("malrnwk")]
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
  const totlmscn = await getDocs(collection(db, "Applicants"));
  let mscntotl = 0;
  totlmscn.forEach((doc) => {
    if(today.includes(doc.data().User_D)){
    if (doc.data().User_AT == "DUPLICATE" || doc.data().User_AT == "REVISION OF RECORDS"){
        var mscn = mscntotl +=1;
        localStorage.setItem("mscntotalwk",mscn);
    }
  }
  })
  
  const totlDLPI = await getDocs(collection(db, "License"));
  let totl1 = 0;
  totlDLPI.forEach((doc) => {
    if(today.includes(doc.data().dt_App)){
      if(doc.data().at == "NEW" || doc.data().at == "RENEWAL"){
        var sdp = totl1+=1;
        localStorage.setItem("totl_dlpiwk", sdp);
      } 
    }
  });
  
  // If LocalStorage key Get Null
  if (localStorage.getItem("mscntotalwk") == null || localStorage.getItem("totl_dlpiwk") == null){
    localStorage.setItem("mscntotalwk",0);
    localStorage.setItem("totl_dlpiwk",0);
  }
  
  // dlch
  const dlch_total = await getDocs(collection(db, "Applicants"));
  let dlch1 = 0;
  let dlch2 = 0;
  let dlch3 = 0;
  let dlch4 = 0;
  dlch_total.forEach((doc) => {
    // Current Count
    // console.log(today)
        if(today.includes(doc.data().User_D)){
          if(doc.data().User_Stat == "RELEASED"){
            let dlch_cnt = dlch1+=1;
            localStorage.setItem("dlch_cnt1wk",dlch_cnt);
          }
          else if(doc.data().User_Stat3 == "FAILED"){
            let dlch_cnt = dlch4+=1;
            localStorage.setItem("dlch_cnt4wk",dlch_cnt);
          }
  
          if(doc.data().User_TT == "License"){
            if(doc.data().User_Stat4 == "INCOMPLETED"){
            let dlch_cnt = dlch2+=1;
            localStorage.setItem("dlch_cnt2wk",dlch_cnt);
          }
          else if(doc.data().User_Stat2 == "DECLINED"){
            let dlch_cnt = dlch3+=1;
            localStorage.setItem("dlch_cnt3wk",dlch_cnt);
          }
        }
        }
    });
  
    if (localStorage.getItem("dlch_cnt1wk") == null || localStorage.getItem("dlch_cnt2wk") == null || localStorage.getItem("dlch_cnt3wk") == null || localStorage.getItem("dlch_cnt4wk") == null){
      localStorage.setItem("dlch_cnt1wk",0);
      localStorage.setItem("dlch_cnt2wk",0);
      localStorage.setItem("dlch_cnt3wk",0);
      localStorage.setItem("dlch_cnt4wk",0);
    }
  // total of all
  var AEtotl = wrtnprac;
  var dpchtotl = parseInt(localStorage.getItem("dlch_cnt1wk")) + parseInt(localStorage.getItem("dlch_cnt2wk")) + parseInt(localStorage.getItem("dlch_cnt3wk")) +  parseInt(localStorage.getItem("dlch_cnt4wk"));
  var DLPI = localStorage.getItem("totl_dlpiwk");
  var MSCN = localStorage.getItem("mscntotalwk"); 
  
  document.getElementById("num_current_licttal").innerHTML = AEtotl + dpchtotl + parseInt(DLPI) + parseInt(MSCN);
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
  var now2 = new Date()
  var time = now2.getHours() + ":" + now2.getMinutes();
  
  if(time == "0:0"){
    localStorage.removeItem("wrtnn_examPwk");
    localStorage.removeItem("wrtnn_examFwk");
    localStorage.removeItem("prac_examPwk");
    localStorage.removeItem("prac_examFwk");
    localStorage.removeItem("femnwk");
    localStorage.removeItem("malnwk");
    localStorage.removeItem("femrnwk");
    localStorage.removeItem("malrnwk");
    localStorage.removeItem("mscntotalwk");
    localStorage.removeItem("totl_dlpiwk");
    localStorage.removeItem("dlch_cnt1wk");
    localStorage.removeItem("dlch_cnt2wk");
    localStorage.removeItem("dlch_cnt3wk");
    localStorage.removeItem("dlch_cnt4wk");
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