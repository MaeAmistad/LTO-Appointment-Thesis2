bcklic.addEventListener('click' , () => {
    window.location = "a_mvdashboard.html"
})
 
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

//  
let cym1 = 0;
let cym2 = 0;
let cym3 = 0;
let cym4 = 0;
let cym5 = 0;
let cym6 = 0;
let cym7 = 0;
let cym8 = 0;
let cym9 = 0;
let cym10 = 0;
let cym11 = 0;
let cym12 = 0;
let cym13 = 0;
let cym14 = 0;
let cym15 = 0;

let yr2m1 = 0;
let yr2m2 = 0;
let yr2m3 = 0;
let yr2m4 = 0;
let yr2m5 = 0;
let yr2m6 = 0;
let yr2m7 = 0;
let yr2m8 = 0;
let yr2m9 = 0;
let yr2m10 = 0;
let yr2m11 = 0;
let yr2m12 = 0;
let yr2m13 = 0;
let yr2m14 = 0;
let yr2m15 = 0;

let yr3m1 = 0;
let yr3m2 = 0;
let yr3m3 = 0;
let yr3m4 = 0;
let yr3m5 = 0;
let yr3m6 = 0;
let yr3m7 = 0;
let yr3m8 = 0;
let yr3m9 = 0;
let yr3m10 = 0;
let yr3m11 = 0;
let yr3m12 = 0;
let yr3m13 = 0;
let yr3m14 = 0;
let yr3m15 = 0;

let yr4m1 = 0;
let yr4m2 = 0;
let yr4m3 = 0;
let yr4m4 = 0;
let yr4m5 = 0;
let yr4m6 = 0;
let yr4m7 = 0;
let yr4m8 = 0;
let yr4m9 = 0;
let yr4m10 = 0;
let yr4m11 = 0;
let yr4m12 = 0;
let yr4m13 = 0;
let yr4m14 = 0;
let yr4m15 = 0;

let yr5m1 = 0;
let yr5m2 = 0;
let yr5m3 = 0;
let yr5m4 = 0;
let yr5m5 = 0;
let yr5m6 = 0;
let yr5m7 = 0;
let yr5m8 = 0;
let yr5m9 = 0;
let yr5m10 = 0;
let yr5m11 = 0;
let yr5m12 = 0;
let yr5m13 = 0;
let yr5m14 = 0;
let yr5m15 = 0;

let yr6m1 = 0;
let yr6m2 = 0;
let yr6m3 = 0;
let yr6m4 = 0;
let yr6m5 = 0;
let yr6m6 = 0;
let yr6m7 = 0;
let yr6m8 = 0;
let yr6m9 = 0;
let yr6m10 = 0;
let yr6m11 = 0;
let yr6m12 = 0;
let yr6m13 = 0;
let yr6m14 = 0;
let yr6m15 = 0;

// YEAR Model
    let year_mdl1 = ["2024", "2023", "2022", "2021", "2020", "2019"]
    let year_mdl2 = [ "2018", "2017", "2016", "2015", "2014","2013"]
    let year_mdl3 = ["2012", "2011", "2010", "2009", "2008", "2007"]
    let year_mdl4 = [ "2006", "2005", "2004", "2003", "2002","2001"]
    let year_mdl5 = ["2000", "1999", "1998", "1997", "1996"]
    let year_mdl6 = ["1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1981", "1982", "1983", "1984", "1985"
      , "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971"
      , "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961"
      , "1960", "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951"
      , "1950", "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941"
      , "1940", "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931"
      , "1930", "1929", "1928", "1927", "1926", "1925", "1924", "1923", "1922", "1921"
      , "1920", "1919", "1918", "1917", "1916", "1915", "1914", "1913", "1912", "1911"
      ,"1910", "1909", "1908", "1907", "1906","1905","1904","1903","1902","1901","1900"
    ]


// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day ;

