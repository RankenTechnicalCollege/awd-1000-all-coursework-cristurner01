/*
Author: Cris Turner
file: hot1.js
Date: Oct 31, 2025
*/

let favoriteMovies = ["The Polar Express", "Elf", "The Grinch"];

let userInput = document.getElementById("yourfavmovie");
let submit = document.getElementById("button");
let message = document.getElementById("message");

submit.onclick = function() {
  yourMovie = userInput.value;
  favoriteMovies.push(yourMovie);
    message.innerHTML = "";

  for (let i = 0; i < favoriteMovies.length; i++) {
    message.innerHTML = "<p>My favorite christmas movie is " + favoriteMovies[0] +
    ", " + favoriteMovies[1] + ", and " + favoriteMovies[2]+ ". Your favorite movie is " +
    favoriteMovies[3] + ".</p>";
  }
}