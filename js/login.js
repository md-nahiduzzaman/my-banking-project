//console.log("login");

document.getElementById("login-submit").addEventListener("click", function () {
  //get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //ger password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  if (userEmail == "user@gmail.com" && userPassword == "1234") {
    window.location.href = "banking.html";
  }
});
