var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
// var connection = require('../config/connection.js')

router.get('/home', isAuthenticated, function(req,res){
    if (req.user.is_employer == true){
        db.Company.findOne({
            where: {
          user_id: req.user.id,
        },
        include: [db.Job]
          }).then(function(result) {
        if (result){
        var hbs_obj = {
                        user: req.user,
                        data: result.toJSON()
                      }
        }
        res.render("Employer/home", hbs_obj)
        
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