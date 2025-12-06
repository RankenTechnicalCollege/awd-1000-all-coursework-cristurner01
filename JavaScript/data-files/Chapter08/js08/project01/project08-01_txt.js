"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Cris Turner
      Date:   Dec 3, 2025

      Filename: project08-01.js
*/



/*--------------- Object Code --------------------*/
function timer(min, sec) {
      this.minutes = min; //changed these to this.minutes/seconds ect. the i
      this.seconds = sec; //idk if that did anything. what the book had was not working, its confusing me
      this.timeID = null;
};



timer.prototype.runPause = function(timer, minBox, secBox) {
      if (timer.timeID !== null) { //i changed "" to null so the pause works
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      } else {
            timer.timeID = window.setInterval(countdown, 1000);
      }

      function countdown() {
            if (timer.seconds > 0) {
                  timer.seconds--;
            } else if (timer.minutes > 0) {
                  timer.seconds = 59;
                  timer.minutes--; // added -- so to the minutes decrease after seconds reached 59
            } else {
                  window.clearInterval(timer.timeID);
                  timer.timeID = null;
            }

            minBox.value = timer.minutes;
            secBox.value = timer.seconds;
      }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(minBox.value, secBox.value);

minBox.onchange = function() {
      myTimer.minutes = minBox.value;
};
secBox.onchange = function() {
      myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = function() {
      myTimer.runPause(myTimer, minBox, secBox);
}

