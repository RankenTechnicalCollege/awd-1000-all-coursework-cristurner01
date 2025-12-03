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
      this.timer.minutes = min;
      this.timer.seconds = sec;
      this.timer.timeID = null;
};

timer.prototype.runPause(timer, minBox, secBox ) = function() {
      if (timer.timeID === truthy) {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      } else {
            timer.timeID = window.setInterval(countdown, 1000);
      }
};






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

