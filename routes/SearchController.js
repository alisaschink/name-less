var isAuthenticated = require("../config/middleware/isAuthenticated");

var db = require("../models");
var express = require('express');
var mysql = require('mysql');

var bodyParser = require('body-parser');

// Create Router Object & middleware
var router  = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);


var searchAnonProfiles = function(req,res){
  db.Credential.findAll({
    where: {
		  $or: [
	  			{heading: {like: '%' + req.query.keyword + '%'}},
	  			{subheading: {like: '%' + req.query.keyword + '%'}},
	  			{details:{like: '%' + req.query.keyword + '%'}}
	  			]
				}

  }).then(function(result) {
  	var users = []
  	for (cred in result){
  		if (users.indexOf(result[cred].user_id) < 0){
  		users.push(result[cred].user_id)
  		}
  	}
		db.User.findAll({
        where: {
          id: users
        }
      }).then(function(result2) {
				var hbs_obj = {result: result2,
											originalQuery: req.query}
				res.render("search/searchAnonProfiles", hbs_obj)
			});
		});
}


var searchPublicProfiles = function(req,res){
  db.User.findAll({
    where: {
		  $or: [
	  			{info: {like: '%' + req.query.keyword + '%'}},
	  			{name: {like: '%' + req.query.keyword + '%'}},
	  			]
				}
  }).then(function(result) {
				var hbs_obj = {result: result,
											originalQuery: req.query}
				res.render("search/searchPublicProfiles", hbs_obj)

		});
}

var searchJobs = function(req,res){
  db.Job.findAll({
    where: {
		  $or: [
	  			{title: {like: '%' + req.query.keyword + '%'}},
	  			{description: {like: '%' + req.query.keyword + '%'}},
	  			{qualifications: {like: '%' + req.query.keyword + '%'}},
	  			{responsibilities: {like: '%' + req.query.keyword + '%'}},
	  			]
				},
			include: [db.Company]
  }).then(function(result) {
				var hbs_obj = {result: result,
							 originalQuery: req.query}
				res.render("search/searchJobs", hbs_obj)

		});
}

router.get('/', function(req,res){

					switch(req.query.searchType) {

				    case "Anonymous Profiles":
				        searchAnonProfiles(req,res)
				        break;
				    case "Public Networking Bios":
				        searchPublicProfiles(req,res)
				        break;
				    case "Open Positions":
				    		searchJobs(req,res)
				    		break;
				    default:
				        searchJobs(req,res)

				}

			});
module.exports = router;
