"use strict";

//references
let mobileMainPage = document.getElementsByClassName("linkspage1")
let aboutMEPage = document.getElementById("aboutme");
let contactPage = document.getElementById("contact");
let courseworkPage = document.getElementById("coursework");
let portfolioPage = document.getElementById("portfolio");


//button to page
let aboutMePageBtn = document.getElementById("abtBtn");
let contactPageBtn = document.getElementById("contBtn");
let courseworkPageBtn = document.getElementById("courswBtn");
let portfolioPageBtn = document.getElementById("portfBtn");


//when page just loads, only show main and about stuff
window.onload = function() {
contactPage.style = "display: none;";
courseworkPage.style = "display: none;";
portfolioPage.style = "display: none;";
}

//when about me btn is clicks, display about page
aboutMePageBtn.onclick = function() {
  contactPage.style = "display: none;";
  courseworkPage.style = "display: none;";
  portfolioPage.style = "display: none;";
  aboutMEPage.style = "display: block;";
}

//when contact btn is clicked, display contact page
contactPageBtn.onclick = function() {
  aboutMEPage.style = "display: none;";
  courseworkPage.style = "display: none;";
  portfolioPage.style = "display: none;";
  contactPage.style = "display: block;";
}

//when coursework btn is clicked, display coursework page
courseworkPageBtn.onclick = function() {
  aboutMEPage.style = "display: none;";
  portfolioPage.style = "display: none;";
  contactPage.style = "display: none;";
  courseworkPage.style = "display: block;";
}

//when portfolio btn is clicked, display portfolio page
portfolioPageBtn.onclick = function() {
  aboutMEPage.style = "display: none;";
  courseworkPage.style = "display: none;";
  contactPage.style = "display: none;";
  portfolioPage.style = "display: block;";
}
