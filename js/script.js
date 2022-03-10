"use strict";

const footPercentage = function (target) {
  const total = 8;
  const percent = (target / total) * 100;
  return percent;
};

const inchPercentage = function (target) {
  const total = 8;
  const percent = (target / total) * 100;
  return percent;
};

// Gives person 1 div a starting height.
document.querySelector("#p1").style.height = footPercentage(0.2) + "%";
// Sets person 1 div to the bottom.
document.querySelector("#p1").style.bottom = 0;

// sets the average male height.
document.querySelector(".average").style.height =
  footPercentage(5 + 10 / 12) + "%";
// Sets average div to the bottom.
document.querySelector(".average").style.bottom = 0;

document.querySelector("button").addEventListener("click", function () {
  let personOneName = document.querySelector(".name").value;
  document.querySelector(".persons").innerHTML = personOneName;

  if (!personOneName) {
    document.querySelector(".persons").innerHTML = "Person 1";
  }

  console.log(`name: ${personOneName}`);

  const foot = document.querySelector("#foot").value;
  console.log(`Foot: ${foot}`);

  const inch = document.querySelector("#inch").value / 12;
  console.log(`Inch: ${inch}`);

  const overall = foot + inch;
  console.log(`Total: ${overall}`);

  const sum1 = footPercentage(foot);
  const sum2 = inchPercentage(inch);
  const height = sum1 + sum2;
  console.log(`Height: ${height}`);

  document.querySelector("#p1").style.height = height + "%";
  // document.querySelector("#p1").style.height = inchPercentage(inch) + "%";

  console.log(`foot percentage: ${footPercentage(foot)}`);
  console.log(`inch percentage: ${inchPercentage(inch)}`);
});

document.querySelector("#p1").style.bottom = 0;

// TODO create function that adjusts the height of .persons div according to the foot value. ✔

// TODO create function that adjusts the height of .persons div according to the inch value.
