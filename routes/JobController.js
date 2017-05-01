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

module.exports = router;
