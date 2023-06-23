bcklic.addEventListener('click' , () => {
    window.location = "a_licdashboard.html"
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

// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day ;
// TIME TODAY 
let hrs = date.getHours();
let mnts = date.getMinutes();
let time = hrs + ":" + mnts;
var today2 = month + "/" + day + "/" + year ;
document.getElementById('datee').innerHTML = "June " + day + " " + year
document.getElementById('dtt').innerHTML = today2 + " " + time

// DLPI Count
const license = await getDocs(collection(db,"License"));
// sp
let sp1n = 0;
let sp2n = 0;
let sp1rn = 0;
let sp2rn = 0;

let cl1n = 0;
let cl2n = 0;
let cl1rn = 0;
let cl2rn = 0;

let spnw_fem = 0;
let spnw_mal = 0;

let flnw_fem = 0;
let flnw_mal = 0;

let rn_fem = 0;
let rn_mal = 0;
license.forEach((doc) => {
  var dd = doc.data().dt_App;
  var ddsp = dd.slice(0,2);
  var mmsp = dd.slice(5,7);
  var yysp = dd.slice(10,14);
  var dtcon = yysp + "-" + mmsp + "-" + ddsp; 
 
// Current Count
if(dtcon == today){
  if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){    

    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        sp1n = sp1n+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        sp2n = sp2n+=1;        
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        sp1rn = sp1rn+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        sp2rn = sp2rn+=1;        
      }
    }
  }

  // Conductors License
  if(doc.data().laa == "CONDUCTOR'S LICENSE"){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        cl1n = cl1n+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        cl2n = cl2n+=1;        
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        cl1rn = cl1rn+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        cl2rn = cl2rn+=1;        
      }
    }
  }

  if(doc.data().laa == "DRIVER'S LICENSE"){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        spnw_mal = spnw_mal+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        spnw_fem = spnw_fem+=1;        
      }
    } 

    else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
      if(doc.data().User_GN == "MALE"){
        flnw_mal = flnw_mal+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        flnw_fem = flnw_fem+=1;        
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        rn_mal = rn_mal+=1;        
      }
      else if(doc.data().User_GN == "FEMALE"){
        rn_fem = rn_fem+=1;        
      }
    }
  }

  

}

});
 
// AE Count Written
const AE_licW = await getDocs(collection(db,"Written"))
// cl
let cl_pw = 0;
let cl_fw = 0;
// NEW
let new_pw = 0;
let new_fw = 0; 
// Renewal
let rn_pw = 0;
let rn_fw = 0;
// ADC
let adl_pw = 0;
let adl_fw = 0;
// FL
let fl_pw = 0;
let fl_fw = 0;
// Other
let other1_pw = 0;
let other1_fw = 0;
let other2_pw = 0;
let other2_fw = 0;
AE_licW.forEach((doc) => {
  var dd = doc.data().dt_App;
  var ddsp = dd.slice(0,2);
  var mmsp = dd.slice(5,7);
  var yysp = dd.slice(10,14);
  var dtcon = yysp + "-" + mmsp + "-" + ddsp; 
  console.log(dd)
  if(dtcon == today){
  // CL
    if(doc.data().laa == "CONDUCTOR'S LICENSE"){
      if(doc.data().result == "PASSED"){
        cl_pw = cl_pw+=1;      
      }
      else if(doc.data().result == "FAILED"){
        cl_fw = cl_fw+=1;      
      }
    }
   
    if(doc.data().Laa == "DRIVER'S LICENSE"){
       // DL New
      if(doc.data().at == "NEW"){
        if(doc.data().result == "PASSED"){
          new_pw = new_pw+=1;
        }
        else if(doc.data().result == "FAILED"){
          new_fw = new_fw+=1;
        }
      }
      // DL ADC
      if(doc.data().at == "ADDITIONAL CODE OR CATEGORY"){
        if(doc.data().result == "PASSED"){
          adl_pw = adl_pw+=1;
        }
        else if(doc.data().result == "FAILED"){
          adl_fw = adl_fw+=1;
        }
      }

      else if (doc.data().at == "CHANGE OF DL CLASSIFICATION" || doc.data().at == "EXPIRED DL WITH VALID FDL" || doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        if(doc.data().result == "PASSED"){
          other1_pw = other1_pw+=1;
        }
        else if(doc.data().result == "FAILED"){
          other1_fw = other1_fw+=1;
        }
      }

      else if(doc.data().at == "ENHANCEMENT OF DL" || doc.data().at == "CHANGE OF CLUTCH TYPE"){
        if(doc.data().result == "PASSED"){
          other2_pw = other2_pw+=1;
        }
        else if(doc.data().result == "FAILED"){
          other2_fw = other2_fw+=1;
        }
      }

      // FL
      else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
        if(doc.data().result == "PASSED"){
          fl_pw = fl_pw+=1;
        }
        else if(doc.data().result == "FAILED"){
          fl_fw = fl_fw+=1;
        }
      }

      else if(doc.data().at == "RENEWAL"){
        if(doc.data().result == "PASSED"){
          rn_pw = rn_pw+=1;
        }
        else if(doc.data().result == "FAILED"){
          rn_fw = rn_fw+=1;
        }
      }
      
    }
  }
  });

