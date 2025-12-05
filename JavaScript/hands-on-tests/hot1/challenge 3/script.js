"use strict";

let submitBtn = document.getElementById("submitBtn");
let message = document.getElementById("message");

message.innerHTML = "";

submitBtn.onclick = function() {
  let inputNum = document.getElementById("enterNum").value.trim();

  if (isNaN(inputNum)) {
    message.innerHTML = "<p>Please enter a number, not a word</p>"; 
  } else if (inputNum < 1 || inputNum > 3) {
    message.innerHTML = "<p>You didn't enter a valid number.</p>";
  } else if (inputNum === "1") {
    message.innerHTML = "<p>One is the loneliest number that you'll ever do.</p>";
  } else if (inputNum === "2") {
    message.innerHTML = "<p>Two can be as bad as one. It's the loneliest number since the number one.</p>";
  } else if (inputNum === "3") {
    message.innerHTML = "<p>There is no three.</p>";
  }
}
