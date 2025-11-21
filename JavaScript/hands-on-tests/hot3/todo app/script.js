"use strict";

let theListItems = ["mow the lawn", "eat the dog", "just kidding", "get cheese for the crackers", "...get crackers"];

let whoGoesThere = document.getElementById("whogoesthere");
let incoming = document.getElementById("incoming");
let whatDoIEvenGetForChristmas = document.getElementById("what-do-i-even-get-the-fam-for-christmas");

// display the array stuff and also make some elements
function iWantACatButMyDogWouldProbablyEatIt(){ //Display list/ why did i pick a long nameee
  whatDoIEvenGetForChristmas.textContent = "";//this is the <ul> 

  // i need to create li element, put them into the array?? 
  // and make them all have delete btns
  // and append them i think
  for (let i = 0; i < theListItems.length; i++) {
  let moreCement = document.createElement("li");
  moreCement.className = "my-2";
  moreCement.textContent = theListItems[i];

  //delete btns
  let youShallNotPass = document.createElement("button");
  youShallNotPass.textContent = "nah";
  youShallNotPass.className = "rounded-5 btn btn-outline-danger";

  //and del func
  youShallNotPass.addEventListener("click", function(){
    theListItems.splice(i, 1);
    iWantACatButMyDogWouldProbablyEatIt();
  });


  whatDoIEvenGetForChristmas.appendChild(moreCement);//??
  moreCement.appendChild(youShallNotPass);
  // yay it worked
}


}

// the add function
incoming.addEventListener("click", function(){
  let itemName = whogoesthere.value.trim();
  if (itemName !== "") {
    theListItems.push(itemName);
    whoGoesThere.value = "";
    iWantACatButMyDogWouldProbablyEatIt();
  }
});

iWantACatButMyDogWouldProbablyEatIt();