const AE_licP = await getDocs(collection(db,"Practical"));
// NEW
let new_pp = 0;
let new_fp = 0;
// ADC
let adl_pp = 0;
let adl_fp = 0;
// Renewal
let rn_pp = 0;
let rn_fp = 0;
// FL
let fl_pp = 0;
let fl_fp = 0;
// Other
let other1_pp = 0;
let other1_fp = 0;
let other2_pp = 0;
let other2_fp = 0;
AE_licP.forEach((doc) => {
  var dd = doc.data().dt_App;
  var ddsp = dd.slice(0,2);
  var mmsp = dd.slice(5,7);
  var yysp = dd.slice(10,14);
  var dtcon = yysp + "-" + mmsp + "-" + ddsp; 
  
  if(dtcon == today){
    if(doc.data().Laa == "DRIVER'S LICENSE"){
    // DL New
    if(doc.data().at == "NEW"){
      if(doc.data().result == "PASSED"){
        new_pp = new_pp+=1;
      }
      else if(doc.data().result == "FAILED"){
        new_fp = new_fp+=1;
      }
    }
      // DL ADC
      if(doc.data().at == "ADDITIONAL CODE OR CATEGORY"){
        if(doc.data().result == "PASSED"){
          adl_pp = adl_pp+=1;
        }
        else if(doc.data().result == "FAILED"){
          adl_fp = adl_fp+=1;
        }
      }
// other
      else if (doc.data().at == "CHANGE OF DL CLASSIFICATION" || doc.data().at == "EXPIRED DL WITH VALID FDL" || doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        if(doc.data().result == "PASSED"){
          other1_pp = other1_pp+=1;
        }
        else if(doc.data().result == "FAILED"){
          other1_fp= other1_fp+=1;
        }
      }

      else if(doc.data().at == "ENHANCEMENT OF DL" || doc.data().at == "CHANGE OF CLUTCH TYPE"){
        if(doc.data().result == "PASSED"){
          other2_pp = other2_pp+=1;
        }
        else if(doc.data().result == "FAILED"){
          other2_fp = other2_fp+=1;
        }
      }

            // FL
      else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
        if(doc.data().result == "PASSED"){
          fl_pp = fl_pp+=1;
        }
        else if(doc.data().result == "FAILED"){
          fl_fp = fl_fp+=1;
        }
      }

      else if(doc.data().at == "RENEWAL"){
        if(doc.data().result == "PASSED"){
          rn_pp = rn_pp+=1;
        }
        else if(doc.data().result == "FAILED"){
          rn_fp = rn_fp+=1;
        }
      }
      
    }

  }
  });
  // MISC TXN
  const misc_ttal = await getDocs(collection(db,"License"));
   let miscttld1 = 0;
   let miscttld2 = 0;
   let miscttld3 = 0;
   let miscttld4 = 0;
  misc_ttal.forEach((doc) => {
    var dd = doc.data().dt_App;
    var ddsp = dd.slice(0,2);
    var mmsp = dd.slice(5,7);
    var yysp = dd.slice(10,14);
    var dtcon = yysp + "-" + mmsp + "-" + ddsp; 

    if(dtcon == today){
      if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){  
        if (doc.data().at == "DUPLICATE" || doc.data().at == "REVISION OF RECORDS"){
          miscttld1 = miscttld1+=1;
        }
      } 
      if(doc.data().laa == "CONDUCTOR'S LICENSE"){  
        if (doc.data().at == "DUPLICATE" || doc.data().at == "REVISION OF RECORDS"){
          miscttld2 = miscttld2+=1;
        }
      }
      if (doc.data().at == "DUPLICATE"){
        miscttld3 = miscttld3+=1;
      }
      if (doc.data().at == "REVISION OF RECORDS"){
        miscttld4 = miscttld4+=1;
      }
  }
  });

// Count Total1
// Student Permit
document.getElementById("sp_dnm").innerHTML = sp1n;
document.getElementById("sp_dnf").innerHTML = sp2n;
document.getElementById("sp_drm").innerHTML = sp1rn;
document.getElementById("sp_drf").innerHTML = sp2rn;
document.getElementById("sp_dnt").innerHTML = sp1n + sp2n;
document.getElementById("sp_drt").innerHTML = sp1rn + sp2rn;
document.getElementById("sp_dtm").innerHTML = sp1n + sp1rn;
document.getElementById("sp_dtf").innerHTML = sp2n + sp2rn;
document.getElementById("sp_dtt").innerHTML = sp1n + sp1rn + sp2n + sp2rn;

