"use strict";

const btn = document.querySelectorAll(".score-chl");
const thankCard = document.querySelector(".result-card");
const mainCard = document.querySelector(".d-flex");
const choice = document.querySelector(".choice");
const warning = document.querySelector(".warning");
let active = false;
let colorBtn;

const showThanks = function () {
  if (active === true) {
    thankCard.classList.remove("hidden");
    mainCard.classList.add("hidden");
    choice.textContent = colorBtn;
  } else {
    warning.classList.remove("hidden");
  }
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (event) {
    if (event.target.classList.contains("score-chl")) {
      btn.forEach(function (button) {
        button.classList.remove("colorSwitch");
        active = false;
      });
    }
    if (active == false) {
      event.target.classList.add("colorSwitch");
      warning.classList.add("hidden");
      colorBtn = btn[i].textContent;
      active = true;
    }
  });
}

// document.addEventListener("click", function (evt) {
//   if (evt.target.classList.contains("score-chl")) {
//     btn.forEach(function (button) {
//       button.classList.remove("colorSwitch");
//     });
//     evt.target.classList.add("colorSwitch");
//   }
// });
// focusBtn(colorBtn);

//   btn[i].addEventListener("mouseover", hoverbtnIn);
//   btn[i].addEventListener("mouseout", hoverBtnOut);
//   btn[i].addEventListener("mouseover", hoverBtnOut)