const mv_bc = await getDocs(collection(db, "Motor Vehicle"));
mv_bc.forEach((doc) => {
  // CAR
  var dd = doc.data().dt_App;
  var ddsp = dd.slice(0,2);
  var mmsp = dd.slice(5,7);
  var yysp = dd.slice(10,14);
  var dtcon = yysp + "-" + mmsp + "-" + ddsp; 

  if(dtcon == today){
    // Year Model 1
    if (year_mdl1.includes(doc.data().yr_modell)){
      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var C1 = cym1+=1;
            localStorage.setItem("car1_yr1d",C1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var C2 = cym2+=1;
            localStorage.setItem("car2_yr1d",C2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var C3 = cym3+=1;
            localStorage.setItem("car3_yr1d",C3)
          }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = cym4+=1;
          localStorage.setItem("UV_1yr1d",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = cym5+=1;
          localStorage.setItem("UV_2yr1d",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = cym6+=1;
          localStorage.setItem("UV_3yr1d",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = cym7+=1;
            localStorage.setItem("SUV_1yr1d",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = cym8+=1;
            localStorage.setItem("SUV_2yr1d",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = cym9+=1;
            localStorage.setItem("SUV_3yr1d",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = cym10+=1;
            localStorage.setItem("BUS_1yr1d",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = cym11+=1;
            localStorage.setItem("BUS_2yr1d",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = cym12+=1;
            localStorage.setItem("BUS_3yr1d",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = cym13+=1;
            localStorage.setItem("TRCK_1yr1d",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = cym14+=1;
            localStorage.setItem("TRCK_2yr1d",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = cym15+=1;
            localStorage.setItem("TRCK_3yr1d",TRCK3)
          }
        }
    }
    // Year Model 2
    if (year_mdl2.includes(doc.data().yr_modell)){
      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var C1 = yr2m1+=1;
            localStorage.setItem("car1_yr2d",C1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var C2 = yr2m2+=1;
            localStorage.setItem("car2_yr2d",C2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var C3 = yr2m3+=1;
            localStorage.setItem("car3_yr2d",C3)
          }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = yr2m4+=1;
          localStorage.setItem("UV_1yr2d",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = yr2m5+=1;
          localStorage.setItem("UV_2yr2d",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = yr2m6+=1;
          localStorage.setItem("UV_3yr2d",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = yr2m7+=1;
            localStorage.setItem("SUV_1yr2d",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = yr2m8+=1;
            localStorage.setItem("SUV_2yr2d",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = yr2m9+=1;
            localStorage.setItem("SUV_3yr2d",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = yr2m10+=1;
            localStorage.setItem("BUS_1yr2d",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = yr2m11+=1;
            localStorage.setItem("BUS_2yr2d",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = yr2m12+=1;
            localStorage.setItem("BUS_3yr2d",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = yr2m13+=1;
            localStorage.setItem("TRCK_1yr2d",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = yr2m14+=1;
            localStorage.setItem("TRCK_2yr2d",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = yr2m15+=1;
            localStorage.setItem("TRCK_3yr2d",TRCK3)
          }
        }
    }
    // Year Model 3
    if (year_mdl3.includes(doc.data().yr_modell)){
      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var C1 = yr3m1+=1;
            localStorage.setItem("car1_yr3d",C1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var C2 = yr3m2+=1;
            localStorage.setItem("car2_yr3d",C2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var C3 = yr3m3+=1;
            localStorage.setItem("car3_yr3d",C3)
          }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = yr3m4+=1;
          localStorage.setItem("UV_1yr3d",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = yr3m5+=1;
          localStorage.setItem("UV_2yr3d",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = yr3m6+=1;
          localStorage.setItem("UV_3yr3d",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = yr3m7+=1;
            localStorage.setItem("SUV_1yr3d",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = yr3m8+=1;
            localStorage.setItem("SUV_2yr3d",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = yr3m9+=1;
            localStorage.setItem("SUV_3yr3d",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = yr3m10+=1;
            localStorage.setItem("BUS_1yr3d",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = yr3m11+=1;
            localStorage.setItem("BUS_2yr3d",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = yr3m12+=1;
            localStorage.setItem("BUS_3yr3d",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = yr3m13+=1;
            localStorage.setItem("TRCK_1yr3d",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = yr3m14+=1;
            localStorage.setItem("TRCK_2yr3d",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = yr3m15+=1;
            localStorage.setItem("TRCK_3yr3d",TRCK3)
          }
        }
    }
    // Year Model 4
    if (year_mdl4.includes(doc.data().yr_modell)){
      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var C1 = yr4m1+=1;
            localStorage.setItem("car1_yr4d",C1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var C2 = yr4m2+=1;
            localStorage.setItem("car2_yr4d",C2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var C3 = yr4m3+=1;
            localStorage.setItem("car3_yr4d",C3)
          }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = yr4m4+=1;
          localStorage.setItem("UV_1yr4d",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = yr4m5+=1;
          localStorage.setItem("UV_2yr4d",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = yr4m6+=1;
          localStorage.setItem("UV_3yr4d",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = yr4m7+=1;
            localStorage.setItem("SUV_1yr4d",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = yr4m8+=1;
            localStorage.setItem("SUV_2yr4d",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = yr4m9+=1;
            localStorage.setItem("SUV_3yr4d",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = yr4m10+=1;
            localStorage.setItem("BUS_1yr4d",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = yr4m11+=1;
            localStorage.setItem("BUS_2yr4d",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = yr4m12+=1;
            localStorage.setItem("BUS_3yr4d",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = yr4m13+=1;
            localStorage.setItem("TRCK_1yr4d",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = yr4m14+=1;
            localStorage.setItem("TRCK_2yr4d",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = yr4m15+=1;
            localStorage.setItem("TRCK_3yr4d",TRCK3)
          }
        }
    }
    // Year Model 5
    if (year_mdl5.includes(doc.data().yr_modell)){
      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var C1 = yr5m1+=1;
            localStorage.setItem("car1_yr5d",C1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var C2 = yr5m2+=1;
            localStorage.setItem("car2_yr5d",C2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var C3 = yr5m3+=1;
            localStorage.setItem("car3_yr5d",C3)
          }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = yr5m4+=1;
          localStorage.setItem("UV_1yr5d",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = yr5m5+=1;
          localStorage.setItem("UV_2yr5d",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = yr5m6+=1;
          localStorage.setItem("UV_3yr5d",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = yr5m7+=1;
            localStorage.setItem("SUV_1yr5d",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = yr5m8+=1;
            localStorage.setItem("SUV_2yr5d",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = yr5m9+=1;
            localStorage.setItem("SUV_3yr5d",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = yr5m10+=1;
            localStorage.setItem("BUS_1yr5d",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = yr5m11+=1;
            localStorage.setItem("BUS_2yr5d",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = yr5m12+=1;
            localStorage.setItem("BUS_3yr5d",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = yr5m13+=1;
            localStorage.setItem("TRCK_1yr5d",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = yr5m14+=1;
            localStorage.setItem("TRCK_2yr5d",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = yr5m15+=1;
            localStorage.setItem("TRCK_3yr5d",TRCK3)
          }
        }
    }
    // Year Model 6
    if (year_mdl6.includes(doc.data().yr_modell)){
      if (doc.data().typel == "CAR" || doc.data().typel == "CARS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var C1 = yr6m1+=1;
            localStorage.setItem("car1_yr6d",C1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var C2 = yr6m2+=1;
            localStorage.setItem("car2_yr6d",C2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var C3 = yr6m3+=1;
            localStorage.setItem("car3_yr6d",C3)
          }
      }
      // UV
      else if (doc.data().typel == "UV"){
        if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
          var UV1 = yr6m4+=1;
          localStorage.setItem("UV_1yr6d",UV1)
        } 
        else if (doc.data().refrigerant_type == "R12"){
          var UV2 = yr6m5+=1;
          localStorage.setItem("UV_2yr6d",UV2)
        } 
        else if (doc.data().refrigerant_type == "R134A"){ 
          var UV3 = yr6m6+=1;
          localStorage.setItem("UV_3yr6d",UV3)
        }
      }
        // SUV
        else if (doc.data().typel == "SUV"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var SUV1 = yr6m7+=1;
            localStorage.setItem("SUV_1yr6d",SUV1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var SUV2 = yr6m8+=1;
            localStorage.setItem("SUV_2yr6d",SUV2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var SUV3 = yr6m9+=1;
            localStorage.setItem("SUV_3yr6d",SUV3)
          }
        }
        // BUSES
        else if (doc.data().typel == "BUS" || doc.data().typel == "BUSES"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var BUS1 = yr6m10+=1;
            localStorage.setItem("BUS_1yr6d",BUS1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var BUS2 = yr6m11+=1;
            localStorage.setItem("BUS_2yr6d",BUS2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var BUS3 = yr6m12+=1;
            localStorage.setItem("BUS_3yr6d",BUS3)
          }
        }
          // TRUCKS
        else if (doc.data().typel == "TRUCK" || doc.data().typel == "TRUCKS"){
          if (doc.data().refrigerant_type == "NON-AC" || doc.data().refrigerant_type == "NONAC"){
            var TRCK1 = yr6m13+=1;
            localStorage.setItem("TRCK_1yr6d",TRCK1)
          } 
          else if (doc.data().refrigerant_type == "R12"){
            var TRCK2 = yr6m14+=1;
            localStorage.setItem("TRCK_2yr6d",TRCK2)
          } 
          else if (doc.data().refrigerant_type == "R134A"){
            var TRCK3 = yr6m15+=1;
            localStorage.setItem("TRCK_3yr6d",TRCK3)
          }
        }
    }
    
  }
  
});
// NAN to 0
// car
if (localStorage.getItem('car1_yr1d') == null || localStorage.getItem('car2_yr1d') == null || localStorage.getItem('car3_yr1d') == null) {
  localStorage.setItem('car1_yr1d', 0)
  localStorage.setItem('car2_yr1d', 0)
  localStorage.setItem('car3_yr1d',0)
}
if (localStorage.getItem('car1_yr2d') == null || localStorage.getItem('car2_yr2d') == null || localStorage.getItem('car3_yr2d') == null) {
  localStorage.setItem('car1_yr2d', 0)
  localStorage.setItem('car2_yr2d', 0)
  localStorage.setItem('car3_yr2d',0)
}
if (localStorage.getItem('car1_yr3d') == null || localStorage.getItem('car2_yr3d') == null || localStorage.getItem('car3_yr3d') == null) {
  localStorage.setItem('car1_yr3d', 0)
  localStorage.setItem('car2_yr3d', 0)
  localStorage.setItem('car3_yr3d',0)
}
if (localStorage.getItem('car1_yr4d') == null || localStorage.getItem('car2_yr4d') == null || localStorage.getItem('car3_yr4d') == null) {
  localStorage.setItem('car1_yr4d', 0)
  localStorage.setItem('car2_yr4d', 0)
  localStorage.setItem('car3_yr4d',0)
}
if (localStorage.getItem('car1_yr5d') == null || localStorage.getItem('car2_yr5d') == null || localStorage.getItem('car3_yr5d') == null) {
  localStorage.setItem('car1_yr5d', 0)
  localStorage.setItem('car2_yr5d', 0)
  localStorage.setItem('car3_yr5d',0)
}
if (localStorage.getItem('car1_yr6d') == null || localStorage.getItem('car2_yr6d') == null || localStorage.getItem('car3_yr6d') == null) {
  localStorage.setItem('car1_yr6d', 0)
  localStorage.setItem('car2_yr6d', 0)
  localStorage.setItem('car3_yr6d',0)
}
// UV
if (localStorage.getItem('UV_1yr1d') == null || localStorage.getItem('UV_2yr1d') == null || localStorage.getItem('UV_2yr1d') == null) {
  localStorage.setItem('UV_1yr1d', 0)
  localStorage.setItem('UV_2yr1d', 0)
  localStorage.setItem('UV_3yr1d',0)
}
if (localStorage.getItem('UV_1yr2d') == null || localStorage.getItem('UV_2yr2d') == null || localStorage.getItem('UV_2yr2d') == null) {
  localStorage.setItem('UV_1yr2d', 0)
  localStorage.setItem('UV_2yr2d', 0)
  localStorage.setItem('UV_3yr2d',0)
}
if (localStorage.getItem('UV_1yr3d') == null || localStorage.getItem('UV_2yr3d') == null || localStorage.getItem('UV_2yr3d') == null) {
  localStorage.setItem('UV_1yr3d', 0)
  localStorage.setItem('UV_2yr3d', 0)
  localStorage.setItem('UV_3yr3d',0)
}
if (localStorage.getItem('UV_1yr4d') == null || localStorage.getItem('UV_2yr4d') == null || localStorage.getItem('UV_2yr4d') == null) {
  localStorage.setItem('UV_1yr4d', 0)
  localStorage.setItem('UV_2yr4d', 0)
  localStorage.setItem('UV_3yr4d',0)
}
if (localStorage.getItem('UV_1yr5d') == null || localStorage.getItem('UV_2yr5d') == null || localStorage.getItem('UV_2yr5d') == null) {
  localStorage.setItem('UV_1yr5d', 0)
  localStorage.setItem('UV_2yr5d', 0)
  localStorage.setItem('UV_3yr5d',0)
}
if (localStorage.getItem('UV_1yr6d') == null || localStorage.getItem('UV_2yr6d') == null || localStorage.getItem('UV_2yr6d') == null) {
  localStorage.setItem('UV_1yr6d', 0)
  localStorage.setItem('UV_2yr6d', 0)
  localStorage.setItem('UV_3yr6d',0)
}
// SUV
if (localStorage.getItem('SUV_1yr1d') == null || localStorage.getItem('SUV_2yr1d') == null || localStorage.getItem('SUV_3yr1d') == null) {
  localStorage.setItem('SUV_1yr1d', 0)
  localStorage.setItem('SUV_2yr1d', 0)
  localStorage.setItem('SUV_3yr1d',0)
}
if (localStorage.getItem('SUV_1yr2d') == null || localStorage.getItem('SUV_2yr2d') == null || localStorage.getItem('SUV_3yr2d') == null) {
  localStorage.setItem('SUV_1yr2d', 0)
  localStorage.setItem('SUV_2yr2d', 0)
  localStorage.setItem('SUV_3yr2d',0)
}
if (localStorage.getItem('SUV_1yr3d') == null || localStorage.getItem('SUV_2yr3d') == null || localStorage.getItem('SUV_3yr3d') == null) {
  localStorage.setItem('SUV_1yr3d', 0)
  localStorage.setItem('SUV_2yr3d', 0)
  localStorage.setItem('SUV_3yr3d',0)
}
if (localStorage.getItem('SUV_1yr4d') == null || localStorage.getItem('SUV_2yr4d') == null || localStorage.getItem('SUV_3yr4d') == null) {
  localStorage.setItem('SUV_1yr4d', 0)
  localStorage.setItem('SUV_2yr4d', 0)
  localStorage.setItem('SUV_3yr4d',0)
}
if (localStorage.getItem('SUV_1yr5d') == null || localStorage.getItem('SUV_2yr5d') == null || localStorage.getItem('SUV_3yr5d') == null) {
  localStorage.setItem('SUV_1yr5d', 0)
  localStorage.setItem('SUV_2yr5d', 0)
  localStorage.setItem('SUV_3yr5d',0)
}
if (localStorage.getItem('SUV_1yr6d') == null || localStorage.getItem('SUV_2yr6d') == null || localStorage.getItem('SUV_3yr6d') == null) {
  localStorage.setItem('SUV_1yr6d', 0)
  localStorage.setItem('SUV_2yr6d', 0)
  localStorage.setItem('SUV_3yr6d',0)
}
// BUSES
if (localStorage.getItem('BUS_1yr1d') == null || localStorage.getItem('BUS_2yr1d') == null || localStorage.getItem('BUS_3yr1d') == null) {
  localStorage.setItem('BUS_1yr1d', 0)
  localStorage.setItem('BUS_2yr1d', 0)
  localStorage.setItem('BUS_3yr1d',0)
}
if (localStorage.getItem('BUS_1yr2d') == null || localStorage.getItem('BUS_2yr2d') == null || localStorage.getItem('BUS_3yr2d') == null) {
  localStorage.setItem('BUS_1yr2d', 0)
  localStorage.setItem('BUS_2yr2d', 0) 
  localStorage.setItem('BUS_3yr2d',0)
}
if (localStorage.getItem('BUS_1yr3d') == null || localStorage.getItem('BUS_2yr3d') == null || localStorage.getItem('BUS_3yr3d') == null) {
  localStorage.setItem('BUS_1yr3d', 0)
  localStorage.setItem('BUS_2yr3d', 0)
  localStorage.setItem('BUS_3yr3d',0)
}
if (localStorage.getItem('BUS_1yr4d') == null || localStorage.getItem('BUS_2yr4d') == null || localStorage.getItem('BUS_3yr4d') == null) {
  localStorage.setItem('BUS_1yr4d', 0)
  localStorage.setItem('BUS_2yr4d', 0)
  localStorage.setItem('BUS_3yr4d',0)
}
if (localStorage.getItem('BUS_1yr5d') == null || localStorage.getItem('BUS_2yr5d') == null || localStorage.getItem('BUS_3yr5d') == null) {
  localStorage.setItem('BUS_1yr5d', 0)
  localStorage.setItem('BUS_2yr5d', 0)
  localStorage.setItem('BUS_3yr5d',0)
}
if (localStorage.getItem('BUS_1yr6d') == null || localStorage.getItem('BUS_2yr6d') == null || localStorage.getItem('BUS_3yr6d') == null) {
  localStorage.setItem('BUS_1yr6d', 0)
  localStorage.setItem('BUS_2yr6d', 0)
  localStorage.setItem('BUS_3yr6d',0)
}
// Trucks
if (localStorage.getItem('TRCK_1yr1d') == null || localStorage.getItem('TRCK_2yr1d') == null || localStorage.getItem('TRCK_3yr1d') == null) {
  localStorage.setItem('TRCK_1yr1d', 0)
  localStorage.setItem('TRCK_2yr1d', 0)
  localStorage.setItem('TRCK_3yr1d',0)
}
if (localStorage.getItem('TRCK_1yr2d') == null || localStorage.getItem('TRCK_2yr2d') == null || localStorage.getItem('TRCK_3yr2d') == null) {
  localStorage.setItem('TRCK_1yr2d', 0)
  localStorage.setItem('TRCK_2yr2d', 0)
  localStorage.setItem('TRCK_3yr2d',0)
}
if (localStorage.getItem('TRCK_1yr3d') == null || localStorage.getItem('TRCK_2yr3d') == null || localStorage.getItem('TRCK_3yr3d') == null) {
  localStorage.setItem('TRCK_1yr3d', 0)
  localStorage.setItem('TRCK_2yr3d', 0)
  localStorage.setItem('TRCK_3yr3d',0)
}
if (localStorage.getItem('TRCK_1yr4d') == null || localStorage.getItem('TRCK_2yr4d') == null || localStorage.getItem('TRCK_3yr4d') == null) {
  localStorage.setItem('TRCK_1yr4d', 0)
  localStorage.setItem('TRCK_2yr4d', 0)
  localStorage.setItem('TRCK_3yr4d',0)
}
if (localStorage.getItem('TRCK_1yr5d') == null || localStorage.getItem('TRCK_2yr5d') == null || localStorage.getItem('TRCK_3yr5d') == null) {
  localStorage.setItem('TRCK_1yr5d', 0)
  localStorage.setItem('TRCK_2yr5d', 0)
  localStorage.setItem('TRCK_3yr5d',0)
}
if (localStorage.getItem('TRCK_1yr6d') == null || localStorage.getItem('TRCK_2yr6d') == null || localStorage.getItem('TRCK_3yr6d') == null) {
  localStorage.setItem('TRCK_1yr6d', 0)
  localStorage.setItem('TRCK_2yr6d', 0)
  localStorage.setItem('TRCK_3yr6d',0)
}

// Display Value
// document.getElementsById("").innerHTML = localStorage.getItem("");
// CAR
let yr1_car1 = parseInt(localStorage.getItem("car1_yr1d"));
let yr1_car2 = parseInt(localStorage.getItem("car2_yr1d"));
let yr1_car3 = parseInt(localStorage.getItem("car3_yr1d"));
let yr2_car1 = parseInt(localStorage.getItem("car1_yr2d"));
let yr2_car2 = parseInt(localStorage.getItem("car2_yr2d"));
let yr2_car3 = parseInt(localStorage.getItem("car3_yr2d"));
let yr3_car1 = parseInt(localStorage.getItem("car1_yr3d"));
let yr3_car2 = parseInt(localStorage.getItem("car2_yr3d"));
let yr3_car3 = parseInt(localStorage.getItem("car3_yr3d"));
let yr4_car1 = parseInt(localStorage.getItem("car1_yr4d"));
let yr4_car2 = parseInt(localStorage.getItem("car2_yr4d"));
let yr4_car3 = parseInt(localStorage.getItem("car3_yr4d"));
let yr5_car1 = parseInt(localStorage.getItem("car1_yr5d"));
let yr5_car2 = parseInt(localStorage.getItem("car2_yr5d"));
let yr5_car3 = parseInt(localStorage.getItem("car3_yr5d"));
let yr6_car1 = parseInt(localStorage.getItem("car1_yr6d"));
let yr6_car2 = parseInt(localStorage.getItem("car2_yr6d"));
let yr6_car3 = parseInt(localStorage.getItem("car3_yr6d"));

document.getElementById("yrmd1_1").innerHTML = yr1_car1;
document.getElementById("yrmd1_2").innerHTML = yr1_car2;
document.getElementById("yrmd1_3").innerHTML = yr1_car3;
document.getElementById("yrmd2_1").innerHTML = yr2_car1;
document.getElementById("yrmd2_2").innerHTML = yr2_car2;
document.getElementById("yrmd2_3").innerHTML = yr2_car3;
document.getElementById("yrmd3_1").innerHTML = yr3_car1;
document.getElementById("yrmd3_2").innerHTML = yr3_car2;
document.getElementById("yrmd3_3").innerHTML = yr3_car3;
document.getElementById("yrmd4_1").innerHTML = yr4_car1;
document.getElementById("yrmd4_2").innerHTML = yr4_car2;
document.getElementById("yrmd4_3").innerHTML = yr4_car3;
document.getElementById("yrmd5_1").innerHTML = yr5_car1;
document.getElementById("yrmd5_2").innerHTML = yr5_car2;
document.getElementById("yrmd5_3").innerHTML = yr5_car3;
document.getElementById("yrmd6_1").innerHTML = yr6_car1;
document.getElementById("yrmd6_2").innerHTML = yr6_car2;
document.getElementById("yrmd6_3").innerHTML = yr6_car3;
// UV
let yr1_UV1 = parseInt(localStorage.getItem("UV_1yr1d"));
let yr1_UV2 = parseInt(localStorage.getItem("UV_2yr1d"));
let yr1_UV3 = parseInt(localStorage.getItem("UV_3yr1d"));
let yr2_UV1 = parseInt(localStorage.getItem("UV_1yr2d"));
let yr2_UV2 = parseInt(localStorage.getItem("UV_2yr2d"));
let yr2_UV3 = parseInt(localStorage.getItem("UV_3yr2d"));
let yr3_UV1 = parseInt(localStorage.getItem("UV_1yr3d"));
let yr3_UV2 = parseInt(localStorage.getItem("UV_2yr3d"));
let yr3_UV3 = parseInt(localStorage.getItem("UV_3yr3d"));
let yr4_UV1 = parseInt(localStorage.getItem("UV_1yr4d"));
let yr4_UV2 = parseInt(localStorage.getItem("UV_2yr4d"));
let yr4_UV3 = parseInt(localStorage.getItem("UV_3yr4d"));
let yr5_UV1 = parseInt(localStorage.getItem("UV_1yr5d"));
let yr5_UV2 = parseInt(localStorage.getItem("UV_2yr5d"));
let yr5_UV3 = parseInt(localStorage.getItem("UV_3yr5d"));
let yr6_UV1 = parseInt(localStorage.getItem("UV_1yr6d"));
let yr6_UV2 = parseInt(localStorage.getItem("UV_2yr6d"));
let yr6_UV3 = parseInt(localStorage.getItem("UV_3yr6d"));

document.getElementById("yrmd1_5").innerHTML = yr1_UV1;
document.getElementById("yrmd1_6").innerHTML = yr1_UV2;
document.getElementById("yrmd1_7").innerHTML = yr1_UV3;
document.getElementById("yrmd2_5").innerHTML = yr2_UV1;
document.getElementById("yrmd2_6").innerHTML = yr2_UV2;
document.getElementById("yrmd2_7").innerHTML = yr2_UV3;
document.getElementById("yrmd3_5").innerHTML = yr3_UV1;
document.getElementById("yrmd3_6").innerHTML = yr3_UV2;
document.getElementById("yrmd3_7").innerHTML = yr3_UV3;
document.getElementById("yrmd4_5").innerHTML = yr4_UV1;
document.getElementById("yrmd4_6").innerHTML = yr4_UV2;
document.getElementById("yrmd4_7").innerHTML = yr4_UV3;
document.getElementById("yrmd5_5").innerHTML = yr5_UV1;
document.getElementById("yrmd5_6").innerHTML = yr5_UV2;
document.getElementById("yrmd5_7").innerHTML = yr5_UV3;
document.getElementById("yrmd6_5").innerHTML = yr6_UV1;
document.getElementById("yrmd6_6").innerHTML = yr6_UV2;
document.getElementById("yrmd6_7").innerHTML = yr6_UV3;
// SUV
let yr1_SUV1 = parseInt(localStorage.getItem("SUV_1yr1d"));
let yr1_SUV2 = parseInt(localStorage.getItem("SUV_2yr1d"));
let yr1_SUV3 = parseInt(localStorage.getItem("SUV_3yr1d"));
let yr2_SUV1 = parseInt(localStorage.getItem("SUV_1yr2d"));
let yr2_SUV2 = parseInt(localStorage.getItem("SUV_2yr2d"));
let yr2_SUV3 = parseInt(localStorage.getItem("SUV_3yr2d"));
let yr3_SUV1 = parseInt(localStorage.getItem("SUV_1yr3d"));
let yr3_SUV2 = parseInt(localStorage.getItem("SUV_2yr3d"));
let yr3_SUV3 = parseInt(localStorage.getItem("SUV_3yr3d"));
let yr4_SUV1 = parseInt(localStorage.getItem("SUV_1yr4d"));
let yr4_SUV2 = parseInt(localStorage.getItem("SUV_2yr4d"));
let yr4_SUV3 = parseInt(localStorage.getItem("SUV_3yr4d"));
let yr5_SUV1 = parseInt(localStorage.getItem("SUV_1yr5d"));
let yr5_SUV2 = parseInt(localStorage.getItem("SUV_2yr5d"));
let yr5_SUV3 = parseInt(localStorage.getItem("SUV_3yr5d"));
let yr6_SUV1 = parseInt(localStorage.getItem("SUV_1yr6d"));
let yr6_SUV2 = parseInt(localStorage.getItem("SUV_2yr6d"));
let yr6_SUV3 = parseInt(localStorage.getItem("SUV_3yr6d"));

document.getElementById("yrmd1_9").innerHTML = yr1_SUV1;
document.getElementById("yrmd1_10").innerHTML = yr1_SUV2;
document.getElementById("yrmd1_11").innerHTML = yr1_SUV3;
document.getElementById("yrmd2_9").innerHTML = yr2_SUV1;
document.getElementById("yrmd2_10").innerHTML = yr2_SUV2;
document.getElementById("yrmd2_11").innerHTML = yr2_SUV3;
document.getElementById("yrmd3_9").innerHTML = yr3_SUV1;
document.getElementById("yrmd3_10").innerHTML = yr3_SUV2;
document.getElementById("yrmd3_11").innerHTML = yr3_SUV3;
document.getElementById("yrmd4_9").innerHTML = yr4_SUV1;
document.getElementById("yrmd4_10").innerHTML = yr4_SUV2;
document.getElementById("yrmd4_11").innerHTML = yr4_SUV3;
document.getElementById("yrmd5_9").innerHTML = yr5_SUV1;
document.getElementById("yrmd5_10").innerHTML = yr5_SUV2;
document.getElementById("yrmd5_11").innerHTML = yr5_SUV3;
document.getElementById("yrmd6_9").innerHTML = yr6_SUV1;
document.getElementById("yrmd6_10").innerHTML = yr6_SUV2;
document.getElementById("yrmd6_11").innerHTML = yr6_SUV3;
// BUSES
let yr1_BUS1 = parseInt(localStorage.getItem("BUS_1yr1d"));
let yr1_BUS2 = parseInt(localStorage.getItem("BUS_2yr1d"));
let yr1_BUS3 = parseInt(localStorage.getItem("BUS_3yr1d"));
let yr2_BUS1 = parseInt(localStorage.getItem("BUS_1yr2d"));
let yr2_BUS2 = parseInt(localStorage.getItem("BUS_2yr2d"));
let yr2_BUS3 = parseInt(localStorage.getItem("BUS_3yr2d"));
let yr3_BUS1 = parseInt(localStorage.getItem("BUS_1yr3d"));
let yr3_BUS2 = parseInt(localStorage.getItem("BUS_2yr3d"));
let yr3_BUS3 = parseInt(localStorage.getItem("BUS_3yr3d"));
let yr4_BUS1 = parseInt(localStorage.getItem("BUS_1yr4d"));
let yr4_BUS2 = parseInt(localStorage.getItem("BUS_2yr4d"));
let yr4_BUS3 = parseInt(localStorage.getItem("BUS_3yr4d"));
let yr5_BUS1 = parseInt(localStorage.getItem("BUS_1yr5d"));
let yr5_BUS2 = parseInt(localStorage.getItem("BUS_2yr5d"));
let yr5_BUS3 = parseInt(localStorage.getItem("BUS_3yr5d"));
let yr6_BUS1 = parseInt(localStorage.getItem("BUS_1yr6d"));
let yr6_BUS2 = parseInt(localStorage.getItem("BUS_2yr6d"));
let yr6_BUS3 = parseInt(localStorage.getItem("BUS_3yr6d"));

document.getElementById("yrmd1_13").innerHTML = yr1_BUS1;
document.getElementById("yrmd1_14").innerHTML = yr1_BUS2;
document.getElementById("yrmd1_15").innerHTML = yr1_BUS3;
document.getElementById("yrmd2_13").innerHTML = yr2_BUS1;
document.getElementById("yrmd2_14").innerHTML = yr2_BUS2;
document.getElementById("yrmd2_15").innerHTML = yr2_BUS3;
document.getElementById("yrmd3_13").innerHTML = yr3_BUS1;
document.getElementById("yrmd3_14").innerHTML = yr3_BUS2;
document.getElementById("yrmd3_15").innerHTML = yr3_BUS3;
document.getElementById("yrmd4_13").innerHTML = yr4_BUS1;
document.getElementById("yrmd4_14").innerHTML = yr4_BUS2;
document.getElementById("yrmd4_15").innerHTML = yr4_BUS3;
document.getElementById("yrmd5_13").innerHTML = yr5_BUS1;
document.getElementById("yrmd5_14").innerHTML = yr5_BUS2;
document.getElementById("yrmd5_15").innerHTML = yr5_BUS3;
document.getElementById("yrmd6_13").innerHTML = yr6_BUS1;
document.getElementById("yrmd6_14").innerHTML = yr6_BUS2;
document.getElementById("yrmd6_15").innerHTML = yr6_BUS3;
// TRUCKS
let yr1_TRCK1 = parseInt(localStorage.getItem("TRCK_1yr1d"));
let yr1_TRCK2 = parseInt(localStorage.getItem("TRCK_2yr1d"));
let yr1_TRCK3 = parseInt(localStorage.getItem("TRCK_3yr1d"));
let yr2_TRCK1 = parseInt(localStorage.getItem("TRCK_1yr2d"));
let yr2_TRCK2 = parseInt(localStorage.getItem("TRCK_2yr2d"));
let yr2_TRCK3 = parseInt(localStorage.getItem("TRCK_3yr2d"));
let yr3_TRCK1 = parseInt(localStorage.getItem("TRCK_1yr3d"));
let yr3_TRCK2 = parseInt(localStorage.getItem("TRCK_2yr3d"));
let yr3_TRCK3 = parseInt(localStorage.getItem("TRCK_3yr3d"));
let yr4_TRCK1 = parseInt(localStorage.getItem("TRCK_1yr4d"));
let yr4_TRCK2 = parseInt(localStorage.getItem("TRCK_2yr4d"));
let yr4_TRCK3 = parseInt(localStorage.getItem("TRCK_3yr4d"));
let yr5_TRCK1 = parseInt(localStorage.getItem("TRCK_1yr5d"));
let yr5_TRCK2 = parseInt(localStorage.getItem("TRCK_2yr5d"));
let yr5_TRCK3 = parseInt(localStorage.getItem("TRCK_3yr5d"));
let yr6_TRCK1 = parseInt(localStorage.getItem("TRCK_1yr6d"));
let yr6_TRCK2 = parseInt(localStorage.getItem("TRCK_2yr6d"));
let yr6_TRCK3 = parseInt(localStorage.getItem("TRCK_3yr6d"));

document.getElementById("yrmd1_17").innerHTML = yr1_TRCK1;
document.getElementById("yrmd1_18").innerHTML = yr1_TRCK2;
document.getElementById("yrmd1_19").innerHTML = yr1_TRCK3;
document.getElementById("yrmd2_17").innerHTML = yr2_TRCK1;
document.getElementById("yrmd2_18").innerHTML = yr2_TRCK2;
document.getElementById("yrmd2_19").innerHTML = yr2_TRCK3;
document.getElementById("yrmd3_17").innerHTML = yr3_TRCK1;
document.getElementById("yrmd3_18").innerHTML = yr3_TRCK2;
document.getElementById("yrmd3_19").innerHTML = yr3_TRCK3;
document.getElementById("yrmd4_17").innerHTML = yr4_TRCK1;
document.getElementById("yrmd4_18").innerHTML = yr4_TRCK2;
document.getElementById("yrmd4_19").innerHTML = yr4_TRCK3;
document.getElementById("yrmd5_17").innerHTML = yr5_TRCK1;
document.getElementById("yrmd5_18").innerHTML = yr5_TRCK2;
document.getElementById("yrmd5_19").innerHTML = yr5_TRCK3;
document.getElementById("yrmd6_17").innerHTML = yr6_TRCK1;
document.getElementById("yrmd6_18").innerHTML = yr6_TRCK2;
document.getElementById("yrmd6_19").innerHTML = yr6_TRCK3;

// total 
// CAR
document.getElementById('yrmd1_4').innerHTML = yr1_car1 + yr1_car2 + yr1_car3;
document.getElementById('yrmd2_4').innerHTML = yr2_car1 + yr2_car2 + yr2_car3;
document.getElementById('yrmd3_4').innerHTML = yr3_car1 + yr3_car2 + yr3_car3;
document.getElementById('yrmd4_4').innerHTML = yr4_car1 + yr4_car2 + yr4_car3;
document.getElementById('yrmd5_4').innerHTML = yr5_car1 + yr5_car2 + yr5_car3;
document.getElementById('yrmd6_4').innerHTML = yr6_car1 + yr6_car2 + yr6_car3;
// UV
document.getElementById('yrmd1_8').innerHTML = yr1_UV1 + yr1_UV2 + yr1_UV3;
document.getElementById('yrmd2_8').innerHTML = yr2_UV1 + yr2_UV2 + yr2_UV3;
document.getElementById('yrmd3_8').innerHTML = yr3_UV1 + yr3_UV2 + yr3_UV3;
document.getElementById('yrmd4_8').innerHTML = yr4_UV1 + yr4_UV2 + yr4_UV3;
document.getElementById('yrmd5_8').innerHTML = yr5_UV1 + yr5_UV2 + yr5_UV3;
document.getElementById('yrmd6_8').innerHTML = yr6_UV1 + yr6_UV2 + yr6_UV3;
// SUV
document.getElementById('yrmd1_12').innerHTML = yr1_SUV1 + yr1_SUV2 + yr1_SUV3;
document.getElementById('yrmd2_12').innerHTML = yr2_SUV1 + yr2_SUV2 + yr2_SUV3;
document.getElementById('yrmd3_12').innerHTML = yr3_SUV1 + yr3_SUV2 + yr3_SUV3;
document.getElementById('yrmd4_12').innerHTML = yr4_SUV1 + yr4_SUV2 + yr4_SUV3;
document.getElementById('yrmd5_12').innerHTML = yr5_SUV1 + yr5_SUV2 + yr5_SUV3;
document.getElementById('yrmd6_12').innerHTML = yr6_SUV1 + yr6_SUV2 + yr6_SUV3;
// BUSES
document.getElementById('yrmd1_16').innerHTML = yr1_BUS1 + yr1_BUS2 + yr1_BUS3;
document.getElementById('yrmd2_16').innerHTML = yr2_BUS1 + yr2_BUS2 + yr2_BUS3;
document.getElementById('yrmd3_16').innerHTML = yr3_BUS1 + yr3_BUS2 + yr3_BUS3;
document.getElementById('yrmd4_16').innerHTML = yr4_BUS1 + yr4_BUS2 + yr4_BUS3;
document.getElementById('yrmd5_16').innerHTML = yr5_BUS1 + yr5_BUS2 + yr5_BUS3;
document.getElementById('yrmd6_16').innerHTML = yr6_BUS1 + yr6_BUS2 + yr6_BUS3;
// TRUCKS
document.getElementById('yrmd1_20').innerHTML = yr1_TRCK1 + yr1_TRCK2 + yr1_TRCK3;
document.getElementById('yrmd2_20').innerHTML = yr2_TRCK1 + yr2_TRCK2 + yr2_TRCK3;
document.getElementById('yrmd3_20').innerHTML = yr3_TRCK1 + yr3_TRCK2 + yr3_TRCK3;
document.getElementById('yrmd4_20').innerHTML = yr4_TRCK1 + yr4_TRCK2 + yr4_TRCK3;
document.getElementById('yrmd5_20').innerHTML = yr5_TRCK1 + yr5_TRCK2 + yr5_TRCK3;
document.getElementById('yrmd6_20').innerHTML = yr6_TRCK1 + yr6_TRCK2 + yr6_TRCK3;
// TOTAL ALL
// non-AC
document.getElementById('yrmd1_21').innerHTML = yr1_car1 + yr1_UV1 + yr1_SUV1 + yr1_BUS1 + yr1_TRCK1;
document.getElementById('yrmd2_21').innerHTML = yr2_car1 + yr2_UV1 + yr2_SUV1 + yr2_BUS1 + yr2_TRCK1;
document.getElementById('yrmd3_21').innerHTML = yr3_car1 + yr3_UV1 + yr3_SUV1 + yr3_BUS1 + yr3_TRCK1;
document.getElementById('yrmd4_21').innerHTML = yr4_car1 + yr4_UV1 + yr4_SUV1 + yr4_BUS1 + yr4_TRCK1;
document.getElementById('yrmd5_21').innerHTML = yr5_car1 + yr5_UV1 + yr5_SUV1 + yr5_BUS1 + yr5_TRCK1;
document.getElementById('yrmd6_21').innerHTML = yr6_car1 + yr6_UV1 + yr6_SUV1 + yr6_BUS1 + yr6_TRCK1;
// r12
document.getElementById('yrmd1_22').innerHTML = yr1_car2 + yr1_UV2 + yr1_SUV2 + yr1_BUS2 + yr1_TRCK2;
document.getElementById('yrmd2_22').innerHTML = yr2_car2 + yr2_UV2 + yr2_SUV2 + yr2_BUS2 + yr2_TRCK2;
document.getElementById('yrmd3_22').innerHTML = yr3_car2 + yr3_UV2 + yr3_SUV2 + yr3_BUS2 + yr3_TRCK2;
document.getElementById('yrmd4_22').innerHTML = yr4_car2 + yr4_UV2 + yr4_SUV2 + yr4_BUS2 + yr4_TRCK2;
document.getElementById('yrmd5_22').innerHTML = yr5_car2 + yr5_UV2 + yr5_SUV2 + yr5_BUS2 + yr5_TRCK2;
document.getElementById('yrmd6_22').innerHTML = yr6_car2 + yr6_UV2 + yr6_SUV2 + yr6_BUS2 + yr6_TRCK2;
// r134a
document.getElementById('yrmd1_23').innerHTML = yr1_car3 + yr1_UV3 + yr1_SUV3 + yr1_BUS3 + yr1_TRCK3;
document.getElementById('yrmd2_23').innerHTML = yr2_car3 + yr2_UV3 + yr2_SUV3 + yr2_BUS3 + yr2_TRCK3;
document.getElementById('yrmd3_23').innerHTML = yr3_car3 + yr3_UV3 + yr3_SUV3 + yr3_BUS3 + yr3_TRCK3;
document.getElementById('yrmd4_23').innerHTML = yr4_car3 + yr4_UV3 + yr4_SUV3 + yr4_BUS3 + yr4_TRCK3;
document.getElementById('yrmd5_23').innerHTML = yr5_car3 + yr5_UV3 + yr5_SUV3 + yr5_BUS3 + yr5_TRCK3;
document.getElementById('yrmd6_23').innerHTML = yr6_car3 + yr6_UV3 + yr6_SUV3 + yr6_BUS3 + yr6_TRCK3;
// Grand TOTAL
// CAR
let carttlyr1 = yr1_car1 + yr1_car2 + yr1_car3;
let carttlyr2 = yr2_car1 + yr2_car2 + yr2_car3;
let carttlyr3 = yr3_car1 + yr3_car2 + yr3_car3;
let carttlyr4 = yr4_car1 + yr4_car2 + yr4_car3;
let carttlyr5 = yr5_car1 + yr5_car2 + yr5_car3;
let carttlyr6 = yr6_car1 + yr6_car2 + yr6_car3;
// UV
let uvttlyr1 = yr1_UV1 + yr1_UV2 + yr1_UV3;
let uvttlyr2 = yr2_UV1 + yr2_UV2 + yr2_UV3;
let uvttlyr3 = yr3_UV1 + yr3_UV2 + yr3_UV3;
let uvttlyr4 = yr4_UV1 + yr4_UV2 + yr4_UV3;
let uvttlyr5 = yr5_UV1 + yr5_UV2 + yr5_UV3;
let uvttlyr6 = yr6_UV1 + yr6_UV2 + yr6_UV3;
// SUV
let suvttlyr1 = yr1_SUV1 + yr1_SUV2 + yr1_SUV3;
let suvttlyr2 = yr2_SUV1 + yr2_SUV2 + yr2_SUV3;
let suvttlyr3 = yr3_SUV1 + yr3_SUV2 + yr3_SUV3;
let suvttlyr4 = yr4_SUV1 + yr4_SUV2 + yr4_SUV3;
let suvttlyr5 = yr5_SUV1 + yr5_SUV2 + yr5_SUV3;
let suvttlyr6 = yr6_SUV1 + yr6_SUV2 + yr6_SUV3;
// BUSES
let busttlyr1 = yr1_BUS1 + yr1_BUS2 + yr1_BUS3;
let busttlyr2 = yr2_BUS1 + yr2_BUS2 + yr2_BUS3;
let busttlyr3 = yr3_BUS1 + yr3_BUS2 + yr3_BUS3;
let busttlyr4 = yr4_BUS1 + yr4_BUS2 + yr4_BUS3;
let busttlyr5 = yr5_BUS1 + yr5_BUS2 + yr5_BUS3;
let busttlyr6 = yr6_BUS1 + yr6_BUS2 + yr6_BUS3;
// TRUCKS 
let trckttlyr1 = yr1_TRCK1 + yr1_TRCK2 + yr1_TRCK3;
let trckttlyr2 = yr2_TRCK1 + yr2_TRCK2 + yr2_TRCK3;
let trckttlyr3 = yr3_TRCK1 + yr3_TRCK2 + yr3_TRCK3;
let trckttlyr4 = yr4_TRCK1 + yr4_TRCK2 + yr4_TRCK3;
let trckttlyr5 = yr5_TRCK1 + yr5_TRCK2 + yr5_TRCK3;
let trckttlyr6 = yr6_TRCK1 + yr6_TRCK2 + yr6_TRCK3;

document.getElementById('yrmd1_24').innerHTML = carttlyr1 + uvttlyr1 + suvttlyr1 + busttlyr1 + trckttlyr1;
document.getElementById('yrmd2_24').innerHTML = carttlyr2 + uvttlyr2 + suvttlyr2 + busttlyr2 + trckttlyr2;
document.getElementById('yrmd3_24').innerHTML = carttlyr3 + uvttlyr3 + suvttlyr3 + busttlyr3 + trckttlyr3;
document.getElementById('yrmd4_24').innerHTML = carttlyr4 + uvttlyr4 + suvttlyr4 + busttlyr4 + trckttlyr4;
document.getElementById('yrmd5_24').innerHTML = carttlyr5 + uvttlyr5 + suvttlyr5 + busttlyr5 + trckttlyr5;
document.getElementById('yrmd6_24').innerHTML = carttlyr6 + uvttlyr6 + suvttlyr6 + busttlyr6 + trckttlyr6;
