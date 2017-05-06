var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

router.get('/home', isAuthenticated, function(req,res){
    if (req.user.is_employer == false){
        db.User.findOne({
            where: {
          id: req.user.id,
        },
        include: [db.Credential]
          }).then(function(result) {
        var hbs_obj = {data: result,
                      section_creds: [],
                      }
        var possible_section_names = []
        // loop over all credentials 
        for (c in result.Credentials){
            // reformat as json
            cred = result.Credentials[c].toJSON()
            // check whether the section_name is already registered 
            if (possible_section_names.indexOf(cred.section_name) < 0){
                // if not, add it to the list of section_names 
                possible_section_names.push(cred.section_name)
                // then add the whole credential to the handlebars obj
                var cred_obj = {section_name: cred.section_name,
                                creds: [cred]} 
                hbs_obj.section_creds.push(cred_obj)
            }
            else{
                for (s in hbs_obj.section_creds){
                    if (hbs_obj.section_creds[s].section_name == cred.section_name){
                        var current_section = hbs_obj.section_creds[s]
                        current_section.creds.push(cred)
                }
                }
            
        }}

        res.render("Applicant/home", hbs_obj)
      
    });
        
    }else if (req.user.is_employer == true) {
        res.redirect("/employer/home")
    }
    else{
        res.redirect("/")
    }
});

router.get('/public/:user_id', isAuthenticated, function(req,res){
  if (req.user){
    db.User.findOne({
      where: {
          id: req.params.user_id,
      }
    }).then(function(result) {
      var hbs_obj = {
                      data: result.toJSON()
                    }
      res.render("Applicant/public-bio", hbs_obj)
    
    });
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
    res.redirect("/applicant/home")
  
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
    res.redirect("/applicant/home")
  
    });
});

module.exports = router;
