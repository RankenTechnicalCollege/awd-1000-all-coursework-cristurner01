"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Cris Turner
      Date:   Nov 18, 2025 

      Filename: project06-02.js
*/

window.addEventListener("load", function() {
      let allSelect = this.document.querySelectorAll("form #govLinks select");

      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].addEventListener("onchange", function(evt) {
                  let linkURL = evt.target.value;
                  var newWin = window.open(linkURL); //  ????
            });
      }
});

