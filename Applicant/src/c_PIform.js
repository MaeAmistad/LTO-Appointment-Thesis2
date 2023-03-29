btn_cn.addEventListener('click' , (e) => {
    // window.location = "c_Trnsctform.html";
    history.back();
})

btn_nxt.addEventListener('click' , (e) => {
    // window.location = "c_Trnsctform.html";

    var last_name  = document.getElementById('lname').value.toUpperCase();
    var first_name = document.getElementById('fname').value.toUpperCase();
    var middle_name = document.getElementById('mname').value.toUpperCase();
    var bday = document.getElementById('dob').value.toUpperCase();
    var gen = document.getElementById('gen').value.toUpperCase();
    var addrss = document.getElementById('addrss').value.toUpperCase();
    var con_num = document.getElementById('con_num').value.toUpperCase();
    var email = document.getElementById('email').value.toUpperCase();

const letters = /^[A-Za-z\s]*$/;
var numbers = /[0-9]{11}/g;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (last_name === '' ){ 
    Swal.fire({
      title: "Please enter your Last Name.",
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
}
else if (!last_name.match(letters)){
      // alert('Please input alphabet characters only. (Last Name)');
      Swal.fire({
        title: 'Please input alphabet characters only. (Last Name)',
        confirmButtonColor: '#132aaa',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
else if (first_name === ''){
    // alert('First Name is required.');
    Swal.fire({
      title: 'Please enter your First Name.',
      confirmButtonColor: '#132aaa',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
}
else if (!first_name.match(letters)){
        // alert('Please input alphabet characters only. (First Name)');
        Swal.fire({
          title: 'Please input alphabet characters only. (First Name)',
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
}
else if (bday === ''){
  // alert('Nationality is required.');
  Swal.fire({
    title: 'Please enter your Birthday.',
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

else if (gen == "s"){
  // alert("Gender is Required");
  Swal.fire({
    title: "Please enter your Gender.",
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
else if (addrss === ''){
  // alert('Address is required.');
  Swal.fire({
    title: 'Please enter your Address.',
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
else if (con_num === ''){
  // alert('Contact Number is required. (Contact Number)');
  Swal.fire({
    title: 'Please enter your Contact Number.',
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
else if (con_num.length !== 11){
  // alert('Invalid Number (Contact Number)');
  Swal.fire({
    title: 'Invalid Number (Contact Number)',
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
else if(!con_num.match(numbers)){
  // alert('Invalid Number (Contact Number)');
  Swal.fire({
    title: 'Invalid Number (Contact Number)',
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
} 
else if (!email.match(re)){
  // alert('Invalid Email.');
  Swal.fire({
    title: 'Invalid Email.',
    confirmButtonColor: '#132aaa',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
else if (email === ''){
    // alert('Email is required.');
    Swal.fire({
      title: 'Please enter your Email.',
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

  localStorage.setItem("last_name",last_name);
  localStorage.setItem("first_name",first_name);
  localStorage.setItem("middle_name",middle_name);
  localStorage.setItem("bday",bday);
  localStorage.setItem("gen",gen);
  localStorage.setItem("addrss",addrss);
  localStorage.setItem("con_num",con_num);
  localStorage.setItem("email",email);

  window.location = "c_confirmation.html";

}

 
});