// Conductor license
document.getElementById("cl_awp").innerHTML = cl_pw;
document.getElementById("cl_awf").innerHTML = cl_fw;
document.getElementById("cl_awt").innerHTML = cl_pw + cl_fw;
document.getElementById("cl_dnm").innerHTML = cl1n;
document.getElementById("cl_dnf").innerHTML = cl2n; 
document.getElementById("cl_dnt").innerHTML = cl1n + cl2n;
document.getElementById("cl_drm").innerHTML = cl1rn;
document.getElementById("cl_drf").innerHTML = cl2rn;
document.getElementById("cl_drt").innerHTML = cl1rn + cl2rn;
document.getElementById("cl_dtm").innerHTML = cl1n + cl1rn;
document.getElementById("cl_dtf").innerHTML = cl2n + cl2rn;
document.getElementById("cl_dtt").innerHTML = cl1n + cl2n + cl1rn + cl2rn; 

// Driver's License
// SP to New
document.getElementById("spdl_awp").innerHTML = new_pw;
document.getElementById("spdl_awf").innerHTML = new_fw;
document.getElementById("spdl_app").innerHTML = new_pp;
document.getElementById("spdl_apf").innerHTML = new_fp;
document.getElementById("spdl_dnm").innerHTML = spnw_mal;
document.getElementById("spdl_dnf").innerHTML = spnw_fem;
document.getElementById("spdl_dtm").innerHTML = spnw_mal;
document.getElementById("spdl_dtf").innerHTML = spnw_fem;
document.getElementById("spdl_dtt").innerHTML = spnw_mal + spnw_fem;
document.getElementById("spdl_dnt").innerHTML = spnw_mal + spnw_fem;
document.getElementById("spdl_awt").innerHTML = new_pw + new_fw;
document.getElementById("spdl_apt").innerHTML = new_pp + new_fp;

// Foreign License
document.getElementById("fl_awp").innerHTML = fl_pw;
document.getElementById("fl_awf").innerHTML = fl_fw;
document.getElementById("fl_app").innerHTML = fl_pp;
document.getElementById("fl_apf").innerHTML = fl_fp;
document.getElementById("fl_dnm").innerHTML = flnw_mal;
document.getElementById("fl_dnf").innerHTML = flnw_fem;
document.getElementById("fl_dtm").innerHTML = flnw_mal;
document.getElementById("fl_dtf").innerHTML = flnw_fem;
document.getElementById("fl_dtt").innerHTML = flnw_mal + flnw_fem;
document.getElementById("fl_dnt").innerHTML = flnw_mal + flnw_fem;
document.getElementById("fl_awt").innerHTML = fl_pw + fl_fw;
document.getElementById("fl_apt").innerHTML = fl_pp + fl_fp;

// Normal Renewal
document.getElementById("nrn_awp").innerHTML = rn_pw;
document.getElementById("nrn_awf").innerHTML = rn_fw;
document.getElementById("nrn_app").innerHTML = rn_pp;
document.getElementById("nrn_apf").innerHTML = rn_fp;
document.getElementById("nrn_drm").innerHTML = rn_mal;
document.getElementById("nrn_drf").innerHTML = rn_fem;
document.getElementById("nrn_dtm").innerHTML = rn_mal;
document.getElementById("nrn_dtf").innerHTML = rn_fem;
document.getElementById("nrn_dtt").innerHTML = rn_mal + rn_fem;
document.getElementById("nrn_drt").innerHTML = rn_mal + rn_fem;
document.getElementById("nrn_awt").innerHTML = rn_pw + rn_fw;
document.getElementById("nrn_apt").innerHTML = rn_pp + rn_fp;

// Renewal Total
document.getElementById("rnwl_awp").innerHTML = rn_pw;
document.getElementById("rnwl_awf").innerHTML = rn_fw;
document.getElementById("rnwl_app").innerHTML = rn_pp;
document.getElementById("rnwl_apf").innerHTML = rn_fp;
document.getElementById("rnwl_drm").innerHTML = rn_mal;
document.getElementById("rnwl_drf").innerHTML = rn_fem;
document.getElementById("rnwl_dtm").innerHTML = rn_mal;
document.getElementById("rnwl_dtf").innerHTML = rn_fem;
document.getElementById("rnwl_dtt").innerHTML = rn_mal + rn_fem;
document.getElementById("rnwl_drt").innerHTML = rn_mal + rn_fem;
document.getElementById("rnwl_awt").innerHTML = rn_pw + rn_fw;
document.getElementById("rnwl_apt").innerHTML = rn_pp + rn_fp ;
// Add'l Code

