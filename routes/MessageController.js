var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res){
  db.Conversation.findAll().then(function(dbConversation){
    res.render('messaging/index', {conversations: dbConversation})
  })
});

module.exports = router;