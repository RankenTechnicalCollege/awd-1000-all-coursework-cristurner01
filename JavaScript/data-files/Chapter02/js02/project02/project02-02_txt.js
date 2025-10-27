/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Cris Turner
      Date:   Oct 26, 2025

      Filename: project02-02.js
 */

// Function to varify form input
function verifyForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      (name && email && phone) ? window.alert("Thank You!") : window.alert("Please fill in all fields");
}
// Event listener to submit button
document.getElementById("submit").addEventListener("click", verifyForm);


 
