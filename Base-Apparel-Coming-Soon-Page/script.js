"use strict"
let error = document.querySelector('.error-message');
const errorImg = document.querySelector('.error');
const email = document.querySelector('.email-bar');
let validate;


const changeColor = function (validate) {
    if (validate == false) {
        email.classList.remove('email-bar-ori');
        email.classList.add('email-bar-alt');


    } else {
        email.classList.add('email-bar-ori');
        email.classList.remove('email-bar-alt');
    }
}

function validateEmail() {
    var mail = document.getElementById('emailBar').value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (regx.test(mail)) {
        error.classList.remove('hidden');
        error.style.color = 'green';
        error.textContent = "You email have been validated";

        errorImg.classList.add('hidden');
        document.querySelector('.email-bar').value = '';
        validate = true;
        changeColor(validate);
        return true;
    } else {
        error.classList.remove('hidden');
        error.textContent = "Please provide a valid email";
        errorImg.classList.remove('hidden');
        validate = false;
        changeColor(validate);
        return false;
    }
}