document.getElementById("adc_awp").innerHTML = adl_pw;
document.getElementById("adc_awf").innerHTML = adl_fw;
document.getElementById("adc_app").innerHTML = adl_pp;
document.getElementById("adc_apf").innerHTML = adl_fp;
document.getElementById("adc_awt").innerHTML = adl_pw + adl_fw;
document.getElementById("adc_apt").innerHTML = adl_pp + adl_fp;
// Others
let othrs_ttl1 = other1_pw + other2_pw;
let othrs_ttl2 = other1_pp + other2_pp;
let othrs_ttl3 = other1_fp + other2_fp;
let othrs_ttl4 = other1_fw + other2_fw;

document.getElementById("othr_awp").innerHTML = othrs_ttl1;
document.getElementById("othr_awf").innerHTML = othrs_ttl4;
document.getElementById("othr_app").innerHTML = othrs_ttl2;
document.getElementById("othr_apf").innerHTML = othrs_ttl3;
document.getElementById("othr_awt").innerHTML = othrs_ttl1 + othrs_ttl4;
document.getElementById("othr_apt").innerHTML = othrs_ttl2 + othrs_ttl3;

// MISC
document.getElementById("sp_misc").innerHTML = miscttld1;
document.getElementById("cl_misc").innerHTML = miscttld2;
document.getElementById("dt_misc").innerHTML = miscttld3;
document.getElementById("rr_misc").innerHTML = miscttld4;

// Total of NF
let ttl_dpch1 = spnw_fem + flnw_fem + spnw_mal + flnw_mal;
let ttl_dpch2 = new_pw + fl_pw +new_fw + fl_fw;
let ttl_dpch3 =  new_pp + fl_pp + new_fp + fl_fp;
document.getElementById("nf_awp").innerHTML = new_pw + fl_pw;
document.getElementById("nf_awf").innerHTML = new_fw + fl_fw;
document.getElementById("nf_app").innerHTML = new_pp + fl_pp;
document.getElementById("nf_apf").innerHTML = new_fp + fl_fp;
document.getElementById("nf_dnm").innerHTML = spnw_mal + flnw_mal;
document.getElementById("nf_dnf").innerHTML = spnw_fem + flnw_fem;
document.getElementById("nf_dnt").innerHTML = ttl_dpch1;
document.getElementById("nf_awt").innerHTML = ttl_dpch2;
document.getElementById("nf_apt").innerHTML = ttl_dpch3;
document.getElementById("nf_dtm").innerHTML = spnw_mal + flnw_mal;
document.getElementById("nf_dtf").innerHTML = spnw_fem + flnw_fem;
document.getElementById("nf_dtt").innerHTML = spnw_fem + flnw_fem + spnw_mal + flnw_mal;
document.getElementById("nf_dpch").innerHTML = ttl_dpch1 + ttl_dpch2 + ttl_dpch3;

// DLPCH Total
document.getElementById("sp_dpch").innerHTML = sp1n + sp1rn + sp2n + sp2rn + miscttld1;
document.getElementById("cl_dpch").innerHTML = cl1n + cl2n + cl1rn + cl2rn + cl_pw + cl_fw + miscttld2;
document.getElementById("spdl_dpch").innerHTML = new_pw + new_fw + new_pp + new_fp + spnw_mal + spnw_fem;
document.getElementById("fl_dpch").innerHTML = fl_pp + fl_fp + fl_pw + fl_fw + flnw_mal + flnw_fem;
document.getElementById("dt_dpch").innerHTML = miscttld3;
document.getElementById("rr_dpch").innerHTML = miscttld4; 
document.getElementById("nrn_dpch").innerHTML = rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem;
document.getElementById("rnwl_dpch").innerHTML = rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem;
document.getElementById("adc_dpch").innerHTML = adl_pw + adl_fw + adl_pp + adl_fp;
document.getElementById("othr_dpch").innerHTML =  othrs_ttl1 + othrs_ttl4 + othrs_ttl2 + othrs_ttl3;
// MISC Total
document.getElementById("misc_awp").innerHTML = adl_pw + othrs_ttl1;
document.getElementById("misc_awt").innerHTML = adl_pw + adl_fw + othrs_ttl1 + othrs_ttl4;
document.getElementById("misc_awf").innerHTML = adl_fw + othrs_ttl4
document.getElementById("misc_app").innerHTML = adl_pp+ new_pp + fl_pp;
document.getElementById("misc_apf").innerHTML = adl_fp + othrs_ttl3;
document.getElementById("misc_apt").innerHTML = adl_pp + adl_fp + othrs_ttl2 + othrs_ttl3;
document.getElementById("misc_mt").innerHTML = miscttld3 + miscttld4;
document.getElementById("misc_dpch").innerHTML = miscttld3 + miscttld4 + othrs_ttl1 + othrs_ttl2 + adl_pw + adl_fw + adl_pp + adl_fp;

