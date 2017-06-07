var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');

var userId;

// get route to display all newsfeed posts
router.get('/', function(req, res){
  db.Newsfeed.findAll({
    include: {
        model: db.User
      }
  }).then(function(dbNewsfeed){
    res.render('newsfeed/index', {stories: dbNewsfeed})
  })
});

// post route for a new message
router.post('/new/story', function(req, res){
  if(req.user){
    userId = req.user.id
  }
  db.Newsfeed.create({
    content: req.body.content,
    user_id: userId
  }).then(function(dbNewsfeed){
    res.json(dbNewsfeed);
  });
});


module.exports = router;