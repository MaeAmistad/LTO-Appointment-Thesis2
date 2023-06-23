bck.addEventListener('click',() => {
    window.location = "a_applistex.html";
});

var blur = document.getElementById('blur');

cmplt.addEventListener('click',() => {
    document.getElementById('complete_modal').style.visibility = "visible"
    blur.classList.toggle('active')
});
inc.addEventListener('click', () => {
    document.getElementById('inc_modal').style.visibility = "visible"
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
cnl1.addEventListener('click', () => {
    document.getElementById('complete_modal').style.visibility = "hidden"
    blur.classList.toggle('active')
});
cnl2.addEventListener('click', () => {
    document.getElementById('inc_modal').style.visibility = "hidden"
    blur.classList.toggle('active') 
});
cnl3.addEventListener('click',() => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal3').style.visibility = "hidden";
    blur.classList.toggle('active')
});
cnl4.addEventListener('click',() => {
    window.location = "a_reqdataex.html";
    blur.classList.toggle('active')
});
// var tranID = localStorage.getItem("stat");
// document.getElementById('tranID').innerHTML = tranID;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection, updateDoc,doc,setDoc,deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

//get all data
    const querySnapshot2 = await getDocs(collection(db,"Applicants"));

    var transID = localStorage.getItem("stat");
    var ID = localStorage.getItem("ID");
    console.log(ID)
    // console.log(ID)
        querySnapshot2.forEach(doc2 => {

            if (transID == doc2.data().User_TransID){

                if (doc2.data().User_TT == "LICENSING"){
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
                }

            }

            // PASSED BUTTON
            cnfrm1.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")
                var exmtyp1 = document.getElementById("exmTyp1").value.toUpperCase();
                
                if (stt == doc2.data().User_TransID){
                    if (exmtyp1 == "PRACTICAL"){
                        updateDoc(updateStat, {
                            User_Stat: "PASSED"
                        })
                        setDoc(doc(db,"Practical",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "PASSED",
                            examType:exmtyp1
                        }).then(() => {
                                window.location = "a_applistex.html"
                            })
                    }
                    else if(exmtyp1 == "WRITTEN"){
                        console.log(exmtyp1)
                        updateDoc(updateStat, {
                            User_Stat: "PASSED"
                        })
                        setDoc(doc(db,"Written",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "PASSED",
                            examType:exmtyp1
                        }).then(() => {
                            window.location = "a_applistex.html"
                        })
                    }
                }
            })
 
            // FAILED BUTTON
            cnfrm2.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")
                var exmtyp2 = document.getElementById("exmTyp2").value.toUpperCase();

                if (stt == doc2.data().User_TransID){
                    if (exmtyp2 == "PRACTICAL"){
                        updateDoc(updateStat, {
                            User_Stat: "FAILED"
                        })
                        setDoc(doc(db,"Practical",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "FAILED",
                            examType:exmtyp2
                        }).then(() => {
                                window.location = "a_applistex.html"
                            })
                    }
                    else if(exmtyp2 == "WRITTEN"){
                        updateDoc(updateStat, {
                            User_Stat: "FAILED"
                        })
                        setDoc(doc(db,"Written",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "FAILED",
                            examType:exmtyp2
                        }).then(() => {
                            window.location = "a_applistex.html"
                        })
                    }
                } 

            })
            cnfrm3.addEventListener('click', (e) => {
                if (stt == doc2.data().User_TransID){
                    deleteDoc(doc(db, "Applicants", doc2.id)).then(() => {
                        window.location = "a_applistex.html"
                    });
                }
                
            })

            cnfrm4.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                // To be Continued, Add MV info 
                if (stt == doc2.data().User_TransID){
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
                        window.location = "a_reqdataex.html"
                        // console.log("EDIT")
                    })
                }
                
            })
           
    });



