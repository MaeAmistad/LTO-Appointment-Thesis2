bck.addEventListener('click',() => {
    window.location = "pc_homepage.html";
});

apprd.addEventListener('click',() => {
    document.getElementById('cnfrm_modal').style.visibility = "visible";
});
dclnd.addEventListener('click',() => {
    document.getElementById('cnfrm_modal2').style.visibility = "visible";
});
mvinfo.addEventListener('click',() => {
    document.getElementById('addinf').style.visibility = "visible";
});
cnl.addEventListener('click',() => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal').style.visibility = "hidden";
});
cnl2.addEventListener('click',() => {
    // window.location = "pc_reqdata.html";
    document.getElementById('cnfrm_modal2').style.visibility = "hidden";
});
cnl3.addEventListener('click',() => {
    document.getElementById('addinf').style.visibility = "hidden";
});
// var tranID = localStorage.getItem("stat");
// document.getElementById('tranID').innerHTML = tranID;

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
    var pltno = document.getElementById("pltno").value;
    var type = document.getElementById("type").value;
    var mksrs = document.getElementById("mksrs").value;
    var mtrno = document.getElementById("mtrno").value;
    var chassno = document.getElementById("chassno").value;
    var color = document.getElementById("color").value;
    var fuel = document.getElementById("fuel").value;
    var fileno = document.getElementById("fileno").value;
    var dtrgstrd = document.getElementById("dtrgstrd").value;
    var trnsctn = document.getElementById("trnsctn").value;
    var deptagncy = document.getElementById("deptagncy").value;

    if (pltno == "" && type == "" && mksrs == "" && mtrno == "" && chassno == "" && color == ""&& fuel == ""&& fileno == ""&& dtrgstrd == ""&& trnsctn == ""&& deptagncy == "") {
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
        localStorage.setItem("ui10",trnsctn);
        localStorage.setItem("ui11",deptagncy);

        document.getElementById('addinf').style.visibility = "hidden";
    }
});
//get all data
    const querySnapshot2 = await getDocs(collection(db,"Applicants"));

    var transID = localStorage.getItem("stat");
    var ID = localStorage.getItem("ID");
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

                    document.getElementById("mvinfo").style.display = "none"
                    document.getElementById("dclnd").style.marginLeft = "550px";
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

                    document.getElementById("mvinfo").style.display = "none"
                    document.getElementById("dclnd").style.marginLeft = "550px";
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


            // console.log(trnidlic)
            cnfrm.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")

                if (doc2.data().User_TT == "MOTOR VEHICLE REGISTRATION"){ 
                    if (stt == doc2.data().User_AppID){
                        updateDoc(updateStat, {
                            User_Stat: "APPROVED",
                            User_TransID: trnidmvr
                        }), 
                        setDoc(doc(db,"Applicants", doc2.id,"MV INFO",trnidmvr),{
                            pltno: localStorage.getItem("ui1"),
                            typel:localStorage.getItem("ui2"),
                            mksrs:localStorage.getItem("ui3"),
                            mtrno:localStorage.getItem("ui4"),
                            chassno:localStorage.getItem("ui5"),
                            color:localStorage.getItem("ui6"),
                            fuel :localStorage.getItem("ui7"),
                            fileno:localStorage.getItem("ui8"),
                            dtrgstrd:localStorage.getItem("ui9"),
                            trnsctn:localStorage.getItem("ui10"),
                            deptagncy:localStorage.getItem("ui11")
                        }).then(() => {
                            window.location = "pc_homepage.html" 
                        })
                    }
                    
                }
                else if(doc2.data().User_TT == "LICENSING"){
                    if (stt == doc2.data().User_AppID){
                        updateDoc(updateStat, {
                            User_Stat: "APPROVED",
                            User_TransID: trnidlic 
                        }).then(() => {
                            window.location = "pc_homepage.html"
                        })
                    }
                }

            }) 

            cnfrm2.addEventListener('click', (e) => {
                const updateStat = doc(db, "Applicants", doc2.id)
                var stt = localStorage.getItem("stat")

                if (stt == doc2.data().User_AppID){
                    updateDoc(updateStat, {
                        User_Stat: "DECLINED"
                    }).then(() => {
                        window.location = "pc_homepage.html"
                    })
                }
            })
    });

