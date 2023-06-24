document.getElementById('ln').innerHTML=localStorage.getItem("last_name")
document.getElementById('fn').innerHTML=localStorage.getItem("first_name")
document.getElementById('mn').innerHTML=localStorage.getItem("middle_name");
document.getElementById('dof').innerHTML=localStorage.getItem("bday");
document.getElementById('gndr').innerHTML=localStorage.getItem("gen");
document.getElementById('addrss').innerHTML=localStorage.getItem("addrss");
document.getElementById('mnn').innerHTML=localStorage.getItem("con_num");
document.getElementById('em').innerHTML=localStorage.getItem("email");

document.getElementById('dt_L').innerHTML=localStorage.getItem("date");
document.getElementById('dt_t').innerHTML=localStorage.getItem("time");

if (localStorage.getItem("tot") == "LICENSING"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("laa") + " ( " + localStorage.getItem("toa") + " )  ";

    document.getElementById('tt1').innerHTML=localStorage.getItem("tot");
    document.getElementById('at1').innerHTML=localStorage.getItem("laa") + " ( " + localStorage.getItem("toa") + " )  ";

}
if(localStorage.getItem("toa") == "REVISION OF RECORDS"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("laa") + " ( " + localStorage.getItem("toa") + ", " + localStorage.getItem("rvsnofrcrds") + " )  ";

    document.getElementById('tt1').innerHTML=localStorage.getItem("tot");
    document.getElementById('at1').innerHTML=localStorage.getItem("laa") + " ( " + localStorage.getItem("toa") + ", " + localStorage.getItem("rvsnofrcrds") + " )  ";
   
    document.getElementById('fees').innerHTML = "325.00"
    document.getElementById('fees1').innerHTML = "325.00"
}
if (localStorage.getItem("tot") == "MOTOR VEHICLE REGISTRATION"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("toa"); 

    document.getElementById('tt1').innerHTML=localStorage.getItem("tot");
    document.getElementById('at1').innerHTML=localStorage.getItem("toa"); 
}
console.log(localStorage.getItem("toa"))
if(localStorage.getItem("toa") === "NEW" && localStorage.getItem("laa") === "STUDENT-DRIVER'S PERMIT"){
    document.getElementById('fees').innerHTML = "250.00"
    document.getElementById('fees1').innerHTML = "250.00"
    console.log(250.00)
}if(localStorage.getItem("toa") === "RENEW" && localStorage.getItem("laa") === "STUDENT-DRIVER'S PERMIT"){
    document.getElementById('fees').innerHTML = "150.00"
    document.getElementById('fees1').innerHTML = "150.00"
    console.log(150.00)
}
if(localStorage.getItem("toa") === "NEW" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "685.00"
    document.getElementById('fees1').innerHTML = "685.00"
    console.log(685.00)
}
if(localStorage.getItem("toa") === "RENEWAL" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "585.00"
    document.getElementById('fees1').innerHTML = "585.00"
    console.log(585.00)
}
if(localStorage.getItem("toa") === "RENEWAL" && localStorage.getItem("laa") === "CONDUCTOR'S LICENSE"){
    document.getElementById('fees').innerHTML = "585.00"
    document.getElementById('fees1').innerHTML = "585.00"
    console.log(585.00)
}
if(localStorage.getItem("toa") === "ADDITIONAL DL CODE OR CATEGORY" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "425.00"
    document.getElementById('fees1').innerHTML = "425.00"
    console.log(425.00)
}
if(localStorage.getItem("toa") === "CHANGE OF DL CLASSIFICATION" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "425.00"
    document.getElementById('fees1').innerHTML = "425.00"
    console.log(425.00)
}
if(localStorage.getItem("toa") === "CONVERSION OF FOERIGN DL" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "785.00"
    document.getElementById('fees1').innerHTML = "785.00"
    console.log(785.00)
}
if(localStorage.getItem("toa") === "EXPIRED DL WITH VALID DFL" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "785.00"
    document.getElementById('fees1').innerHTML = "785.00"
    console.log(785.00)
}
if(localStorage.getItem("toa") === "CHANGE OF CLUTCH TYPE" && localStorage.getItem("laa") === "DRIVER'S LICENSE"){
    document.getElementById('fees').innerHTML = "425.00"
    document.getElementById('fees1').innerHTML = "425.00"
    console.log(785.00)
}

// console.log(localStorage.getItem("rvsnofrcrds"))

// Proof of Appointment

document.getElementById('ln1').innerHTML=localStorage.getItem("last_name")
document.getElementById('fn1').innerHTML=localStorage.getItem("first_name")
document.getElementById('mn1').innerHTML=localStorage.getItem("middle_name");
document.getElementById('dof1').innerHTML=localStorage.getItem("bday");
document.getElementById('gndr1').innerHTML=localStorage.getItem("gen");
document.getElementById('addrss1').innerHTML=localStorage.getItem("addrss");
document.getElementById('mnn1').innerHTML=localStorage.getItem("con_num");
document.getElementById('em1').innerHTML=localStorage.getItem("email");
document.getElementById('dt_L1').innerHTML=localStorage.getItem("date");
document.getElementById('dt_t1').innerHTML=localStorage.getItem("time");

// Back Button
bck.addEventListener('click', (e) => {
    // window.location = "c_PIform.html";
    // history.back();
    Swal.fire({
        title: '<strong>Do you want to cancel setting an appointment?<br/>All entered data will be deleted permanently.</strong>', 
        showCloseButton: true,
        focusConfirm: false,
        reverseButtons: true,
        focusCancel: true,
        confirmButtonColor: '#132aaa',
        confirmButtonText:`Yes`
      }).then((result) => {
        if (result.value) {
   
            localStorage.removeItem("last_name")
            localStorage.removeItem("first_name")
            localStorage.removeItem("middle_name");
            localStorage.removeItem("bday");
            localStorage.removeItem("gen");
            localStorage.removeItem("addrss1");
            localStorage.removeItem("addrss2");
            localStorage.removeItem("addrss3");
            localStorage.removeItem("con_num");
            localStorage.removeItem("email");
            localStorage.removeItem("date");
            localStorage.removeItem("time");
            localStorage.removeItem("laa");
            localStorage.removeItem("tot");
            localStorage.removeItem("toa");
            localStorage.removeItem("ID");
            localStorage.removeItem("stat");
            localStorage.removeItem("rvsnofrcrds");
  
          window.location = "c_homepage.html";
        }
      }); 
})


document.getElementById("cnfrm").style.backgroundColor = 'gainsboro';
document.getElementById("cnfrm").disabled = true;

function chckbx() {
    var checkBox = document.getElementById("chck");
    var btnfdt = document.getElementById("cnfrm");
    
    if (checkBox.checked == true){
        btnfdt.disabled = false;
        btnfdt.style.backgroundColor = 'rgb(19, 42, 172)'; 
    }
    else{
        btnfdt.disabled = true;
        btnfdt.style.backgroundColor = 'gainsboro';
    }
  }