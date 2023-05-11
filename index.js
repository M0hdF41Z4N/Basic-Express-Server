// Importing express module
const express = require('express');
// Defining port
const port = 3001;
// Importing path
const path = require('path');

const app = express();

// Configuring DB file
const db = require('./config/mongoose');
// Configuring db schema
const tasks = require('./model/Task');


// Setting up Engine
app.set('view engine','ejs');
// Setting up views path
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
// Dummy data

app.use(express.static("assets"));



// Mapping
app.get('/',function(request,response) {
      // console.log(request);
      // response.send("<h2> Welcome to express </h2>");

      Task.find({},function(error,tasks){
            if (error)
            {
                  console.log("Unable to Get details");
                  return;
            }

            return response.render('home',{
                  title:"To-Do App",
                  task_list : tasks

            })
      });

      return response.render('home',{title:'To-Do App'});
});


// Creating contact
app.post('/create_task',function(request,response){

      Task.create({
            text:request.body.text,
            status:request.body.status
      }, function(error,newTask) {
            if (error) {
                  console.log('Unable to add task.');
                  return;
            }
            console.log(newTask,"+");
            return response.redirect('back');
      });


});



// Listening to the server
app.listen(port, function(error){
      if (error) {
            console.log(error);
      }

      console.log('Yup!My Server is running on Port', port);
      })

