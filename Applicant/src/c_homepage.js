
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
  })

