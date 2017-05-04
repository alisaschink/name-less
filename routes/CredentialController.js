var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
// var connection = require('../config/connection.js')

// Student's home view 
// Get announcements from student's teacher(s) and project(s) student is working on 

// router.get('/home', isAuthenticated, function(req,res){


router.post('/update', function(req,res){
	console.log(req.body)
	var changes = {
		heading: req.body.heading, 
		subheading: req.body.subheading,
		details: req.body.details
	}
	console.log(changes)
	db.Credential.update(changes, {
		where: {
      		id: req.body.id,
    	},
      }).then(function(result) {
  	console.log(result)
    res.redirect("/applicant/home")
    });

});

router.post('/new', function(req,res){
	console.log(req.body)
	var changes = {
		section_name: req.body.section_name,
		user_id: req.body.user_id,
		heading: req.body.heading, 
		subheading: req.body.subheading,
		details: req.body.details
	}
	console.log(changes)
	db.Credential.create(changes).then(function(result) {
  	console.log(result)
    res.redirect("/applicant/home")
    });

});

module.exports = router;