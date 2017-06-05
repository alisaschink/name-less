var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
// var connection = require('../config/connection.js')

router.get('/home', isAuthenticated, function(req,res){

    if (req.user.is_employer == true){

      db.User.findOne({
        where: {
                id: req.user.id,
                }
      }).then(function(result1) {
            var hbs_obj = {
                user: result1,
                }
            db.Company.findOne({
                where: {
              user_id: req.user.id,
            },
            include: [db.Job]
              }).then(function(result2) {
            if (result2){
              hbs_obj["data"] = result2.toJSON()
            }
            res.render("Employer/home", hbs_obj)
          });  
        });

    }else if (req.user.is_employer == false){
        res.redirect("/applicant/home")
    }else{
        res.redirect("/")
    }
    
});

router.post('/update-basic-info', isAuthenticated, function(req,res){
    var changes = {
      username: req.body.username,
      name: req.body.name, 
      email: req.body.email,
      location: req.body.location,
      img: req.body.image
    }
    db.User.update(changes, {
        where: {
            id: req.user.id,
        },
      }).then(function(result) {
    res.redirect("/employer/home")
  
    });
});

router.post('/update-public-bio', isAuthenticated, function(req,res){
    console.log(req.body.info)
    var changes = {
        info: req.body.info
    }
    db.User.update(changes, {
        where: {
            id: req.user.id,
        },
      }).then(function(result) {
    res.redirect("/employer/home")
  
    });
});


module.exports = router;