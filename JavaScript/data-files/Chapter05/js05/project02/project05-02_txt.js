"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Cris Turner
      Date:   Nov 12, 2025

      Filename: project05-02.js
*/
// declare variables for the image variable containing an html collection of all elements with the img tag
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
      images[i].onclick = function() {
      //when an image is clicked it is either moved to the photo list or back to the photo bucket
            if (this.parentNode.id === "photo_bucket") {
                  let newItem = document.createElement("li");
                  photoList.appendChild(newItem);
                  newItem.appendChild(this);
            } else {
                  let oldItem = this.parentNode;
                  photoBucket.appendChild(this);
                  oldItem.parentNode.removeChild(oldItem);
            }
      }
}


