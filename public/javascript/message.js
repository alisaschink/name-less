 $(function () {
    var socket = io();
    $('#chat-form').submit(function(e){
      e.preventDefault();
      // pulls message data from form
      var conversationId = $('.convo-results').attr('results-id');
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
        displayResults();
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
      //function to display messages here
    });
  });

