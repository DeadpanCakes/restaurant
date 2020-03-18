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

const sisig = makeImg.cloneNode()
const pandesal = makeImg.cloneNode()

sisig.src = "../img/sisig.jpg"
sisig.alt = "An image of pork sisig"
pandesal.src = "../img/pandesal.JPG"
pandesal.alt = "An image of a pan de sal filled with a scoop of ube ice cream"

homeAside1.id = "sisig"
homeAside1.className = "homePageFood"
homeAside1.appendChild(sisig)
homeAside2.id = "pandesal"
homeAside2.className = "homePageFood"
homeAside2.appendChild(pandesal)

const homeFooter = makeFooter.cloneNode()

const homeFooterH1 = makeH1.cloneNode()
homeFooterH1.textContent = "Follow Us!"

const homeFooterSocial = makeUl.cloneNode()
homeFooterSocial.id = "socialNav"

const socialLinkContainer0 = makeLi.cloneNode()
const socialLinkContainer1 = makeLi.cloneNode()
const socialLinkContainer2 = makeLi.cloneNode()
const socialLinkContainer3 = makeLi.cloneNode()
const socialLinkContainer4 = makeLi.cloneNode()

const socialLink0 = makeA.cloneNode()
socialLink0.href = "https://www.yelp.com"
const socialLink1 = makeA.cloneNode() 
socialLink1.href = "https://www.twitter.com"
const socialLink2 = makeA.cloneNode() 
socialLink2.href = "https://www.instagram.com"
const socialLink3 = makeA.cloneNode() 
socialLink3.href = "https://www.facebook.com"
const socialLink4 = makeA.cloneNode()
socialLink4.href = "https://www.spotify.com"

const yelp = makeI.cloneNode()
yelp.classList = "fab fa-yelp social"
const twitter = makeI.cloneNode()
twitter.classList = "fab fa-twitter social"
const instagram = makeI.cloneNode()
instagram.classList = "fab fa-instagram social"
const facebook = makeI.cloneNode()
facebook.classList = "fab fa-facebook social"
const spotify = makeI.cloneNode()
spotify.classList = "fab fa-spotify social"

homeFooter.appendChild(homeFooterH1)
homeFooter.appendChild(homeFooterSocial)
homeFooterSocial.appendChild(socialLinkContainer0)
socialLinkContainer0.appendChild(socialLink0)
socialLink0.appendChild(yelp)
homeFooterSocial.appendChild(socialLinkContainer1)
socialLinkContainer1.appendChild(socialLink1)
socialLink1.appendChild(twitter)
homeFooterSocial.appendChild(socialLinkContainer2)
socialLinkContainer2.appendChild(socialLink2)
socialLink2.appendChild(instagram)
homeFooterSocial.appendChild(socialLinkContainer3)
socialLinkContainer3.appendChild(socialLink3)
socialLink3.appendChild(facebook)
homeFooterSocial.appendChild(socialLinkContainer4)
socialLinkContainer4.appendChild(socialLink4)
socialLink4.appendChild(spotify)

export { homeMain, homeAside1, homeAside2, homeFooter }
