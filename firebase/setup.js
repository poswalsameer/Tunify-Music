
// import {initializeApp} from "firebase/app" ;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js'


import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js'


  const firebaseConfig = {
    apiKey: "AIzaSyAzcU3kufMN0gf-vjuU6aTbnnG29hkMMk4",
    authDomain: "music-player-app-69.firebaseapp.com",
    projectId: "music-player-app-69",
    storageBucket: "music-player-app-69.appspot.com",
    messagingSenderId: "388016496321",
    appId: "1:388016496321:web:a616a637db481c559dbe40"
  };

//this below written code initialized the firebase app
initializeApp(firebaseConfig);


//creating a new database using the firestore method
const db = getFirestore();

//initialises authentication services
const auth = getAuth()

//collecting reference to a collection made in firebase
const colRef = collection(db, 'User Details');

//getting the documents from the collection
getDocs(colRef)
  .then( (snapshot) => {
        // console.log(snapshot.docs);

        //this array is created to show all the docs in a better manner in the console
        let userDetails = []

        //this loop will make sure that the array is shown in a well presented manner in the console
        snapshot.docs.forEach((doc) => {
            userDetails.push( { ...doc.data(), id: doc.id } )
        } )

        //console to show (not necessary)
        console.log(userDetails);
  } )
  .catch( err => {
        //catch method to catch any kind of error if present in the code
        console.error(" There is some error in your code ");
  } )


  

  //SIGN UP FUNCTION

  let reg = document.getElementsByClassName('btn-2');

  function registerUser(){

    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, mail, password)
      .then( () => {

        alert("Welcome " + mail);

      })
      .catch( () => {
        alert("ERROR SIGNING UP: The email may already exists");
      })

  
  }

  for (var i = 0; i < reg.length; i++) {
    reg[i].addEventListener('click', registerUser);
  }

  //SIGN UP FUNCTION IS DONE HERE 




  // LOG IN FUNCTION STARTS HERE

  let loginBtn = document.getElementsByClassName('btn');

  function loginUser(){

    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, mail, password)
      .then( () => {
        // alert("login successful");
        window.location.href = "MusicLibrary.html";
      })
      .catch( () => {
        alert("EMAIL/PASSWORD ENTERED IS NOT CORRECT");
      })

  }

  for (var i = 0; i < loginBtn.length; i++) {
    loginBtn[i].addEventListener('click', loginUser);
  }

  //LOGIN FUNCTION ENDS HERE
  
  


  // LOGOUT FUNCTION STARTS HERE
  

 const logOutBtn = document.getElementById('userIcon');

 function logOutUser(){

  // alert("button is working");
  signOut(auth);
  window.location.href = 'index.html';

 }

//  for (var i = 0; i < logOutBtn.length; i++) {
//   logOutBtn[i].addEventListener('click', logOutUser);

// }


 logOutBtn.addEventListener('click', logOutUser);

 //LOGOUT FUNCTION ENDS HERE





 



  

