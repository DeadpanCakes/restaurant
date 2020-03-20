import { homeMain, homeAside1, homeAside2, homeFooter, menuSaltyContainer, menuSweetContainer, infoMain, infoAside, infoFooter } from "./modules.js"


const content = document.getElementById("content");

const init = () => {
    let x = content.childNodes.length
    for (let i = 0; i < x; i++) {
        content.removeChild(content.lastElementChild)
    }
}

const goToHome = () => {
    init();
    const homeArray = [homeMain, homeAside1, homeAside2, homeFooter]
    homeArray.forEach(element => content.appendChild(element))
};

const goToMenuSalty = () => {
    init();
    content.appendChild(menuSaltyContainer);
}

const goToMenuSweet = () => {
    init();
    content.appendChild(menuSweetContainer);
}

const goToInfo = () => {
    init()
    const infoArray = [infoMain, infoAside, infoFooter]
    infoArray.forEach(element => content.appendChild(element))
};

const applyHomeEvent = (() => {
    let link = document.querySelectorAll(".homePageLink")
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", () => goToHome())
    }
})()

const applyMenuSaltyEvent = (() => {
    let link = document.querySelectorAll(".menuSaltyLink")
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", () => goToMenuSalty())
    }
})();

const applyMenuSweetEvent = (() => {
    let link = document.querySelectorAll(".menuSweetLink")
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", () => goToMenuSweet())
    }
})();

const applyInfoEvent = (() => {
    let link = document.querySelectorAll(".infoPageLink")
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", () => goToInfo())
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    goToHome()
  })