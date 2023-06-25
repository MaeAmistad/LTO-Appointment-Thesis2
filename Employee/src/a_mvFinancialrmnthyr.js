bcklic.addEventListener('click' , () => {
    window.location = "a_mvyearlyfltr.html"
  }) 
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
   
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
  
  var tbody = document.getElementById('tbody');
  var tbody1 = document.getElementById('tbody1');
  
  // Yearly Filter
  var date = new Date();
  var year = date.getFullYear();

// DATE TODAY
var date = new Date();
var day = date.getDate(); 
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
// TIME TODAY 
let hrs = date.getHours();
let mnts = date.getMinutes();
let time = hrs + ":" + mnts;
var today2 = month + "/" + day + "/" + year ;
document.getElementById('datee').innerHTML =  "For the year of " + year
document.getElementById('dtt').innerHTML = today2 + " " + time
  
  let itmNo = 0;
  let num1 = [];
  let num2 = [];
  let num3 = [];
  let numA = [];
  const querySnapshot2 = await getDocs(collection(db,"Motor Vehicle")); 
  querySnapshot2.forEach(doc => { 
  
    // getting Year
    let dd = doc.data().dt_App;
    let mmsp = dd.slice(10,15);

            if(mmsp == year){
                  let trow = document.createElement('tr');   
                  let td1 = document.createElement('td'); 
                  let td2 = document.createElement('td'); 
                  let td3 = document.createElement('td');
                  let td4 = document.createElement('td');
                  let td5 = document.createElement('td'); 
      
                  td1.innerHTML = itmNo+=1;
                  td2.innerHTML = doc.id;
                  td3.innerHTML = doc.data().User_name;
                  td4.innerHTML = doc.data().at;
                  td5.innerHTML = doc.data().User_TotalPayment;
  
                  trow.appendChild(td1);
                  trow.appendChild(td2);
                  trow.appendChild(td3);
                  trow.appendChild(td4);
                  trow.appendChild(td5);
    
                  tbody.appendChild(trow);

                  // FOR GETTING SUM
    if(doc.data().classification == "PRIVATE"){
      num1.push(parseInt(doc.data().User_TotalPayment));
      var numss1 = num1;
      var nums1 = 0; 
                  
      for(var i=0; i < numss1.length; i++){
          nums1 = parseInt(nums1) + parseInt(numss1[i]);
      }
      document.getElementById('spttl').innerHTML = nums1 + ".00"
    }
    // DL
    else if(doc.data().classification == "GOVERNMENT"){
      num2.push(parseInt(doc.data().User_TotalPayment));
      var numss2 = num2;
      var nums2 = 0; 
                  
      for(var i=0; i < numss2.length; i++){
          nums2 = parseInt(nums2) + parseInt(numss2[i]);
      }
      document.getElementById('dlttl').innerHTML = nums2 + ".00"
    }
    // CL
    else if( doc.data().at == "FOR HIRE"){
      num3.push(parseInt(doc.data().User_TotalPayment));
      var numss3 = num3;
      var nums3 = 0; 
                  
      for(var i=0; i < numss3.length; i++){
          nums3 = parseInt(nums3) + parseInt(numss3[i]);
      }
      document.getElementById('clttl').innerHTML = nums3 + ".00"
    }

    numA.push(parseInt(doc.data().User_TotalPayment));
    var numssA = numA;
    var numsA = 0; 
                
    for(var i=0; i < numssA.length; i++){
        numsA = parseInt(numsA) + parseInt(numssA[i]);
    }
    document.getElementById('ttlall').innerHTML = numsA + ".00"
            }
  });
  querySnapshot2.forEach(doc => { 
  
    // getting Year
    let dd = doc.data().dt_App;
    let mmsp = dd.slice(10,15);

  if(mmsp == year){
        let trow = document.createElement('tr');   
        let td1 = document.createElement('td'); 
        let td2 = document.createElement('td'); 
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td'); 
  
        td1.innerHTML = itmNo+=1;
        td2.innerHTML = doc.id;
        td3.innerHTML = doc.data().User_name;
        td4.innerHTML = doc.data().at;
        td5.innerHTML = doc.data().User_TotalPayment; 
  
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4); 
        trow.appendChild(td5);
  
        tbody1.appendChild(trow);

        // FOR GETTING SUM
    if(doc.data().classification == "PRIVATE"){
      num1.push(parseInt(doc.data().User_TotalPayment));
      var numss1 = num1;
      var nums1 = 0; 
                  
      for(var i=0; i < numss1.length; i++){
          nums1 = parseInt(nums1) + parseInt(numss1[i]);
      }
      document.getElementById('spttld').innerHTML = nums1 + ".00"
    }
    // DL
    else if(doc.data().classification == "GOVERNMENT"){
      num2.push(parseInt(doc.data().User_TotalPayment));
      var numss2 = num2;
      var nums2 = 0; 
                  
      for(var i=0; i < numss2.length; i++){
          nums2 = parseInt(nums2) + parseInt(numss2[i]);
      }
      document.getElementById('dlttld').innerHTML = nums2 + ".00"
    }
    // CL
    else if( doc.data().at == "FOR HIRE"){
      num3.push(parseInt(doc.data().User_TotalPayment));
      var numss3 = num3;
      var nums3 = 0; 
                  
      for(var i=0; i < numss3.length; i++){
          nums3 = parseInt(nums3) + parseInt(numss3[i]);
      }
      document.getElementById('clttld').innerHTML = nums3 + ".00"
    }

    numA.push(parseInt(doc.data().User_TotalPayment));
    var numssA = numA;
    var numsA = 0; 
                
    for(var i=0; i < numssA.length; i++){
        numsA = parseInt(numsA) + parseInt(numssA[i]);
    }
    document.getElementById('ttlalld').innerHTML = numsA + ".00"
  }
  });