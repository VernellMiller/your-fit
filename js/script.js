"use strict";

document.querySelector("button").addEventListener("click", function () {
  let personOneName = document.querySelector(".name").value;
  document.querySelector(".persons").innerHTML = personOneName;
  console.log(personOneName);
});
