var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
// var connection = require('../config/connection.js')
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/images/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })


router.get('/home', isAuthenticated, function(req,res){

    if (req.user.is_employer == true){

      db.User.findOne({
        where: {
                id: req.user.id,
                },
            include: [db.Company]
      }).then(function(result1) {
            var hbs_obj = {
                user: result1.toJSON(),
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

router.post('/update-basic-info', isAuthenticated, upload.single('img'), function(req,res){
  var imageName;
  if (!req.file) {
    imageName = "http://www.eggental.com/fileadmin/_processed_/csm_Lama-Alpaka_Trekking_Welschnofen_Carezza_03_5176daa2b6.jpg";
  } else {
    imageName = req.file.originalname;
  }
    var changes = {
      username: req.body.username,
      name: req.body.name, 
      email: req.body.email,
      location: req.body.location,
      img: imageName
    }
    console.log("REQ.FILE  = ")
    console.log(req.file)
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