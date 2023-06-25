bck.addEventListener('click', () => {
    window.location = "pc_homepage.html";
});
// BLUR BG
var blur = document.getElementById('blur');

apprd.addEventListener('click', () => {
    document.getElementById('cnfrm_modal').style.visibility = "visible";
    blur.classList.toggle('active')
});
dclnd.addEventListener('click', () => {
    document.getElementById('cnfrm_modal2').style.visibility = "visible";
    blur.classList.toggle('active')
});
cnl.addEventListener('click', () => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal').style.visibility = "hidden";
    blur.classList.toggle('active')
});
cnl2.addEventListener('click', () => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal2').style.visibility = "hidden";
    blur.classList.toggle('active')
});

// var tranID = localStorage.getItem("stat");
// document.getElementById('tranID').innerHTML = tranID;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, setDoc, doc, collection, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
const auth = getAuth();

//get all data   
var transID = localStorage.getItem("stat");
var ID = localStorage.getItem("ID");

const querySnapshot2 = await getDocs(collection(db, "Applicants"));
// Random Number for Transact ID
function makeid(l) {
    var text = "";
    var number = "0123456789"
    var char_list = (number)
    for (var i = 0; i < l; i++) {
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

var trnidlic = "LTO-LIC-" + yy + mmm + ddd + hhh + mnn + makeid(2);
var trnidmvr = "LTO-MVR-" + yy + mmm + ddd + hhh + mnn + makeid(2);

querySnapshot2.forEach(doc2 => {

    if (transID == doc2.data().User_AppID) {

        if (doc2.data().User_AT == "REVISION OF RECORDS") {
            document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
            document.getElementById("dof").innerHTML = doc2.data().User_BD;
            document.getElementById("gndr").innerHTML = doc2.data().User_GN;
            document.getElementById("tID").innerHTML = doc2.data().User_AppID;
            document.getElementById("tt").innerHTML = doc2.data().User_TT;
            document.getElementById("laa").innerHTML = doc2.data().User_Laa;
            document.getElementById("at").innerHTML = doc2.data().User_AT + "(" + doc2.data().User_Rev + ")";
            document.getElementById("dt_L").innerHTML = doc2.data().User_D;
            document.getElementById("dt_t").innerHTML = doc2.data().User_T;
            document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
            document.getElementById("em").innerHTML = doc2.data().User_E;
            document.getElementById("mnn").innerHTML = doc2.data().User_CN;
            document.getElementById("fees").innerHTML = doc2.data().User_Payment;

            document.getElementById('mv-table').style.display = "none";
            document.getElementById('mvtitle').style.display = "none";
        }
        else if (doc2.data().User_TT == "LICENSING") {
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
            document.getElementById("fees").innerHTML = doc2.data().User_Payment;

            document.getElementById('mv-table').style.display = "none";
            document.getElementById('mvtitle').style.display = "none";
        }
        else if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION") {
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
            document.getElementById("mvuc").innerHTML = doc2.data().User_Payment;

            document.getElementById("laa").style.display = "none"
            document.getElementById("laa2").style.display = "none"
        }

    }
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = year + "-" + month + "-" + day;
    // TIME TODAY 
    let hrs = date.getHours();
    let mnts = date.getMinutes();
    let time = hrs + ":" + mnts;

    var additionalFee = document.getElementById("addFee");
    // Saving Data
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.uid)
            onSnapshot(doc(db, "Users", "Employee", "EmployeeData", user.uid), (doc1) => {
                // console.log(doc.data())

                var employees = doc1.data().user_LN + ", " + doc1.data().user_FN + " " + doc1.data().user_MN;



                cnfrm.addEventListener('click', (e) => {
                    const updateStat = doc(db, "Applicants", doc2.id)
                    var stt = localStorage.getItem("stat")

                    if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION") {

                        if (stt == doc2.data().User_AppID) {
                            updateDoc(updateStat, {
                                User_Stat2: "APPROVED_TO_CASHIER",
                                User_Stat: "APPROVED_TO_CASHIER",
                                User_TransID: trnidmvr,
                                User_AdditionalFee: additionalFee.value,
                                User_EvaluatorName: employees,
                                User_EvaluatorDate: today + " , " + time
                            }).then(() => {
                                window.location = "pc_homepage.html"
                            })
                        }

                    }
                    else if (doc2.data().User_TT == "LICENSING") {
                        if (stt == doc2.data().User_AppID) {
                            updateDoc(updateStat, {
                                User_Stat2: "APPROVED_TO_CASHIER",
                                User_Stat: "APPROVED_TO_CASHIER",
                                User_TransID: trnidlic,
                                User_AdditionalFee: additionalFee.value,
                                User_EvaluatorName: employees,
                                User_EvaluatorDate: today + " , " + time
                            }).then(() => {
                                window.location = "pc_homepage.html"
                                // console.log(additionalFee.value)
                                // console.log(employees)
                            })
                        }
                    }

                })

                cnfrm2.addEventListener('click', (e) => {
                    const updateStat = doc(db, "Applicants", doc2.id)
                    var stt = localStorage.getItem("stat")

                    if (stt == doc2.data().User_AppID) {
                        updateDoc(updateStat, {
                            User_Stat2: "DECLINED",
                            User_Stat: "DECLINED",
                            User_EvaluatorName: employees,
                            User_EvaluatorDate: today + " , " + time
                        }).then(() => {
                            window.location = "pc_homepage.html"
                            // console.log(employees)
                        })
                    }
                })

            });
        }
    });


});
