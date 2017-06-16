var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var bodyParser = require('body-parser');
var db = require("../models");
var express = require('express');
var mysql = require('mysql');

// Create Router Object & middleware
var router  = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);

// Choose what type of user you want to sign up as 
router.get('/', function(req,res){
	if (req.user) {
      res.redirect("/members");
    }else{
    res.render("signup", {})
	}
 
});

// Sign up as an employer
router.get('/employerSignup', function(req,res){
  if (req.user) {
      res.redirect("/members");
    }else{
    res.render("employers/signup", {})
  }
 
});

// Sign up as an applicant
router.get('/applicantSignup', function(req,res){
  if (req.user){
    res.redirect("/members");
  }else{
    res.render("applicants/signup", {})
  }
 
});

// login 
router.get('/login', function(req,res){
	if (req.user) {
      res.redirect("/members");
    }else{
    res.render("login", {})
	}
 
});

router.get('/members', isAuthenticated, function(req,res){
  if (req.user.is_employer == 1){
    res.redirect("/employer/home");
  }else{
    res.redirect("/applicant/home");
  }
  }
});

module.exports = router;