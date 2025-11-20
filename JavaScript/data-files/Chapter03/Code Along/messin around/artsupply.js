//the array
let supplies = [];

document.addEventListener("DOMContentLoaded", displayList);

//Function to display the list
function displayList() {
  const list = document.getElementById("supplyList");
  list.innerHTML = "";
  for (let i = 0; i < supplies.length; i++){
  const li = document.createElement("li");
  li.textContent = supplies[i];
  list.appendChild(li);
  }
}

//Function to add item to list
document.getElementById("addBtn").onclick = addSupply();

function addSupply() {
  let input = document.getElementById("addSupply");
  let supplyName = input.value.trim();
  const index = supplies.indexOf(supplyName);

  if (index === -1) {
    input.setCustomValidity("Please enter a supply name!");
  }
  supplies.push(supplyName);
  input.value = "";
  displayList();
}

//Function to delete item


//Function to edit item