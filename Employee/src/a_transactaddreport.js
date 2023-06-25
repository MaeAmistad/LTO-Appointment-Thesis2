bcklic.addEventListener('click' ,() =>{
    window.location = 'a_adddashboard.html'
})
// ---------- CHARTS ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, query, collection,getCountFromServer,where, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
 
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

const license = await getDocs(collection(db, "License"));
const mv = await getDocs(collection(db, "Motor Vehicle"));

// Date Today
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = day + " - " + month + " - " + year;       

let sp1 = 0;
let dl1 = 0;
let cl1 = 0;
let lic_ttl1 = 0;
let rn1 = 0;
let dplmt1 = 0;
let fh1 = 0;
let mv_ttl1 = 0;

let sp2 = 0;
let dl2 = 0;
let cl2 = 0;
let lic_ttl2 = 0;
let rn2 = 0;
let dplmt2 = 0;
let fh2 = 0;
let mv_ttl2 = 0;

let sp3 = 0;
let dl3 = 0;
let cl3 = 0;
let lic_ttl3 = 0;
let rn3 = 0;
let dplmt3 = 0;
let fh3 = 0;
let mv_ttl3 = 0;

let sp4 = 0;
let dl4 = 0;
let cl4 = 0;
let lic_ttl4 = 0;
let rn4 = 0;
let dplmt4 = 0;
let fh4 = 0;
let mv_ttl4 = 0;

let sp5 = 0;
let dl5 = 0;
let cl5 = 0;
let lic_ttl5 = 0;
let rn5 = 0;
let dplmt5 = 0;
let fh5 = 0;
let mv_ttl5 = 0;

let sp6 = 0;
let dl6 = 0;
let cl6 = 0;
let lic_ttl6 = 0;
let rn6 = 0;
let dplmt6 = 0;
let fh6 = 0;
let mv_ttl6 = 0;

let sp7 = 0;
let dl7 = 0;
let cl7 = 0;
let lic_ttl7 = 0;
let rn7 = 0;
let dplmt7 = 0;
let fh7 = 0;
let mv_ttl7 = 0;

let sp8 = 0;
let dl8 = 0;
let cl8 = 0;
let lic_ttl8 = 0;
let rn8 = 0;
let dplmt8 = 0;
let fh8 = 0;
let mv_ttl8 = 0;

let sp9 = 0;
let dl9 = 0;
let cl9 = 0;
let lic_ttl9 = 0;
let rn9 = 0;
let dplmt9 = 0;
let fh9 = 0;
let mv_ttl9 = 0;

let sp10 = 0;
let dl10 = 0;
let cl10 = 0;
let lic_ttl10 = 0;
let rn10 = 0;
let dplmt10 = 0;
let fh10 = 0;
let mv_ttl10 = 0;

let sp11 = 0;
let dl11 = 0;
let cl11 = 0;
let lic_ttl11 = 0;
let rn11 = 0;
let dplmt11 = 0;
let fh11 = 0;
let mv_ttl11 = 0;

