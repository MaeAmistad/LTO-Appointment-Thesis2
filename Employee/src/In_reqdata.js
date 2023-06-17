bck.addEventListener('click',() => {
    window.location = "In_homepage.html";

    localStorage.removeItem("ui1");
    localStorage.removeItem("ui2");
    localStorage.removeItem("ui3");
    localStorage.removeItem("ui4"); 
    localStorage.removeItem("ui5"); 
    localStorage.removeItem("ui6");
    localStorage.removeItem("ui7");
    localStorage.removeItem("ui8");
    localStorage.removeItem("ui9");
    localStorage.removeItem("ui11");
    localStorage.removeItem("ui12");
    localStorage.removeItem("ui13");
});  
 
// BLUR BG
var blur = document.getElementById('blur');


apprd.addEventListener('click',() => {
    if (localStorage.getItem("ui1") == null && localStorage.getItem("ui2") == null && localStorage.getItem("ui12") == null && localStorage.getItem("ui3") == null &&localStorage.getItem("ui4") == null &&localStorage.getItem("ui5") == null &&localStorage.getItem("ui6") == null &&localStorage.getItem("ui7") == null &&localStorage.getItem("ui8") == null &&localStorage.getItem("ui9") == null &&localStorage.getItem("ui11") == null) {
      Swal.fire({
          title: "Motor Vehicle Info is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui1") == null){
      Swal.fire({
          title: "PLate Number is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui2") == null){
      Swal.fire({
          title: "Type is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui3") == null){
      Swal.fire({
          title: "Make/Series is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui4") == null){
      Swal.fire({
          title: "Motor Number is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui5") == null){
      Swal.fire({
          title: "Chassis Number is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui6") == null){
      Swal.fire({
          title: "Color is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui7") == null){
      Swal.fire({
          title: "Fuel is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui8") == null){
      Swal.fire({
          title: "File Number is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui9") == null){
      Swal.fire({
          title: "Date Registered is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui11") == null){
      Swal.fire({
          title: "Dept./Agency is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui12") == null){
      Swal.fire({
          title: "Refrigerant Type is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else if (localStorage.getItem("ui13") == null){
      Swal.fire({
          title: "Year Model is Empty!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  }
  else{
    document.getElementById('cnfrm_modal').style.visibility = "visible";
    document.getElementById('cnfrm_modal2').style.visibility = "hidden";
    blur.classList.toggle('active')
  }
});
dclnd.addEventListener('click',() => {
    document.getElementById('cnfrm_modal2').style.visibility = "visible";
    document.getElementById('cnfrm_modal').style.visibility = "hidden";
    blur.classList.toggle('active')
});
mvinfo.addEventListener('click',() => {
    document.getElementById('addinf').style.visibility = "visible";
    blur.classList.toggle('active')
});
cnl.addEventListener('click',() => {
    document.getElementById('cnfrm_modal').style.visibility = "hidden";
    blur.classList.toggle('active')
});
cnl2.addEventListener('click',() => {
    document.getElementById('cnfrm_modal2').style.visibility = "hidden";
    blur.classList.toggle('active')
});
cnl3.addEventListener('click',() => {
    document.getElementById('addinf').style.visibility = "hidden";
    blur.classList.toggle('active')
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection, updateDoc,doc,setDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

add.addEventListener('click',() => {
    let pltno = document.getElementById("pltno").value.toUpperCase();
    let type = document.getElementById("type").value.toUpperCase();
    let select= document.querySelector('#refrtypee');
    let refrigernt_typ = select.options[select.selectedIndex].text.toUpperCase();
    let yr_mdl = document.getElementById("yr_mdl").value.toUpperCase();
    let mksrs = document.getElementById("mksrs").value.toUpperCase();
    let mtrno = document.getElementById("mtrno").value.toUpperCase();
    let chassno = document.getElementById("chassno").value.toUpperCase();
    let color = document.getElementById("color").value.toUpperCase();
    let fuel = document.getElementById("fuel").value.toUpperCase();
    let fileno = document.getElementById("fileno").value.toUpperCase();
    let dtrgstrd = document.getElementById("dtrgstrd").value.toUpperCase();
    let deptagncy = document.getElementById("deptagncy").value.toUpperCase();

    if (pltno == "" && type == "" && mksrs == "" && mtrno == "" && yr_mdl == "" && refrigernt_typ == "SELECT:" && chassno == "" && color == ""&& fuel == ""&& fileno == ""&& dtrgstrd == ""&& deptagncy == "") {
        Swal.fire({
            title: "Field is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (pltno == ""){
        Swal.fire({
            title: "Plate Number is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (type == ""){
        Swal.fire({
            title: "Type is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (refrigernt_typ == "SELECT:"){
        Swal.fire({
            title: "Refrigerant Type is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (yr_mdl == ""){
        Swal.fire({
            title: "Year Model is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (mksrs == ""){
        Swal.fire({
            title: "Make/Series is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (mtrno == ""){
        Swal.fire({
            title: "Motor Number is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (chassno == ""){
        Swal.fire({
            title: "Chassis Number is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (color == ""){
        Swal.fire({
            title: "Color is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (fuel == ""){
        Swal.fire({
            title: "Fuel is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (fileno == ""){
        Swal.fire({
            title: "File Number is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (dtrgstrd == ""){
        Swal.fire({
            title: "Date Registered is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (deptagncy == ""){
        Swal.fire({
            title: "Dept/Agency is Empty",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else{
        localStorage.setItem("ui1",pltno);
        localStorage.setItem("ui2",type);
        localStorage.setItem("ui3",mksrs);
        localStorage.setItem("ui4",mtrno);
        localStorage.setItem("ui5",chassno);
        localStorage.setItem("ui6",color);
        localStorage.setItem("ui7",fuel);
        localStorage.setItem("ui8",fileno);
        localStorage.setItem("ui9",dtrgstrd);
        localStorage.setItem("ui11",deptagncy);
        localStorage.setItem("ui12",refrigernt_typ);
        localStorage.setItem("ui13",yr_mdl);

        window.location = "In_reqdata.html" 
    }

});
//get all data
    const querySnapshot2 = await getDocs(collection(db,"Applicants"));

    var transID = localStorage.getItem("stat");
    var ID = localStorage.getItem("ID");

            function makeid(l)
            {
            var text = "";
            var number = "0123456789"
            var char_list = (number)
            for(var i=0; i < l; i++ )
            {  
            text += char_list.charAt(Math.floor(Math.random() * char_list.length));
            }
            return text;
            }

            var yy = new Date().getFullYear().toString().substr(2);
            var mm = new Date().getMonth() + 1;
            var mmm = ("0" + mm).slice(-2);
            var dd = new Date().getDate();
            var ddd = ("0" + dd).slice(-2);
            var hh = new Date().getHours();
            var hhh = ("0" + hh).slice(-2);
            var m = new Date().getMinutes(); 
            var mnn = ("0" + m).slice(-2);

            var trnidlic ="LTO-LIC-" + yy+mmm+ddd+hhh+mnn+makeid(2);
            var trnidmvr ="LTO-MVR-" + yy+mmm+ddd+hhh+mnn+makeid(2);
        querySnapshot2.forEach(doc2 => {
            
            if (transID == doc2.data().User_AppID){

                    if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION"){
                    document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                    document.getElementById("dof").innerHTML = doc2.data().User_BD;
                    document.getElementById("gndr").innerHTML = doc2.data().User_GN;
                    document.getElementById("tID").innerHTML = doc2.data().User_AppID; 
                    document.getElementById("tt").innerHTML = doc2.data().User_TT;
                    document.getElementById("at").innerHTML = doc2.data().User_AT;
                    document.getElementById("dt_L").innerHTML = doc2.data().User_D;
                    document.getElementById("dt_t").innerHTML = doc2.data().User_T;
                    document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
                    document.getElementById("em").innerHTML = doc2.data().User_E;
                    document.getElementById("mnn").innerHTML = doc2.data().User_CN;

                    document.getElementById("trnsctn").value = doc2.data().User_AT;
                }

            }


             // Saving Data
            cnfrm.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")
            
                    if (stt == doc2.data().User_AppID){   
                        updateDoc(updateStat, {
                            User_Stat1: "APPROVED_TO_PROCEED",
                            User_Stat: "APPROVED_TO_PROCEED",
                            User_TransID: trnidmvr,                            
                            pltno: localStorage.getItem("ui1"),
                            typel:localStorage.getItem("ui2"),
                            mksrs:localStorage.getItem("ui3"),
                            mtrno:localStorage.getItem("ui4"),
                            chassno:localStorage.getItem("ui5"),
                            color:localStorage.getItem("ui6"),
                            fuel :localStorage.getItem("ui7"), 
                            fileno:localStorage.getItem("ui8"),
                            dtrgstrd:localStorage.getItem("ui9"),
                            trnsctn: doc2.data().User_AT,
                            deptagncy:localStorage.getItem("ui11"),
                            refrigerant_typ:localStorage.getItem("ui12"),
                            yr_modell: localStorage.getItem("ui13")
                        }).then(() => {
                            localStorage.removeItem("ui1");
                            localStorage.removeItem("ui2");
                            localStorage.removeItem("ui3");
                            localStorage.removeItem("ui4"); 
                            localStorage.removeItem("ui5");
                            localStorage.removeItem("ui6");
                            localStorage.removeItem("ui7");
                            localStorage.removeItem("ui8");
                            localStorage.removeItem("ui9");
                            localStorage.removeItem("ui11");
                            localStorage.removeItem("ui12");
                            localStorage.removeItem("ui13");

                            window.location = "In_homepage.html" 
                        })
                    }
          }) 

            cnfrm2.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")

                if (stt == doc2.data().User_AppID){
                    updateDoc(updateStat, {
                        User_Stat: "DISSAPPROVED",
                        User_Stat1: "DISSAPPROVED"
                    }).then(() => {

                        localStorage.removeItem("ui1");
                        localStorage.removeItem("ui2");
                        localStorage.removeItem("ui3");
                        localStorage.removeItem("ui4"); 
                        localStorage.removeItem("ui5");
                        localStorage.removeItem("ui6");
                        localStorage.removeItem("ui7");
                        localStorage.removeItem("ui8");
                        localStorage.removeItem("ui9");
                        localStorage.removeItem("ui11");
                        localStorage.removeItem("ui12");
                        localStorage.removeItem("ui13");

                        window.location = "In_homepage.html"
                    })
                }
            })  

    document.getElementById('mv-table').style.display = "none";
    document.getElementById('mvtitle').style.display = "none";

    if (localStorage.getItem("ui1") !== null && localStorage.getItem("ui2") !== null && localStorage.getItem("ui12") !== null && localStorage.getItem("ui3") !== null &&localStorage.getItem("ui4") !== null &&localStorage.getItem("ui5") !== null &&localStorage.getItem("ui6") !== null &&localStorage.getItem("ui7") !== null &&localStorage.getItem("ui8") !== null &&localStorage.getItem("ui9") !== null &&localStorage.getItem("ui11") !== null) {
        document.getElementById("plate_num").innerHTML = localStorage.getItem("ui1");
        document.getElementById("typee").innerHTML = localStorage.getItem("ui2");
        document.getElementById("reftypee").innerHTML = localStorage.getItem("ui12");
        document.getElementById("yrmdl").innerHTML = localStorage.getItem("ui13");
        document.getElementById("mk_seris").innerHTML = localStorage.getItem("ui3");
        document.getElementById("mot_num").innerHTML = localStorage.getItem("ui4"); 
        document.getElementById("cha_num").innerHTML = localStorage.getItem("ui5");
        document.getElementById("colorr").innerHTML = localStorage.getItem("ui6");
        document.getElementById("fuell").innerHTML = localStorage.getItem("ui7");
        document.getElementById("filno").innerHTML = localStorage.getItem("ui8");
        document.getElementById("dt_reg").innerHTML = localStorage.getItem("ui9");
        document.getElementById("deptAgncy").innerHTML = localStorage.getItem("ui11");
        document.getElementById("transctionmv").innerHTML = doc2.data().User_AT;

        document.getElementById("pltno").value = localStorage.getItem("ui1");
        document.getElementById("type").value = localStorage.getItem("ui2");
        document.getElementById("refrtypee").text = localStorage.getItem("ui12");
        document.getElementById("yr_mdl").value = localStorage.getItem("ui13");
        document.getElementById("mksrs").value = localStorage.getItem("ui3");
        document.getElementById("mtrno").value = localStorage.getItem("ui4"); 
        document.getElementById("chassno").value = localStorage.getItem("ui5");
        document.getElementById("color").value = localStorage.getItem("ui6");
        document.getElementById("fuel").value = localStorage.getItem("ui7");
        document.getElementById("fileno").value = localStorage.getItem("ui8");
        document.getElementById("dtrgstrd").value = localStorage.getItem("ui9");
        document.getElementById("deptagncy").value = localStorage.getItem("ui11");

        document.getElementById('mv-table').style.display = "block";
        document.getElementById('mvtitle').style.display = "block";

        document.getElementById("mvinfo").innerText = "EDIT MV INFO";


      }

    });


