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
    			  section_names: []}
    var possible_section_names = []
    // loop over all credentials 
    for (c in result.Credentials){
    	// reformat as json
    	cred = result.Credentials[c].toJSON()
    	// check whether the section_name is already registered 
    	if (possible_section_names.indexOf(cred.section_name) < 0){
    		// if not, add it to the list of section_names 
    		possible_section_names.push(cred.section_name)
    		// then add the whole credential to the handlebars obj 
    		hbs_obj.section_names[cred.section_name] = {name: cred.section_name,
    										 creds: [cred]}
    	}else{
			hbs_obj.section_names[cred.section_name.creds].push(cred)
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
