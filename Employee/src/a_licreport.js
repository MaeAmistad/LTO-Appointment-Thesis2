bcklic.addEventListener('click' , () => {
    window.location = "a_licdashboard.html"
  })  
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
let mmsp = dd.slice(3,5);

// Current Count
if(mmsp == currentmonth){
  if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){    
    // document.getElementById("sp_dpch").innerHTML = spttal+=1;

    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        let sp_nm = sp1n+=1;        
        localStorage.setItem("sp_dnmm",sp_nm);
        document.getElementById("sp_dnm").innerHTML = sp_nm;

      }
      else if(doc.data().User_GN == "FEMALE"){
        let sp_nf = sp2n+=1;        
        localStorage.setItem("sp_dnff",sp_nf);
        document.getElementById("sp_dnf").innerHTML = sp_nf; 
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        let sp_rnm = sp1rn+=1;        
        localStorage.setItem("sp_rnmm",sp_rnm);
        document.getElementById("sp_drm").innerHTML = sp_rnm;

      }
      else if(doc.data().User_GN == "FEMALE"){
        let sp_rnf = sp2rn+=1;        
        localStorage.setItem("sp_rnff",sp_rnf);
        document.getElementById("sp_drf").innerHTML = sp_rnf;
        
      }
    }
  }

  // Conductors License
  if(doc.data().laa == "CONDUCTOR'S LICENSE"){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        let cl_nm = cl1n+=1;        
        localStorage.setItem("cl_dnmm",cl_nm);
        document.getElementById("cl_dnm").innerHTML = cl_nm;

      }
      else if(doc.data().User_GN == "FEMALE"){
        let cl_nf = cl2n+=1;        
        localStorage.setItem("cl_dnff",cl_nf);
        document.getElementById("cl_dnf").innerHTML = cl_nf; 
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        let cl_rnm = cl1rn+=1;        
        localStorage.setItem("cl_rnmm",cl_rnm);
        document.getElementById("cl_drm").innerHTML = cl_rnm;

      }
      else if(doc.data().User_GN == "FEMALE"){
        let cl_rnf = cl2rn+=1;        
        localStorage.setItem("cl_rnff",cl_rnf);
        document.getElementById("cl_drf").innerHTML = cl_rnf;
      }
    }
  }

  if(doc.data().laa == "DRIVER'S LICENSE"){
    if(doc.data().at == "NEW"){
      if(doc.data().User_GN == "MALE"){
        let  spn_m = spnw_mal+=1;        
        localStorage.setItem("spn_ml",spn_m);
        document.getElementById("spdl_dnm").innerHTML = spn_m;
      }
      else if(doc.data().User_GN == "FEMALE"){
        let spn_f = spnw_fem+=1;        
        localStorage.setItem("spn_fm",spn_f);
        document.getElementById("spdl_dnf").innerHTML = spn_f;
      }
    }

    else if(doc.data().at == "CONVERSION OF FOREIGN DL"){
      if(doc.data().User_GN == "MALE"){
        let  spn_m = flnw_mal+=1;        
        localStorage.setItem("fl_dnm",spn_m);
        document.getElementById("fl_dnm").innerHTML = spn_m;
      }
      else if(doc.data().User_GN == "FEMALE"){
        let spn_f = flnw_fem+=1;        
        localStorage.setItem("fl_dnf",spn_f);
        document.getElementById("fl_dnf").innerHTML = spn_f;
      }
    }

    if(doc.data().at == "RENEWAL"){
      if(doc.data().User_GN == "MALE"){
        let  spn_m = rn_mal+=1;        
        localStorage.setItem("rn_drnm",spn_m);
        document.getElementById("nrn_drm").innerHTML = spn_m;
      }
      else if(doc.data().User_GN == "FEMALE"){
        let spn_f = rn_fem+=1;        
        localStorage.setItem("rn_drnf",spn_f);
        document.getElementById("nrn_drf").innerHTML = spn_f;
      }
    }
  }

  

}

});

  // var student_permit =
  // Computation
  let dpchtotl = parseInt(localStorage.getItem("dlch_cnt1mon")) + parseInt(localStorage.getItem("dlch_cnt2mon")) + parseInt(localStorage.getItem("dlch_cnt3mon")) +  parseInt(localStorage.getItem("dlch_cnt4mon"));
  let sp_nttal = parseInt(localStorage.getItem("sp_dnmm")) + parseInt(localStorage.getItem("sp_dnff"));
  let sp_rnttal = parseInt(localStorage.getItem("sp_rnmm")) + parseInt(localStorage.getItem("sp_rnff"));
  let sp_ttalm = parseInt(localStorage.getItem("sp_dnmm")) + parseInt(localStorage.getItem("sp_rnmm"));
  let sp_ttalf = parseInt(localStorage.getItem("sp_dnff")) + parseInt(localStorage.getItem("sp_rnff"));

  document.getElementById("sp_dnt").innerHTML = sp_nttal;
  document.getElementById("sp_drt").innerHTML = sp_rnttal;
  document.getElementById("sp_dtm").innerHTML = sp_ttalm;
  document.getElementById("sp_dtf").innerHTML = sp_ttalf;
  document.getElementById("sp_dtt").innerHTML = sp_ttalm + sp_ttalf;
  document.getElementById("sp_mt").innerHTML = localStorage.getItem("mscntotalmon");
 
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

  // CL
    if(doc.data().laa == "CONDUCTOR'S LICENSE"){
      // document.getElementById("cl_dpch").innerHtml = clttl+=1;
      if(doc.data().result == "PASSED"){
        let cl_wf = cl_pw+=1;      
        localStorage.setItem("cl_pw",cl_wf);
        document.getElementById("cl_awp").innerHTML = cl_wf;
      }
      else if(doc.data().result == "FAILED"){
        let cl_wp = cl_fw+=1;      
        localStorage.setItem("cl_fw",cl_wp);
        document.getElementById("cl_awf").innerHTML = cl_wp;
      }
    }
   
    if(doc.data().Laa == "DRIVER'S LICENSE"){
       // DL New
      if(doc.data().at == "NEW"){
        if(doc.data().result == "PASSED"){
          let  nw_pw = new_pw+=1;
          localStorage.setItem("new_wp",nw_pw);
          document.getElementById("spdl_awp").innerHTML = nw_pw;
        }
        else if(doc.data().result == "FAILED"){
          let nw_fw = new_fw+=1;
          localStorage.setItem("new_wf",nw_fw);
          document.getElementById("spdl_awf").innerHTML = nw_fw;
        }
      }
      // DL ADC
      if(doc.data().at == "ADDITIONAL CODE OR CATEGORY"){
        if(doc.data().result == "PASSED"){
          let adl_pp = adl_pw+=1;
          localStorage.setItem("adc_pw",adl_pp);
          document.getElementById("adc_awp").innerHTML = adl_pp;
        }
        else if(doc.data().result == "FAILED"){
          let adl_pf = adl_fw+=1;
          localStorage.setItem("adc_fw",adl_pf);
          document.getElementById("adc_awf").innerHTML = adl_pf;
        }
      }

      else if (doc.data().at == "CHANGE OF DL CLASSIFICATION" || doc.data().at == "EXPIRED DL WITH VALID FDL" || doc.data().at == "DROPPING OF CATEGORY OR ADD'L OR REMOVAL OF DRIVING CONDITIONS"){
        if(doc.data().result == "PASSED"){
          let othr_1 = other1_pw+=1;
          localStorage.setItem("othr1_awp",othr_1);
          document.getElementById("othr_awp").innerHTML = othr_1;
        }
        else if(doc.data().result == "FAILED"){
          let othr_2 = other1_fw+=1;
          localStorage.setItem("othr1_awf",othr_2);
          document.getElementById("othr_awf").innerHTML = othr_2;
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

    if(doc.data().Laa == "DRIVER'S LICENSE"){
    // DL New
    if(doc.data().at == "NEW"){
      if(doc.data().result == "PASSED"){
        let  nw_pw = new_pp+=1;
        localStorage.setItem("new_pp",nw_pw);
        document.getElementById("spdl_app").innerHTML = nw_pw;
      }
      else if(doc.data().result == "FAILED"){
        let nw_fw = new_fp+=1;
        localStorage.setItem("new_pf",nw_fw);
        document.getElementById("spdl_apf").innerHTML = nw_fw;
      }
    }
      // DL ADC
      if(doc.data().at == "ADDITIONAL CODE OR CATEGORY"){
        if(doc.data().result == "PASSED"){
          let adc_pp = adl_pp+=1;
          localStorage.setItem("adc_pp",adc_pp);
          document.getElementById("adc_app").innerHTML = adc_pp;
        }
        else if(doc.data().result == "FAILED"){
          let adl_pf = adl_fp+=1;
          localStorage.setItem("adc_fp",adl_pf);
          document.getElementById("adc_apf").innerHTML = adl_pf;
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


  });
  // MISC TXN
  const misc_ttal = await getDocs(collection(db,"License"));
   let misc_ttld = 0;
   let misc_ttlrr = 0;
  misc_ttal.forEach((doc) => {
    if (doc.data().at == "DUPLICATE"){
      var misc_ttl = misc_ttld+=1;
      document.getElementById("dt_misc").innerHTML = misc_ttl;
    }
    else if (doc.data().at == "DUPLICATE"){
      var misc_ttlr = misc_ttlrr+=1;
      document.getElementById("dt_dpch").innerHTML = misc_ttlr;
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

// Count Total
// document.getElementById("").innerHTML = parseInt(localStorage.getItem("")) + parseInt(localStorage.getItem(""));
document.getElementById("sp_dnt").innerHTML = parseInt(localStorage.getItem("sp_dnmm")) + parseInt(localStorage.getItem("sp_dnff"));
document.getElementById("sp_drt").innerHTML = parseInt(localStorage.getItem("sp_rnmm")) + parseInt(localStorage.getItem("sp_rnff"));
document.getElementById("sp_dtm").innerHTML = parseInt(localStorage.getItem("sp_dnmm")) + parseInt(localStorage.getItem("sp_rnmm"));
document.getElementById("sp_dtf").innerHTML = parseInt(localStorage.getItem("sp_dnff")) + parseInt(localStorage.getItem("sp_rnff"));
document.getElementById("sp_dtt").innerHTML = parseInt(localStorage.getItem("sp_dnmm")) + parseInt(localStorage.getItem("sp_rnmm")) + parseInt(localStorage.getItem("sp_dnff")) + parseInt(localStorage.getItem("sp_rnff"));