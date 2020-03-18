import { homeMain, homeAside1, homeAside2, homeFooter } from "./modules.js"

console.log(homeAside1, homeAside2, homeFooter)

const makeMain = () => document.createElement("main")
const makeH1 = () => document.createElement("h1")
const makeH3 = () => document.createElement("h3")
const makeUl = () => document.createElement("ul")
const makeP = () => document.createElement("p")
const makeLi = () => document.createElement("li")
const makeA = () => document.createElement("a")
const makeAside = () => document.createElement("aside")
const makeImg = () => document.createElement("img")
const makeFooter = () => document.createElement("footer")
const makeI = () => document.createElement("i")

const content = document.getElementById("content")

content.appendChild(homeMain)

content.appendChild(makeAside().cloneNode())
content.lastElementChild.className = "homePageFood"
content.lastElementChild.id = "sisig"
content.appendChild(makeAside().cloneNode())
content.lastElementChild.className = "homePageFood"
content.lastElementChild.id = "pandesal"
const homePageFood = document.querySelectorAll(".homePageFood")

homePageFood[0].appendChild(makeImg().cloneNode())
homePageFood[0].querySelector("img").src = "../img/sisig.jpg"

homePageFood[1].appendChild(makeImg().cloneNode())
homePageFood[1].querySelector("img").src = "../img/pandesal.JPG"

content.appendChild(makeFooter().cloneNode())
const footer = content.querySelector("footer")
console.log(footer)
footer.appendChild(makeH1().cloneNode())
footer.querySelector("H1").textContent = "Follow Us"
footer.appendChild(makeUl().cloneNode())
footer.querySelector("UL").id = "socialNav";
footer.querySelector("UL").appendChild(makeLi().cloneNode())
footer.querySelector("UL").appendChild(makeLi().cloneNode())
footer.querySelector("UL").appendChild(makeLi().cloneNode())
footer.querySelector("UL").appendChild(makeLi().cloneNode())
footer.querySelector("UL").appendChild(makeLi().cloneNode())
footer.querySelector("UL").appendChild(makeLi().cloneNode())

const social = footer.querySelector("UL").querySelectorAll("LI")
social[0].appendChild(makeA().cloneNode())
social[0].querySelector("A").href =  "https://www.yelp.com"
social[0].querySelector("A").appendChild(makeI().cloneNode())
social[0].lastElementChild.classList = "fab fa-yelp social"

social[1].appendChild(makeA().cloneNode())
social[1].querySelector("A").href =  "https://www.twitter.com"
social[1].querySelector("A").appendChild(makeI().cloneNode())
social[1].lastElementChild.classList = "fab fa-twitter social"

social[2].appendChild(makeA().cloneNode())
social[2].querySelector("A").href =  "https://www.instagram.com"
social[2].querySelector("A").appendChild(makeI().cloneNode())
social[2].lastElementChild.classList = "fab fa-instagram social"

social[3].appendChild(makeA().cloneNode())
social[3].querySelector("A").href =  "https://www.facebook.com"
social[3].querySelector("A").appendChild(makeI().cloneNode())
social[3].lastElementChild.classList = "fab fa-facebook social"

social[4].appendChild(makeA().cloneNode())
social[4].querySelector("A").href =  "https://www.spotify.com"
social[4].querySelector("A").appendChild(makeI().cloneNode())
social[4].lastElementChild.classList = "fab fa-spotify social"

console.log(content)