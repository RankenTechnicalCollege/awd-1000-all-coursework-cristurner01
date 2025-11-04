// Initial array of drinks
let drinkMenu = ["Root Beer", "Fanta", "Apple Juice", "Cola", "Milk"];


document.addEventListener("DOMContentLoaded", displayMenu);

// Function to display the drink menu
function  displayMenu() {
  const list = document.getElementById("drinkList");
  list.innerHTML = ""; // Clear the existing list
  if(drinkMenu.length === 0) {
    list.innerHTML = "<li>No drinks on the menu</li>"
    return;
  }
  /* for loop for the array drinkMenu
  for (let drink of drinkMenu) {
    const li = document.createElement("li");
    li.textContent = drink;
    list.appendChild(li);
  }*/
  for (let i = 0; i < drinkMenu.length; i++){
    const li = document.createElement("li");
    li.textContent = drinkMenu[i];
    list.appendChild(li);
  }
}

//Add a new drink to the array
function addDrink() {
  const input = document.getElementById("newDrink");
  const drinkName = input.value.trim();
  if (drinkName === "") {
    alert("Please enter a drink name");
    return;
  }
  drinkMenu.push(drinkName);
  input.value = "";
  displayMenu();
}

//Function to remove a drink from the array
function removeDrink() {
  const input = document.getElementById("removeDrink");
  const drinkName = input.value.trim();
  const index = drinkMenu.indexOf(drinkName);

  if(index === -1){//if whatever you typed in is not in the initial array
    alert(`${drinkName} not found on the menu!`);
    return;
  }
  //removes whatever element from the array that you typed in
  drinkMenu.splice(index, 1);
  input.value = "";
  displayMenu();
}

//Function to edit existing drinks
function editDrink(){
  const oldName = document.getElementById("oldDrink").value.trim();
  const newName = document.getElementById("editedDrink").value.trim();

  if(oldName === "" || newName === "" ) { //if old name or new name are blank, run alert
    alert("Please enter both the current and new drink names!");
    return;
  }

  const index = drinkMenu.indexOf(oldName);
  if(index === -1){ //if you enter something not in the array, run alert
    alert(`${oldName} not found on the menu`);
    return;
  }

  drinkMenu[index] = newName; //sets new name as an drinkMenu array element
  document.getElementById("oldDrink").value = "";
  document.getElementById("editedDrink").value = "";
  displayMenu();
}