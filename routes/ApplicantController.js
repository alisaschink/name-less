var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
// var connection = require('../config/connection.js')

// Student's home view 
// Get announcements from student's teacher(s) and project(s) student is working on 

// router.get('/home', isAuthenticated, function(req,res){
router.get('/home', function(req,res){

	db.User.findOne({
		where: {
      id: 1,
    },
    include: [db.Credential]
      }).then(function(result) {

    var possible_headings = []

    for (c in result.Credentials){
    	cred = result.Credentials[c].toJSON()
    	if (possible_headings.indexOf(cred.heading) < 0){
    		possible_headings.push(cred.heading)
    	}
    }

    // var hbs_obj = {data: result.toJSON,
    // 			}
    console.log("possible headings = " + possible_headings)
    // console.log(result.toJSON())
    res.render("Applicant/home", result.toJSON())
  
    });
	// res.render("index",{data : router.get("/api/all-users")})
});

router.post('/update-basic-info', function(req,res){
	var changes = {
		name: req.body.name, 
		email: req.body.email,
		location: req.body.location
	}
	db.User.update(changes, {
		where: {
      		id: 1,
    	},
      }).then(function(result) {
    res.redirect("/applicant/home")
  
    });
});

module.exports = router;
