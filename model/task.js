// Importing the mongoose
const mongoose = require('mongoose');

// Creating schema
const taskSchema = new mongoose.Schema({
    text : {
        type : String,
        required: true
    },
    status : {
        type : Boolean,
        required : true
    }

});

const Task = mongoose.model('Task',taskSchema);

mongoose.exports = ('Task');