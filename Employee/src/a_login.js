cnl.addEventListener('click', (e) => {
  wrnngmsg.classList.remove( "wrnngmsg-popup");
  document.body.classList.remove( "wrnngmsg-popup");
});

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getFirestore, getDocs, collection,doc, getDoc  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
 import { getAuth, signInWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

 const firebaseConfig = {
  apiKey: "AIzaSyCyNToos3S0HwLl0cZMRdiVjFJcBb4FWFo",
  authDomain: "lto-online-appointment-setter.firebaseapp.com",
  projectId: "lto-online-appointment-setter",
  storageBucket: "lto-online-appointment-setter.appspot.com",
  messagingSenderId: "382579903791",
  appId: "1:382579903791:web:5d98bbe4ea8b38a43065da"
};

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth();

const querySnapshot = await getDocs(collection(db, "Users", "Employee", "EmployeeData"));
const docRef = doc(db, "Users", "DevelopersAccount");
const docSnap = await getDoc(docRef);
 //console.log(docSnap.data())
  login.addEventListener('click', (e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

if(email == docSnap.data().username && password == docSnap.data().password){
    window.location = "a_dashboard.html";
}
  querySnapshot.forEach(doc => {

    if(doc.data().user_Type == "Processing Officer" && doc.data().user_E == email){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          if (user.emailVerified == true){
            console.log("User logged in")
            window.location = "pc_homepage.html";
          }
          else{
            console.log("User not verified")
            wrnngmsg.classList.add( "wrnngmsg-popup");
            document.body.classList.add( "wrnngmsg-popup");
          }

           sndVrfctn.addEventListener('click', (e) => {
              wrnngmsg.classList.remove( "wrnngmsg-popup");
              document.body.classList.remove( "wrnngmsg-popup");

              sendEmailVerification(auth.currentUser)
                .then(() => {
                  // console.log("Email send")
                  Swal.fire({
                    title: "Email has been sent.",
                    confirmButtonColor: '#132aaa',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                });
            });

          window.location = "pc_homepage.html";

        })
        .catch((error) => {
          
          console.log("Email or Password is incorrect!");
         Swal.fire({
          title: "Email or Password is incorrect!",
          confirmButtonColor: '#132aaa',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

        console.log(error)
         
        });
    }
    else if(doc.data().user_Type == "System Administrator" && doc.data().user_E == email){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // 
          if (user.emailVerified == true){
            console.log("User logged in")
            window.location = "a_dashboard.html";
          }
          else{
            console.log("User not verified")
            wrnngmsg.classList.add( "wrnngmsg-popup");
            document.body.classList.add( "wrnngmsg-popup");
          }

           sndVrfctn.addEventListener('click', (e) => {
              wrnngmsg.classList.remove( "wrnngmsg-popup");
              document.body.classList.remove( "wrnngmsg-popup");

              sendEmailVerification(auth.currentUser)
                .then(() => {

                  Swal.fire({
                    title: "Email has been sent.",
                    confirmButtonColor: '#132aaa',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                });
            });

            window.location = "a_dashboard.html";
        })
        .catch((error) => {
            console.log("Email or Password is incorrect!");

            // if (!doc.exists()){
            //   console.log("User does not exist.")
            // }
            // else if( email != doc.data().user_E){
            //   console.log("Email Incorrect")
            // }
            // else if(password != doc.data().user_password){
            //   console.log("password incorrect")
            // }
           Swal.fire({
            title: "Email or Password is incorrect!",
            confirmButtonColor: '#132aaa',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

          console.log(error)
        });
    }      
  });

  }); 

 