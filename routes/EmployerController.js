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


module.exports = router;