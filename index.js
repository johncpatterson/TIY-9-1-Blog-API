// main app script
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')

// connect to Mongo when the app initializes
mongoose.connect('mongodb://test:test1234@ds155727.mlab.com:55727/tiy')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

// get users
app.get('/users', function(req, res) {
   User.find().
   exec(function(err, response) {
      res.json(response);
   })
})

// add a new user
app.post('/users', function(req, res) {
   var person = new User({
      name: req.body.newUser.name,
      age: req.body.newUser.age,
      likejs: req.body.newUser.likejs,
   });

   person.save(function(err) {
      if (err) {
         console.log(err);
      } else {
         User.find().
         exec(function(err, response) {
            res.json(response);
         })
      }

   })
})

// delete a user
app.post('/users/delete', function(req, res) {
   let id = req.body._id;
   console.log(id);

   User.findByIdAndRemove(id.id, function(err) {
      if (err) {
         console.log(err);
      } else {
         User.find().
         exec(function(err, response) {
            res.json(response);
         })
      }
   });
});

// app listens on port 3009
app.listen(3009, function() {
   console.log('Example app listening on port 3009!')
})
