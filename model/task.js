// Importing the mongoose
const mongoose = require('mongoose');


// Creating schema
const taskSchema = new mongoose.Schema({
    text : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    },
    due_date : {
        type : String,
        required: true
    },
    status : {
        type : Boolean,
        default : false
    }

});


// Creating model
const Task = mongoose.model('Task',taskSchema);
// Exporting model
module.exports = Task;