// DL Count
document.getElementById("dl_awp").innerHTML = new_pw + fl_pw + rn_pw + adl_pw + othrs_ttl1;
document.getElementById("dl_awf").innerHTML = new_fw + fl_fw + rn_fw + adl_fw + othrs_ttl4;
document.getElementById("dl_awt").innerHTML = ttl_dpch2 + rn_pw + rn_fw + adl_pw + adl_fw + othrs_ttl1 + othrs_ttl4;
document.getElementById("dl_app").innerHTML = new_pp + fl_pp + rn_pp + adl_pp+ new_pp + fl_pp;
document.getElementById("dl_apf").innerHTML = adl_fp + othrs_ttl3 + new_fp + fl_fp + rn_fp;
document.getElementById("dl_apt").innerHTML = rn_pp + rn_fp + ttl_dpch3 + adl_pp + adl_fp + othrs_ttl2 + othrs_ttl3;
document.getElementById("dl_dnm").innerHTML = spnw_mal + flnw_mal;
document.getElementById("dl_dnf").innerHTML = flnw_fem + spnw_fem;
document.getElementById("dl_dnt").innerHTML = spnw_mal + flnw_mal + flnw_fem + spnw_fem;
document.getElementById("dl_drm").innerHTML = rn_mal;
document.getElementById("dl_drf").innerHTML = rn_fem;
document.getElementById("dl_drt").innerHTML = rn_mal + rn_fem;
document.getElementById("dl_dtm").innerHTML = spnw_mal + flnw_mal + rn_mal;
document.getElementById("dl_dtf").innerHTML = rn_fem + flnw_fem + spnw_fem;
document.getElementById("dl_dtt").innerHTML = spnw_mal + spnw_fem + flnw_mal + flnw_fem + rn_mal + rn_fem;
document.getElementById("dl_misc").innerHTML = miscttld3 + miscttld4;
document.getElementById("dl_dpch").innerHTML = ttl_dpch1 + ttl_dpch2 + ttl_dpch3 + rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem + miscttld3 + miscttld4 + othrs_ttl1 + othrs_ttl2 + adl_pw + adl_fw + adl_pp + adl_fp;
// TOTAL OF ALL
let dpcha1 = ttl_dpch1 + ttl_dpch2 + ttl_dpch3 + rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem + miscttld3 + miscttld4 + othrs_ttl1 + othrs_ttl2 + adl_pw + adl_fw + adl_pp + adl_fp;
let dpcha2 = sp1n + sp1rn + sp2n + sp2rn + miscttld1;
let dpcha3 = cl1n + cl2n + cl1rn + cl2rn + cl_pw + cl_fw + miscttld2;

document.getElementById("ttl_awp").innerHTML = cl_pw + new_pw + fl_pw + rn_pw + adl_pw + othrs_ttl1;
document.getElementById("ttl_awf").innerHTML = new_fw + fl_fw + rn_fw + adl_fw + othrs_ttl4 + cl_fw;
document.getElementById("ttl_awt").innerHTML = cl_pw + cl_fw + ttl_dpch2 + rn_pw + rn_fw + adl_pw + adl_fw + othrs_ttl1 + othrs_ttl4;
document.getElementById("ttl_app").innerHTML = new_pp + fl_pp + rn_pp + adl_pp+ new_pp + fl_pp;
document.getElementById("ttl_apf").innerHTML = adl_fp + othrs_ttl3 + new_fp + fl_fp + rn_fp;
document.getElementById("ttl_apt").innerHTML = rn_pp + rn_fp + ttl_dpch3 + adl_pp + adl_fp + othrs_ttl2 + othrs_ttl3;
document.getElementById("ttl_dnm").innerHTML = spnw_mal + flnw_mal + cl1n + sp1n;
document.getElementById("ttl_dnf").innerHTML = flnw_fem + spnw_fem + cl2n + sp2n;
document.getElementById("ttl_dnt").innerHTML = spnw_mal + flnw_mal + flnw_fem + spnw_fem + cl1n + cl2n + sp1n + sp2n;
document.getElementById("ttl_drm").innerHTML = rn_mal + cl1rn + sp1rn;
document.getElementById("ttl_drf").innerHTML = rn_fem + cl2rn + sp2rn;
document.getElementById("ttl_drt").innerHTML = rn_mal + rn_fem + cl1rn + cl2rn + sp1rn + sp2rn;
document.getElementById("ttl_dtm").innerHTML = sp1n + sp1rn + cl1n + cl1rn + spnw_mal + flnw_mal + rn_mal;
document.getElementById("ttl_dtf").innerHTML = sp2n + sp2rn + cl2n + cl2rn + rn_fem + flnw_fem + spnw_fem;
document.getElementById("ttl_dtt").innerHTML = sp1n + sp1rn + sp2n + sp2rn + cl1n + cl2n + cl1rn + cl2rn + spnw_mal + spnw_fem + flnw_mal + flnw_fem + rn_mal + rn_fem;
document.getElementById("ttl_misc").innerHTML = miscttld3 + miscttld4;
document.getElementById("ttl_dpch").innerHTML = dpcha1 + dpcha2 + dpcha3;

