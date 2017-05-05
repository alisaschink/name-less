var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

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
    console.log(req.user.is_employer)
    res.redirect("/applicant/home");
  }
  else if (req.user.is_employer == true){
    res.redirect("/employer/home")
  }
});

module.exports = router;