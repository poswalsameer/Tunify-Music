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