license.forEach(doc =>{

    if(doc.data().dt_App == today){
        if(doc.data().laa == "STUDENT-DRIVER'S PERMIT"){
            if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
                sp1 = sp1+=1
                lic_ttl1 = lic_ttl1+=1
            }
            else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
                sp2 = sp2+=1
                lic_ttl2 = lic_ttl2+=1
            }
            else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
                sp3 = sp3+=1
                lic_ttl3 = lic_ttl3+=1
            }
            else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
                sp4 = sp4+=1
                lic_ttl4 = lic_ttl4+=1
            }
            else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
                sp5 = sp5+=1
                lic_ttl5 =lic_ttl5+=1
            }
            else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
                sp6 = sp6+=1
                lic_ttl6 = lic_ttl6+=1
            }
            else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
                sp7 = sp7+=1
                lic_ttl7 = lic_ttl7+=1
            }
            else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
                sp8 = sp8+=1
                lic_ttl8 = lic_ttl8+=1
            }
            else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
                sp9 = sp9+=1
                lic_ttl9 = lic_ttl9+=1
            }
            else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
                sp10 = sp10+=1
                lic_ttl10 = lic_ttl10+=1
            }
            else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
                sp11 = sp1+=11
                lic_ttl11 = lic_ttl11+=1
            }
        }
        else if(doc.data().laa == "DRIVER'S LICENSE"){
            if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
                dl1 = dl1+=1
                lic_ttl1 = lic_ttl1+=1
            }
            else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
                dl2 = dl2+=1
                lic_ttl2 = lic_ttl2+=1
            }
            else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
                dl3 = dl3+=1
                lic_ttl3 = lic_ttl3+=1
            }
            else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
                dl4 = dl4+=1
                lic_ttl4 = lic_ttl4+=1
            }
            else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
                dl5 = dl5+=1
                lic_ttl5 = lic_ttl5+=1
            }
            else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
                dl6 = dl6+=1
                lic_ttl6 = lic_ttl6+=1
            }
            else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
                dl7 = dl7+=1
                lic_ttl7 =lic_ttl7+=1
            }
            else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
                dl8 = dl8+=1
                lic_ttl8 = lic_ttl8+=1
            }
            else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
                dl9 = dl9+=1
                lic_ttl9 = lic_ttl9+=1
            }
            else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
                dl10 = dl10+=1
                lic_ttl10 = lic_ttl10+=1
            }
            else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
                dl11 = dl1+=11
                lic_ttl11 = lic_ttl11+=1
            }
        }
        else if(doc.data().laa == "CONDUCTOR'S LICENSE"){
            if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
                cl1 = cl1+=1
                lic_ttl1 = lic_ttl1+=1
            }
            else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
                cl2 = cl2+=1
                lic_ttl2 = lic_ttl2+=1
            }
            else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
                cl3 = cl3+=1
                lic_ttl3 =lic_ttl3+=1
            }
            else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
                cl4 = cl4+=1
                lic_ttl4 =lic_ttl4+=1
            }
            else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
                cl5 = cl5+=1
                lic_ttl5 = lic_ttl5+=1
            }
            else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
                cl6 = cl6+=1
                lic_ttl6 = lic_ttl6+=1
            }
            else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
                cl7 = cl7+=1
                lic_ttl7 = lic_ttl7+=1
            }
            else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
                cl8 = cl8+=1
                lic_ttl8 = lic_ttl8+=1
            }
            else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
                cl9 = cl9+=1
                lic_ttl9 = lic_ttl9+=1
            }
            else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
                cl10 = cl10+=1
                lic_ttl10 = lic_ttl10+=1
            }
            else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
                cl11 = cl1+=11
                lic_ttl11 = lic_ttl11+=1
            }
        }
    }
    });

