
btnfdt.style.backgroundColor = 'gainsboro';
btnfdt.disabled = true;

function chckbx() {
    var checkBox = document.getElementById("chck");
    var btnfdt = document.getElementById("btnfdt");
    
    if (checkBox.checked == true){
        btnfdt.disabled = false;
        btnfdt.style.backgroundColor = 'rgb(19, 42, 172)';
    }
    else{
        btnfdt.disabled = true;
        btnfdt.style.backgroundColor = 'gainsboro';
    }
  }

  btnfdt.addEventListener('click' , (e) => {
    window.location = "c_calendar.html";

    localStorage.removeItem("last_name")
    localStorage.removeItem("first_name")
    localStorage.removeItem("middle_name");
    localStorage.removeItem("bday");
    localStorage.removeItem("gen");
    localStorage.removeItem("addrss1");
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
    
  })

