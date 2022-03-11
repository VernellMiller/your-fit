"use strict";

const calcPercentage = function (target) {
  const total = 8;
  const percent = (target / total) * 100;
  return percent;
};

const setToBottom = function (div) {
  document.querySelector(div).style.bottom = 0;
};

// Sets average divs to the bottom.
setToBottom(".average");
setToBottom("#p1");

// Gives person 1 div a starting height.
document.querySelector("#p1").style.height = calcPercentage(0.2) + "%";

// sets the average male height.
document.querySelector(".average").style.height =
  calcPercentage(5 + 10 / 12) + "%";

document.querySelector("button").addEventListener("click", function () {
  let personOneName = document.querySelector(".name").value;
  document.querySelector(".persons").textContent = personOneName;

  if (!personOneName) {
    document.querySelector(".persons").textContent = "Person 1";
  }

  console.log(`name: ${personOneName}`);

  const foot = document.querySelector("#foot").value;
  console.log(`Foot: ${foot}`);

  const inch = document.querySelector("#inch").value / 12;
  console.log(`Inch: ${inch}`);

  const overall = foot + inch;
  console.log(`Total: ${overall}`);

  const sum1 = calcPercentage(foot);
  const sum2 = calcPercentage(inch);
  const height = sum1 + sum2;
  console.log(`Height: ${height}`);

  document.querySelector("#p1").style.height = height + "%";

  console.log(`foot percentage: ${calcPercentage(foot)}`);
  console.log(`inch percentage: ${calcPercentage(inch)}`);
});

// TODO create function that adjusts the height of .persons div according to the foot value. ✔

// TODO create function that adjusts the height of .persons div according to the inch value.
