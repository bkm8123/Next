"use strict";

const navMenus = document.querySelector("#nav-menu");
const navBurger = document.querySelector("#burger");

const navDropdown = document.querySelector("#nav-dropdown");
const navService = document.querySelector("#nav-service");
const navDropdown1 = document.querySelector("#nav-dropdown1");
const navService1 = document.querySelector("#nav-service1");

navService1.addEventListener("click", function () {
  navDropdown1.classList.toggle("show_dropdown");
});
navService.addEventListener("click", function () {
  navDropdown.classList.toggle("show_dropdown");
});

navBurger.addEventListener("click", function () {
  navMenus.classList.toggle("is-active");
});
