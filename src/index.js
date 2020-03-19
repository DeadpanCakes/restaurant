import { homeMain, homeAside1, homeAside2, homeFooter, infoMain, infoAside } from "./modules.js"

const content = document.getElementById("content");

console.log(infoAside)

const goToHome = () => {
    content.appendChild(homeMain);
    content.appendChild(homeAside1);
    content.appendChild(homeAside2);
    content.appendChild(homeFooter);
};

const goToInfo = () => {
    const infoFooter = homeFooter
    content.appendChild(infoMain)
    content.appendChild(infoAside)
    content.appendChild(infoFooter)
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