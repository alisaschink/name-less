var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

router.post('/update', function(req,res){
	var changes = {
		title: req.body.title, 
		location: req.body.location,
		description: req.body.description,
		responsibilities: req.body.responsibilities,
		qualifications: req.body.qualifications
	}
	db.Job.update(changes, {
		where: {
      		id: req.body.id,
    	},
      }).then(function(result) {
    res.redirect("/employer/home")
  
    });
});

router.post('/new', function(req,res){
	console.log(req.body)
	var changes = {
		title: req.body.title, 
		location: req.body.location,
		description: req.body.description,
		responsibilities: req.body.responsibilities,
		qualifications: req.body.qualifications,
		company_id: req.body.company_id,
		industry_id: req.body.industry_id,
	}
	console.log(changes)
	db.Credential.create(changes).then(function(result) {
  	console.log(result)
    res.redirect("/applicant/home")
    });

});

module.exports = router;
