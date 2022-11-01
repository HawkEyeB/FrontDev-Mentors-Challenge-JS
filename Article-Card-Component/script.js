"use strict";

const btnOpenShare = document.querySelector(".sIcon");
const btnCloseShare = document.querySelector(".cIcon");
const btnClose = document.querySelector(".oIcon");
const shareBox = document.querySelector(".style-share");
const profile = document.querySelector(".paddings-bellow");

const showShare = function () {
  if (window.innerWidth < 992) {
    shareBox.classList.remove("hidden");
    profile.classList.add("hidden");
  } else {
    shareBox.classList.remove("hidden");
    document.querySelector(".two").style.display = "none";
  }
};
const closeShare = function () {
  shareBox.classList.add("hidden");
  profile.classList.remove("hidden");
  document.querySelector(".two").style.display = "block";
};

btnOpenShare.addEventListener("click", function () {
  if (window.innerWidth < 876) {
    showShare();
  } else {
    showShare();
    btnOpenShare.classList.add("hidden");
    btnClose.classList.remove("hidden");
  }
});

btnCloseShare.addEventListener("click", closeShare);

btnClose.addEventListener("click", function () {
  closeShare();
  btnOpenShare.classList.remove("hidden");
  btnClose.classList.add("hidden");
});
