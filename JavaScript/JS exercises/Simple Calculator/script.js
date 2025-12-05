"use strict";
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result");


calcBtn.onclick = function() {
    let operator = document.getElementById("operator").value;

    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById("num2").value);
    
    let answer;

    switch (operator) {
        case "+":
            answer = n1 + n2;
            break;
        case "-":
            answer = n1 - n2;
            break;
        case "*":
            answer = n1 * n2;
            break;
        case "/":
            answer = n1 / n2;
            break;
    }

    if (operator === "/") {
        if (n2 === 0) {
            answer = "Undefined: you cannot divide by 0";
        }
    }

    result.textContent = answer;
}



