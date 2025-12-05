"use strict";
/*
cris turner
oct 31 2025
*/

let submit = document.getElementById("submit");
let hurrayMsg = document.getElementById("hurraymessage");
let errorMsg =document.getElementById("errormessage");

submit.onclick = function() {
  let yourAgeInput = document.getElementById("yourage").value;
  hurrayMsg.innerHTML = "";
  errorMsg.innerHTML = "";

  let age = Number(yourAgeInput);

  if (parseInt(age) != age) {
    errorMsg.innerHTML = "<p>Please enter your age!</p>";
  } else if (age < 1 || age > 200) {
    errorMsg.innerHTML = "<p>Age out of range!</p>";
  } else if (age < 21) {
    errorMsg.innerHTML = "<p>You're not old enough!</p>";
  } else if (age >= 21) {
    hurrayMsg.innerHTML = "<p>Welcome to the venue!</p>";
  }


 }


