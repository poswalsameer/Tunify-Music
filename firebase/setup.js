// const path = require('path');

// module.exports = {

//     mode: 'development',
//     entry: './firebase/setup.js',
//     output: {
//         path: path.resolve(__dirname, 'firebase'),
//         filename: 'finalDB.js'
//     },
//     watch: true

// }

// console.log("Hello, this is me who is using firebase for the first time");

import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore';

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

  // const addDetails = document.querySelector('.login')

  
  document.addEventListener('DOMContentLoaded', function() {

    const addDetails = document.getElementById('login');
  
    // Rest of your code...
    addDetails.addEventListener('submit', (e) => {

      // whenver we submit the form by clicking the submit button, the page gets refreshed, we don't want that to happen
      //that's why preventDefault() method is used
      e.preventDefault();
  
      addDoc(colRef,{
  
        Username: addDetails.username.value,
        Password: addDetails.password.value,
  
      })
      .then( () => {
  
        addDetails.reset();
  
      })
  
    })
  });

  // const addDetails = document.getElementById('login')

  // addDetails.addEventListener('submit', (e) => {

  //   // whenver we submit the form by clicking the submit button, the page gets refreshed, we don't want that to happen
  //   //that's why preventDefault() method is used
  //   e.preventDefault();

  //   addDoc(colRef,{

  //     Username: addDetails.username.value,
  //     Password: addDetails.password.value,

  //   })
  //   .then( () => {

  //     addDetails.reset();

  //   })

  // })
