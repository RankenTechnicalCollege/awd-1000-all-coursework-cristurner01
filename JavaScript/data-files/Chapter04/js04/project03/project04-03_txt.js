"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Cris Turner
      Date:  Nov 6, 2025 

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);
   
   try {
      // Check if the character count exceeds the maximum length
      if (charCount > MAX_REVIEW) {
         throw "Your have exceeded the character count limit";
      }
   } catch (error) {
      warningBox.innerHTML = error;
      warningBox.innerHTML = "Your have exceeded the character count limit";
   } finally {
      wordCountBox.innerHTML = charCount;
   }
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 