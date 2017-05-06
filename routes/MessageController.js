var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');

var userId;

// get route to display all conversations for user
router.get('/', function(req, res){
  if(req.user){
    userId = req.user.id
  }
  var userResults;
  db.Conversation.findAll({
    where: { $or: [{user_1: userId}, {user_2: userId}] }
  }).then(function(dbConversation){
    res.render('Messaging/index', {conversations: dbConversation})
  })
});

// route to get messages for a given conversation
 router.get('/conversation/:id/messages', function(req, res) {
  var conversationId = req.params.id;
  if(req.user){
    var userId = req.user.id
  }
  var convoResults;
  db.Conversation.findOne({
    where: { id: conversationId },
  }).then(function(results) {
    // save results for a given conversation to a convoResults object
    convoResults = {
      a: results.dataValues
    };
    // find all the messages for that conversation and include user data
    db.Message.findAll({
      where: { conversation_id: conversationId },
      include: {
        model: db.User
      },
      order: 'created_at DESC'
    }).then(function(messageResults) {
      console.log(messageResults)
      // save messages and user data to a new key within the convoResults object
      var message_array = []
      for (m in messageResults){
        message_array.push(messageResults[m].dataValues)
      }
      convoResults.b = message_array
      res.json(convoResults);
    });
  });
});

// post route for a new message
router.post('/new/message', function(req, res){
  if(req.user){
    userId = req.user.id
  }
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

//post route for a new conversation
router.post('/new/conversation/applicant/:id', function(req, res){
  if(req.user){
    userId = req.user.id
    userName = req.user.name
    userUsername = req.user.username
  }

  var initName = userName
  if (req.body.is_anonymous || req.user.is_employer){
    initName = userUsername
  }

  var title_string = initName + req.body.convo_title

  db.Conversation.create({
    is_anonymous: req.body.is_anonymous,
    user_1: userId,
 //user_2 comes from req.params? --> add user-id attribute to convo button
    user_2: req.params.id,
    title: title_string
  }).then(function(dbConversation){
    res.json(dbConversation);
  });
});


module.exports = router;