 var conversationId;

 $('.convos').on('click', function(e) {
    e.preventDefault();
    // displays messages for associated conversation when conversation div is clicked
    conversationId = $('.convos').attr('convo-id');
    $.get("/conversation/" + conversationId + "/messages", function(results) {
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
       $.post('/messaging/newcomment', messageObj).then(function(results) {
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
      $.get("/conversation/" + conversationId + "/messages", function(results) {
        displayMessages(results);
      });
    });
  });


function displayMessages(r) {
  // empties message div before printing messages
  $('#messages').empty();
  // for each message, create a set of divs
  for (var i = 0; i < r.b.length; i++) {
    var user = r.b[i].User.id + " Posted At " + moment(r.b[i].created_at).format("dddd, MMMM Do YYYY, h:mm a");
    var subjects = r.b[i].subject
    var text = r.b[i].text;
    var attachment = r.b[i].attachment;
    var userDiv = $('<div>').addClass('user-div').append(user);
    var subjectDiv = $('<div>').addClass('subject-div').append(subject);
    var messageDiv = $('<div>').addClass('message-div').append(comments);
    var attachmentDiv = $('<div>').addClass('attachment-div').append(attachment);
    userDiv.append(subjectDiv);
    userDiv.append(messageDiv);
    userDiv.append(attachmentDiv);
    // append messages to message div
    $('#messages').append(userDiv);
  }
}