// Count Total2
// Student Permit
document.getElementById("sp_dnmd").innerHTML = sp1n;
document.getElementById("sp_dnfd").innerHTML = sp2n;
document.getElementById("sp_drmd").innerHTML = sp1rn;
document.getElementById("sp_drfd").innerHTML = sp2rn;
document.getElementById("sp_dntd").innerHTML = sp1n + sp2n;
document.getElementById("sp_drtd").innerHTML = sp1rn + sp2rn;
document.getElementById("sp_dtmd").innerHTML = sp1n + sp1rn;
document.getElementById("sp_dtfd").innerHTML = sp2n + sp2rn;
document.getElementById("sp_dttd").innerHTML = sp1n + sp1rn + sp2n + sp2rn;

// Conductor license
document.getElementById("cl_awpd").innerHTML = cl_pw;
document.getElementById("cl_awfd").innerHTML = cl_fw;
document.getElementById("cl_awtd").innerHTML = cl_pw + cl_fw;
document.getElementById("cl_dnmd").innerHTML = cl1n;
document.getElementById("cl_dnfd").innerHTML = cl2n; 
document.getElementById("cl_dntd").innerHTML = cl1n + cl2n;
document.getElementById("cl_drmd").innerHTML = cl1rn;
document.getElementById("cl_drfd").innerHTML = cl2rn;
document.getElementById("cl_drtd").innerHTML = cl1rn + cl2rn;
document.getElementById("cl_dtmd").innerHTML = cl1n + cl1rn;
document.getElementById("cl_dtfd").innerHTML = cl2n + cl2rn;
document.getElementById("cl_dttd").innerHTML = cl1n + cl2n + cl1rn + cl2rn; 

// Driver's License
// SP to New
document.getElementById("spdl_awpd").innerHTML = new_pw;
document.getElementById("spdl_awfd").innerHTML = new_fw;
document.getElementById("spdl_appd").innerHTML = new_pp;
document.getElementById("spdl_apfd").innerHTML = new_fp;
document.getElementById("spdl_dnmd").innerHTML = spnw_mal;
document.getElementById("spdl_dnfd").innerHTML = spnw_fem;
document.getElementById("spdl_dtmd").innerHTML = spnw_mal;
document.getElementById("spdl_dtfd").innerHTML = spnw_fem;
document.getElementById("spdl_dttd").innerHTML = spnw_mal + spnw_fem;
document.getElementById("spdl_dntd").innerHTML = spnw_mal + spnw_fem;
document.getElementById("spdl_awtd").innerHTML = new_pw + new_fw;
document.getElementById("spdl_aptd").innerHTML = new_pp + new_fp;

// Foreign License
document.getElementById("fl_awpd").innerHTML = fl_pw;
document.getElementById("fl_awfd").innerHTML = fl_fw;
document.getElementById("fl_appd").innerHTML = fl_pp;
document.getElementById("fl_apfd").innerHTML = fl_fp;
document.getElementById("fl_dnmd").innerHTML = flnw_mal;
document.getElementById("fl_dnfd").innerHTML = flnw_fem;
document.getElementById("fl_dtmd").innerHTML = flnw_mal;
document.getElementById("fl_dtfd").innerHTML = flnw_fem;
document.getElementById("fl_dttd").innerHTML = flnw_mal + flnw_fem;
document.getElementById("fl_dntd").innerHTML = flnw_mal + flnw_fem;
document.getElementById("fl_awtd").innerHTML = fl_pw + fl_fw;
document.getElementById("fl_aptd").innerHTML = fl_pp + fl_fp;

// Normal Renewal
document.getElementById("nrn_awpd").innerHTML = rn_pw;
document.getElementById("nrn_awfd").innerHTML = rn_fw;
document.getElementById("nrn_appd").innerHTML = rn_pp;
document.getElementById("nrn_apfd").innerHTML = rn_fp;
document.getElementById("nrn_drmd").innerHTML = rn_mal;
document.getElementById("nrn_drfd").innerHTML = rn_fem;
document.getElementById("nrn_dtmd").innerHTML = rn_mal;
document.getElementById("nrn_dtfd").innerHTML = rn_fem;
document.getElementById("nrn_dttd").innerHTML = rn_mal + rn_fem;
document.getElementById("nrn_drtd").innerHTML = rn_mal + rn_fem;
document.getElementById("nrn_awtd").innerHTML = rn_pw + rn_fw;
document.getElementById("nrn_aptd").innerHTML = rn_pp + rn_fp;

// Renewal Total
document.getElementById("rnwl_awpd").innerHTML = rn_pw;
document.getElementById("rnwl_awfd").innerHTML = rn_fw;
document.getElementById("rnwl_appd").innerHTML = rn_pp;
document.getElementById("rnwl_apfd").innerHTML = rn_fp;
document.getElementById("rnwl_drmd").innerHTML = rn_mal;
document.getElementById("rnwl_drfd").innerHTML = rn_fem;
document.getElementById("rnwl_dtmd").innerHTML = rn_mal;
document.getElementById("rnwl_dtfd").innerHTML = rn_fem;
document.getElementById("rnwl_dttd").innerHTML = rn_mal + rn_fem;
document.getElementById("rnwl_drtd").innerHTML = rn_mal + rn_fem;
document.getElementById("rnwl_awtd").innerHTML = rn_pw + rn_fw;
document.getElementById("rnwl_aptd").innerHTML = rn_pp + rn_fp ;
// Add'l Code

