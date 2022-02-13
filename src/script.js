"use strict";

const nav_services = document.querySelector(".nav_items");
nav_services.addEventListener("mouseover", function () {
  document.querySelector(".nav_dropDown_list").classList.add("active");
});
nav_services.addEventListener("mouseout", function () {
  document.querySelector(".nav_dropDown_list").classList.remove("active");
});
