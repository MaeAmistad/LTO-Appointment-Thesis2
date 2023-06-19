bcklic.addEventListener('click' , () => {
    window.location = "ca_homepage.html"
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

// Monthly Filter
var currentmonth = new Date().getMonth() + 1;
if (currentmonth < 10)  currentmonth = "0" + currentmonth;

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
// getting month mon
let dd = doc.data().dt_App;
let mmsp = dd.slice(5,7);

// Current Count
if(mmsp == currentmonth){
  if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){    
    // document.getElementById("sp_dpch").innerHTML = spttal+=1;

    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        let sp_nm = sp1n+=1;        
        localStorage.setItem("sp_dnmm",sp_nm);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let sp_nf = sp2n+=1;        
        localStorage.setItem("sp_dnff",sp_nf);
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        let sp_rnm = sp1rn+=1;        
        localStorage.setItem("sp_rnmm",sp_rnm);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let sp_rnf = sp2rn+=1;        
        localStorage.setItem("sp_rnff",sp_rnf); 
      }
    }
  }

  // Conductors License
  if(doc.data().laa == "CONDUCTOR'S LICENSE"){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        let cl_nm = cl1n+=1;        
        localStorage.setItem("cl_dnmm",cl_nm);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let cl_nf = cl2n+=1;        
        localStorage.setItem("cl_dnff",cl_nf);
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        let cl_rnm = cl1rn+=1;        
        localStorage.setItem("cl_rnmm",cl_rnm);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let cl_rnf = cl2rn+=1;        
        localStorage.setItem("cl_rnff",cl_rnf);
      }
    }
  }

  if(doc.data().laa == "DRIVER'S LICENSE"){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        let  spn_m = spnw_mal+=1;        
        localStorage.setItem("spn_ml",spn_m);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let spn_f = spnw_fem+=1;        
        localStorage.setItem("spn_fm",spn_f);
      }
    }

    else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
      if(doc.data().User_GN == "MALE"){
        let  spn_m = flnw_mal+=1;        
        localStorage.setItem("fl_dnm",spn_m);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let spn_f = flnw_fem+=1;        
        localStorage.setItem("fl_dnf",spn_f);
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        let  spn_m = rn_mal+=1;        
        localStorage.setItem("rn_drnm",spn_m);
      }
      else if(doc.data().User_GN == "FEMALE"){
        let spn_f = rn_fem+=1;        
        localStorage.setItem("rn_drnf",spn_f);
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
  let dd = doc.data().dt_App;
  let mmsp = dd.slice(5,7);
  
  if(mmsp == currentmonth){
  // CL
    if(doc.data().laa == "CONDUCTOR'S LICENSE"){
      // document.getElementById("cl_dpch").innerHtml = clttl+=1;
      if(doc.data().result == "PASSED"){
        let cl_wf = cl_pw+=1;      
        localStorage.setItem("cl_pw",cl_wf);
      }
      else if(doc.data().result == "FAILED"){
        let cl_wp = cl_fw+=1;      
        localStorage.setItem("cl_fw",cl_wp);
      }
    }
   
    if(doc.data().Laa == "DRIVER'S LICENSE"){
       // DL New
      if(doc.data().at == "NEW"){
        if(doc.data().result == "PASSED"){
          let  nw_pw = new_pw+=1;
          localStorage.setItem("new_wp",nw_pw);
        }
        else if(doc.data().result == "FAILED"){
          let nw_fw = new_fw+=1;
          localStorage.setItem("new_wf",nw_fw);
        }
      }
      // DL ADC
      if(doc.data().at == "ADDITIONAL CODE OR CATEGORY"){
        if(doc.data().result == "PASSED"){
          let adl_pp = adl_pw+=1;
          localStorage.setItem("adc_pw",adl_pp);
        }
        else if(doc.data().result == "FAILED"){
          let adl_pf = adl_fw+=1;
          localStorage.setItem("adc_fw",adl_pf);
        }
      }

      else if (doc.data().at == "CHANGE OF DL CLASSIFICATION" || doc.data().at == "EXPIRED DL WITH VALID FDL" || doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        if(doc.data().result == "PASSED"){
          let othr_1 = other1_pw+=1;
          localStorage.setItem("othr1_awp",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = other1_fw+=1;
          localStorage.setItem("othr1_awf",othr_2);
        }
      }

      else if(doc.data().at == "ENHANCEMENT OF DL" || doc.data().at == "CHANGE OF CLUTCH TYPE"){
        if(doc.data().result == "PASSED"){
          let othr_1 = other2_pw+=1;
          localStorage.setItem("othr2_awp",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = other2_fw+=1;
          localStorage.setItem("othr2_awf",othr_2);
        }
      }

      // FL
      else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
        if(doc.data().result == "PASSED"){
          let othr_1 = fl_pw+=1;
          localStorage.setItem("fl_awp",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = fl_fw+=1;
          localStorage.setItem("fl_awf",othr_2);
        }
      }

      else if(doc.data().at == "RENEWAL"){
        if(doc.data().result == "PASSED"){
          let othr_1 = rn_pw+=1;
          localStorage.setItem("rn_awp",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = rn_fw+=1;
          localStorage.setItem("rn_awf",othr_2);
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
  let dd = doc.data().dt_App;
  let mmsp = dd.slice(5,7);
  
  if(mmsp == currentmonth){
    if(doc.data().Laa == "DRIVER'S LICENSE"){
    // DL New
    if(doc.data().at == "NEW"){
      if(doc.data().result == "PASSED"){
        let  nw_pw = new_pp+=1;
        localStorage.setItem("new_pp",nw_pw); 
      }
      else if(doc.data().result == "FAILED"){
        let nw_fw = new_fp+=1;
        localStorage.setItem("new_pf",nw_fw);
      }
    }
      // DL ADC
      if(doc.data().at == "ADDITIONAL CODE OR CATEGORY"){
        if(doc.data().result == "PASSED"){
          let adc_pp = adl_pp+=1;
          localStorage.setItem("adc_pp",adc_pp);
        }
        else if(doc.data().result == "FAILED"){
          let adl_pf = adl_fp+=1;
          localStorage.setItem("adc_fp",adl_pf);
        }
      }
// other
      else if (doc.data().at == "CHANGE OF DL CLASSIFICATION" || doc.data().at == "EXPIRED DL WITH VALID FDL" || doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        if(doc.data().result == "PASSED"){
          let othr_1 = other1_pp+=1;
          localStorage.setItem("othr1_app",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = other1_fp+=1;
          localStorage.setItem("othr1_apf",othr_2);
        }
      }

      else if(doc.data().at == "ENHANCEMENT OF DL" || doc.data().at == "CHANGE OF CLUTCH TYPE"){
        if(doc.data().result == "PASSED"){
          let othr_1 = other2_pp+=1;
          localStorage.setItem("othr2_app",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = other2_fp+=1;
          localStorage.setItem("othr2_apf",othr_2);
        }
      }

            // FL
      else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
        if(doc.data().result == "PASSED"){
          let othr_1 = fl_pp+=1;
          localStorage.setItem("fl_app",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = fl_fp+=1;
          localStorage.setItem("fl_apf",othr_2);
        }
      }

      else if(doc.data().at == "RENEWAL"){
        if(doc.data().result == "PASSED"){
          let othr_1 = rn_pp+=1;
          localStorage.setItem("rn_app",othr_1);
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = rn_fp+=1;
          localStorage.setItem("rn_apf",othr_2);
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
    let dd = doc.data().dt_App;
    let mmsp = dd.slice(5,7);

    if(mmsp == currentmonth){
      if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){  
        if (doc.data().at == "DUPLICATE" || doc.data().at == "REVISION OF RECORDS"){
          var misc_ttl = miscttld1+=1;
          localStorage.setItem("sp_mscttl",misc_ttl);
        }
      } 
      if(doc.data().laa == "CONDUCTOR'S LICENSE"){  
        if (doc.data().at == "DUPLICATE" || doc.data().at == "REVISION OF RECORDS"){
          var misc_ttl = miscttld2+=1;
          localStorage.setItem("cl_mscttl",misc_ttl);
        }
      }
      if (doc.data().at == "DUPLICATE"){
        var misc_ttl = miscttld3+=1;
        localStorage.setItem("dupl_mscttl",misc_ttl);
      }
      if (doc.data().at == "REVISION OF RECORDS"){
        var misc_ttl = miscttld4+=1;
        localStorage.setItem("ror_mscttl",misc_ttl);
      }
  }
  });

  // NAN to int
if (localStorage.getItem("sp_dnmm") == null || localStorage.getItem("sp_dnff") == null || localStorage.getItem("sp_rnmm") == null || localStorage.getItem("sp_rnff") == null){
  localStorage.setItem("sp_dnmm",0);
  localStorage.setItem("sp_dnff",0);  
  localStorage.setItem("sp_rnmm",0);
  localStorage.setItem("sp_rnff",0);
}
if (localStorage.getItem("cl_dnmm") == null || localStorage.getItem("cl_dnff") == null || localStorage.getItem("cl_rnmm") == null || localStorage.getItem("cl_rnff") == null){
  localStorage.setItem("cl_dnmm",0);
  localStorage.setItem("cl_dnff",0);  
  localStorage.setItem("cl_rnmm",0);
  localStorage.setItem("cl_rnff",0);
}
if (localStorage.getItem("spn_ml") == null || localStorage.getItem("spn_fm") == null || localStorage.getItem("fl_dnm") == null || localStorage.getItem("fl_dnf") == null){
  localStorage.setItem("spn_ml",0);
  localStorage.setItem("spn_fm",0);  
  localStorage.setItem("fl_dnm",0);
  localStorage.setItem("fl_dnf",0);
}
if (localStorage.getItem("rn_drnf") == null || localStorage.getItem("rn_drnm") == null || localStorage.getItem("cl_pw") == null || localStorage.getItem("cl_fw") == null){
  localStorage.setItem("rn_drnf",0);
  localStorage.setItem("rn_drnm",0);  
  localStorage.setItem("cl_pw",0);
  localStorage.setItem("cl_fw",0);
}
if (localStorage.getItem("new_wp") == null || localStorage.getItem("new_wf") == null || localStorage.getItem("adc_pw") == null || localStorage.getItem("adc_fw") == null){
  localStorage.setItem("new_wp",0);
  localStorage.setItem("new_wf",0);  
  localStorage.setItem("adc_pw",0);
  localStorage.setItem("adc_fw",0);
}
if (localStorage.getItem("othr1_awp") == null || localStorage.getItem("othr1_awf") == null || localStorage.getItem("othr2_awp") == null || localStorage.getItem("othr2_awf") == null){
  localStorage.setItem("othr1_awp",0);
  localStorage.setItem("othr1_awf",0);  
  localStorage.setItem("othr2_awp",0);
  localStorage.setItem("othr2_awf",0);
}
if (localStorage.getItem("fl_awp") == null || localStorage.getItem("fl_awf") == null || localStorage.getItem("rn_awp") == null || localStorage.getItem("rn_awf") == null){
  localStorage.setItem("fl_awp",0);
  localStorage.setItem("fl_awf",0);  
  localStorage.setItem("rn_awp",0);
  localStorage.setItem("rn_awf",0);
}
if (localStorage.getItem("new_pp") == null || localStorage.getItem("new_pf") == null || localStorage.getItem("adc_pp") == null || localStorage.getItem("adc_fp") == null){
  localStorage.setItem("new_pp",0);
  localStorage.setItem("new_pf",0);  
  localStorage.setItem("adc_pp",0);
  localStorage.setItem("adc_fp",0);
}
if (localStorage.getItem("othr1_app") == null || localStorage.getItem("othr1_apf") == null || localStorage.getItem("othr2_app") == null || localStorage.getItem("othr2_apf") == null){
  localStorage.setItem("othr1_app",0);
  localStorage.setItem("othr1_apf",0);  
  localStorage.setItem("othr2_app",0);
  localStorage.setItem("othr2_apf",0);
}
if (localStorage.getItem("fl_app") == null || localStorage.getItem("fl_apf") == null || localStorage.getItem("rn_app") == null || localStorage.getItem("rn_apf") == null){
  localStorage.setItem("fl_app",0);
  localStorage.setItem("fl_apf",0);  
  localStorage.setItem("rn_app",0);
  localStorage.setItem("rn_apf",0);
}
if (localStorage.getItem("sp_mscttl") == null || localStorage.getItem("cl_mscttl") == null || localStorage.getItem("dupl_mscttl") == null || localStorage.getItem("ror_mscttl") == null){
  localStorage.setItem("sp_mscttl",0);
  localStorage.setItem("cl_mscttl",0);  
  localStorage.setItem("dupl_mscttl",0);
  localStorage.setItem("ror_mscttl",0);
}

// Count Total
// document.getElementById("").innerHTML = parseInt(localStorage.getItem("")) + parseInt(localStorage.getItem(""));

// Student Permit
let sp_ttl1 = parseInt(localStorage.getItem("sp_dnmm"));
let sp_ttl2 =  parseInt(localStorage.getItem("sp_dnff"));
let sp_ttl3 = parseInt(localStorage.getItem("sp_rnmm"));
let sp_ttl4 = parseInt(localStorage.getItem("sp_rnff"));

document.getElementById("sp_dnm").innerHTML = sp_ttl1;
document.getElementById("sp_dnf").innerHTML = sp_ttl2;
document.getElementById("sp_drm").innerHTML = sp_ttl3;
document.getElementById("sp_drf").innerHTML = sp_ttl4;
document.getElementById("sp_dnt").innerHTML = sp_ttl1 + sp_ttl2;
document.getElementById("sp_drt").innerHTML = sp_ttl3 + sp_ttl4;
document.getElementById("sp_dtm").innerHTML = sp_ttl1 + sp_ttl3;
document.getElementById("sp_dtf").innerHTML = sp_ttl2 + sp_ttl4;
document.getElementById("sp_dtt").innerHTML = sp_ttl1 + sp_ttl3 + sp_ttl2 + sp_ttl4;

// Conductor license
let cl_ttl1 = parseInt(localStorage.getItem("cl_pw"));
let cl_ttl2 = parseInt(localStorage.getItem("cl_fw"));
let cl_ttl3 = parseInt(localStorage.getItem("cl_dnmm"));
let cl_ttl4 = parseInt(localStorage.getItem("cl_dnff"));
let cl_ttl5 = parseInt(localStorage.getItem("cl_rnmm"));
let cl_ttl6 = parseInt(localStorage.getItem("cl_rnff"));

document.getElementById("cl_awp").innerHTML = cl_ttl1;
document.getElementById("cl_awf").innerHTML = cl_ttl2;
document.getElementById("cl_awt").innerHTML = cl_ttl1 + cl_ttl2;
document.getElementById("cl_dnm").innerHTML = cl_ttl3;
document.getElementById("cl_dnf").innerHTML = cl_ttl4; 
document.getElementById("cl_dnt").innerHTML = cl_ttl3 + cl_ttl4;
document.getElementById("cl_drm").innerHTML = cl_ttl5;
document.getElementById("cl_drf").innerHTML = cl_ttl6;
document.getElementById("cl_drt").innerHTML = cl_ttl5 + cl_ttl6;
document.getElementById("cl_dtm").innerHTML = cl_ttl3 + cl_ttl5;
document.getElementById("cl_dtf").innerHTML = cl_ttl4 + cl_ttl6;
document.getElementById("cl_dtt").innerHTML = cl_ttl3 + cl_ttl4 + cl_ttl5 + cl_ttl6;

// Driver's License
// SP to New
let spn_ttl1 = parseInt(localStorage.getItem("new_wp"));
let spn_ttl2 = parseInt(localStorage.getItem("new_wf"));
let spn_ttl3 = parseInt(localStorage.getItem("new_pp"));
let spn_ttl4 = parseInt(localStorage.getItem("new_pf"));
let spn_ttl5 = parseInt(localStorage.getItem("spn_ml"));
let spn_ttl6 = parseInt(localStorage.getItem("spn_fm"));

document.getElementById("spdl_awp").innerHTML = spn_ttl1;
document.getElementById("spdl_awf").innerHTML = spn_ttl2;
document.getElementById("spdl_app").innerHTML = spn_ttl3;
document.getElementById("spdl_apf").innerHTML = spn_ttl4;
document.getElementById("spdl_dnm").innerHTML = spn_ttl5;
document.getElementById("spdl_dnf").innerHTML = spn_ttl6;
document.getElementById("spdl_dtm").innerHTML = spn_ttl5;
document.getElementById("spdl_dtf").innerHTML = spn_ttl6;
document.getElementById("spdl_dtt").innerHTML = spn_ttl5 + spn_ttl6;
document.getElementById("spdl_dnt").innerHTML = spn_ttl5 + spn_ttl6;
document.getElementById("spdl_awt").innerHTML = spn_ttl1 + spn_ttl2;
document.getElementById("spdl_apt").innerHTML = spn_ttl3 + spn_ttl4;
// Foreign License
let fl_ttl1 = parseInt(localStorage.getItem("fl_dnm"));
let fl_ttl2 = parseInt(localStorage.getItem("fl_dnf"));
let fl_ttl3 = parseInt(localStorage.getItem("fl_awp"));
let fl_ttl4 = parseInt(localStorage.getItem("fl_awf"));
let fl_ttl5 = parseInt(localStorage.getItem("fl_app"));
let fl_ttl6 = parseInt(localStorage.getItem("fl_apf"));

document.getElementById("fl_awp").innerHTML = fl_ttl3;
document.getElementById("fl_awf").innerHTML = fl_ttl4;
document.getElementById("fl_app").innerHTML = fl_ttl5;
document.getElementById("fl_apf").innerHTML = fl_ttl6;
document.getElementById("fl_dnm").innerHTML = fl_ttl1;
document.getElementById("fl_dnf").innerHTML = fl_ttl2;
document.getElementById("fl_dtm").innerHTML = fl_ttl1;
document.getElementById("fl_dtf").innerHTML = fl_ttl2;
document.getElementById("fl_dtt").innerHTML = fl_ttl1 + fl_ttl2;
document.getElementById("fl_dnt").innerHTML = fl_ttl1 + fl_ttl2;
document.getElementById("fl_awt").innerHTML = fl_ttl3 + fl_ttl4;
document.getElementById("fl_apt").innerHTML = fl_ttl5 + fl_ttl6;
// Normal Renewal
let nr_ttl1 = parseInt(localStorage.getItem("rn_drnm"));
let nr_ttl2 = parseInt(localStorage.getItem("rn_drnf"));
let nr_ttl3 = parseInt(localStorage.getItem("rn_awp"));
let nr_ttl4 = parseInt(localStorage.getItem("rn_awf"));
let nr_ttl5 = parseInt(localStorage.getItem("rn_app"));
let nr_ttl6 = parseInt(localStorage.getItem("rn_apf"));

document.getElementById("nrn_awp").innerHTML = nr_ttl3;
document.getElementById("nrn_awf").innerHTML = nr_ttl4;
document.getElementById("nrn_app").innerHTML = nr_ttl5;
document.getElementById("nrn_apf").innerHTML = nr_ttl6;
document.getElementById("nrn_drm").innerHTML = nr_ttl1;
document.getElementById("nrn_drf").innerHTML = nr_ttl2;
document.getElementById("nrn_dtm").innerHTML = nr_ttl1;
document.getElementById("nrn_dtf").innerHTML = nr_ttl2;
document.getElementById("nrn_dtt").innerHTML = nr_ttl1 + nr_ttl2;
document.getElementById("nrn_drt").innerHTML = nr_ttl1 + nr_ttl2;
document.getElementById("nrn_awt").innerHTML = nr_ttl3 + nr_ttl4;
document.getElementById("nrn_apt").innerHTML = nr_ttl5 + nr_ttl6;
// Renewal Total
document.getElementById("rnwl_awp").innerHTML = nr_ttl3;
document.getElementById("rnwl_awf").innerHTML = nr_ttl4;
document.getElementById("rnwl_app").innerHTML = nr_ttl5;
document.getElementById("rnwl_apf").innerHTML = nr_ttl6;
document.getElementById("rnwl_drm").innerHTML = nr_ttl1;
document.getElementById("rnwl_drf").innerHTML = nr_ttl2;
document.getElementById("rnwl_dtm").innerHTML = nr_ttl1;
document.getElementById("rnwl_dtf").innerHTML = nr_ttl2;
document.getElementById("rnwl_dtt").innerHTML = nr_ttl1 + nr_ttl2;
document.getElementById("rnwl_drt").innerHTML = nr_ttl1 + nr_ttl2;
document.getElementById("rnwl_awt").innerHTML = nr_ttl3 + nr_ttl4;
document.getElementById("rnwl_apt").innerHTML = nr_ttl5 + nr_ttl6 ;
// Add'l Code
let addlc_ttl1 = parseInt(localStorage.getItem("adc_pw"));
let addlc_ttl2 = parseInt(localStorage.getItem("adc_fw"));
let addlc_ttl3 = parseInt(localStorage.getItem("adc_pp"));
let addlc_ttl4 = parseInt(localStorage.getItem("adc_fp"));

document.getElementById("adc_awp").innerHTML = addlc_ttl1;
document.getElementById("adc_awf").innerHTML = addlc_ttl2;
document.getElementById("adc_app").innerHTML = addlc_ttl3;
document.getElementById("adc_apf").innerHTML = addlc_ttl4;
document.getElementById("adc_awt").innerHTML = addlc_ttl1 + addlc_ttl2;
document.getElementById("adc_apt").innerHTML = addlc_ttl3 + addlc_ttl4;
// Others
let othrs_ttl1 =parseInt(localStorage.getItem("othr1_awp")) + parseInt(localStorage.getItem("othr2_awp"));
let othrs_ttl2 =parseInt(localStorage.getItem("othr1_app")) + parseInt(localStorage.getItem("othr2_app"));
let othrs_ttl3 =parseInt(localStorage.getItem("othr1_apf")) + parseInt(localStorage.getItem("othr2_apf"));
let othrs_ttl4 =parseInt(localStorage.getItem("othr1_awf")) + parseInt(localStorage.getItem("othr2_awf"));

document.getElementById("othr_awp").innerHTML = othrs_ttl1;
document.getElementById("othr_awf").innerHTML = othrs_ttl4;
document.getElementById("othr_app").innerHTML = othrs_ttl2;
document.getElementById("othr_apf").innerHTML = othrs_ttl3;
document.getElementById("othr_awt").innerHTML = othrs_ttl1 + othrs_ttl4;
document.getElementById("othr_apt").innerHTML = othrs_ttl2 + othrs_ttl3;

// MISC
let misc_ttl1 = parseInt(localStorage.getItem("sp_mscttl"));
let misc_ttl2 = parseInt(localStorage.getItem("cl_mscttl"));
let misc_ttl3 = parseInt(localStorage.getItem("dupl_mscttl"));
let misc_ttl4 = parseInt(localStorage.getItem("ror_mscttl"));

document.getElementById("sp_misc").innerHTML = misc_ttl1;
document.getElementById("cl_misc").innerHTML = misc_ttl2;
document.getElementById("dt_misc").innerHTML = misc_ttl3;
document.getElementById("rr_misc").innerHTML = misc_ttl4;

// Total of NF
let ttl_dpch1 = spn_ttl6 + fl_ttl2 + spn_ttl5 + fl_ttl1;
let ttl_dpch2 = spn_ttl1 + fl_ttl3 +spn_ttl2 + fl_ttl4;
let ttl_dpch3 =  spn_ttl3 + fl_ttl5 + spn_ttl4 + fl_ttl6;
document.getElementById("nf_awp").innerHTML = spn_ttl1 + fl_ttl3;
document.getElementById("nf_awf").innerHTML = spn_ttl2 + fl_ttl4;
document.getElementById("nf_app").innerHTML = spn_ttl3 + fl_ttl5;
document.getElementById("nf_apf").innerHTML = spn_ttl4 + fl_ttl6;
document.getElementById("nf_dnm").innerHTML = spn_ttl5 + fl_ttl1;
document.getElementById("nf_dnf").innerHTML = spn_ttl6 + fl_ttl2;
document.getElementById("nf_dnt").innerHTML = ttl_dpch1;
document.getElementById("nf_awt").innerHTML = ttl_dpch2;
document.getElementById("nf_apt").innerHTML = ttl_dpch3;
document.getElementById("nf_dtm").innerHTML = spn_ttl5 + fl_ttl1;
document.getElementById("nf_dtf").innerHTML = spn_ttl6 + fl_ttl2;
document.getElementById("nf_dtt").innerHTML = spn_ttl6 + fl_ttl2 + spn_ttl5 + fl_ttl1;
document.getElementById("nf_dpch").innerHTML = ttl_dpch1 + ttl_dpch2 + ttl_dpch3;

// DLPCH Total
document.getElementById("sp_dpch").innerHTML = sp_ttl1 + sp_ttl3 + sp_ttl2 + sp_ttl4 + misc_ttl1;
document.getElementById("cl_dpch").innerHTML = cl_ttl3 + cl_ttl4 + cl_ttl5 + cl_ttl6 + cl_ttl1 + cl_ttl2 + misc_ttl2;
document.getElementById("spdl_dpch").innerHTML = spn_ttl1 + spn_ttl2 + spn_ttl3 + spn_ttl4 + spn_ttl5 + spn_ttl6;
document.getElementById("fl_dpch").innerHTML = fl_ttl5 + fl_ttl6 + fl_ttl3 + fl_ttl4 + fl_ttl1 + fl_ttl2;
document.getElementById("dt_dpch").innerHTML = misc_ttl3;
document.getElementById("rr_dpch").innerHTML = misc_ttl4; 
document.getElementById("nrn_dpch").innerHTML = nr_ttl5 + nr_ttl6 + nr_ttl3 + nr_ttl4 + nr_ttl1 + nr_ttl2;
document.getElementById("rnwl_dpch").innerHTML = nr_ttl5 + nr_ttl6 + nr_ttl3 + nr_ttl4 + nr_ttl1 + nr_ttl2;
document.getElementById("adc_dpch").innerHTML = addlc_ttl1 + addlc_ttl2 + addlc_ttl3 + addlc_ttl4;
document.getElementById("othr_dpch").innerHTML =  othrs_ttl1 + othrs_ttl4 + othrs_ttl2 + othrs_ttl3;
// MISC Total
document.getElementById("misc_awp").innerHTML = addlc_ttl1 + othrs_ttl1;
document.getElementById("misc_awt").innerHTML = addlc_ttl1 + addlc_ttl2 + othrs_ttl1 + othrs_ttl4;
document.getElementById("misc_awf").innerHTML = addlc_ttl2 + othrs_ttl4
document.getElementById("misc_app").innerHTML = addlc_ttl3+ spn_ttl3 + fl_ttl5;
document.getElementById("misc_apf").innerHTML = addlc_ttl4 + othrs_ttl3;
document.getElementById("misc_apt").innerHTML = addlc_ttl3 + addlc_ttl4 + othrs_ttl2 + othrs_ttl3;
document.getElementById("misc_mt").innerHTML = misc_ttl3 + misc_ttl4;
document.getElementById("misc_dpch").innerHTML = misc_ttl3 + misc_ttl4 + othrs_ttl1 + othrs_ttl2 + addlc_ttl1 + addlc_ttl2 + addlc_ttl3 + addlc_ttl4;

// DL Count
document.getElementById("dl_awp").innerHTML = spn_ttl1 + fl_ttl3 + nr_ttl3 + addlc_ttl1 + othrs_ttl1;
document.getElementById("dl_awf").innerHTML = spn_ttl2 + fl_ttl4 + nr_ttl4 + addlc_ttl2 + othrs_ttl4;
document.getElementById("dl_awt").innerHTML = ttl_dpch2 + nr_ttl3 + nr_ttl4 + addlc_ttl1 + addlc_ttl2 + othrs_ttl1 + othrs_ttl4;
document.getElementById("dl_app").innerHTML = spn_ttl3 + fl_ttl5 + nr_ttl5 + addlc_ttl3+ spn_ttl3 + fl_ttl5;
document.getElementById("dl_apf").innerHTML = addlc_ttl4 + othrs_ttl3 + spn_ttl4 + fl_ttl6 + nr_ttl6;
document.getElementById("dl_apt").innerHTML = nr_ttl5 + nr_ttl6 + ttl_dpch3 + addlc_ttl3 + addlc_ttl4 + othrs_ttl2 + othrs_ttl3;
document.getElementById("dl_dnm").innerHTML = spn_ttl5 + fl_ttl1;
document.getElementById("dl_dnf").innerHTML = fl_ttl2 + spn_ttl6;
document.getElementById("dl_dnt").innerHTML = spn_ttl5 + fl_ttl1 + fl_ttl2 + spn_ttl6;
document.getElementById("dl_drm").innerHTML = nr_ttl1;
document.getElementById("dl_drf").innerHTML = nr_ttl2;
document.getElementById("dl_drt").innerHTML = nr_ttl1 + nr_ttl2;
document.getElementById("dl_dtm").innerHTML = spn_ttl5 + fl_ttl1 + nr_ttl1;
document.getElementById("dl_dtf").innerHTML = nr_ttl2 + fl_ttl2 + spn_ttl6;
document.getElementById("dl_dtt").innerHTML = spn_ttl5 + spn_ttl6 + fl_ttl1 + fl_ttl2 + nr_ttl1 + nr_ttl2;
document.getElementById("dl_misc").innerHTML = misc_ttl3 + misc_ttl4;
document.getElementById("dl_dpch").innerHTML = ttl_dpch1 + ttl_dpch2 + ttl_dpch3 + nr_ttl5 + nr_ttl6 + nr_ttl3 + nr_ttl4 + nr_ttl1 + nr_ttl2 + misc_ttl3 + misc_ttl4 + othrs_ttl1 + othrs_ttl2 + addlc_ttl1 + addlc_ttl2 + addlc_ttl3 + addlc_ttl4;
// TOTAL OF ALL
let dpcha1 = ttl_dpch1 + ttl_dpch2 + ttl_dpch3 + nr_ttl5 + nr_ttl6 + nr_ttl3 + nr_ttl4 + nr_ttl1 + nr_ttl2 + misc_ttl3 + misc_ttl4 + othrs_ttl1 + othrs_ttl2 + addlc_ttl1 + addlc_ttl2 + addlc_ttl3 + addlc_ttl4;
let dpcha2 = sp_ttl1 + sp_ttl3 + sp_ttl2 + sp_ttl4 + misc_ttl1;
let dpcha3 = cl_ttl3 + cl_ttl4 + cl_ttl5 + cl_ttl6 + cl_ttl1 + cl_ttl2 + misc_ttl2;

document.getElementById("ttl_awp").innerHTML = cl_ttl1 + spn_ttl1 + fl_ttl3 + nr_ttl3 + addlc_ttl1 + othrs_ttl1;
document.getElementById("ttl_awf").innerHTML = spn_ttl2 + fl_ttl4 + nr_ttl4 + addlc_ttl2 + othrs_ttl4 + cl_ttl2;
document.getElementById("ttl_awt").innerHTML = cl_ttl1 + cl_ttl2 + ttl_dpch2 + nr_ttl3 + nr_ttl4 + addlc_ttl1 + addlc_ttl2 + othrs_ttl1 + othrs_ttl4;
document.getElementById("ttl_app").innerHTML = spn_ttl3 + fl_ttl5 + nr_ttl5 + addlc_ttl3+ spn_ttl3 + fl_ttl5;
document.getElementById("ttl_apf").innerHTML = addlc_ttl4 + othrs_ttl3 + spn_ttl4 + fl_ttl6 + nr_ttl6;
document.getElementById("ttl_apt").innerHTML = nr_ttl5 + nr_ttl6 + ttl_dpch3 + addlc_ttl3 + addlc_ttl4 + othrs_ttl2 + othrs_ttl3;
document.getElementById("ttl_dnm").innerHTML = spn_ttl5 + fl_ttl1 + cl_ttl3 + sp_ttl1;
document.getElementById("ttl_dnf").innerHTML = fl_ttl2 + spn_ttl6 + cl_ttl4 + sp_ttl2;
document.getElementById("ttl_dnt").innerHTML = spn_ttl5 + fl_ttl1 + fl_ttl2 + spn_ttl6 + cl_ttl3 + cl_ttl4 + sp_ttl1 + sp_ttl2;
document.getElementById("ttl_drm").innerHTML = nr_ttl1 + cl_ttl5 + sp_ttl3;
document.getElementById("ttl_drf").innerHTML = nr_ttl2 + cl_ttl6 + sp_ttl4;
document.getElementById("ttl_drt").innerHTML = nr_ttl1 + nr_ttl2 + cl_ttl5 + cl_ttl6 + sp_ttl3 + sp_ttl4;
document.getElementById("ttl_dtm").innerHTML = sp_ttl1 + sp_ttl3 + cl_ttl3 + cl_ttl5 + spn_ttl5 + fl_ttl1 + nr_ttl1;
document.getElementById("ttl_dtf").innerHTML = sp_ttl2 + sp_ttl4 + cl_ttl4 + cl_ttl6 + nr_ttl2 + fl_ttl2 + spn_ttl6;
document.getElementById("ttl_dtt").innerHTML = sp_ttl1 + sp_ttl3 + sp_ttl2 + sp_ttl4 + cl_ttl3 + cl_ttl4 + cl_ttl5 + cl_ttl6 + spn_ttl5 + spn_ttl6 + fl_ttl1 + fl_ttl2 + nr_ttl1 + nr_ttl2;
document.getElementById("ttl_misc").innerHTML = misc_ttl3 + misc_ttl4;
document.getElementById("ttl_dpch").innerHTML = dpcha1 + dpcha2 + dpcha3;