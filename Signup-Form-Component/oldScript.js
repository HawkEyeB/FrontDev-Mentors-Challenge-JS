"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("emailAdress").value;
const password = document.getElementById("password").value;
const btnPromo = document.querySelector(".btn-promo");
const btnClaim = document.querySelector(".btn-claim");
const allForms = document.querySelectorAll(".a");

let inputArr = [];

function changeOpacity(x) {
  if (x.classList.contains("colorHover")) {
    btnPromo.classList.remove("colorHover");
  } else {
    btnPromo.classList.add("colorHover");
  }
}

function colorHover(x) {
  if (x.classList.contains("colorHover")) {
    btnClaim.classList.remove("colorHover");
  } else {
    btnClaim.classList.add("colorHover");
  }
}

function removeClass(i) {
  document.querySelector(`.d--${i}`).classList.remove("hidden");
  document.querySelector(`.f--${i}`).classList.remove("hidden");
}

function addClass(i) {
  document.querySelector(`.d--${i}`).classList.add("hidden");
  document.querySelector(`.f--${i}`).classList.add("hidden");
}

btnClaim.addEventListener("click", function (e) {
  e.preventDefault();
  allForms.forEach(function (allForms, i) {
    if (allForms.value == "") {
      removeClass(i);
      inputArr.push(allForms.value);
    } else {
      addClass(i);
      inputArr.push(allForms.value);
    }
  });
  inputArr.find(function (mov) {
    if (mov === "") {
      return (inputArr = []);
    }
  });
  inputArr.find(function (mov) {
    if (mov !== "") {
      document.querySelector(".succed-text").classList.add("opacityIn");
    }
  });
  document.querySelector(".succed-text").classList.add("opacityOut");
});
