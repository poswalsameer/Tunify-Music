
// import {initializeApp} from "firebase/app" ;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js'


// import {
//   https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js'
//   , collection, getDocs, addDoc
// } from 'firebase/firestore'

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



  //this whole thing works for signing up new users
  // const signUpForm = document.querySelector('.login');

  // signUpForm.addEventListener('submit', (e) => {

  //   e.preventDefault();

  //   const mail = signUpForm.email.value;
  //   const password = signUpForm.password.value;

  //   createUserWithEmailAndPassword(auth, mail, password)
  //     .then((cred) => {
  //       console.log('user created:', cred.user)
  //       signUpForm.reset();
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })

  // })



  //from here, working on the log Out button
  // const logOutButton = document.querySelector('#logOutBtn');

  // logOutButton.addEventListener('click', (e) => {
  //     signOut(auth)
  //       .then(() => {
  //         console.log("The user has been logged out");
  //       })
  //       .catch(() => {
  //         console.log("There is some error while logging out");
  //       })
  // })



  // working on the login part in this section

  // let loggedIn = false;

  

  const logInButton = document.querySelector('.btn');
  logInButton.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = signUpForm.email.value;
      const password = signUpForm.password.value;

      signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          // loggedIn = true;
          console.log("User logged in:", cred.user);
        })
        .catch(() => {
          console.log("Error while logging you in");
        })
  })
