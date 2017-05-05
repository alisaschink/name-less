var isAuthenticated = require("../config/middleware/isAuthenticated");


var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

router.get('/', isAuthenticated, function(req,res){
    if (req.user.is_employer == false){

        db.Job.findAll({
            where: {
          // $or: [
          // 			heading: {like: '%' + keyword + '%'},
          // 			subheading: {like: '%' + keyword + '%'},
          // 			details:{like: '%' + keyword + '%'}
          // 			]
        		}
          }).then(function(result) {
          	var users = []
          	for (cred in result){
          		if (users.indexOf(result[cred].user_id) < 0){
          		user.push(result[cred].user_id)
          		}
          	}
          	console.log(users)

        		db.Users.findAll({
		            where: {
				          id: users
				        }
		          }).then(function(result2) {
        				var hbs_obj = {users: result2}
        				res.json(hbs_obj)
        			});
   				});
				}
			});
module.exports = router;
