$(document).ready(function() {
  
  displayStories();

  function displayStories() {
    $.get("/newsfeed/", function(results) {
      console.log(results);
      printStories(results);
    });
  }

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

      $.post('/newsfeed/new/story', contentObj).then(function(results) {
        console.log(results);
      })
    } else {
      $('.form-text').show();
    }

  })

  function printStories(r) {
    $('.form-text').hide();
    $('.story-body').val('');
    $('.stories-container').empty();
    for (var i = 0; i < r.length; i++) {
      var name = r[i].User.name;
      //+ " Posted At " + moment(r[i].created_at).format("dddd, MMMM Do YYYY, h:mm a");
      var content = r[i].content;
      var nameDiv = $('<div>').addClass('username-div').append(name);
      var contentDiv = $('<div>').addClass('content-div').append(content);
      contentDiv.prepend(nameDiv);
      $('.stories-container').append(contentDiv);
    }
  }
});