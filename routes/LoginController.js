var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

router.get('/', function(req,res){
	if (req.user) {
      res.redirect("/members");
    }else{
    res.render("signup", {})
	}
 
});

router.get('/employerSignup', function(req,res){
  if (req.user) {
      res.redirect("/employer/home");
    }else{
    res.render("employerSignup", {})
  }
 
});

router.get('/applicantSignup', function(req,res){
  if (req.user) {
      res.redirect("/applicant/home");
    }else{
    res.render("applicantSignup", {})
  }
 
});

router.get('/login', function(req,res){
	if (req.user) {
      res.redirect("/applicant/home");
    }else{
    res.render("login", {})
	}
 
});

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