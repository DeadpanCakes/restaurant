import { homeMain, homeAside1, homeAside2, homeFooter, infoMain, infoAside, infoFooter } from "./modules.js"


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

const applyInfoEvent = (() => {
    let link = document.querySelectorAll(".infoPageLink")
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", () => goToInfo())
    }
})()

document.addEventListener('DOMContentLoaded', () => {
    goToHome()
  })