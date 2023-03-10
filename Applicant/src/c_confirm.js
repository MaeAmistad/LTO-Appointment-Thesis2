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

if (localStorage.getItem("tot") == "License"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("laa") + " ( " + localStorage.getItem("toa") + " )  ";
}
if(localStorage.getItem("toa") == "Revision of Records"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("laa") + " ( " + localStorage.getItem("toa") + ", " + localStorage.getItem("rvsnofrcrds") + " )  ";
}
else if (localStorage.getItem("tot") == "Motor Vehicle Registration"){
    document.getElementById('tt').innerHTML=localStorage.getItem("tot");
    document.getElementById('at').innerHTML=localStorage.getItem("toa");
}

// document.getElementById('dt_L').innerHTML=localStorage.getItem("con_num");
// document.getElementById('dt_t').innerHTML=localStorage.getItem("email");

bck.addEventListener('click', (e) => {
    window.location = "c_PIform.html";
})


document.getElementById("cnfrm").style.backgroundColor = 'gainsboro';
document.getElementById("cnfrm").disabled = true;

function chckbx() {
    var checkBox = document.getElementById("chckbx");
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