var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');

// get route to display all conversations for user
router.get('/', function(req, res){
  var userId = req.user ? req.user.id : "1";
  db.Conversation.findAll().then(function(dbConversation){
    res.render('messaging/index', {conversations: dbConversation})
  })
});

// route to get messages for a given conversation
 router.get('/conversation/:id/messages', function(req, res) {
  var conversationId = req.params.id;
  console.log('conversation ID' + conversationId);
  var userId = req.user ? req.user.id : "1";
  var convoResults;
  Models.Conversation.findOne({
    where: { id: conversationId },
  }).then((results) => {
    // save results for a given conversation to a convoResults object
    convoResults = {
      a: results,
    };
    // find all the messages for that conversation and include user data
    Models.Message.findAll({
      where: { conversation_id: conversationId },
      include: {
        model: Models.User
      }
    }).then(function(messageResults) {
      // save messages and user data to a new key within the convoResults object
      convoResults.b = messageResults;
      res.json(convoResults);
    });
  });
});

// post route for a new message
router.post('/newmessage', function(req, res){
  var userId = req.user ? req.user.id : "1"
  db.Message.create({
    subject: req.body.subject,
    text: req.body.text,
    attachment: req.body.attachment,
    conversation_id: req.body.conversation_id,
    user_id: userId
  }).then(function(dbMessage){
    res.json(dbMessage);
  });
});


module.exports = router;