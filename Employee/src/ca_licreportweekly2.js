bcklic.addEventListener('click' , () => {
    window.location = "ca_licweeklyfltr.html"
});  
nxtrprt.addEventListener('click' , () => {
  window.location = "ca_licweeklyfltr3.html"
});  

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
    var today = day + " - " + month + " - " + year; 
     
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

// DATE TODAY
var date = new Date();
var day = date.getDate(); 
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

// AGE 1
let spn1 = 0;
let sprn1 = 0;
let spdplct1 = 0;
let dln1 = 0;
let dlrn1 = 0;
let dldplct1 = 0;
let dlrr1 = 0;
let dlothrs1 = 0;
let cln1 = 0;
let clrn1 = 0;
let cldplct1 = 0;
let clrr1 = 0;
let clothrs1 = 0;
let ttlall1 = 0;

// AGE 2
let spn2 = 0;
let sprn2 = 0;
let spdplct2 = 0;
let dln2 = 0;
let dlrn2 = 0;
let dldplct2 = 0;
let dlrr2 = 0;
let dlothrs2 = 0;
let cln2 = 0;
let clrn2 = 0;
let cldplct2 = 0;
let clrr2 = 0;
let clothrs2 = 0;
let ttlall2 = 0;

// AGE 3
let spn3 = 0;
let sprn3 = 0;
let spdplct3 = 0;
let dln3 = 0;
let dlrn3 = 0;
let dldplct3 = 0;
let dlrr3 = 0;
let dlothrs3 = 0;
let cln3 = 0;
let clrn3 = 0;
let cldplct3 = 0;
let clrr3 = 0;
let clothrs3 = 0;
let ttlall3 = 0;

// AGE 4
let spn4 = 0;
let sprn4 = 0;
let spdplct4 = 0;
let dln4 = 0;
let dlrn4 = 0;
let dldplct4 = 0;
let dlrr4 = 0;
let dlothrs4 = 0;
let cln4 = 0;
let clrn4 = 0;
let cldplct4 = 0;
let clrr4 = 0;
let clothrs4 = 0;
let ttlall4 = 0;

// AGE 5
let spn5 = 0;
let sprn5 = 0;
let spdplct5 = 0;
let dln5 = 0;
let dlrn5 = 0;
let dldplct5 = 0;
let dlrr5 = 0;
let dlothrs5 = 0;
let cln5 = 0;
let clrn5 = 0;
let cldplct5 = 0;
let clrr5 = 0;
let clothrs5 = 0;
let ttlall5 = 0;

// AGE 6
let spn6 = 0;
let sprn6 = 0;
let spdplct6 = 0;
let dln6 = 0;
let dlrn6 = 0;
let dldplct6 = 0;
let dlrr6 = 0;
let dlothrs6 = 0;
let cln6 = 0;
let clrn6 = 0;
let cldplct6 = 0;
let clrr6 = 0;
let clothrs6 = 0;
let ttlall6 = 0;

// AGE 7
let spn7 = 0;
let sprn7 = 0;
let spdplct7 = 0;
let dln7 = 0;
let dlrn7 = 0;
let dldplct7 = 0;
let dlrr7 = 0;
let dlothrs7 = 0;
let cln7 = 0;
let clrn7 = 0;
let cldplct7 = 0;
let clrr7 = 0;
let clothrs7 = 0;
let ttlall7 = 0;

// AGE 8
let spn8 = 0;
let sprn8 = 0;
let spdplct8 = 0;
let dln8 = 0;
let dlrn8 = 0;
let dldplct8 = 0;
let dlrr8 = 0;
let dlothrs8 = 0;
let cln8 = 0;
let clrn8 = 0;
let cldplct8 = 0;
let clrr8 = 0;
let clothrs8 = 0;
let ttlall8 = 0;

