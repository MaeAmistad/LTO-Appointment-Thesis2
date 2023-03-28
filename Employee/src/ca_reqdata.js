bck.addEventListener('click',() => {
    window.location = "ca_homepage.html";
});
inc.addEventListener('click', () => {
    document.getElementById('inc_modal').style.visibility = "visible"
});
cnl1.addEventListener('click', () => {
    document.getElementById('complete_modal').style.visibility = "hidden"
});
cnl2.addEventListener('click', () => {
    document.getElementById('inc_modal').style.visibility = "hidden"
});
cnl3.addEventListener('click', () => {
    document.getElementById('exam_modal').style.visibility = "hidden"
});

var tranID = localStorage.getItem("stat");
document.getElementById('tranID').innerHTML = tranID;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection, updateDoc,doc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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
    const querySnapshot2 = await getDocs(collection(db,"Appointment"));

    var transID = localStorage.getItem("stat");
    var ID = localStorage.getItem("ID");
    console.log(ID)
        querySnapshot2.forEach(doc2 => {
       
            if (transID == doc2.data().User_TransID){

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

                    document.getElementById("laa").style.display = "none"
                    document.getElementById("laa2").style.display = "none"
                }

            }
            var stt = localStorage.getItem("stat")
            cmplt.addEventListener('click',() => {

                if(doc2.data().User_TT == "LICENSE" && doc2.data().User_Laa == "DRIVER'S LICENSE" && doc2.User_AT == "NEW"){
                    document.getElementById('exam_modal').style.visibility = "visible"
                    cnfrm3.addEventListener('click', (e) => {
                        const updateStat = doc(db, "Appointment", doc2.id)
                        
        
                        if (stt == doc2.data().User_TransID){
                            updateDoc(updateStat, {
                                User_Stat: "WITH EXAM"
                            }).then(() => {
                                window.location = "ca_homepage.html"
                            })
                        }
                    })
                }
                else if(doc2.data().User_TT == "LICENSE" && doc2.data().User_Laa == "CONDUCTOR'S LICENSE" && doc2.User_AT == "NEW"){
                    document.getElementById('exam_modal').style.visibility = "visible"
                    cnfrm3.addEventListener('click', (e) => {
                        const updateStat = doc(db, "Appointment", doc2.id)
        
                        if (stt == doc2.data().User_TransID){
                            updateDoc(updateStat, {
                                User_Stat: "WITH EXAM"
                            }).then(() => {
                                window.location = "ca_homepage.html"
                            })
                        }
                    })
                }
                else if(doc2.data().User_TT == "LICENSE" && doc2.data().User_Laa == "DRIVER'S LICENSE" && doc2.User_AT == "ADDITIONAL DL CODE OR CATEGORY"){
                    document.getElementById('exam_modal').style.visibility = "visible"
                    cnfrm3.addEventListener('click', (e) => {
                        const updateStat = doc(db, "Appointment", doc2.id)
        
                        if (stt == doc2.data().User_TransID){
                            updateDoc(updateStat, {
                                User_Stat: "WITH EXAM"
                            }).then(() => {
                                window.location = "ca_homepage.html"
                            })
                        }
                    })
                }
                else{
                    document.getElementById('complete_modal').style.visibility = "visible"
                    cnfrm1.addEventListener('click', (e) => {
                        const updateStat = doc(db, "Appointment", doc2.id)
        
                        if (stt == doc2.data().User_TransID){
                            updateDoc(updateStat, {
                                User_Stat: "COMPLETED"
                            }).then(() => {
                                window.location = "ca_homepage.html"
                            })
                        }
                    })
                }
            });
            
            cnfrm2.addEventListener('click', (e) => {
                const updateStat = doc(db, "Appointment", doc2.id)
                var stt = localStorage.getItem("stat")

                if (stt == doc2.data().User_TransID){
                    updateDoc(updateStat, {
                        User_Stat: "INCOMPLETE"
                    }).then(() => {
                        window.location = "ca_homepage.html"
                    })
                }
            })
    });



