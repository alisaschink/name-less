var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

router.get('/', function(req,res){
	if (req.user) {
      res.redirect("/applicant/home");
    }else{
    res.render("signup", {})
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
    res.redirect("/applicant/home");
});

module.exports = router;