mv.forEach(doc =>{

if(doc.data().User_dt_App == today){
    if(doc.data().laa == "RENEWAL"){
        if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
            rn1 = rn1+=1
            mv_ttl1 = mv_ttl1+=1
        }
        else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
            rn2 = rn2+=1
            mv_ttl2 = mv_ttl2+=1
        }
        else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
            rn3 = rn3+=1
            mv_ttl3 = mv_ttl3+=1
        }
        else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
            rn4 = rn4+=1
            mv_ttl4 = mv_ttl4+=1
        }
        else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
            rn5 = rn5+=1
            mv_ttl5 = mv_ttl5+=1
        }
        else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
            rn6 = rn6+=1
            mv_ttl6 = mv_ttl6+=1
        }
        else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
            rn7 = rn7+=1
            mv_ttl7 = mv_ttl7+=1
        }
        else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
            rn8 = rn8+=1
            mv_ttl8 = mv_ttl8+=1
        }
        else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
            rn9 = rn9+=1
            mv_ttl9 = mv_ttl9+=1
        }
        else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
            rn10 = rn10+=1
            mv_ttl10 = mv_ttl10+=1
        }
        else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
            rn11 = rn11+=1
            mv_ttl11 = mv_ttl11+=1
        }
    }
    else if(doc.data().laa == "DIPLOMAT"){
        if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
            dplmt1 = dplmt1+=1
            mv_ttl1 = mv_ttl1+=1
        }
        else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
            dplmt2 = dplmt2+=1
            mv_ttl2 = mv_ttl2+=1
        }
        else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
            dplmt3 = dplmt3+=1
            mv_ttl3 = mv_ttl3+=1
        }
        else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
            dplmt4 = dplmt4+=1
            mv_ttl4 = mv_ttl4+=1
        }
        else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
            dplmt5 = dplmt5+=1
            mv_ttl5 = mv_ttl5+=1
        }
        else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
            dplmt6 = dplmt6+=1
            mv_ttl6 = mv_ttl6+=1
        }
        else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
            dplmt7 = dplmt7+=1
            mv_ttl7 = mv_ttl7+=1
        }
        else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
            dplmt8 = dplmt8+=1
            mv_ttl8 = mv_ttl8+=1
        }
        else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
            dplmt9 = dplmt9+=1
            mv_ttl9 = mv_ttl9+=1
        }
        else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
            dplmt10 = dplmt10+=1
            mv_ttl10 = mv_ttl10+=1
        }
        else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
            dplmt11 = dplmt11+=1
            mv_ttl11 = mv_ttl11+=1
        }
    }
    else if(doc.data().laa == "FOR HIRE"){
        if(doc.data().User_Add == "SAN ILDEFONSO,ILOCOS SUR" || doc.data().User_Add == "SAN ILDEFONSO, ILOCOS SUR"){
            fh1 = fh1+=1
            mv_ttl1 = mv_ttl1+=1
        }
        else if(doc.data().User_Add == "VIGAN CITY,ILOCOS SUR" || doc.data().User_Add == "VIGAN CITY, ILOCOS SUR"){
            fh2 = fh2+=1
            mv_ttl2 = mv_ttl2+=1
        }
        else if(doc.data().User_Add == "BANTAY,ILOCOS SUR" || doc.data().User_Add == "BANTAY, ILOCOS SUR"){
            fh3 = fh3+=1
            mv_ttl3 = mv_ttl3+=1
        }
        else if(doc.data().User_Add == "SAN VICENTE,ILOCOS SUR" || doc.data().User_Add == "SAN VICENTE, ILOCOS SUR"){
            fh4 = fh4+=1
            mv_ttl4 = mv_ttl4+=1
        }
        else if(doc.data().User_Add == "STA. CATALINA,ILOCOS SUR" || doc.data().User_Add == "STA. CATALINA, ILOCOS SUR"){
            fh5 =fh5+=1
            mv_ttl5 = mv_ttl5+=1
        }
        else if(doc.data().User_Add == "CAOAYAN,ILOCOS SUR" || doc.data().User_Add == "CAOAYAN, ILOCOS SUR"){
            fh6 = fh6+=1
            mv_ttl6 = mv_ttl6+=1
        }
        else if(doc.data().User_Add == "STO. DOMINGO,ILOCOS SUR" || doc.data().User_Add == "STO. DOMINGO, ILOCOS SUR"){
            fh7 = fh7+=1
            mv_ttl7 = mv_ttl7+=1
        }
        else if(doc.data().User_Add == "MAGSINGAL,ILOCOS SUR" || doc.data().User_Add == "MAGSINGAL, ILOCOS SUR"){
            fh8 = fh8+=1
            mv_ttl8 = mv_ttl8+=1
        }
        else if(doc.data().User_Add == "SAN JUAN,ILOCOS SUR" || doc.data().User_Add == "SAN JUAN, ILOCOS SUR"){
            fh9 = fh9+=1
            mv_ttl9 = mv_ttl9+=1
        }
        else if(doc.data().User_Add == "CABUGAO,ILOCOS SUR" || doc.data().User_Add == "CABUGAO, ILOCOS SUR"){
            fh10 = fh10+=1
            mv_ttl10 = mv_ttl10+=1
        }
        else if(doc.data().User_Add == "SINAIT,ILOCOS SUR" || doc.data().User_Add == "SINAIT, ILOCOS SUR"){
            fh11 = fh11+=1
            mv_ttl11 = mv_ttl11+=1
        }
    }
}
});

// 1
document.getElementById('licsp_1').innerHTML = sp1
document.getElementById('licsp_2').innerHTML = sp2
document.getElementById('licsp_3').innerHTML = sp3 
document.getElementById('licsp_4').innerHTML = sp4
document.getElementById('licsp_5').innerHTML = sp5
document.getElementById('licsp_6').innerHTML = sp6
document.getElementById('licsp_7').innerHTML = sp7
document.getElementById('licsp_8').innerHTML = sp8
document.getElementById('licsp_9').innerHTML = sp9
document.getElementById('licsp_10').innerHTML = sp10
document.getElementById('licsp_11').innerHTML = sp11

