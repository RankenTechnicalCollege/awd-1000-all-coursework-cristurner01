"use strict";

//references
let mobileMainPage = document.getElementsByClassName("linkspage1")
let aboutMEPage = document.getElementById("aboutme");
let contactPage = document.getElementById("contact");
let courseworkPage = document.getElementById("coursework");
let portfolioPage = document.getElementById("portfolio");

  //my content/text boxes
let strikeACText = document.getElementById("strikeACText");
let wRescuesText = document.getElementById("wRescuesText");
let dogGroomingText = document.getElementById("dogGroomingText");
let beedleSSText = document.getElementById("beedleSSText");
let boardwalkCText = document.getElementById("boardwalkCText");
let aboutMeText = document.getElementById("aboutMePageText");
let hobbyPageText = document.getElementById("hobbyPageText");
let HotSpringText = document.getElementById("HotSpringText");


//button to page
let aboutMePageBtn = document.getElementById("abtBtn");
let contactPageBtn = document.getElementById("contBtn");
let courseworkPageBtn = document.getElementById("courswBtn");
let portfolioPageBtn = document.getElementById("portfBtn");

//my coursework "buttons"
let strikeACBtn = document.getElementById("strikeAChord");
let wildRescuesBtn = document.getElementById("wildRescues");
let dogGroomBtn = document.getElementById("dogGroomSite");
let beedleShopBtn = document.getElementById("beedleShop");
let boardwalkBtn = document.getElementById("boardwalkCafe");
let aboutMeBtn = document.getElementById("aboutMePage");
let hobbyPageBtn = document.getElementById("hobbyPage");
let hotSpringsBtn = document.getElementById("hotSpringSite");


//when page just loads, only show main and about stuff
window.onload = function() {
contactPage.style = "display: none;";
courseworkPage.style = "display: none;";
portfolioPage.style = "display: none;";
}

function hideCourseworkText() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: block;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
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

  hideCourseworkText()
}

//when portfolio btn is clicked, display portfolio page
portfolioPageBtn.onclick = function() {
  aboutMEPage.style = "display: none;";
  courseworkPage.style = "display: none;";
  contactPage.style = "display: none;";
  portfolioPage.style = "display: block;";
}

strikeACBtn.onclick = function() {
  strikeACText.style = "display: block;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
}

wildRescuesBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: block;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
}

dogGroomBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: block;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
}

beedleShopBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: block;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
}

boardwalkBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: block;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
}

aboutMeBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: block;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: none;";
}

hobbyPageBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: block;";
  HotSpringText.style = "display: none;";
}

hotSpringsBtn.onclick = function() {
  strikeACText.style = "display: none;";
  wRescuesText.style = "display: none;";
  dogGroomingText.style = "display: none;";
  beedleSSText.style = "display: none;";
  boardwalkCText.style = "display: none;";
  aboutMeText.style = "display: none;";
  hobbyPageText.style = "display: none;";
  HotSpringText.style = "display: block;";
}