// AGE 9
let spn9 = 0;
let sprn9 = 0;
let spdplct9 = 0;
let dln9 = 0;
let dlrn9 = 0;
let dldplct9 = 0;
let dlrr9 = 0;
let dlothrs9 = 0;
let cln9 = 0;
let clrn9 = 0;
let cldplct9 = 0;
let clrr9 = 0;
let clothrs9 = 0;
let ttlall9 = 0;

// AGE 10
let spn10 = 0;
let sprn10 = 0;
let spdplct10 = 0;
let dln10 = 0;
let dlrn10 = 0;
let dldplct10 = 0;
let dlrr10 = 0;
let dlothrs10 = 0;
let cln10 = 0;
let clrn10 = 0;
let cldplct10 = 0;
let clrr10 = 0;
let clothrs10 = 0;
let ttlall10 = 0;

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


lic_cnt.forEach((doc) => {
    // FOR AGE CHART
    let age = doc.data().User_BD;
    let age_yr = age.slice(0,4)

    // AGE1
    if(today.includes(doc.data().dt_App)){  
        // SP NEW
        if(doc.data().laa == "STUDENT-DRIVER'S PERMIT" && doc.data().at == "NEW"){
            if(age1.includes(age_yr)){
                spn1 = spn1 +=1;
                ttlall1 = ttlall1+=1
              }
              else if(age2.includes(age_yr)){
                spn2 = spn2 +=1;
                ttlall2 = ttlall2+=1
              }
              else if(age3.includes(age_yr)){
                spn3 = spn3 +=1;
                ttlall3 = ttlall3+=1
              }
              else if(age4.includes(age_yr)){
                spn4 = spn4+=1;
                ttlall4 = ttlall4+=1
              }
              else if(age5.includes(age_yr)){
                spn5 = spn5 +=1;
                ttlall5 = ttlall5+=1
              }
              else if(age6.includes(age_yr)){
                spn6 = spn6 +=1;
                ttlall6 = ttlall6+=1
              }
              else if(age7.includes(age_yr)){
                spn7 = spn7 +=1;
                ttlall7 = ttlall7+=1
              }
              else if(age8.includes(age_yr)){
                spn8 = spn8 +=1;
                ttlall8 = ttlall8+=1
              }
              else if(age9.includes(age_yr)){
                spn9 = spn9 +=1;
                ttlall9 = ttlall9+=1
              }
              else if(age10.includes(age_yr)){
                spn10 = spn10 +=1;
                ttlall10 = ttlall10+=1
              }
        }
        // SP RENEWAL
        if(doc.data().laa == "STUDENT-DRIVER'S PERMIT" && doc.data().at == "RENEWAL"){
            if(age1.includes(age_yr)){
                sprn1 = sprn1 +=1;
                ttlall1 = ttlall1+=1
              }
              else if(age2.includes(age_yr)){
                sprn2 = sprn2 +=1;
                ttlall2 = ttlall2+=1
              }
              else if(age3.includes(age_yr)){
                sprn3 = sprn3 +=1;
                ttlall3 = ttlall3+=1
              }
              else if(age4.includes(age_yr)){
                sprn4 = sprn4+=1;
                ttlall4 = ttlall4+=1
              }
              else if(age5.includes(age_yr)){
                sprn5 = sprn5 +=1;
                ttlall5 = ttlall5+=1
              }
              else if(age6.includes(age_yr)){
                sprn6 = sprn6 +=1;
                ttlall6 = ttlall6+=1
              }
              else if(age7.includes(age_yr)){
                sprn7 = sprn7 +=1;
                ttlall7 = ttlall7+=1
              }
              else if(age8.includes(age_yr)){
                sprn8 = sprn8 +=1;
                ttlall8 = ttlall8+=1
              }
              else if(age9.includes(age_yr)){
                sprn9 = sprn9 +=1;
                ttlall9 = ttlall9+=1
              }
              else if(age10.includes(age_yr)){
                sprn10 = sprn10 +=1;
                ttlall10 = ttlall10+=1
              }
        }
        // SP DUPLICATE
        if(doc.data().laa == "STUDENT-DRIVER'S PERMIT" && doc.data().at == "RENEWAL"){
            if(age1.includes(age_yr)){
                spdplct1 = spdplct1 +=1;
                ttlall1 = ttlall1+=1
              }
              else if(age2.includes(age_yr)){
                spdplct2 = spdplct2 +=1;
                ttlall2 = ttlall2+=1
              }
              else if(age3.includes(age_yr)){
                spdplct3 = spdplct3 +=1;
                ttlall3 = ttlall3+=1
              }
              else if(age4.includes(age_yr)){
                spdplct4 = spdplct4+=1;
                ttlall4 = ttlall4+=1
              }
              else if(age5.includes(age_yr)){
                spdplct5 = spdplct5 +=1;
                ttlall5 = ttlall5+=1
              }
              else if(age6.includes(age_yr)){
                spdplct6 = spdplct6 +=1;
                ttlall6 = ttlall6+=1
              }
              else if(age7.includes(age_yr)){
                spdplct7 = spdplct7 +=1;
                ttlall7 = ttlall7+=1
              }
              else if(age8.includes(age_yr)){
                spdplct8 = spdplct8 +=1;
                ttlall8 = ttlall8+=1
              }
              else if(age9.includes(age_yr)){
                spdplct9 = spdplct9 +=1;
                ttlall9 = ttlall9+=1
              }
              else if(age10.includes(age_yr)){
                spdplct10 = spdplct10 +=1;
                ttlall10 = ttlall10+=1
              }
        }
        // DL
        if(doc.data().laa == "DRIVER'S LICENSE"){
                if(doc.data().at == "NEW"){
                    if(age1.includes(age_yr)){
                        dln1 = dln1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        dln2 = dln2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        dln3 = dln3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        dln4 = dln4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        dln5 = dln5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        dln6 = dln6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        dln7 = dln7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        dln8 = dln8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        dln9 = dln9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        dln10 = dln10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                // DL RENEW
                else if(doc.data().at == "RENEWAL"){
                    if(age1.includes(age_yr)){
                        dlrn1 = dlrn1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        dlrn2 = dlrn2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        dlrn3 = dlrn3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        dlrn4 = dlrn4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        dlrn5 = dlrn5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        dlrn6 = dlrn6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        dlrn7 = dlrn7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        dlrn8 = dlrn8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        dlrn9 = dlrn9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        dlrn10 = dlrn10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                // DL DUPLICATE
                else if(doc.data().at == "DUPLICATE"){
                    if(age1.includes(age_yr)){
                        dldplct1 = dldplct1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        dldplct2 = dldplct2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        dldplct3 = dldplct3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        dldplct4 = dldplct4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        dldplct5 = dldplct5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        dldplct6 = dldplct6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        dldplct7 = dldplct7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        dldplct8 = dldplct8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        dldplct9 = dldplct9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        dldplct10 = dldplct10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                // DL RR
                else if(doc.data().at == "REVISION OF RECORDS"){
                    if(age1.includes(age_yr)){
                        dlrr1 = dlrr1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        dlrr2 = dlrr2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        dlrr3 = dlrr3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        dlrr4 = dlrr4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        dlrr5 = dlrr5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        dlrr6 = dlrr6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        dlrr7 = dlrr7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        dlrr8 = dlrr8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        dlrr9 = dlrr9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        dlrr10 = dlrr10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                else{
                    if(age1.includes(age_yr)){
                        dlothrs1 = dlothrs1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        dlothrs2 = dlothrs2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        dlothrs3 = dlothrs3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        dlothrs4 = dlothrs4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        dlothrs5 = dlothrs5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        dlothrs6 = dlothrs6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        dlothrs7 = dlothrs7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        dlothrs8 = dlothrs8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        dlothrs9 = dlothrs9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        dlothrs10 = dlothrs10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
            }
            // CL TO BE CONTINUED
            if(doc.data().laa == "CONDUCTOR'S LICENSE"){
                // CL NEW
                if(doc.data().at == "NEW"){
                    if(age1.includes(age_yr)){
                        cln1 = cln1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        cln2 = cln2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        cln3 = cln3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        cln4 = cln4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        cln5 = cln5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        cln6 = cln6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        cln7 = cln7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        cln8 = cln8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        cln9 = cln9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        cln10 = cln10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                // CL RENEW
                else if(doc.data().at == "RENEWAL"){
                    if(age1.includes(age_yr)){
                        clrn1 = clrn1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        clrn2 = clrn2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        clrn3 = clrn3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        clrn4 = clrn4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        clrn5 = clrn5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        clrn6 = clrn6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        clrn7 = clrn7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        clrn8 = clrn8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        clrn9 = clrn9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        clrn10 = clrn10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                // CL DUPLICATE
                else if(doc.data().at == "DUPLICATE"){
                    if(age1.includes(age_yr)){
                        cldplct1 = cldplct1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        cldplct2 = cldplct2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        cldplct3 = cldplct3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        cldplct4 = cldplct4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        cldplct5 = cldplct5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        cldplct6 = cldplct6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        cldplct7 = cldplct7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        cldplct8 = cldplct8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        cldplct9 = cldplct9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        cldplct10 = cldplct10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                // CL RR
                else if(doc.data().at == "REVISION OF RECORDS"){
                    if(age1.includes(age_yr)){
                        clrr1 = clrr1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        dlrr2 = dlrr2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        clrr3 = clrr3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        clrr4 = clrr4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        clrr5 = clrr5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        clrr6 = clrr6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        dlrr7 = dlrr7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        clrr8 = clrr8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        clrr9 = clrr9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        clrr10 = clrr10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
                else{
                    if(age1.includes(age_yr)){
                        clothrs1 = clothrs1 +=1;
                        ttlall1 = ttlall1+=1
                    }
                    else if(age2.includes(age_yr)){
                        clothrs2 = clothrs2 +=1;
                        ttlall2 = ttlall2+=1
                    }
                    else if(age3.includes(age_yr)){
                        clothrs3 = clothrs3 +=1;
                        ttlall3 = ttlall3+=1
                    }
                    else if(age4.includes(age_yr)){
                        clothrs4 = clothrs4+=1;
                        ttlall4 = ttlall4+=1
                    }
                    else if(age5.includes(age_yr)){
                        clothrs5 = clothrs5 +=1;
                        ttlall5 = ttlall5+=1
                    }
                    else if(age6.includes(age_yr)){
                        clothrs6 = clothrs6 +=1;
                        ttlall6 = ttlall6+=1
                    }
                    else if(age7.includes(age_yr)){
                        clothrs7 = clothrs7 +=1;
                        ttlall7 = ttlall7+=1
                    }
                    else if(age8.includes(age_yr)){
                        clothrs8 = clothrs8 +=1;
                        ttlall8 = ttlall8+=1
                    }
                    else if(age9.includes(age_yr)){
                        clothrs9 = clothrs9 +=1;
                        ttlall9 = ttlall9+=1
                    }
                    else if(age10.includes(age_yr)){
                        clothrs10 = clothrs10 +=1;
                        ttlall10 = ttlall10+=1
                    }
                }
            }
        }

});

// DISPLAY RESULT1
// SP
document.getElementById('sp_n1').innerHTML = spn1
document.getElementById('sp_n2').innerHTML = spn2
document.getElementById('sp_n3').innerHTML = spn3
document.getElementById('sp_n4').innerHTML = spn4
document.getElementById('sp_n5').innerHTML = spn5
document.getElementById('sp_n6').innerHTML = spn6
document.getElementById('sp_n7').innerHTML = spn7
document.getElementById('sp_n8').innerHTML = spn8
document.getElementById('sp_n9').innerHTML = spn9
document.getElementById('sp_n10').innerHTML = spn10

document.getElementById('sp_rn1').innerHTML = sprn1
document.getElementById('sp_rn2').innerHTML = sprn2
document.getElementById('sp_rn3').innerHTML = sprn3
document.getElementById('sp_rn4').innerHTML = sprn4
document.getElementById('sp_rn5').innerHTML = sprn5
document.getElementById('sp_rn6').innerHTML = sprn6
document.getElementById('sp_rn7').innerHTML = sprn7
document.getElementById('sp_rn8').innerHTML = sprn8
document.getElementById('sp_rn9').innerHTML = sprn9
document.getElementById('sp_rn10').innerHTML = sprn10

document.getElementById("sp_dplct1").innerHTML = spdplct1
document.getElementById("sp_dplct2").innerHTML = spdplct2
document.getElementById("sp_dplct3").innerHTML = spdplct3
document.getElementById("sp_dplct4").innerHTML = spdplct4
document.getElementById("sp_dplct5").innerHTML = spdplct5
document.getElementById("sp_dplct6").innerHTML = spdplct6
document.getElementById("sp_dplct7").innerHTML = spdplct7
document.getElementById("sp_dplct8").innerHTML = spdplct8
document.getElementById("sp_dplct9").innerHTML = spdplct9
document.getElementById("sp_dplct10").innerHTML = spdplct10
// DL
document.getElementById('dl_n1').innerHTML = dln1
document.getElementById('dl_n2').innerHTML = dln2
document.getElementById('dl_n3').innerHTML = dln3
document.getElementById('dl_n4').innerHTML = dln4
document.getElementById('dl_n5').innerHTML = dln5
document.getElementById('dl_n6').innerHTML = dln6
document.getElementById('dl_n7').innerHTML = dln7
document.getElementById('dl_n8').innerHTML = dln8
document.getElementById('dl_n9').innerHTML = dln9
document.getElementById('dl_n10').innerHTML = dln10

document.getElementById('dl_rn1').innerHTML = dlrn1
document.getElementById('dl_rn2').innerHTML = dlrn2
document.getElementById('dl_rn3').innerHTML = dlrn3
document.getElementById('dl_rn4').innerHTML = dlrn4
document.getElementById('dl_rn5').innerHTML = dlrn5
document.getElementById('dl_rn6').innerHTML = dlrn6
document.getElementById('dl_rn7').innerHTML = dlrn7
document.getElementById('dl_rn8').innerHTML = dlrn8
document.getElementById('dl_rn9').innerHTML = dlrn9
document.getElementById('dl_rn10').innerHTML = dlrn10

document.getElementById('dl_dplct1').innerHTML = dldplct1
document.getElementById('dl_dplct2').innerHTML = dldplct2
document.getElementById('dl_dplct3').innerHTML = dldplct3
document.getElementById('dl_dplct4').innerHTML = dldplct4
document.getElementById('dl_dplct5').innerHTML = dldplct5
document.getElementById('dl_dplct6').innerHTML = dldplct6
document.getElementById('dl_dplct7').innerHTML = dldplct7
document.getElementById('dl_dplct8').innerHTML = dldplct8
document.getElementById('dl_dplct9').innerHTML = dldplct9
document.getElementById('dl_dplct10').innerHTML = dldplct10

document.getElementById('dl_rr1').innerHTML = dlrr1
document.getElementById('dl_rr2').innerHTML = dlrr2
document.getElementById('dl_rr3').innerHTML = dlrr3
document.getElementById('dl_rr4').innerHTML = dlrr4
document.getElementById('dl_rr5').innerHTML = dlrr5
document.getElementById('dl_rr6').innerHTML = dlrr6
document.getElementById('dl_rr7').innerHTML = dlrr7
document.getElementById('dl_rr8').innerHTML = dlrr8
document.getElementById('dl_rr9').innerHTML = dlrr9
document.getElementById('dl_rr10').innerHTML = dlrr10

document.getElementById('dl_othrs1').innerHTML = dlothrs1
document.getElementById('dl_othrs2').innerHTML = dlothrs2
document.getElementById('dl_othrs3').innerHTML = dlothrs3
document.getElementById('dl_othrs4').innerHTML = dlothrs4
document.getElementById('dl_othrs5').innerHTML = dlothrs5
document.getElementById('dl_othrs6').innerHTML = dlothrs6
document.getElementById('dl_othrs7').innerHTML = dlothrs7
document.getElementById('dl_othrs8').innerHTML = dlothrs8
document.getElementById('dl_othrs9').innerHTML = dlothrs9
document.getElementById('dl_othrs10').innerHTML = dlothrs10
// CL
document.getElementById('cl_n1').innerHTML = cln1
document.getElementById('cl_n2').innerHTML = cln2
document.getElementById('cl_n3').innerHTML = cln3
document.getElementById('cl_n4').innerHTML = cln4
document.getElementById('cl_n5').innerHTML = cln5
document.getElementById('cl_n6').innerHTML = cln6
document.getElementById('cl_n7').innerHTML = cln7
document.getElementById('cl_n8').innerHTML = cln8
document.getElementById('cl_n9').innerHTML = cln9
document.getElementById('cl_n10').innerHTML = cln10

document.getElementById('cl_rn1').innerHTML = clrn1
document.getElementById('cl_rn2').innerHTML = clrn2
document.getElementById('cl_rn3').innerHTML = clrn3
document.getElementById('cl_rn4').innerHTML = clrn4
document.getElementById('cl_rn5').innerHTML = clrn5
document.getElementById('cl_rn6').innerHTML = clrn6
document.getElementById('cl_rn7').innerHTML = clrn7
document.getElementById('cl_rn8').innerHTML = clrn8
document.getElementById('cl_rn9').innerHTML = clrn9
document.getElementById('cl_rn10').innerHTML = clrn10

document.getElementById('cl_dplct1').innerHTML = cldplct1
document.getElementById('cl_dplct2').innerHTML = cldplct2
document.getElementById('cl_dplct3').innerHTML = cldplct3
document.getElementById('cl_dplct4').innerHTML = cldplct4
document.getElementById('cl_dplct5').innerHTML = cldplct5
document.getElementById('cl_dplct6').innerHTML = cldplct6
document.getElementById('cl_dplct7').innerHTML = cldplct7
document.getElementById('cl_dplct8').innerHTML = cldplct8
document.getElementById('cl_dplct9').innerHTML = cldplct9
document.getElementById('cl_dplct10').innerHTML = cldplct10

document.getElementById('cl_rr1').innerHTML = clrr1
document.getElementById('cl_rr2').innerHTML = clrr2
document.getElementById('cl_rr3').innerHTML = clrr3
document.getElementById('cl_rr4').innerHTML = clrr4
document.getElementById('cl_rr5').innerHTML = clrr5
document.getElementById('cl_rr6').innerHTML = clrr6
document.getElementById('cl_rr7').innerHTML = clrr7
document.getElementById('cl_rr8').innerHTML = clrr8
document.getElementById('cl_rr9').innerHTML = clrr9
document.getElementById('cl_rr10').innerHTML = clrr10

document.getElementById('cl_othrs1').innerHTML = clothrs1
document.getElementById('cl_othrs2').innerHTML = clothrs2
document.getElementById('cl_othrs3').innerHTML = clothrs3
document.getElementById('cl_othrs4').innerHTML = clothrs4
document.getElementById('cl_othrs5').innerHTML = clothrs5
document.getElementById('cl_othrs6').innerHTML = clothrs6
document.getElementById('cl_othrs7').innerHTML = clothrs7
document.getElementById('cl_othrs8').innerHTML = clothrs8
document.getElementById('cl_othrs9').innerHTML = clothrs9
document.getElementById('cl_othrs10').innerHTML = clothrs10

// TOTAL 
document.getElementById('sp_ttl1').innerHTML = spn1 + sprn1 + spdplct1
document.getElementById('sp_ttl2').innerHTML = spn2 + sprn2 + spdplct2
document.getElementById('sp_ttl3').innerHTML = spn3 + sprn3 + spdplct3
document.getElementById('sp_ttl4').innerHTML = spn4 + sprn4 + spdplct4
document.getElementById('sp_ttl5').innerHTML = spn5 + sprn5 + spdplct5
document.getElementById('sp_ttl6').innerHTML = spn6 + sprn6 + spdplct6
document.getElementById('sp_ttl7').innerHTML = spn7 + sprn7 + spdplct7
document.getElementById('sp_ttl8').innerHTML = spn8 + sprn8 + spdplct8
document.getElementById('sp_ttl9').innerHTML = spn9 + sprn9 + spdplct9
document.getElementById('sp_ttl10').innerHTML = spn10 + sprn10 + spdplct10

document.getElementById('dl_ttl1').innerHTML = dln1 + dlrn1 + dldplct1 + dlrr1 + dlothrs1
document.getElementById('dl_ttl2').innerHTML = dln2 + dlrn2 + dldplct2 + dlrr2 + dlothrs2
document.getElementById('dl_ttl3').innerHTML = dln3 + dlrn3 + dldplct3 + dlrr3 + dlothrs3
document.getElementById('dl_ttl4').innerHTML = dln4 + dlrn4 + dldplct4 + dlrr4 + dlothrs4
document.getElementById('dl_ttl5').innerHTML = dln5 + dlrn5 + dldplct5 + dlrr5 + dlothrs5
document.getElementById('dl_ttl6').innerHTML = dln6 + dlrn6 + dldplct6 + dlrr6 + dlothrs6
document.getElementById('dl_ttl7').innerHTML = dln7 + dlrn7 + dldplct7 + dlrr7 + dlothrs7
document.getElementById('dl_ttl8').innerHTML = dln8 + dlrn8 + dldplct8 + dlrr8 + dlothrs8
document.getElementById('dl_ttl9').innerHTML = dln9 + dlrn9 + dldplct9 + dlrr9 + dlothrs9
document.getElementById('dl_ttl10').innerHTML = dln10 + dlrn10 + dldplct10 + dlrr10 + dlothrs10

document.getElementById('cl_ttl1').innerHTML = cln1 + clrn1 + cldplct1 + clrr1 + clothrs1
document.getElementById('cl_ttl2').innerHTML = cln2 + clrn2 + cldplct2 + clrr2 + clothrs2
document.getElementById('cl_ttl3').innerHTML = cln3 + clrn3 + cldplct3 + clrr3 + clothrs3
document.getElementById('cl_ttl4').innerHTML = cln4 + clrn4 + cldplct4 + clrr4 + clothrs4
document.getElementById('cl_ttl5').innerHTML = cln5 + clrn5 + cldplct5 + clrr5 + clothrs5
document.getElementById('cl_ttl6').innerHTML = cln6 + clrn6 + cldplct6 + clrr6 + clothrs6
document.getElementById('cl_ttl7').innerHTML = cln7 + clrn7 + cldplct7 + clrr7 + clothrs7
document.getElementById('cl_ttl8').innerHTML = cln8 + clrn8 + cldplct8 + clrr8 + clothrs8
document.getElementById('cl_ttl9').innerHTML = cln9 + clrn9 + cldplct9 + clrr9 + clothrs9
document.getElementById('cl_ttl10').innerHTML = cln10 + clrn10 + cldplct10 + clrr10 + clothrs10

document.getElementById('ttl1').innerHTML = ttlall1
document.getElementById('ttl2').innerHTML = ttlall2
document.getElementById('ttl3').innerHTML = ttlall3
document.getElementById('ttl4').innerHTML = ttlall4
document.getElementById('ttl5').innerHTML = ttlall5
document.getElementById('ttl6').innerHTML = ttlall6
document.getElementById('ttl7').innerHTML = ttlall7
document.getElementById('ttl8').innerHTML = ttlall8
document.getElementById('ttl9').innerHTML = ttlall9
document.getElementById('ttl10').innerHTML = ttlall10

// TOTAL OF ALL

let sp1 = spn1+spn2+spn3+spn4+spn5+spn6+spn7+spn8+spn9+spn10
let sp2 = sprn1+sprn2+sprn3+sprn4+sprn5+sprn6+sprn7+sprn8+sprn9+sprn10
let sp3 = spdplct1+spdplct2+spdplct3+spdplct4+spdplct5+spdplct6+spdplct7+spdplct8+spdplct9+spdplct10
let dl1 = dln1+dln2+dln3+dln4+dln5+dln6+dln7+dln8+dln9+dln10
let dl2 = dlrn1+dlrn2+dlrn3+dlrn4+dlrn5+dlrn6+dlrn7+dlrn8+dlrn9+dlrn10
let dl3 = dldplct1+dldplct2+dldplct3+dldplct4+dldplct5+dldplct6+dldplct7+dldplct8+dldplct9+dldplct10
let dl4 = dlrr1+dlrr2+dlrr3+dlrr4+dlrr5+dlrr6+dlrr7+dlrr8+dlrr9+dlrr10
let dl5 = dlothrs1+dlothrs2+dlothrs3+dlothrs4+dlothrs5+dlothrs6+dlothrs7+dlothrs8+dlothrs9+dlothrs10
let cl1 = cln1+cln2+cln3+cln4+cln5+cln6+cln7+cln8+cln9+cln10
let cl2 = clrn1+clrn2+clrn3+clrn4+clrn5+clrn6+clrn7+clrn8+clrn9+clrn10
let cl3 = cldplct1+cldplct2+cldplct3+cldplct4+cldplct5+cldplct6+cldplct7+cldplct8+cldplct9+cldplct10
let cl4 = clrr1+clrr2+clrr3+clrr4+clrr5+clrr6+clrr7+clrr8+clrr9+clrr10
let cl5 = clothrs1+clothrs2+clothrs3+clothrs4+clothrs5+clothrs6+clothrs7+clothrs8+clothrs9+clothrs10

document.getElementById('ttlal1').innerHTML = sp1
document.getElementById('ttlal2').innerHTML = sp2
document.getElementById('ttlal3').innerHTML = sp3
document.getElementById('ttlal4').innerHTML = sp1 + sp2 + sp3
document.getElementById('ttlal5').innerHTML = dl1
document.getElementById('ttlal6').innerHTML = dl2
document.getElementById('ttlal7').innerHTML = dl3
document.getElementById('ttlal8').innerHTML = dl4
document.getElementById('ttlal9').innerHTML = dl5
document.getElementById('ttlal10').innerHTML = dl1 + dl2 + dl3 + dl4 + dl5
document.getElementById('ttlal11').innerHTML = cl1
document.getElementById('ttlal12').innerHTML = cl2
document.getElementById('ttlal13').innerHTML = cl3
document.getElementById('ttlal14').innerHTML = cl4
document.getElementById('ttlal15').innerHTML = cl5
document.getElementById('ttlal16').innerHTML = cl1 + cl2 + cl3 + cl4 + cl5
document.getElementById('ttlal17').innerHTML = ttlall1+ttlall2+ttlall3+ttlall4+ttlall5+ttlall6+ttlall7+ttlall8+ttlall9+ttlall10