document.getElementById('licdl_1').innerHTML = dl1
document.getElementById('licdl_2').innerHTML = dl2
document.getElementById('licdl_3').innerHTML = dl3
document.getElementById('licdl_4').innerHTML = dl4
document.getElementById('licdl_5').innerHTML = dl5
document.getElementById('licdl_6').innerHTML = dl6
document.getElementById('licdl_7').innerHTML = dl7
document.getElementById('licdl_8').innerHTML = dl8
document.getElementById('licdl_9').innerHTML = dl9
document.getElementById('licdl_10').innerHTML = dl10
document.getElementById('licdl_11').innerHTML = dl11

document.getElementById('liccl_1').innerHTML = cl1
document.getElementById('liccl_2').innerHTML = cl2
document.getElementById('liccl_3').innerHTML = cl3
document.getElementById('liccl_4').innerHTML = cl4
document.getElementById('liccl_5').innerHTML = cl5
document.getElementById('liccl_6').innerHTML = cl6
document.getElementById('liccl_7').innerHTML = cl7
document.getElementById('liccl_8').innerHTML = cl8
document.getElementById('liccl_9').innerHTML = cl9
document.getElementById('liccl_10').innerHTML = cl10
document.getElementById('liccl_11').innerHTML = cl11

document.getElementById('mvrn_1').innerHTML = rn1
document.getElementById('mvrn_2').innerHTML = rn2
document.getElementById('mvrn_3').innerHTML = rn3
document.getElementById('mvrn_4').innerHTML = rn4
document.getElementById('mvrn_5').innerHTML = rn5
document.getElementById('mvrn_6').innerHTML = rn6
document.getElementById('mvrn_7').innerHTML = rn7
document.getElementById('mvrn_8').innerHTML = rn8
document.getElementById('mvrn_9').innerHTML = rn9
document.getElementById('mvrn_10').innerHTML = rn10
document.getElementById('mvrn_11').innerHTML = rn11

document.getElementById('mvdplmt_1').innerHTML = dplmt1
document.getElementById('mvdplmt_2').innerHTML = dplmt2
document.getElementById('mvdplmt_3').innerHTML = dplmt3
document.getElementById('mvdplmt_4').innerHTML = dplmt4
document.getElementById('mvdplmt_5').innerHTML = dplmt5
document.getElementById('mvdplmt_6').innerHTML = dplmt6
document.getElementById('mvdplmt_7').innerHTML = dplmt7
document.getElementById('mvdplmt_8').innerHTML = dplmt8
document.getElementById('mvdplmt_9').innerHTML = dplmt9
document.getElementById('mvdplmt_10').innerHTML = dplmt10
document.getElementById('mvdplmt_11').innerHTML = dplmt11

document.getElementById('mvfh_1').innerHTML = fh1
document.getElementById('mvfh_2').innerHTML = fh2
document.getElementById('mvfh_3').innerHTML = fh3
document.getElementById('mvfh_4').innerHTML = fh4
document.getElementById('mvfh_5').innerHTML = fh5
document.getElementById('mvfh_6').innerHTML = fh6
document.getElementById('mvfh_7').innerHTML = fh7
document.getElementById('mvfh_8').innerHTML = fh8
document.getElementById('mvfh_9').innerHTML = fh9
document.getElementById('mvfh_10').innerHTML = fh10
document.getElementById('mvfh_11').innerHTML = fh11

document.getElementById('licttl1').innerHTML = lic_ttl1
document.getElementById('licttl2').innerHTML = lic_ttl2
document.getElementById('licttl3').innerHTML = lic_ttl3
document.getElementById('licttl4').innerHTML = lic_ttl4
document.getElementById('licttl5').innerHTML = lic_ttl5
document.getElementById('licttl6').innerHTML = lic_ttl6
document.getElementById('licttl7').innerHTML = lic_ttl7
document.getElementById('licttl8').innerHTML = lic_ttl8
document.getElementById('licttl9').innerHTML = lic_ttl9
document.getElementById('licttl10').innerHTML = lic_ttl10
document.getElementById('licttl11').innerHTML = lic_ttl11

