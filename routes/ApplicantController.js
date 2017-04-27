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

	db.User.findAll({
      }).then(function(result) {
    console.log(result)
    res.render("index", {data: result})
  
    });
	// res.render("index",{data : router.get("/api/all-users")})
});

module.exports = router;
