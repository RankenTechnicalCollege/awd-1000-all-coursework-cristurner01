/* 
Cris Turner
Date: OCT 10, 2025
File: script.js
*/

// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else { 
    menu.style.display = "block";
  }
}