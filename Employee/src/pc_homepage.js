import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, getDocs, collection, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

var tbody = document.getElementById('tbody1');
// GET DATE TO LOCALSTORAGE
document.getElementById('dte').addEventListener('change', (e) => {
    changeDate = document.getElementById('dte').value
    console.log(changeDate)
    localStorage.setItem('chngeDtEv', changeDate)
});
// GET DATA FROM LOCALSTORAGE
srchdate.addEventListener('click', () => {
    localStorage.getItem('chngeDtEv')
    window.location = 'pc_homepage.html'
})
// DATE TODAY
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day ;
var today2 = day + " - " + month + " - " + year ;
document.getElementById("dte").value = localStorage.getItem('chngeDtEv');

var changeDate = localStorage.getItem('chngeDtEv')

var test = [];
async function getData() {

    const querySnapshot = await getDocs(collection(db, "Applicants"));

    querySnapshot.forEach(doc2 => {

        // FILTER FOR CURRENT DATE
        var dd = doc2.data().User_D;
        var ddsp = dd.slice(0, 2);
        var mmsp = dd.slice(5, 7);
        var yysp = dd.slice(10, 14);
        var dtcon = yysp + "-" + mmsp + "-" + ddsp;

        // CREATE NEW ELEMENT FOR NEW DATA
        let trow = document.createElement('tr');
        let td6 = document.createElement('td');
        let t_ID = document.createElement('td');
        let td1 = document.createElement('td');
        let td5 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');

        // CONDITION
        if (localStorage.getItem("chngeDtEv") == null) {
            if (today == dtcon) {
                if (doc2.data().User_TT == "LICENSING") {
                    if (doc2.data().User_Stat == "PENDING") {


                t_ID.innerHTML = doc2.data().User_AppID; 
                td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
                td5.innerHTML = doc2.data().User_TT;
                td7.innerHTML = doc2.data().User_D;
                td8.innerHTML = doc2.data().User_T;
                
                trow.appendChild(t_ID);
                trow.appendChild(td1);
                trow.appendChild(td5); 
                trow.appendChild(td7);
                trow.appendChild(td8);
                    
                tbody.appendChild(trow);
    
                trow.addEventListener('click', (e) =>{
                    trow.style.backgroundColor = '#254894c0';
                    trow.style.color = "white";
                    localStorage.setItem('stat',doc2.data().User_AppID)    
                    localStorage.setItem('ID', doc2.id)
                    window.location = "pc_reqdata.html";
                });
    
                trow.addEventListener('mouseover',function(){
                trow.style.backgroundColor = 'rgb(218, 216, 216)';
                trow.style.color = "black";
                })
                trow.addEventListener('mouseleave',function(){
                trow.style.backgroundColor = "";
                trow.style.color = "";
                })
            }
        }
        if (doc2.data().User_Stat == "APPROVED_TO_PROCEED"){
            
            t_ID.innerHTML = doc2.data().User_AppID; 
            td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN ;
            td5.innerHTML = doc2.data().User_TT;
            td7.innerHTML = doc2.data().User_D;
            td8.innerHTML = doc2.data().User_T;
            
            trow.appendChild(t_ID);
            trow.appendChild(td1);
            trow.appendChild(td5);
            trow.appendChild(td7);
            trow.appendChild(td8);
    
            tbody.appendChild(trow);
    
            trow.addEventListener('click', (e) =>{
                trow.style.backgroundColor = '#254894c0';
                trow.style.color = "white";
                localStorage.setItem('stat',doc2.data().User_AppID)    
                localStorage.setItem('ID', doc2.id)
                window.location = "pc_reqdata.html";
            });
            trow.addEventListener('mouseover',function(){
            trow.style.backgroundColor = 'rgb(218, 216, 216)';
            trow.style.color = "black";
            })
            trow.addEventListener('mouseleave',function(){
            trow.style.backgroundColor = "";
            trow.style.color = "";
            })
        }
    }
}
else{
    if(changeDate == dtcon){
    if (doc2.data().User_TT == "LICENSING"){ 
        if (doc2.data().User_Stat == "PENDING"){

                        // var tt = doc2.data().User_T;
                        // var tst = tt.slice(6,8);

                        // test.push(tst)
                        // console.log(test.sort())            

                        t_ID.innerHTML = doc2.data().User_AppID;
                        td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                        td5.innerHTML = doc2.data().User_TT;
                        td7.innerHTML = doc2.data().User_D;
                        td8.innerHTML = doc2.data().User_T;

                        trow.appendChild(t_ID);
                        trow.appendChild(td1);
                        trow.appendChild(td5);
                        trow.appendChild(td7);
                        trow.appendChild(td8);

                        tbody.appendChild(trow);

                        trow.addEventListener('click', (e) => {
                            trow.style.backgroundColor = '#254894c0';
                            trow.style.color = "white";
                            localStorage.setItem('stat', doc2.data().User_AppID)
                            localStorage.setItem('ID', doc2.id)
                            window.location = "pc_reqdata.html";
                        });

            trow.addEventListener('mouseover',function(){
            trow.style.backgroundColor = 'rgb(218, 216, 216)';
            trow.style.color = "black";
            })
            trow.addEventListener('mouseleave',function(){
            trow.style.backgroundColor = ""; 
            trow.style.color = "";
            })
            
            // if(hrs > 17){
            //     const updateStat = doc(db, "Applicants", doc2.id)
            //     updateDoc(updateStat, {
            //         // User_Stat2: "APPROVED_TO_CASHIER",
            //         User_Stat: "MISSED",
            //     }).then(() => {
            //         console.log("Updated!")
            //     })
            // }

        }
    }
    if (doc2.data().User_Stat == "APPROVED_TO_PROCEED"){

                    t_ID.innerHTML = doc2.data().User_AppID;
                    td1.innerHTML = doc2.data().User_LN + ", " + doc2.data().User_FN + " " + doc2.data().User_MN;
                    td5.innerHTML = doc2.data().User_TT;
                    td7.innerHTML = doc2.data().User_D;
                    td8.innerHTML = doc2.data().User_T;

                    trow.appendChild(t_ID);
                    trow.appendChild(td1);
                    trow.appendChild(td5);
                    trow.appendChild(td7);
                    trow.appendChild(td8);

                    tbody.appendChild(trow);

        trow.addEventListener('click', (e) =>{ 
            trow.style.backgroundColor = '#254894c0';
            trow.style.color = "white";
            localStorage.setItem('stat',doc2.data().User_AppID)    
            localStorage.setItem('ID', doc2.id)
            window.location = "pc_reqdata.html";
        });
        trow.addEventListener('mouseover',function(){
        trow.style.backgroundColor = 'rgb(218, 216, 216)';
        trow.style.color = "black";
        })
        trow.addEventListener('mouseleave',function(){
        trow.style.backgroundColor = "";
        trow.style.color = "";
        })
    }
}

}


        // querysnap end
    });

}

