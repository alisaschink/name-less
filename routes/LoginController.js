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
    res.render("Employer/signup", {})
  }
 
});

// Sign up as an applicant
router.get('/applicantSignup', function(req,res){
  if (req.user) {
      res.redirect("/members");
    }else{
    res.render("Applicant/signup", {})
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

// Route for redirecting to either applicant or employer home page
router.get('/members', isAuthenticated, function(req,res){
  if (req.user.is_employer == false){
    res.redirect("/applicant/home");
  }
  else if (req.user.is_employer == true){
    console.log("redirectiong to employer home")
    res.redirect("/employer/home")
  }
});

module.exports = router;