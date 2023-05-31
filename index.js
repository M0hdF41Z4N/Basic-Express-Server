// Importing express module
const express = require('express');
// Defining port
const port = 8000;
// Importing path
const path = require('path');

const app = express();

// Configuring DB file
const db = require('./config/mongoose');
// Configuring db schema
const Task = require('./model/task');


// Setting up Engine
app.set('view engine','ejs');
// Setting up views path
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
// Setting up assets
app.use(express.static("assets"));



// Mapping

// Setting home route
app.get('/',function(request,response) {
      
      // finding and rendering the tasks
      Task.find({

      }).then(function(items){
            // Render home page with context
            return response.render('home',{
                              title:"To-Do App",
                              task_list : items
            
                        })
      }).catch((error)=> {
            // For debugging purpose
            // console.log('Unable to find task.',error);
            return;});
});


// Creating Task
// Storing data into db using post method
app.post('/create_task',function(request,response){

      Task.create({
            // Task text
                  text:request.body.task,
                  category:request.body.category,
                  due_date:request.body.dueDate
            }).then((result)=> {
                  // Redirecting to home page
                  return response.redirect('back');
            }).catch((error)=> {
                  // For debugging purpose
                  // console.log('Unable to add task.' , error);
                  return;
            });
});

// Deleting multiple items using post method
app.post("/todos/delete",(request,response)=> {

      // fetching all tasks to be deleted
      const tasks = request.body.tasks;

      // Delete the tasks from the database
      Task.deleteMany({ _id: { $in: tasks }}).then((result) => {
            // For debugging purpose
            // console.log('Tasks deleted successfully');
            return response.redirect('back');
      }).catch((err) => {
            // For debugging purpose
            // console.log('Unable to delete ',error);
        return;
    });
     
});

// Deleting task using task id
app.get('/delete_task/:id',function(request,response){

      // Getting from request
      const id = request.params.id;

      // finding and deleting task 
      Task.findByIdAndDelete(id)
      .then((error,newTask) => {   
            return response.redirect('back');
      }).catch(error => console.log('Unable to delete task'));

});

// Listening to the server
app.listen(port, function(error){
      if (error) {
            console.log(error);
      }
      // for debugging purpose
      // console.log('Yup!My Server is running on Port', port);
      })