document.getElementById("adc_awpd").innerHTML = adl_pw;
document.getElementById("adc_awfd").innerHTML = adl_fw;
document.getElementById("adc_appd").innerHTML = adl_pp;
document.getElementById("adc_apfd").innerHTML = adl_fp;
document.getElementById("adc_awtd").innerHTML = adl_pw + adl_fw;
document.getElementById("adc_aptd").innerHTML = adl_pp + adl_fp;
// Others
document.getElementById("othr_awpd").innerHTML = othrs_ttl1;
document.getElementById("othr_awfd").innerHTML = othrs_ttl4;
document.getElementById("othr_appd").innerHTML = othrs_ttl2;
document.getElementById("othr_apfd").innerHTML = othrs_ttl3;
document.getElementById("othr_awtd").innerHTML = othrs_ttl1 + othrs_ttl4;
document.getElementById("othr_aptd").innerHTML = othrs_ttl2 + othrs_ttl3;

// MISC
document.getElementById("sp_miscd").innerHTML = miscttld1;
document.getElementById("cl_miscd").innerHTML = miscttld2;
document.getElementById("dt_miscd").innerHTML = miscttld3;
document.getElementById("rr_miscd").innerHTML = miscttld4;

// Total of NF
document.getElementById("nf_awpd").innerHTML = new_pw + fl_pw;
document.getElementById("nf_awfd").innerHTML = new_fw + fl_fw;
document.getElementById("nf_appd").innerHTML = new_pp + fl_pp;
document.getElementById("nf_apfd").innerHTML = new_fp + fl_fp;
document.getElementById("nf_dnmd").innerHTML = spnw_mal + flnw_mal;
document.getElementById("nf_dnfd").innerHTML = spnw_fem + flnw_fem;
document.getElementById("nf_dntd").innerHTML = ttl_dpch1;
document.getElementById("nf_awtd").innerHTML = ttl_dpch2;
document.getElementById("nf_aptd").innerHTML = ttl_dpch3;
document.getElementById("nf_dtmd").innerHTML = spnw_mal + flnw_mal;
document.getElementById("nf_dtfd").innerHTML = spnw_fem + flnw_fem;
document.getElementById("nf_dttd").innerHTML = spnw_fem + flnw_fem + spnw_mal + flnw_mal;
document.getElementById("nf_dpchd").innerHTML = ttl_dpch1 + ttl_dpch2 + ttl_dpch3;

// DLPCH Total
document.getElementById("sp_dpchd").innerHTML = sp1n + sp1rn + sp2n + sp2rn + miscttld1;
document.getElementById("cl_dpchd").innerHTML = cl1n + cl2n + cl1rn + cl2rn + cl_pw + cl_fw + miscttld2;
document.getElementById("spdl_dpchd").innerHTML = new_pw + new_fw + new_pp + new_fp + spnw_mal + spnw_fem;
document.getElementById("fl_dpchd").innerHTML = fl_pp + fl_fp + fl_pw + fl_fw + flnw_mal + flnw_fem;
document.getElementById("dt_dpchd").innerHTML = miscttld3;
document.getElementById("rr_dpchd").innerHTML = miscttld4; 
document.getElementById("nrn_dpchd").innerHTML = rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem;
document.getElementById("rnwl_dpchd").innerHTML = rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem;
document.getElementById("adc_dpchd").innerHTML = adl_pw + adl_fw + adl_pp + adl_fp;
document.getElementById("othr_dpchd").innerHTML =  othrs_ttl1 + othrs_ttl4 + othrs_ttl2 + othrs_ttl3;
// MISC Total
document.getElementById("misc_awpd").innerHTML = adl_pw + othrs_ttl1;
document.getElementById("misc_awtd").innerHTML = adl_pw + adl_fw + othrs_ttl1 + othrs_ttl4;
document.getElementById("misc_awfd").innerHTML = adl_fw + othrs_ttl4
document.getElementById("misc_appd").innerHTML = adl_pp+ new_pp + fl_pp;
document.getElementById("misc_apfd").innerHTML = adl_fp + othrs_ttl3;
document.getElementById("misc_aptd").innerHTML = adl_pp + adl_fp + othrs_ttl2 + othrs_ttl3;
document.getElementById("misc_mtd").innerHTML = miscttld3 + miscttld4;
document.getElementById("misc_dpchd").innerHTML = miscttld3 + miscttld4 + othrs_ttl1 + othrs_ttl2 + adl_pw + adl_fw + adl_pp + adl_fp;

