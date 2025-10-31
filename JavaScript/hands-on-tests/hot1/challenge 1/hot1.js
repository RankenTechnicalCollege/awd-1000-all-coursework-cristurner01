/*
Author: Cris Turner
file: hot1.js
Date: Oct 31, 2025

god help me
*/

let favMovies = ["The Hobbit", "How To Train Your Dragon", "Pirates of the Caribbean"];

document.getElementById("yourFavoriteMovie").addEventListener("click", addInputToArray);

function addInputToArray(yourFavMovie, favMovies) {
  let yourFavMovie = document.getElementById("yourfavmovie");
  let inputValue = yourFavMovie.value;
  if (inputValue !== ''){
    favMovies.push(inputValue);
    return favMovies;
  //????? idk
  }
}

for (let i = 0; i < favMovies.length; i++) {
  let favMoviesCode = "";

  favMoviesCode += "<p>My Favorite movies are " + favMovies[0] +
                   ", " + favMovies[1] + ",  " + favMovies[2] + ", "
                   + favMovies[3] + "</P>";

  document.getElementsByTagName("section")[1].insertAdjacentHTML("beforeend", favMoviesCode);           
}