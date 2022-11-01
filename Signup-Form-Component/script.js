"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("emailAdress").value;
const password = document.getElementById("password").value;
const btnClaim = document.querySelector(".btn-claim");
const allForms = document.querySelectorAll(".a");

btnClaim.addEventListener("click", function (e) {
  e.preventDefault();

  allForms.forEach(function (allForms, i) {
    const forms = allForms.value;
    console.log(forms);
  });
});
