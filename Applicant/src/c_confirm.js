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
}
else if (localStorage.getItem("tot") == "MOTOR VEHICLE REGISTRATION"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("toa"); 

    document.getElementById('tt1').innerHTML=localStorage.getItem("tot");
    document.getElementById('at1').innerHTML=localStorage.getItem("toa"); 
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
    history.back();
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