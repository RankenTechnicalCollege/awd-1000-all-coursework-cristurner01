"use strict";

let thumbsUp = document.getElementById("upvote");
let thumbsDown = document.getElementById("downvote");
let upvoteNumHtml = document.getElementById("upvoteNum");
let downvoteNumHtml = document.getElementById("downvoteNum");
let totalScoreHtml = document.getElementById("totalScore");

let upVote = 0;
let downVote = 0;

function theTotalScore(){
let totalScore = upVote - downVote;
totalScoreHtml.textContent = "Score: " + totalScore;
}


thumbsUp.addEventListener("click", function() {
upVote++;
upvoteNumHtml.textContent = upVote;
theTotalScore();
});

thumbsDown.addEventListener("click", function() {
downVote++;
downvoteNumHtml.textContent = downVote;
theTotalScore();
});

theTotalScore();

