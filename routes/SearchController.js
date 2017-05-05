var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

router.get('/', isAuthenticated, function(req,res){
				console.log(req.body)
        db.Credential.findAll({
            where: {
          $or: [
          			{heading: {like: '%' + req.query.keyword + '%'}},
          			{subheading: {like: '%' + req.query.keyword + '%'}},
          			{details:{like: '%' + req.query.keyword + '%'}}
          			]
        		}
          }).then(function(result) {
          	var users = []
          	for (cred in result){
          		if (users.indexOf(result[cred].user_id) < 0){
          		users.push(result[cred].user_id)
          		}
          	}
          	console.log(users)

        		db.User.findAll({
		            where: {
				          id: users
				        }
		          }).then(function(result2) {
        				var hbs_obj = {users: result2}
        				res.json(hbs_obj)
        			});
   				});
			});
module.exports = router;
