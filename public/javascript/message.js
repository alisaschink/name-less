 $(document).ready(function() {

 var conversationId;

$('.start-convo').on('click', function() {
    // grabs user_id for recipient
    var recipientId = $(this).attr('recipient-id');
    var is_anonymous = $(this).attr('is-anonymous');
    var convo_title = $(this).attr('convo-title')
    var convoObj = {
      is_anonymous: is_anonymous,
      convo_title: convo_title
    }

    $.post("/messaging/new/conversation/applicant/" + recipientId, convoObj).then(function(results) {
      window.location.replace("/messaging")
    });
  });
 
 $('.convos').on('click', function() {
    // displays messages for associated conversation when conversation div is clicked
    conversationId = $(this).attr('convo-id');
    $.get("/messaging/conversation/" + conversationId + "/messages", function(results) {
      displayMessages(results);
    });
  });

 $(function () {
    var socket = io();
    $('#chat-form').submit(function(e){
      e.preventDefault();
      // pulls message data from form
      // conversationId = $('.convos').attr('convo-id'); //need to move to a separate onClick function?
      var subject = $('#subject').val().trim();
      var message = $('#message').val().trim();
      var attachment = $('#attachment').val().trim();

      // saves message data to a message object
      var messageObj = {
        subject: subject,
        message: message,
        attachment: attachment,
        conversation_id: conversationId
      }

        // sends message object to newmessage post route
       $.post('/messaging/new/message', messageObj).then(function(results) {
        console.log(results);
        //display function here?
      })

      // emits message object using socket.io
      socket.emit('chat message', messageObj);
      // empties input values
      $('#subject').val('');
      $('#message').val('');
      $('#attachment').val('');
    });

    socket.on('chat message', function(msg){
      // $('#messages').append($('<div>').text(msg));
      console.log(msg);
      $.get("/messaging/conversation/" + conversationId + "/messages", function(results) {
        displayMessages(results);
      });
    });
  });


function displayMessages(r) {
  // empties message div before printing messages
  $('#messages').empty();
  // for each message, create a set of divs
  for (var i = 0; i < r.b.length; i++) {
    var user = r.b[i].User.username + " Posted At " + r.b[i].created_at
     // + moment(r.b[i].created_at).format("dddd, MMMM Do YYYY, h:mm a");
    var subject = r.b[i].subject
    var text = r.b[i].text;
    var attachment = r.b[i].attachment;
    var userDiv = $('<div>').addClass('user-div').append(user);
    var subjectDiv = $('<div>').addClass('subject-div').append(subject);
    var messageDiv = $('<div>').addClass('message-div').append(text);
    var attachmentDiv = $('<div>').addClass('attachment-div').append(attachment);
    var breakLine = $('<hr>')
    userDiv.append(subjectDiv);
    userDiv.append(messageDiv);
    userDiv.append(attachmentDiv);
    // append messages to message div
    console.log(userDiv)
    $('#messages').append(userDiv);
    $('#messages').append(breakLine);
  }
}


})