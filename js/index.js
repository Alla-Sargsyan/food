"use strict";

window.addEventListener("DOMContentLoaded", function (){
// tab logic start

const tabsHeaders = document.querySelectorAll(".tabheader__item");
const tabsContents = document.querySelectorAll(".tabcontent");
const tabsHeaderParent = document.querySelector(".tabheader__items");

function hideTabContent () {
    tabsContents.forEach (tabContent => {
        tabContent.classList.add("hide");
        tabContent.classList.remove("show", "fade");
    });

    tabsHeaders.forEach(tabHeader => tabHeader.classList.remove("tabheader__item_active"))
}

function showTabContent (i = 0) {
    tabsContents[i].classList.add("show", "fade");
    tabsContents[i].classList.remove("hide");
    tabsHeaders[i].classList.add("tabheader__item_active");
}
hideTabContent();
showTabContent();

tabsHeaderParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tabheader__item")) {
        tabsHeaders.forEach((tabheader, index) => {
            if (e.target === tabheader) {
                hideTabContent();
                showTabContent(index);
            }
        });
    }
});

// tab logic end
});