const content = document.getElementById("content")
const makeDiv = () => document.createElement("DIV")
const makeH1 = () => document.createElement("H1")
const makeH3 = () => document.createElement("H3")
const makeNav = () => document.createElement("NAV")
const makeMain = () => document.createElement("MAIN")
const makeP = () => document.createElement("P")
const makeUl = () => document.createElement("UL")
const makeLi = () => document.createElement("LI")
const makeA = () => document.createElement("A")

content.appendChild(makeMain())
const main = document.getElementById("content").querySelector("main")

main.appendChild(makeH1())
main.querySelector("H1").textContent = "Cinderella's"
main.appendChild(makeH3().cloneNode())
main.querySelector("H3").textContent = "Filipino Comfort Food"
main.appendChild(makeP())
main.querySelector("P").textContent = "The child of Chef Kuya Angelo, Cinderella's is an ode to the Filipino-American upbringing-- weirdness and all."
main.appendChild(makeH3().cloneNode())
main.lastElementChild.textContent = "Read More About Us:"
main.appendChild(makeUl())
main.querySelector("UL").appendChild(makeLi())
main.querySelector("UL").lastElementChild.appendChild(makeA())
main.querySelector("UL").appendChild(makeLi())
main.querySelector("UL").lastElementChild.appendChild(makeA())
main.querySelector("UL").appendChild(makeLi())
main.querySelector("UL").lastElementChild.appendChild(makeA())

const quotes = main.querySelector("UL").querySelectorAll("LI")

quotes[0].lastElementChild.textContent = "Being at Cinderella's makes me feel nostaligic for a time I didn't know existied... -- NYTimes"
quotes[1].lastElementChild.textContent = "My go to spot whenever I'm in the area (which is often, for the record)... -- Max's Food Channel"
quotes[2].lastElementChild.textContent = "The atmosphere's relaxed, the food great... -- WeEat.com"
quotes[0].lastElementChild.href = "https://www.nytimes.com"
quotes[1].lastElementChild.href = "https://www.youtube.com"
quotes[2].lastElementChild.href = "https://www.google.com"


console.log(content)