bck.addEventListener('click', () => {
    window.location = "ca_homepage.html";
});

// BLUR BG
var blur = document.getElementById('blur');

cmplt.addEventListener('click', () => {
    document.getElementById('complete_modal').style.visibility = "visible"
    blur.classList.toggle('active')
});
inc.addEventListener('click', () => {
    document.getElementById('inc_modal').style.visibility = "visible"
    blur.classList.toggle('active')
});
cnl1.addEventListener('click', () => {
    document.getElementById('complete_modal').style.visibility = "hidden"
    blur.classList.toggle('active')
});
cnl2.addEventListener('click', () => {
    document.getElementById('inc_modal').style.visibility = "hidden"
    blur.classList.toggle('active')
});

// var tranID = localStorage.getItem("stat");
// document.getElementById('tranID').innerHTML = tranID;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, setDoc, doc, collection, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
const auth = getAuth();

//get all data
const querySnapshot2 = await getDocs(collection(db, "Applicants"));

var transID = localStorage.getItem("stat");
var ID = localStorage.getItem("ID");
console.log(ID)

var total = localStorage.getItem("payment");
let receipt = document.getElementById("orNumber")
document.getElementById("feeTotal").innerHTML = total + ".00 PHP";
querySnapshot2.forEach(doc2 => {



    if (transID == doc2.data().User_TransID) {

        if (doc2.data().User_AT == "REVISION OF RECORDS") {
            document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
            document.getElementById("dof").innerHTML = doc2.data().User_BD;
            document.getElementById("gndr").innerHTML = doc2.data().User_GN;
            document.getElementById("tID").innerHTML = doc2.data().User_TransID;
            document.getElementById("tt").innerHTML = doc2.data().User_TT;
            document.getElementById("laa").innerHTML = doc2.data().User_Laa;
            document.getElementById("at").innerHTML = doc2.data().User_AT + " (" + doc2.data().User_Rev + ")";
            document.getElementById("dt_L").innerHTML = doc2.data().User_D;
            document.getElementById("dt_t").innerHTML = doc2.data().User_T;
            document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
            document.getElementById("em").innerHTML = doc2.data().User_E;
            document.getElementById("mnn").innerHTML = doc2.data().User_CN;
            document.getElementById("fees").innerHTML = doc2.data().User_Payment;
            document.getElementById("additional_fee").innerHTML = doc2.data().User_AdditionalFee;
            document.getElementById("total_fee").innerHTML = total + ".00";

            document.getElementById("exmt").style.display = "none"
            document.getElementById("et").style.display = "none"

            document.getElementById('mv-table').style.display = "none";
            document.getElementById('mvtitle').style.display = "none";
        }
        else if (doc2.data().User_TT == "LICENSING") {
            if (doc2.data().User_Stat == "PASSED") {
                document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                document.getElementById("dof").innerHTML = doc2.data().User_BD;
                document.getElementById("gndr").innerHTML = doc2.data().User_GN;
                document.getElementById("tID").innerHTML = doc2.data().User_TransID;
                document.getElementById("tt").innerHTML = doc2.data().User_TT;
                document.getElementById("laa").innerHTML = doc2.data().User_Laa;
                document.getElementById("at").innerHTML = doc2.data().User_AT;
                document.getElementById("et").innerHTML = doc2.data().User_examType;
                document.getElementById("dt_L").innerHTML = doc2.data().User_D;
                document.getElementById("dt_t").innerHTML = doc2.data().User_T;
                document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
                document.getElementById("em").innerHTML = doc2.data().User_E;
                document.getElementById("mnn").innerHTML = doc2.data().User_CN;
                document.getElementById("fees").innerHTML = doc2.data().User_Payment;
                document.getElementById("additional_fee").innerHTML = doc2.data().User_AdditionalFee;
                document.getElementById("total_fee").innerHTML = total + ".00";

                document.getElementById('mv-table').style.display = "none";
                document.getElementById('mvtitle').style.display = "none";

            }
            else {

                document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                document.getElementById("dof").innerHTML = doc2.data().User_BD;
                document.getElementById("gndr").innerHTML = doc2.data().User_GN;
                document.getElementById("tID").innerHTML = doc2.data().User_TransID;
                document.getElementById("tt").innerHTML = doc2.data().User_TT;
                document.getElementById("laa").innerHTML = doc2.data().User_Laa;
                document.getElementById("at").innerHTML = doc2.data().User_AT;
                document.getElementById("dt_L").innerHTML = doc2.data().User_D;
                document.getElementById("dt_t").innerHTML = doc2.data().User_T;
                document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
                document.getElementById("em").innerHTML = doc2.data().User_E;
                document.getElementById("mnn").innerHTML = doc2.data().User_CN;
                document.getElementById("fees").innerHTML = doc2.data().User_Payment;
                document.getElementById("additional_fee").innerHTML = doc2.data().User_AdditionalFee;
                document.getElementById("total_fee").innerHTML = total + ".00";

                document.getElementById("exmt").style.display = "none"
                document.getElementById("et").style.display = "none"

                document.getElementById('mv-table').style.display = "none";
                document.getElementById('mvtitle').style.display = "none";
            }
        }
        else if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION") {
            document.getElementById("ln").innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
            document.getElementById("dof").innerHTML = doc2.data().User_BD;
            document.getElementById("gndr").innerHTML = doc2.data().User_GN;
            document.getElementById("tID").innerHTML = doc2.data().User_TransID;
            document.getElementById("tt").innerHTML = doc2.data().User_TT;
            document.getElementById("at").innerHTML = doc2.data().User_AT;
            document.getElementById("dt_L").innerHTML = doc2.data().User_D;
            document.getElementById("dt_t").innerHTML = doc2.data().User_T;
            document.getElementById("addrss").innerHTML = doc2.data().User_ADD;
            document.getElementById("em").innerHTML = doc2.data().User_E;
            document.getElementById("mnn").innerHTML = doc2.data().User_CN;
            document.getElementById("fees").innerHTML = doc2.data().User_Payment;
            document.getElementById("additional_fee").innerHTML = doc2.data().User_AdditionalFee;
            document.getElementById("total_fee").innerHTML = total + ".00";

            document.getElementById("plate_num").innerHTML = doc2.data().pltno;
            document.getElementById("typee").innerHTML = doc2.data().typel;
            document.getElementById("mk_seris").innerHTML = doc2.data().mksrs;
            document.getElementById("mot_num").innerHTML = doc2.data().mtrno;
            document.getElementById("cha_num").innerHTML = doc2.data().chassno;
            document.getElementById("colorr").innerHTML = doc2.data().color;
            document.getElementById("fuell").innerHTML = doc2.data().fuel;
            document.getElementById("filno").innerHTML = doc2.data().fileno;
            document.getElementById("dt_reg").innerHTML = doc2.data().dtrgstrd;
            document.getElementById("transctionmv").innerHTML = doc2.data().trnsctn;
            document.getElementById("deptAgncy").innerHTML = doc2.data().deptagncy;


            document.getElementById("laa").style.display = "none"
            document.getElementById("laa2").style.display = "none"
            document.getElementById("exmt").style.display = "none"
            document.getElementById("et").style.display = "none"
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


    // Saving Data
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.uid)
            onSnapshot(doc(db, "Users", "Employee", "EmployeeData", user.uid), (doc1) => {
                //console.log(doc.data())

                var employees = doc1.data().user_LN + ", " + doc1.data().user_FN + " " + doc1.data().user_MN;

                cnfrm1.addEventListener('click', (e) => {
                    const updateStat = doc(db, "Applicants", doc2.id)
                    var stt = localStorage.getItem("stat")

                    if (receipt.value === '') {
                        Swal.fire({
                            title: 'Please Enter OR Number',
                            confirmButtonColor: '#132aaa',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                    else {

                        if (stt == doc2.data().User_TransID) {
                            if (doc2.data().User_TT == "LICENSING") {
                                // ATC
                                if (doc2.data().User_Stat == "APPROVED_TO_CASHIER") {
                                    // DL
                                    if (doc2.data().User_Laa == "DRIVER'S LICENSE") {

                                        if (doc2.data().User_AT == "NEW") {
                                            updateDoc(updateStat, {
                                                User_Stat4: "COMPLETED",
                                                User_Stat: "COMPLETED",
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            }).then(() => {
                                                window.location = "ca_homepage.html"
                                            })
                                            console.log('condition 1')
                                        }
                                        else if (doc2.data().User_AT == "ADDITIONAL DL CODE OR CATEGORY") {
                                            updateDoc(updateStat, {
                                                User_Stat4: "COMPLETED",
                                                User_Stat: "COMPLETED",
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            }).then(() => {
                                                window.location = "ca_homepage.html"
                                            })
                                            console.log('condition 2')
                                        }
                                        else if (doc2.data().User_AT == "CHANGE OF DL CLASSIFICATION") {
                                            updateDoc(updateStat, {
                                                User_Stat4: "COMPLETED",
                                                User_Stat: "COMPLETED",
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            }).then(() => {
                                                window.location = "ca_homepage.html"
                                            })
                                            console.log('condition 3')
                                        }
                                        else {
                                            updateDoc(updateStat, {
                                                User_Stat4: "RELEASED",
                                                User_Stat: "RELEASED",
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            })
                                            setDoc(doc(db, "License", doc2.data().User_TransID), {
                                                User_name: doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN,
                                                laa: doc2.data().User_Laa,
                                                at: doc2.data().User_AT,
                                                dt_App: doc2.data().User_D,
                                                t_app: doc2.data().User_T,
                                                User_GN: doc2.data().User_GN,
                                                User_BD: doc2.data().User_BD,
                                                User_Add: doc2.data().User_ADD,
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            }).then(() => {
                                                window.location = "ca_homepage.html"
                                            })
                                            console.log('condition 4')
                                        }
                                    }
                                    // CL  
                                    else if (doc2.data().User_Laa == "CONDUCTOR'S LICENSE" && doc2.data().User_AT == "NEW") {
                                        updateDoc(updateStat, {
                                            User_Stat4: "COMPLETED",
                                            User_Stat: "COMPLETED",
                                            User_CashierName: employees,
                                            User_CashierDate: today + " , " + time,
                                            User_TotalPayment: total + ".00",
                                            User_OR: receipt.value
                                        }).then(() => {
                                            window.location = "ca_homepage.html"
                                        })
                                        console.log('condition 5')
                                    }
                                    else {
                                        updateDoc(updateStat, {
                                            User_Stat4: "RELEASED",
                                            User_Stat: "RELEASED",
                                            User_CashierName: employees,
                                            User_CashierDate: today + " , " + time,
                                            User_TotalPayment: total + ".00",
                                            User_OR: receipt.value
                                        })
                                        setDoc(doc(db, "License", doc2.data().User_TransID), {
                                            User_name: doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN,
                                            laa: doc2.data().User_Laa,
                                            at: doc2.data().User_AT,
                                            dt_App: doc2.data().User_D,
                                            t_app: doc2.data().User_T,
                                            User_GN: doc2.data().User_GN,
                                            User_BD: doc2.data().User_BD,
                                            User_Add: doc2.data().User_ADD,
                                            User_CashierName: employees,
                                            User_CashierDate: today + " , " + time,
                                            User_TotalPayment: total + ".00",
                                            User_OR: receipt.value
                                        }).then(() => {
                                            window.location = "ca_homepage.html"
                                        })
                                        console.log('condition 6')
                                    }

                                }
                                // PENDING
                                else if (doc2.data().User_Stat == "PASSED") {
                                    if (doc2.data().User_Laa == "DRIVER'S LICENSE") {
                                        if (doc2.data().User_AT == "NEW") {
                                            updateDoc(updateStat, {
                                                User_Stat4: "RELEASED",
                                                User_Stat: "RELEASED",
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            })
                                            setDoc(doc(db, "License", doc2.data().User_TransID), {
                                                User_name: doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN,
                                                laa: doc2.data().User_Laa,
                                                at: doc2.data().User_AT,
                                                dt_App: doc2.data().User_D,
                                                t_app: doc2.data().User_T,
                                                User_GN: doc2.data().User_GN,
                                                User_BD: doc2.data().User_BD,
                                                User_Add: doc2.data().User_ADD,
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            }).then(() => {
                                                window.location = "ca_homepage.html"
                                            })

                                        }
                                        else if (doc2.data().User_AT == "ADDITIONAL DL CODE OR CATEGORY") {
                                            updateDoc(updateStat, {
                                                User_Stat4: "RELEASED",
                                                User_Stat: "RELEASED",
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            })
                                            setDoc(doc(db, "License", doc2.data().User_TransID), {
                                                User_name: doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN,
                                                laa: doc2.data().User_Laa,
                                                at: doc2.data().User_AT,
                                                dt_App: doc2.data().User_D,
                                                t_app: doc2.data().User_T,
                                                User_GN: doc2.data().User_GN,
                                                User_BD: doc2.data().User_BD,
                                                User_Add: doc2.data().User_ADD,
                                                User_CashierName: employees,
                                                User_CashierDate: today + " , " + time,
                                                User_TotalPayment: total + ".00",
                                                User_OR: receipt.value
                                            }).then(() => {
                                                window.location = "ca_homepage.html"
                                            })
                                        }
                                    }
                                    else if (doc2.data().User_Laa == "CONDUCTOR'S LICENSE" && doc2.data().User_AT == "NEW") {
                                        updateDoc(updateStat, {
                                            User_Stat4: "RELEASED",
                                            User_Stat: "RELEASED",
                                            User_CashierName: employees,
                                            User_CashierDate: today + " , " + time,
                                            User_TotalPayment: total + ".00",
                                            User_OR: receipt.value
                                        })
                                        setDoc(doc(db, "License", doc2.data().User_TransID), {
                                            User_name: doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN,
                                            laa: doc2.data().User_Laa,
                                            at: doc2.data().User_AT,
                                            dt_App: doc2.data().User_D,
                                            t_app: doc2.data().User_T,
                                            User_GN: doc2.data().User_GN,
                                            User_BD: doc2.data().User_BD,
                                            User_Add: doc2.data().User_ADD,
                                            User_CashierName: employees,
                                            User_CashierDate: today + " , " + time,
                                            User_TotalPayment: total + ".00",
                                            User_OR: receipt.value
                                        }).then(() => {
                                            window.location = "ca_homepage.html"
                                        })
                                    }

                                }

                            }
                            // MV
                            else if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION") {
                                updateDoc(updateStat, {
                                    User_Stat4: "REGISTERED",
                                    User_Stat: "REGISTERED",
                                    User_CashierName: employees,
                                    User_CashierDate: today + " , " + time,
                                    User_TotalPayment: total + ".00",
                                    User_OR: receipt.value
                                })
                                setDoc(doc(db, "Motor Vehicle", doc2.data().User_TransID), {
                                    User_name: doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN,
                                    at: doc2.data().User_AT,
                                    dt_App: doc2.data().User_D,
                                    t_app: doc2.data().User_T,
                                    refrigerant_type: doc2.data().refrigerant_typ,
                                    typel: doc2.data().typel,
                                    yr_modell: doc2.data().yr_modell,
                                    pltno: doc2.data().pltno,
                                    typel: doc2.data().typel,
                                    mksrs: doc2.data().mksrs,
                                    mtrno: doc2.data().mtrno,
                                    chassno: doc2.data().chassno,
                                    color: doc2.data().color,
                                    fuel: doc2.data().fuel,
                                    fileno: doc2.data().fileno,
                                    dtrgstrd: doc2.data().dtrgstrd,
                                    deptagncy: doc2.data().deptagncy,
                                    User_Add: doc2.data().User_ADD,
                                    classification: doc2.data().classification,
                                    User_CashierName: employees,
                                    User_CashierDate: today + " , " + time,
                                    User_TotalPayment: total + ".00",
                                    User_OR: receipt.value
                                }).then(() => {
                                    window.location = "ca_homepage.html"
                                })
                            }

                        }
                    }

                })

                cnfrm2.addEventListener('click', (e) => {
                    const updateStat = doc(db, "Applicants", doc2.id)
                    var stt = localStorage.getItem("stat")

                    if (stt == doc2.data().User_TransID) {
                        updateDoc(updateStat, {
                            User_Stat4: "INCOMPLETED",
                            User_Stat: "INCOMPLETED",
                            User_CashierName: employees,
                            User_CashierDate: today + " , " + time
                        }).then(() => {
                            window.location = "ca_homepage.html"
                        })
                    }
                })
            });
        }
    });

});


