"use strict";

document.querySelector("button").addEventListener("click", function () {
  let personOneName = document.querySelector(".name").value;
  document.querySelector(".persons").innerHTML = personOneName;
  console.log(personOneName);

  const foot = document.querySelector("#foot").value;
  console.log(foot);

  const inch = document.querySelector("#inch").value;
  console.log(inch);
});
