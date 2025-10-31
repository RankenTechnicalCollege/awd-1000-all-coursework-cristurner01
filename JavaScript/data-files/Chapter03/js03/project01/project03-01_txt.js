/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Cris Turner
      Date:   Oct 29, 2025

      Filename: project03-01.js
*/



//menuItems variable containing the collection of HTML elements of the MenuItem class
let menuItems = document.getElementsByClassName("menuItem");

//for loop that loops through the contents of the menuItems collection
for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', calcTotal);
}

//function to calculate the total cost of the customer order given the selected menu items
function calcTotal() {
      let orderTotal = 0;
      for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value);
            }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