window.onload = getData;

// Check if the date of appointment is already past
// const querySnapshot2 = await getDocs(collection(db, "Applicants"));

// querySnapshot2.forEach(doc3 => {

//     var date = new Date();
//     var day = date.getDate();
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear();
//     if (month < 10) month = "0" + month;
//     if (day < 10) day = "0" + day;


//     //fix
//     var appointmentDate = doc3.data().User_D;
//     let today = year + " - " + month + " - " + day;


//     // let time1 = current.getTime();
//     // let time2 = past.getTime();

//     // console.log("today: " + today)
//     // console.log("past: " + appointmentDate)

//     // console.log(appointmentDate < today);
//     const updateStat = doc(db, "Applicants", doc3.id)
//     if (appointmentDate < today) {
//         updateDoc(updateStat, {
//             User_Stat: "MISSED"
//         }).then(() => {
//             var full_name = doc3.data().User_FN + doc3.data().User_MN + doc3.data().User_LN;
//             var at = doc3.data().User_TT + ", " + doc3.data().User_AT;
//             var email = doc3.data().User_E;

//             const tt = "Hi " + full_name + "<br/>" + "<br/>";
//             const r2 = "YOU HAVE MISSED YOUR APPLICATION FOR " + "<u>" + at + ". " + "</u>" + "<br/>";
//             const r3 = "DATE: " + doc3.data().User_D + " at " + doc3.data().User_D;
//             const r4 = ". Please set an appointment again if you wish to have a transaction at the LTO San Ildefonso, Ilocos Sur" + "<br/>" + "<br/>";
//             const r5 = "If you didn't set an appointment, please disregard this email."

//             Email.send({
//                 Host: "smtp.elasticemail.com",
//                 Username: "advocsbscs@gmail.com",
//                 Password: "342E004513CF8CC2EC61B156D52548F2EF93",
//                 To: email.toLowerCase(),
//                 From: "advocsbscs@gmail.com",
//                 Subject: "LTO APPOINTMENT APPLICATION",
//                 Body: tt + r2 + r3 + r4 + r5
//             }).then(
//                 Swal.fire({
//                     title: 'Your proof of appointment has been sent to your email.',
//                     confirmButtonColor: '#132aaa',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 }).then(() => {
//                     Swal.fire({
//                         position: 'center',
//                         icon: 'success',
//                         title: 'Your Application has been sent',
//                         showConfirmButton: false,
//                         timer: 2000
//                     })

//                     // window.location = "index.html";
//                     console.log("Email Sent")
//                 })
//             );
//         })
//     }
// })