// Importing mongoose
const mongoose = require('mongoose');
// Connecting to db
mongoose.connect('mongodb://localhost/tasks_list_db');
// Checking connection
const db = mongoose.connection;
// On Error
db.on('error',console.error.bind(console,'Error connecting to db'));
// On successfully running db
db.once('open',function(){
    console.log("Successfully connected to the server.");
});