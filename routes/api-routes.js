// Requiring our models and passport as we've configured it
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require("../models");
var passport = require("../config/passport");

// Create Router Object & middleware
var router  = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: false });
router.use(jsonParse);

// module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/applicant-signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name, 
      username: req.body.username,
      location: req.body.location,
      img: "lama.jpg",
      is_employer: req.body.is_employer
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });

  router.post("/employer-signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name, 
      username: req.body.username,
      location: req.body.location,
      img: "lama.jpg",
      is_employer: req.body.is_employer
    }).then(function(result) {
      db.Company.create({
        name: req.body.username, 
        industry_id: 1, 
        user_id: result.id
      }).then(function(result2) {

          db.User.findOne({
            where: {
                    id: result.id,s
                    },
          }).then(function(result3) {


              res.redirect(307, "/api/login");
              }).catch(function(err) {
                res.json(err);
              });
            });
          });
      });
  // });


  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  router.get("/all-users", function(req, res) {
    db.User.findAll({
      }).then(function(result) {
    res.json(result)
  
    });
  });
// };

module.exports = router;