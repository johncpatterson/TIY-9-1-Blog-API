// main app script
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = require('./models/post')
const Comment = require('./models/comment')

// connect to Mongo when the app initializes
mongoose.connect('mongodb://test:test1234@ds155727.mlab.com:55727/tiy')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

// get blogs
app.get('/blogs', function(req, res) {
   Post
      .find()
      .populate('_comment')
      .exec(function(err, response) {
         res.json(response);
      })
})

// add a new blog post
app.post('/blogs', function(req, res) {
   var blogPost = new Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
   });

   blogPost.save(function(err) {
      if (err) {
         console.log(err);
      } else {
         Post.find().
         exec(function(err, response) {
            res.json(response);
         })
      }

   })
})

// add a new blog comment
app.post('/comments', function(req, res) {
   var comment = new Comment({
      description: req.body.description,
      updated: req.body.updated,
      _post: req.body.postid,
   });

   comment.save(function(err) {
      if (err) {
         console.log(err);
      } else {
         Post.findById(req.body.postid, function(err, post) {
            post._comment.push(comment);
            post.save(function(err, response) {
               res.json({ success: "Thanks for your new comment" })
            });
         })
      }
   })
})


// app listens on port 3009
app.listen(3007, function() {
   console.log('Example app listening on port 3007!')
})
