var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");
var express = require('express');
var mysql = require('mysql');
var moment = require('moment');

var bodyParser = require('body-parser');

// Create Router Object & middleware
var router  = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);

var userId;

// get route to display all newsfeed posts
router.get('/', function(req, res){
  db.Newsfeed.findAll({
    include: {
        model: db.User
      }
  }).then(function(dbNewsfeed){
    // res.json(dbNewsfeed)
    console.log(dbNewsfeed)
    var formatted_stories = []
    for (s in dbNewsfeed){
      formatted_stories.push(dbNewsfeed[s].toJSON())
    }
    console.log(formatted_stories)
    res.render('newsfeed/index', {stories: formatted_stories})
  })
});

router.get('/data', function(req, res){
  db.Newsfeed.findAll({
    include: {
        model: db.User
      }
  }).then(function(dbNewsfeed){
    // res.json(dbNewsfeed)
    console.log("route ran")
    console.log(dbNewsfeed)
    var formatted_stories = []
    for (s in dbNewsfeed){
      formatted_stories.push(dbNewsfeed[s].toJSON())
    }
    res.json(formatted_stories)
  })
});



// post route for a new message
router.post('/new/story', isAuthenticated, function(req, res){
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