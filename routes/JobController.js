var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");
var express = require('express');
var mysql = require('mysql');

var bodyParser = require('body-parser');

// Create Router Object & middleware
var router  = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);

router.get('/company/:company_id', isAuthenticated, function(req,res){
    if (req.user){
        db.Company.findOne({
            where: {
          id: req.params.company_id,
        },
        include: [db.Job, db.User]
          }).then(function(result) {
        var hbs_obj = {
                        data: result.toJSON()
                      }
        res.render("employer/job-listings", hbs_obj)
      
        });
    }
    
});

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

	var changes = {
		title: req.body.title, 
		location: req.body.location,
		description: req.body.description,
		responsibilities: req.body.responsibilities,
		qualifications: req.body.qualifications,
		company_id: req.body.company_id,
		industry_id: req.body.industry_id,
	}

	db.Job.create(changes).then(function(result) {
    res.redirect("/applicant/home")
    });

});

module.exports = router;