document.getElementById('mvttl1').innerHTML = mv_ttl1
document.getElementById('mvttl2').innerHTML = mv_ttl2
document.getElementById('mvttl3').innerHTML = mv_ttl3
document.getElementById('mvttl4').innerHTML = mv_ttl4
document.getElementById('mvttl5').innerHTML = mv_ttl5
document.getElementById('mvttl6').innerHTML = mv_ttl6
document.getElementById('mvttl7').innerHTML = mv_ttl7
document.getElementById('mvttl8').innerHTML = mv_ttl8
document.getElementById('mvttl9').innerHTML = mv_ttl9
document.getElementById('mvttl10').innerHTML = mv_ttl10
document.getElementById('mvttl11').innerHTML = mv_ttl11

document.getElementById('ttl1').innerHTML = lic_ttl1 + mv_ttl1
document.getElementById('ttl2').innerHTML = lic_ttl2 + mv_ttl2
document.getElementById('ttl3').innerHTML = lic_ttl3 + mv_ttl3
document.getElementById('ttl4').innerHTML = lic_ttl4 + mv_ttl4
document.getElementById('ttl5').innerHTML = lic_ttl5 + mv_ttl5
document.getElementById('ttl6').innerHTML = lic_ttl6 + mv_ttl6
document.getElementById('ttl7').innerHTML = lic_ttl7 + mv_ttl7
document.getElementById('ttl8').innerHTML = lic_ttl8 + mv_ttl8
document.getElementById('ttl9').innerHTML = lic_ttl9 + mv_ttl9
document.getElementById('ttl10').innerHTML = lic_ttl10 + mv_ttl10
document.getElementById('ttl11').innerHTML = lic_ttl11 + mv_ttl11

document.getElementById('licsp_12').innerHTML = sp1+sp2+sp3+sp4+sp5+sp6+sp7+sp8+sp9+sp10+sp11
document.getElementById('licdl_12').innerHTML = dl1+dl2+dl3+dl4+dl5+dl6+dl7+dl8+dl9+dl10+dl11
document.getElementById('liccl_12').innerHTML = cl1+cl2+cl3+cl4+cl5+cl6+cl7+cl8+cl9+cl10+cl11
document.getElementById('licttl12').innerHTML = lic_ttl1+lic_ttl2+lic_ttl3+lic_ttl4+lic_ttl5+lic_ttl6+lic_ttl7+lic_ttl8+lic_ttl9+lic_ttl10+lic_ttl11
document.getElementById('mvrn_12').innerHTML = rn1+rn2+rn3+rn4+rn5+rn6+rn7+rn8+rn9+rn10+rn11
document.getElementById('mvdplmt_12').innerHTML = dplmt1+dplmt2+dplmt3+dplmt4+dplmt5+dplmt6+dplmt7+dplmt8+dplmt9+dplmt10+dplmt11
document.getElementById('mvfh_12').innerHTML = fh1+fh2+fh3+fh4+fh5+fh6+fh7+fh8+fh9+fh10+fh11
document.getElementById('mvttl12').innerHTML = mv_ttl1+mv_ttl2+mv_ttl3+mv_ttl4+mv_ttl5+mv_ttl6+mv_ttl7+mv_ttl8+mv_ttl9+mv_ttl10+mv_ttl11
document.getElementById('ttl12').innerHTML = lic_ttl1 + mv_ttl1 + lic_ttl2 + mv_ttl2 +lic_ttl3 + mv_ttl3+lic_ttl4 + mv_ttl4+lic_ttl5 + mv_ttl5+lic_ttl6 + mv_ttl6+lic_ttl7 + mv_ttl7+ lic_ttl8 + mv_ttl8+lic_ttl9 + mv_ttl9+lic_ttl10 + mv_ttl10+lic_ttl11 + mv_ttl11

// 2
document.getElementById('licsp_1d').innerHTML = sp1
document.getElementById('licsp_2d').innerHTML = sp2
document.getElementById('licsp_3d').innerHTML = sp3 
document.getElementById('licsp_4d').innerHTML = sp4
document.getElementById('licsp_5d').innerHTML = sp5
document.getElementById('licsp_6d').innerHTML = sp6
document.getElementById('licsp_7d').innerHTML = sp7
document.getElementById('licsp_8d').innerHTML = sp8
document.getElementById('licsp_9d').innerHTML = sp9
document.getElementById('licsp_10d').innerHTML = sp10
document.getElementById('licsp_11d').innerHTML = sp11

