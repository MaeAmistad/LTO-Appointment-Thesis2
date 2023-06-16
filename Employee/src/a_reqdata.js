bck.addEventListener('click',() => {
    window.location = "a_appList.html";
}); 

var blur = document.getElementById('blur');

apprd.addEventListener('click',() => {
    document.getElementById('cnfrm_modal').style.visibility = "visible";
    blur.classList.toggle('active')
});
dclnd.addEventListener('click',() => {
    document.getElementById('cnfrm_modal2').style.visibility = "visible";
    blur.classList.toggle('active')
});
delttr.addEventListener('click',() => {
    document.getElementById('cnfrm_modal3').style.display = "block";
    blur.classList.toggle('active')
});
edittr.addEventListener('click',() => {
    document.getElementById('cnfrm_modal4').style.display = "block";
    blur.classList.toggle('active')
});
cnl.addEventListener('click',() => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal').style.visibility = "hidden";
    blur.classList.toggle('active')
});  
cnl2.addEventListener('click',() => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal2').style.visibility = "hidden";
    blur.classList.toggle('active')
});
cnl3.addEventListener('click',() => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal3').style.visibility = "hidden";
    blur.classList.toggle('active')
});
cnl4.addEventListener('click',() => {
    window.location = "a_reqdata.html";
    blur.classList.toggle('active')
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection, updateDoc,doc,deleteDoc  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

// EDIT VALUE
let fned = document.getElementById("fnedit")
let lned = document.getElementById("lnedit")
let mned = document.getElementById("mnedit")
let dobed = document.getElementById("dobedit")
let gnrded = document.getElementById("gndredit")
let added = document.getElementById("addedit")
let emled = document.getElementById("emledit")
let mnmed = document.getElementById("mnmedit")
let ltmsed = document.getElementById("ltmsidedit")

let pltnoed  = document.getElementById("pltno")
let typed  = document.getElementById("type")
let refed = document.getElementById("refrtypee")
let yrmed  = document.getElementById("yr_mdl")
let mksed  = document.getElementById("mksrs")
let mtrned  = document.getElementById("mtrno")
let chssned  = document.getElementById("chassno")
let cled  = document.getElementById("color")
let fled  = document.getElementById("fuel")
let fileed  = document.getElementById("fileno")
let dtred = document.getElementById("dtrgstrd")
let depted  = document.getElementById("deptagncy")

//get all data   
    var transID = localStorage.getItem("stat");
    var ID = localStorage.getItem("ID");
    var stt = localStorage.getItem("stat")
    
    const querySnapshot2 = await getDocs(collection(db,"Applicants"));

    console.log(ID)
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

                if (doc2.data().User_AT == "REVISION OF RECORDS"){
                    document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                    document.getElementById("dof").innerHTML = doc2.data().User_BD;
                    document.getElementById("gndr").innerHTML = doc2.data().User_GN;
                    document.getElementById("tID").innerHTML = doc2.data().User_AppID; 
                    document.getElementById("tt").innerHTML = doc2.data().User_TT;
                    document.getElementById("laa").innerHTML = doc2.data().User_Laa;
                    document.getElementById("at").innerHTML = doc2.data().User_AT + " (" +  doc2.data().User_Rev + ")";
                    document.getElementById("dt_L").innerHTML = doc2.data().User_D;
                    document.getElementById("dt_t").innerHTML = doc2.data().User_T;
                    document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
                    document.getElementById("em").innerHTML = doc2.data().User_E;
                    document.getElementById("mnn").innerHTML = doc2.data().User_CN;
                    document.getElementById("ltmsid").innerHTML = doc2.data().User_LTMS;

                    // DISPLAY EDIT INFO
                    fned.value = doc2.data().User_FN;
                    lned.value = doc2.data().User_LN;
                    mned.value = doc2.data().User_MN;
                    dobed.value = doc2.data().User_BD;
                    gnrded.value = doc2.data().User_GN;
                    added.value = doc2.data().User_ADD;
                    emled.value = doc2.data().User_E;
                    mnmed.value = doc2.data().User_CN;
                    ltmsed.value = doc2.data().User_LTMS;
                    // MV
                    document.getElementById('mv-table').style.display = "none";
                    document.getElementById('mvtitle').style.display = "none";
                    document.getElementById('mvinfo').style.display = "none";
                }
                else if (doc2.data().User_TT == "LICENSING"){
                    document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                    document.getElementById("dof").innerHTML = doc2.data().User_BD;
                    document.getElementById("gndr").innerHTML = doc2.data().User_GN;
                    document.getElementById("tID").innerHTML = doc2.data().User_AppID; 
                    document.getElementById("tt").innerHTML = doc2.data().User_TT;
                    document.getElementById("laa").innerHTML = doc2.data().User_Laa;
                    document.getElementById("at").innerHTML = doc2.data().User_AT;
                    document.getElementById("dt_L").innerHTML = doc2.data().User_D;
                    document.getElementById("dt_t").innerHTML = doc2.data().User_T;
                    document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
                    document.getElementById("em").innerHTML = doc2.data().User_E;
                    document.getElementById("mnn").innerHTML = doc2.data().User_CN;
                    document.getElementById("ltmsid").innerHTML = doc2.data().User_LTMS;

                    // DISPLAY EDIT INFO
                    fned.value = doc2.data().User_FN;
                    lned.value = doc2.data().User_LN;
                    mned.value = doc2.data().User_MN;
                    dobed.value = doc2.data().User_BD;
                    gnrded.value = doc2.data().User_GN;
                    added.value = doc2.data().User_ADD;
                    emled.value = doc2.data().User_E;
                    mnmed.value = doc2.data().User_CN;
                    ltmsed.value = doc2.data().User_LTMS;

                    document.getElementById('mv-table').style.display = "none";
                    document.getElementById('mvtitle').style.display = "none";
                    document.getElementById('mvinfo').style.display = "none";
                }
                else if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION"){
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
                    document.getElementById("ltmsid").innerHTML = doc2.data().User_LTMS;

                    document.getElementById("plate_num").innerHTML = doc2.data().pltno;
                    document.getElementById("typee").innerHTML = doc2.data().typel;
                    document.getElementById("reftypee").innerHTML = doc2.data().refrigerant_typ;
                    document.getElementById("mk_seris").innerHTML = doc2.data().mksrs;
                    document.getElementById("mot_num").innerHTML = doc2.data().mtrno; 
                    document.getElementById("cha_num").innerHTML = doc2.data().chassno;
                    document.getElementById("colorr").innerHTML = doc2.data().color;
                    document.getElementById("fuell").innerHTML = doc2.data().fuel;
                    document.getElementById("filno").innerHTML = doc2.data().fileno;
                    document.getElementById("dt_reg").innerHTML = doc2.data().dtrgstrd;
                    document.getElementById("transctionmv").innerHTML = doc2.data().trnsctn;
                    document.getElementById("deptAgncy").innerHTML = doc2.data().deptagncy;

                    // DISPLAY EDIT INFO
                    fned.value = doc2.data().User_FN;
                    lned.value = doc2.data().User_LN;
                    mned.value = doc2.data().User_MN;
                    dobed.value = doc2.data().User_BD;
                    gnrded.value = doc2.data().User_GN;
                    added.value = doc2.data().User_ADD;
                    emled.value = doc2.data().User_E;
                    mnmed.value = doc2.data().User_CN;
                    ltmsed.value = doc2.data().User_LTMS;

                    pltnoed.value = doc2.data().pltno;
                    typed.value = doc2.data().typel;
                    yrmed.value = doc2.data().yr_modell;
                    mksed.value = doc2.data().mksrs;
                    mtrned.value = doc2.data().mtrno;
                    chssned.value = doc2.data().chassno;
                    cled.value = doc2.data().color;
                    fled.value = doc2.data().fuel;
                    fileed.value = doc2.data().fileno;
                    dtred.value = doc2.data().dtrgstrd;
                    depted.value = doc2.data().deptagncy;

                    // MV EDIT INFO
                    document.getElementById('cnfrm_modal4').style.marginTop = "-580px";
                    document.getElementById('cnfrm_modal4').style.position = "relative";
                    document.getElementById('cnfrm_modal4').style.zIndex = "999";

                    document.getElementById("laa").style.display = "none"
                    document.getElementById("laa2").style.display = "none"
                }

            }
            

            // console.log(trnidlic)
            cnfrm.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)

                if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION"){ 
                    if (stt == doc2.data().User_AppID){
                        updateDoc(updateStat, {
                            User_Stat: "APPROVED_TO_CASHIER",
                            User_TransID: trnidmvr
                        }).then(() => {
                            window.location = "a_appList.html" 
                        })
                    } 
                    
                }
                else if(doc2.data().User_TT == "LICENSING"){
                    if (stt == doc2.data().User_AppID){
                        updateDoc(updateStat, {
                            User_Stat: "APPROVED_TO_CASHIER",
                            User_TransID: trnidlic 
                        }).then(() => {
                            window.location = "a_appList.html"
                        })
                    }
                }

            }) 

            cnfrm2.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)

                if (stt == doc2.data().User_AppID){
                    updateDoc(updateStat, {
                        User_Stat: "DECLINED"
                    }).then(() => {
                        window.location = "a_appList.html"
                    })
                }
            })
            // to be continued 
            cnfrm3.addEventListener('click', (e) => {
                if (stt == doc2.data().User_AppID){
                    deleteDoc(doc(db, "Applicants", doc2.id)).then(() => {
                        window.location = "a_appList.html"
                    });
                }
                
            })

            cnfrm4.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                // To be Continued, Add MV info 
                if (stt == doc2.data().User_AppID){
                    updateDoc(updateStat, {
                        User_LN: lned.value,
                        User_FN: fned.value,
                        User_MN: mned.value,
                        User_BD: dobed.value,
                        User_GN: gnrded.value,
                        User_ADD: added.value,
                        User_E: emled.value,
                        User_CN: mned.value,
                        User_LTMS: ltmsed.value
                    }).then(() => {
                        window.location = "a_reqdata.html"
                        // console.log("EDIT")
                    })
                }
                
            })
    });
