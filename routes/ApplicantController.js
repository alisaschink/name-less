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
    var hbs_obj = {data: result,
    			  headings: []}
    var possible_headings = []
    // loop over all credentials 
    for (c in result.Credentials){
    	// reformat as json
    	cred = result.Credentials[c].toJSON()
    	// check whether the heading is already registered 
    	if (possible_headings.indexOf(cred.heading) < 0){
    		// if not, add it to the list of headings 
    		possible_headings.push(cred.heading)
    		// then add the whole credential to the handlebars obj 
    		hbs_obj.headings[cred.heading] = {name: cred.heading,
    										 creds: [cred]}
    	}else{
			hbs_obj.headings[cred.heading.creds].push(cred)
    	}
    }

    res.render("Applicant/home", result.toJSON())
  
    });
	
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