document.getElementById('licdl_1d').innerHTML = dl1
document.getElementById('licdl_2d').innerHTML = dl2
document.getElementById('licdl_3d').innerHTML = dl3
document.getElementById('licdl_4d').innerHTML = dl4
document.getElementById('licdl_5d').innerHTML = dl5
document.getElementById('licdl_6d').innerHTML = dl6
document.getElementById('licdl_7d').innerHTML = dl7
document.getElementById('licdl_8d').innerHTML = dl8
document.getElementById('licdl_9d').innerHTML = dl9
document.getElementById('licdl_10d').innerHTML = dl10
document.getElementById('licdl_11d').innerHTML = dl11

document.getElementById('liccl_1d').innerHTML = cl1
document.getElementById('liccl_2d').innerHTML = cl2
document.getElementById('liccl_3d').innerHTML = cl3
document.getElementById('liccl_4d').innerHTML = cl4
document.getElementById('liccl_5d').innerHTML = cl5
document.getElementById('liccl_6d').innerHTML = cl6
document.getElementById('liccl_7d').innerHTML = cl7
document.getElementById('liccl_8d').innerHTML = cl8
document.getElementById('liccl_9d').innerHTML = cl9
document.getElementById('liccl_10d').innerHTML = cl10
document.getElementById('liccl_11d').innerHTML = cl11

document.getElementById('mvrn_1d').innerHTML = rn1
document.getElementById('mvrn_2d').innerHTML = rn2
document.getElementById('mvrn_3d').innerHTML = rn3
document.getElementById('mvrn_4d').innerHTML = rn4
document.getElementById('mvrn_5d').innerHTML = rn5
document.getElementById('mvrn_6d').innerHTML = rn6
document.getElementById('mvrn_7d').innerHTML = rn7
document.getElementById('mvrn_8d').innerHTML = rn8
document.getElementById('mvrn_9d').innerHTML = rn9
document.getElementById('mvrn_10d').innerHTML = rn10
document.getElementById('mvrn_11d').innerHTML = rn11

document.getElementById('mvdplmt_1d').innerHTML = dplmt1
document.getElementById('mvdplmt_2d').innerHTML = dplmt2
document.getElementById('mvdplmt_3d').innerHTML = dplmt3
document.getElementById('mvdplmt_4d').innerHTML = dplmt4
document.getElementById('mvdplmt_5d').innerHTML = dplmt5
document.getElementById('mvdplmt_6d').innerHTML = dplmt6
document.getElementById('mvdplmt_7d').innerHTML = dplmt7
document.getElementById('mvdplmt_8d').innerHTML = dplmt8
document.getElementById('mvdplmt_9d').innerHTML = dplmt9
document.getElementById('mvdplmt_10d').innerHTML = dplmt10
document.getElementById('mvdplmt_11d').innerHTML = dplmt11

document.getElementById('mvfh_1d').innerHTML = fh1
document.getElementById('mvfh_2d').innerHTML = fh2
document.getElementById('mvfh_3d').innerHTML = fh3
document.getElementById('mvfh_4d').innerHTML = fh4
document.getElementById('mvfh_5d').innerHTML = fh5
document.getElementById('mvfh_6d').innerHTML = fh6
document.getElementById('mvfh_7d').innerHTML = fh7
document.getElementById('mvfh_8d').innerHTML = fh8
document.getElementById('mvfh_9d').innerHTML = fh9
document.getElementById('mvfh_10d').innerHTML = fh10
document.getElementById('mvfh_11d').innerHTML = fh11

document.getElementById('licttl1d').innerHTML = lic_ttl1
document.getElementById('licttl2d').innerHTML = lic_ttl2
document.getElementById('licttl3d').innerHTML = lic_ttl3
document.getElementById('licttl4d').innerHTML = lic_ttl4
document.getElementById('licttl5d').innerHTML = lic_ttl5
document.getElementById('licttl6d').innerHTML = lic_ttl6
document.getElementById('licttl7d').innerHTML = lic_ttl7
document.getElementById('licttl8d').innerHTML = lic_ttl8
document.getElementById('licttl9d').innerHTML = lic_ttl9
document.getElementById('licttl10d').innerHTML = lic_ttl10
document.getElementById('licttl11d').innerHTML = lic_ttl11

