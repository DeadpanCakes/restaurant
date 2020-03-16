const content = document.getElementById("content")
const makeDiv = () => document.createElement("DIV")
const makeH1 = () => document.createElement("H1")
const makeH3 = () => document.createElement("H3")

content.appendChild(makeH1())
content.querySelector("h1").textContent = "RESTAURANT!"
content.appendChild(makeH3())
content.querySelector("h3").textContent = "It's very good! Yum!"
//document.body.style.backgroundImage = "url('../img/homepage.png')"

console.log(content)