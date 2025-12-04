
let checkBtn = document.getElementById("checkBtn");
let resetBtn = document.getElementById("resetBtn");
let message = document.getElementById("message");
let attempts = document.getElementById("attempts");

let numOfAttempts = 0;

message.textContent = "";
attempts.textContent = "Attempts: " + numOfAttempts;



function generateRandomNum() {
  return Math.floor(Math.random() * 15) + 1;  
}
let answer = generateRandomNum();

checkBtn.onclick = function() {
    let guess = Number(document.getElementById("guess").value);

    if (guess < 1 || guess > 15 ) {
        message.textContent = "Enter a number 1-15";
    } else if (guess === answer) {
        message.textContent = "You got it. the number was " + answer;
        numOfAttempts++;
        attempts.textContent = "Attempts: " + numOfAttempts;
    } else {
        message.textContent = "sorry, thats wrong";
        numOfAttempts++;
        attempts.textContent = "Attempts: " + numOfAttempts;
    }
    
}

resetBtn.onclick = function() {
    numOfAttempts = 0;
    answer = generateRandomNum();
    message.textContent = "";
    attempts.textContent = "Attempts: " + numOfAttempts;
}

generateRandomNum();