bck.addEventListener('click',() => {
    window.location = "ex_homepage.html";
});

// BLUR BG
var blur = document.getElementById('blur');

cmplt.addEventListener('click',() => {
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

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection, updateDoc,doc,setDoc,addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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
                }

            }

            // Saving Data
            // PASSED BUTTON
            cnfrm1.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")
                var exmtyp1 = document.getElementById("exmTyp1").value.toUpperCase();

                if (stt == doc2.data().User_TransID){
                    if (exmtyp1 == "PRACTICAL"){
                        updateDoc(updateStat, {
                            User_Stat3: "PASSED",
                            User_Stat: "PASSED",
                            User_examType:exmtyp1
                        })
                        setDoc(doc(db,"Practical",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "PASSED",
                            examType:exmtyp1,
                            dt_App: doc2.data().User_D,
                            t_app: doc2.data().User_T,
                            laa: doc2.data().User_Laa,
                            gn: doc2.data().User_GN,
                            at: doc2.data().User_AT
                        }).then(() => {
                                window.location = "ex_homepage.html"
                            })
                    }
                    else if(exmtyp1 == "WRITTEN"){
                        updateDoc(updateStat, {
                            User_Stat3: "PASSED",
                            User_Stat: "PASSED",
                            User_examType:exmtyp1
                        })
                        setDoc(doc(db,"Written",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "PASSED",
                            examType:exmtyp1,
                            dt_App: doc2.data().User_D,
                            t_app: doc2.data().User_T,
                            laa: doc2.data().User_Laa,
                            gn: doc2.data().User_GN,
                            at: doc2.data().User_AT
                        }).then(() => {
                            window.location = "ex_homepage.html"
                        })
                    }
                }
                console.log(exmtyp1);
            })
 
            // FAILED BUTTON
            cnfrm2.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")
                var exmtyp2 = document.getElementById("exmTyp2").value.toUpperCase();

                if (stt == doc2.data().User_TransID){
                    if (exmtyp2 == "PRACTICAL"){
                        updateDoc(updateStat, {
                            User_Stat3: "FAILED",
                            User_Stat: "FAILED",
                            User_examType:exmtyp2
                        })
                        setDoc(doc(db,"Practical",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "FAILED",
                            examType:exmtyp2,
                            dt_App: doc2.data().User_D,
                            t_app: doc2.data().User_T, 
                            laa: doc2.data().User_Laa,
                            gn: doc2.data().User_GN,
                            at: doc2.data().User_AT
                        }).then(() => {
                                window.location = "ex_homepage.html"
                            })
                    } 
                    else if(exmtyp2 == "WRITTEN"){
                        updateDoc(updateStat, {
                            User_Stat3: "FAILED",
                            User_Stat: "FAILED",
                            User_examType:exmtyp2
                        })
                        setDoc(doc(db,"Written",doc2.data().User_TransID),{
                            User_TransID: doc2.data().User_TransID,
                            result: "FAILED",
                            examType:exmtyp2,
                            dt_App: doc2.data().User_D,
                            t_app: doc2.data().User_T,
                            laa: doc2.data().User_Laa,
                            gn: doc2.data().User_GN,
                            at: doc2.data().User_AT
                        }).then(() => {
                            window.location = "ex_homepage.html"
                        })
                    } 
                } 

            })

           
    });