document.getElementById('mvttl1d').innerHTML = mv_ttl1
document.getElementById('mvttl2d').innerHTML = mv_ttl2
document.getElementById('mvttl3d').innerHTML = mv_ttl3
document.getElementById('mvttl4d').innerHTML = mv_ttl4
document.getElementById('mvttl5d').innerHTML = mv_ttl5
document.getElementById('mvttl6d').innerHTML = mv_ttl6
document.getElementById('mvttl7d').innerHTML = mv_ttl7
document.getElementById('mvttl8d').innerHTML = mv_ttl8
document.getElementById('mvttl9d').innerHTML = mv_ttl9
document.getElementById('mvttl10d').innerHTML = mv_ttl10
document.getElementById('mvttl11d').innerHTML = mv_ttl11

document.getElementById('ttl1d').innerHTML = lic_ttl1 + mv_ttl1
document.getElementById('ttl2d').innerHTML = lic_ttl2 + mv_ttl2
document.getElementById('ttl3d').innerHTML = lic_ttl3 + mv_ttl3
document.getElementById('ttl4d').innerHTML = lic_ttl4 + mv_ttl4
document.getElementById('ttl5d').innerHTML = lic_ttl5 + mv_ttl5
document.getElementById('ttl6d').innerHTML = lic_ttl6 + mv_ttl6
document.getElementById('ttl7d').innerHTML = lic_ttl7 + mv_ttl7
document.getElementById('ttl8d').innerHTML = lic_ttl8 + mv_ttl8
document.getElementById('ttl9d').innerHTML = lic_ttl9 + mv_ttl9
document.getElementById('ttl10d').innerHTML = lic_ttl10 + mv_ttl10
document.getElementById('ttl11d').innerHTML = lic_ttl11 + mv_ttl11

document.getElementById('licsp_12d').innerHTML = sp1+sp2+sp3+sp4+sp5+sp6+sp7+sp8+sp9+sp10+sp11
document.getElementById('licdl_12d').innerHTML = dl1+dl2+dl3+dl4+dl5+dl6+dl7+dl8+dl9+dl10+dl11
document.getElementById('liccl_12d').innerHTML = cl1+cl2+cl3+cl4+cl5+cl6+cl7+cl8+cl9+cl10+cl11
document.getElementById('licttl12d').innerHTML = lic_ttl1+lic_ttl2+lic_ttl3+lic_ttl4+lic_ttl5+lic_ttl6+lic_ttl7+lic_ttl8+lic_ttl9+lic_ttl10+lic_ttl11
document.getElementById('mvrn_12d').innerHTML = rn1+rn2+rn3+rn4+rn5+rn6+rn7+rn8+rn9+rn10+rn11
document.getElementById('mvdplmt_12d').innerHTML = dplmt1+dplmt2+dplmt3+dplmt4+dplmt5+dplmt6+dplmt7+dplmt8+dplmt9+dplmt10+dplmt11
document.getElementById('mvfh_12d').innerHTML = fh1+fh2+fh3+fh4+fh5+fh6+fh7+fh8+fh9+fh10+fh11
document.getElementById('mvttl12d').innerHTML = mv_ttl1+mv_ttl2+mv_ttl3+mv_ttl4+mv_ttl5+mv_ttl6+mv_ttl7+mv_ttl8+mv_ttl9+mv_ttl10+mv_ttl11
document.getElementById('ttl12d').innerHTML = lic_ttl1 + mv_ttl1 + lic_ttl2 + mv_ttl2 +lic_ttl3 + mv_ttl3+lic_ttl4 + mv_ttl4+lic_ttl5 + mv_ttl5+lic_ttl6 + mv_ttl6+lic_ttl7 + mv_ttl7+ lic_ttl8 + mv_ttl8+lic_ttl9 + mv_ttl9+lic_ttl10 + mv_ttl10+lic_ttl11 + mv_ttl11