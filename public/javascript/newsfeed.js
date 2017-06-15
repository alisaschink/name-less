$(document).ready(function() {
  


  $(function () {
    var socket = io();
    $(".story-submit").on('click', function(e) {
    e.preventDefault();
    var content = $(".story-body").val().trim();

    //form validation
    function validateForm() {
      var validated = true;
      if (content == "") {
        validated = false;
      }

      return validated;
    }

    if (validateForm() == true) {
      var storyObj = {
        content: content
      }

      $.post('/newsfeed/new/story', storyObj).then(function(results) {
        console.log(results);
      })
    } else {
      $('.form-text').show();
    }
      // emits message object using socket.io
      socket.emit('new story', storyObj);
      // empties input values
      $('.story-body').val('');
    });

    socket.on('new story', function(story){
      // $('#messages').append($('<div>').text(story));
      console.log("hi this is the one we want");
      displayStories(story);
    });
  });

  displayStories();

  function displayStories() {
    $.get("/newsfeed/data", function(results) {
      console.log("GET REQUEST RUNS");
      printStories(results);
    });
  }

  function printStories(r) {
    $('.form-text').hide();
    $('.story-body').val('');
    $('.stories-container').empty();
    console.log("empty")
    for (var i = 0; i < r.length; i++) {
      var name = r[i].User.name + " Posted on " + moment(r[i].created_at).format("dddd, MMMM Do YYYY, h:mm a");
      var content = r[i].content;
      var nameDiv = $('<div>').addClass('name-div').append(name);
      var contentDiv = $('<div>').addClass('content-div').append(content);
      contentDiv.prepend(nameDiv);
      $('.stories-container').append(contentDiv);
    }
  }
});