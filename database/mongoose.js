// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/testDB', {useNewURLParser: true, useUnifiedTopology: true});

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, "connection error"));

// db.once('open', function(){
//     console.log("we are connected");
// })

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//creating the schema
const studentSchema = new mongoose.Schema({
    name: String
});

//creating the model to finalize the schema
const Student = mongoose.model('Student', studentSchema );

//creating a new document
const sameer = new Student({name: "Sameer"});
console.log(sameer.name);

//saving the created document in the database
sameer.save(function(err){
    if(err){
        console.log("An error occured");
    }
});