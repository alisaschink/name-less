$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var realNameInput = $("#realName-input");
  var userNameInput = $("#userName-input");
  var isEmployerInput = $("#isEmployer-input");
  var locationInput = $("#location-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      realName: realNameInput.val().trim(),
      userName: userNameInput.val().trim(),
      isEmployer: isEmployerInput.val(),
      location: locationInput.val().trim()

    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.realName, userData.userName, userData.isEmployer, userData.location);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, realName, userName, isEmployer, location) {
    $.post("/api/signup", {
      email: email,
      password: password,
      name: realName, 
      username: userName,
      is_employer: isEmployer,
      location: location

    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});