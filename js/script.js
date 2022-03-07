"use strict";
const footPercentage = function (target) {
  const total = 8;
  const percent = (target / total) * 100;
  return percent;
};

// Gives person 1 div a starting height.
document.querySelector("#p1").style.height = footPercentage(0.2) + "%";
// Sets person 1 div to the bottom.
document.querySelector("#p1").style.bottom = 0;

// sets the average male height.
document.querySelector(".average").style.height = footPercentage(5) + "%";
// Sets average div to the bottom.
document.querySelector(".average").style.bottom = 0;

document.querySelector("button").addEventListener("click", function () {
  let personOneName = document.querySelector(".name").value;
  document.querySelector(".persons").innerHTML = personOneName;

  if (!personOneName) {
    document.querySelector(".persons").innerHTML = "Person 1";
  }

  console.log(personOneName);

  const foot = document.querySelector("#foot").value;
  console.log(foot);

  const inch = document.querySelector("#inch").value;
  console.log(inch);

  (document.querySelector("#p1").style.height = footPercentage(foot) + "%"),
    footPercentage(inch) + "%";
  // document.querySelector("#p1").style.height = footPercentage(inch) + "%";

  document.querySelector("#p1").style.bottom = 0;

  console.log(footPercentage(foot));
  console.log(footPercentage(inch));
});

// TODO create function that adjusts the height of .persons div according to the foot value. ✔

// TODO create function that adjusts the height of .persons div according to the inch value.
