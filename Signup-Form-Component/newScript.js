"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailAdress");
const password = document.getElementById("password");
const btnPromo = document.querySelector(".btn-promo");
const btnClaim = document.querySelector(".btn-claim");
const allForms = document.querySelectorAll(".a");
const allError = document.querySelectorAll(".error-img");
const errorText = document.querySelectorAll(".error-texts");

let validat;
let formValue = [];

//Função para mudar a Cor dos butões
//Function to change the color of the buttons
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

// Função para remover as classes Hidden da imagem de erro e o texto de erro
// Function to remove the class hidden of the Error image and the error text
function removeClass(errorImg, errorText, index) {
  errorImg[index].classList.remove("hidden");
  errorText[index].classList.remove("hidden");
}

// Função para adicionar as classes Hidden da imagem de erro e o texto de erro
// Function to add the class hidden of the Error image and the error text
function addClass(errorImg, errorText, index) {
  errorImg[index].classList.add("hidden");
  errorText[index].classList.add("hidden");
}

function validateEmail(email) {
  var mail = email.value
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

  if (regx.test(mail)) {
    return true;
  } else {
    return false;
  }

}

// Função para adicionar uma mensagem se tudo foi corretamente
// Function to add a text message if everything went correctly.
function addTextMessage(formValue, errorImg, errorText, i, validate) {
  formValue.find(function (form) {
    if (form !== "" && validate == true) {
      console.log("hei");
      errorImg[i].classList.add("hidden");
      errorText[i].classList.add("hidden");
      document.querySelector(".succed-text").classList.add("opacityOut");
    } else {
      allError[i].classList.remove("hidden");
      errorText[i].classList.remove("hidden");
    }
  });
}

// Função principal
// Principal Function
btnClaim.addEventListener("click", function (e) {
  e.preventDefault();
  allForms.forEach(function (allForms, i) {
    if (allForms.value == "" && i == 2) {
      validateEmail(email);
      removeClass(allError, errorText, i);
      formValue.push(allForms.value);
    }
    else if (allForms.value == "") {
      removeClass(allError, errorText, i);
      formValue.push(allForms.value);
    }
    else {
      addClass(allError, errorText, i);
      formValue.push(allForms.value);
    }
    // Uso do Arr.Find para zerar os valores do Array caso algum campo tenha sido núlo.
    // Ele também só deixará passar se não existir nenhum valor nulo.
    // Use Arr.Find to reset Array values ​​if any field has been null.
    // It will also only pass if there is no null value.
    formValue.find(function (form) {
      if (form === "") {
        return (formValue = []);
      }
    });
  });
  validat = validateEmail(email);
  addTextMessage(formValue, allError, errorText, 2, validat);
});
