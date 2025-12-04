"use strict";

// ---------------------------------------------
// Constructor Function for user-created Objects
// ---------------------------------------------

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.speed = 0;

  this.accelerate = function(){
    this.speed += 10;
  };

  this.break = function() {
    if (this.speed > 0) {
      this.speed -= 5;
    }
  };

  this.describe = function() {
    return `${this.brand} ${this.model} - speed: ${this.speed} mph`;
  };
}

//---------------------------------------------
//User Interface Logic
//---------------------------------------------

let currentCar = null;

let brandInput = document.getElementById("brandInput");
let modelInput = document.getElementById("modelInput");
let outputBox = document.getElementById("output");

let createBtn = document.getElementById("createCarBtn");
let accBtn = document.getElementById("accBtn");
let breakBtn = document.getElementById("breakBtn");

// Create a new car when button is clicked
createBtn.onclick = function() {
  let brand = brandInput.value.trim();
  let model = modelInput.value.trim();

  if (brand === "" || model === "") {
    outputBot.textContent = "Please enter both brand and model.";
    return;
  }

  currentCar = new Car(brand, model); //create a new instance of the car object
                                      //now that we have user input

  accBtn.disabled = false;
  breakBtn.disabled = false;

  outputBox.textContent = currentCar.describe();
};

//accelerate button
accBtn.onclick = function() {
  currentCar.accelerate();
  outputBox.textContent = currentCar.describe();
};

//break button
breakBtn.onclick = function() {
  currentCar.break();
  outputBox.textContent = currentCar.describe();
}