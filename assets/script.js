"use strict";
const checkbox = document.querySelector("#checkbox-menu");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const list = document.querySelector(".header__nav-list");
const item = document.querySelectorAll(".header__nav-item");

checkbox.addEventListener("change", () => {
    logo.classList.toggle("checked");
    header.classList.toggle("checked");
    list.classList.toggle("checked");
    item.forEach(i => {
        i.classList.toggle("checked");
    })
})