// DL Count
document.getElementById("dl_awpd").innerHTML = new_pw + fl_pw + rn_pw + adl_pw + othrs_ttl1;
document.getElementById("dl_awfd").innerHTML = new_fw + fl_fw + rn_fw + adl_fw + othrs_ttl4;
document.getElementById("dl_awtd").innerHTML = ttl_dpch2 + rn_pw + rn_fw + adl_pw + adl_fw + othrs_ttl1 + othrs_ttl4;
document.getElementById("dl_appd").innerHTML = new_pp + fl_pp + rn_pp + adl_pp+ new_pp + fl_pp;
document.getElementById("dl_apfd").innerHTML = adl_fp + othrs_ttl3 + new_fp + fl_fp + rn_fp;
document.getElementById("dl_aptd").innerHTML = rn_pp + rn_fp + ttl_dpch3 + adl_pp + adl_fp + othrs_ttl2 + othrs_ttl3;
document.getElementById("dl_dnmd").innerHTML = spnw_mal + flnw_mal;
document.getElementById("dl_dnfd").innerHTML = flnw_fem + spnw_fem;
document.getElementById("dl_dntd").innerHTML = spnw_mal + flnw_mal + flnw_fem + spnw_fem;
document.getElementById("dl_drmd").innerHTML = rn_mal;
document.getElementById("dl_drfd").innerHTML = rn_fem;
document.getElementById("dl_drtd").innerHTML = rn_mal + rn_fem;
document.getElementById("dl_dtmd").innerHTML = spnw_mal + flnw_mal + rn_mal;
document.getElementById("dl_dtfd").innerHTML = rn_fem + flnw_fem + spnw_fem;
document.getElementById("dl_dttd").innerHTML = spnw_mal + spnw_fem + flnw_mal + flnw_fem + rn_mal + rn_fem;
document.getElementById("dl_miscd").innerHTML = miscttld3 + miscttld4;
document.getElementById("dl_dpchd").innerHTML = ttl_dpch1 + ttl_dpch2 + ttl_dpch3 + rn_pp + rn_fp + rn_pw + rn_fw + rn_mal + rn_fem + miscttld3 + miscttld4 + othrs_ttl1 + othrs_ttl2 + adl_pw + adl_fw + adl_pp + adl_fp;

// TOTAL OF ALL
document.getElementById("ttl_awpd").innerHTML = cl_pw + new_pw + fl_pw + rn_pw + adl_pw + othrs_ttl1;
document.getElementById("ttl_awfd").innerHTML = new_fw + fl_fw + rn_fw + adl_fw + othrs_ttl4 + cl_fw;
document.getElementById("ttl_awtd").innerHTML = cl_pw + cl_fw + ttl_dpch2 + rn_pw + rn_fw + adl_pw + adl_fw + othrs_ttl1 + othrs_ttl4;
document.getElementById("ttl_appd").innerHTML = new_pp + fl_pp + rn_pp + adl_pp+ new_pp + fl_pp;
document.getElementById("ttl_apfd").innerHTML = adl_fp + othrs_ttl3 + new_fp + fl_fp + rn_fp;
document.getElementById("ttl_aptd").innerHTML = rn_pp + rn_fp + ttl_dpch3 + adl_pp + adl_fp + othrs_ttl2 + othrs_ttl3;
document.getElementById("ttl_dnmd").innerHTML = spnw_mal + flnw_mal + cl1n + sp1n;
document.getElementById("ttl_dnfd").innerHTML = flnw_fem + spnw_fem + cl2n + sp2n;
document.getElementById("ttl_dntd").innerHTML = spnw_mal + flnw_mal + flnw_fem + spnw_fem + cl1n + cl2n + sp1n + sp2n;
document.getElementById("ttl_drmd").innerHTML = rn_mal + cl1rn + sp1rn;
document.getElementById("ttl_drfd").innerHTML = rn_fem + cl2rn + sp2rn;
document.getElementById("ttl_drtd").innerHTML = rn_mal + rn_fem + cl1rn + cl2rn + sp1rn + sp2rn;
document.getElementById("ttl_dtmd").innerHTML = sp1n + sp1rn + cl1n + cl1rn + spnw_mal + flnw_mal + rn_mal;
document.getElementById("ttl_dtfd").innerHTML = sp2n + sp2rn + cl2n + cl2rn + rn_fem + flnw_fem + spnw_fem;
document.getElementById("ttl_dttd").innerHTML = sp1n + sp1rn + sp2n + sp2rn + cl1n + cl2n + cl1rn + cl2rn + spnw_mal + spnw_fem + flnw_mal + flnw_fem + rn_mal + rn_fem;
document.getElementById("ttl_miscd").innerHTML = miscttld3 + miscttld4;
document.getElementById("ttl_dpchd").innerHTML = dpcha1 + dpcha2 + dpcha3;