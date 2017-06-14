var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var mysql = require('mysql');

var bodyParser = require('body-parser');

// Create Router Object & middleware
var router  = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);

// var connection = require('../config/connection.js')

// Student's home view 
// Get announcements from student's teacher(s) and project(s) student is working on 

// router.get('/home', isAuthenticated, function(req,res){


router.post('/update', function(req,res){
	console.log("REQ.BODY = " + req.body)
	var changes = {
		heading: req.body.heading, 
		subheading: req.body.subheading,
		details: req.body.details
	}
	console.log("CHANGES = " + changes)
	db.Credential.update(changes, {
		where: {
      		id: req.body.id,
    	},
      }).then(function(result) {
  	console.log("RESULT = " + result)
    res.redirect("/applicant/home")
    });

});

router.post('/new', function(req,res){
	console.log("REQ.BODY = " + req.body)
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

router.get('/applicant/:user_name', function(req,res){

	db.User.findOne({
		where: {
      username: req.params.user_name,
    },
    include: [db.Credential]
      }).then(function(result) {
    var hbs_obj = {data: result,
    			  section_creds: []}
    var possible_section_names = []
    // loop over all credentials 

    if (result){
        for (c in result.Credentials){
        	// reformat as json
        	cred = result.Credentials[c].toJSON()
        	// check whether the section_name is already registered 
        	if (possible_section_names.indexOf(cred.section_name) < 0){
        		// if not, add it to the list of section_names 
        		possible_section_names.push(cred.section_name)
        		// then add the whole credential to the handlebars obj
        		var cred_obj = {section_name: cred.section_name,
        						creds: [cred]} 
        		hbs_obj.section_creds.push(cred_obj)
        	}
        	else{
        		for (s in hbs_obj.section_creds){
        			if (hbs_obj.section_creds[s].section_name == cred.section_name){
    					var current_section = hbs_obj.section_creds[s]
    					current_section.creds.push(cred)
        		}
    			}
            }
    }}

    res.render("Applicant/anon-profile", hbs_obj)
  
    });
	
});

module.exports = router;