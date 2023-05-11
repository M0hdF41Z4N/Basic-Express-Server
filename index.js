// Importing express module
const express = require('express');
// Defining port
const port = 3001;
// Importing path
const path = require('path');

const app = express();

// Setting up Engine
app.set('view engine','ejs');
// Setting up views path
app.set('views',path.join(__dirname,'views'));

// Dummy data

app.use(express.static("assets"));


// Mapping
app.get('/',function(request,response) {
      // console.log(request);
      // response.send("<h2> Welcome to express </h2>");
      return response.render('home',{title:'To-Do App'});
});



// Listening to the server
app.listen(port, function(error){
      if (error) {
            console.log(error);
      }

      console.log('Yup!My Server is running on Port', port);
      })

