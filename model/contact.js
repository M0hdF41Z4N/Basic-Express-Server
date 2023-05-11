// Importing the mongoose
const mongoose = require('mongoose');

// Creating schema
const contactSchema = new mongoose.Schema({
    // Defining fields
    name : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        required: true 
    }
});

const Contact = mongoose.model('Contact',contactSchema);

model.exports = Contact;