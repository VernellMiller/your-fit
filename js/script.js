"use strict";
const footPercentage = function (target) {
  const total = 8;
  const percent = (target / total) * 100;
  return percent;
};

document.querySelector("#p1").style.height = footPercentage(0.2) + "%";
document.querySelector("#p1").style.bottom = 0;

// sets the average male height.
document.querySelector(".average").style.height = footPercentage(5) + "%";
document.querySelector(".average").style.bottom = 0;

// const positionDiv = function (percent) {
//   const remainder = 100 - percent;
//   document.querySelector("#p1").style.marginTop = remainder;
//   console.log(remainder);
//   return remainder;
// };

// positionDiv();

// const remainder = 100 - percent;
// console.log(remainder);

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

  document.querySelector("#p1").style.height = footPercentage(foot) + "%";

  document.querySelector("#p1").style.bottom = 0;

  console.log(footPercentage(foot));
});

//   switch (foot) {
//     case 1:
//       document.querySelector("#p1").style.height = 10 + "%";
//       break;
//     case 2:
//       document.querySelector("#p1").style.height = 20 + "%";
//       break;
//     case 3:
//       document.querySelector("#p1").style.height = 30 + "%";
//       break;
//     case 4:
//       document.querySelector("#p1").style.height = 50 + "%";
//       break;
//     case 5:
//       document.querySelector("#p1").style.height = 50 + "%";
//       break;
//     case 6:
//       document.querySelector("#p1").style.height = 60 + "%";
//       break;
//     case 7:
//       document.querySelector("#p1").style.height = 70 + "%";
//       break;
//     case 8:
//       document.querySelector("#p1").style.height = 100 + "%";
//       break;
//   }

// TODO create function that adjusts the height of .persons div according to the foot value. ✔

// TODO create function that adjusts the height of .persons div according to the inch value.
