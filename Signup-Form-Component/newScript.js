"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("emailAdress").value;
const password = document.getElementById("password").value;
const btnPromo = document.querySelector(".btn-promo");
const btnClaim = document.querySelector(".btn-claim");
const allForms = document.querySelectorAll(".a");
const allError = document.querySelectorAll(".error-img");
const errorText = document.querySelectorAll(".error-texts");

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

function removeClass(errorImg, errorText, index) {
  errorImg[index].classList.remove("hidden");
  errorText[index].classList.remove("hidden");
}

function addClass(errorImg, errorText, index) {
  errorImg[index].classList.add("hidden");
  errorText[index].classList.add("hidden");
}

function addTextMessage(formValue) {
  formValue.find(function (form) {
    if (form !== "") {
      console.log("hei");
      // document.querySelector(".succed-text").classList.add("opacityIn");
      document.querySelector(".succed-text").classList.add("opacityOut");
    }
  });
}

let formValue = [];
btnClaim.addEventListener("click", function (e) {
  e.preventDefault();
  allForms.forEach(function (allForms, i) {
    if (allForms.value == "") {
      removeClass(allError, errorText, i);
      formValue.push(allForms.value);
    } else {
      addClass(allError, errorText, i);
      formValue.push(allForms.value);
    }
    formValue.find(function (form) {
      if (form === "") {
        return (formValue = []);
      }
    });
  });
  addTextMessage(formValue);
});
