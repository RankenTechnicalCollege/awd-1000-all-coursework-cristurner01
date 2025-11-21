"use strict";

let submitBtn = document.getElementById("submit");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errBox = document.getElementById("errMsgBox");
let successBox = document.getElementById("successMsgBox");

submitBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  errBox.innerHTML = "";
  successBox.innerHTML = "";

  if (email.value.trim() === "" || password.value.trim() === "") {
    errBox.innerHTML = "<p>You seem to have forgotten your username and password.</p>";
  } else if (email.value.trim() === "admin@example.com" && password.value.trim() === "password") {
    successBox.innerHTML = "<p>Welcome back admin! :D</p>";
  } else {
    errBox.innerHTML = "<p>That email and password doesn't seem to be right :(</p>";
  }
});
