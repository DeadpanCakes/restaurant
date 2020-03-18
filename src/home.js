const makeMain = document.createElement("main")
const makeH1 = document.createElement("h1")
const makeH3 = document.createElement("h3")
const makeUl = document.createElement("ul")
const makeP = document.createElement("p")
const makeLi = document.createElement("li")
const makeA = document.createElement("a")
const makeAside = document.createElement("aside")
const makeImg = document.createElement("img")
const makeFooter = document.createElement("footer")
const makeI = document.createElement("i")

const homeMain = makeMain.cloneNode()

const homeMainH1 = makeH1.cloneNode()
homeMainH1.textContent = "Cinderella's Filipino Comfort Food"

const homeMainH3 = makeH3.cloneNode()
homeMainH3.textContent = "The culmination of Chef Kuya Angelo's life's work, Cinderella's is an ode to the Filipino-American upbringing-- weirdness and all."

const homeMainUl = makeUl.cloneNode()

const quoteContainer0 = makeLi.cloneNode()
const quoteContainer1 = makeLi.cloneNode()
const quoteContainer2 = makeLi.cloneNode()

const quote0 = makeA.cloneNode()
const quote1 = makeA.cloneNode()
const quote2 = makeA.cloneNode()

quote0.textContent = '"Being at Cinderella\'s makes me feel nostaligic for a time I didn\'t know existied..." -- NYTimes'
quote0.href = "https://www.nytimes.com"
quote1.textContent = '"My go to spot whenever I\'m in the area (which is often, for the record)..." -- Max\'s Food Channel'
quote1.href = "https://www.youtube.com"
quote2.textContent = '"The atmosphere\'s relaxed, the food great..." -- WeEat.com'
quote2.href = "https://www.google.com"

quoteContainer0.appendChild(quote0)
quoteContainer1.appendChild(quote1)
quoteContainer2.appendChild(quote2)

homeMainUl.appendChild(quoteContainer0)
homeMainUl.appendChild(quoteContainer1)
homeMainUl.appendChild(quoteContainer2)

homeMain.appendChild(homeMainH1)
homeMain.appendChild(homeMainH3)
homeMain.appendChild(homeMainUl)



const homeAside1 = makeAside.cloneNode()
const homeAside2 = makeAside.cloneNode()
const homeFooter = makeFooter.cloneNode()

export { homeMain, homeAside1, homeAside2, homeFooter }
