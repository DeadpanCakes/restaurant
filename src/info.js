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


const infoMain = makeMain.cloneNode()
infoMain.id = "infoMain"

const infoMainH1 = makeH1.cloneNode()
infoMainH1.textContent = "About Us"

const infoMainBio = makeH3.cloneNode()
infoMainBio.textContent = "Chef Kuya Angelo's Childhood"

const infoMainBioP = makeP.cloneNode()
infoMainBioP.textContent = "Born to Filipino parents-- one of whom immigrated to States as a child, the other of whom immigrated as an adult, \
    Kuya Angelo's upbringing was one characterized by weirdness and contradictions. His parents often alternated between feeling shame and nostalgia for their homeland. \
    While this did change for the better in their final years, Angelo reflects that both the shame and nostalgia left long-lasting impressions upon him. \
    The shame compelled him to distance himself from his heritage, leaving him largely ignorant of his parents' culture. There was still the nostalgia, though perhaps shallow, \
    that got him and his family through harder times. Angelo only visited the Philippines with his family once, and though he was young and the memories are faint, they are among his \
    most cherished. In particular, the memories of food and of music still reach him to this day."

const infoMainBackground = makeH3.cloneNode()
infoMainBackground.textContent = "Not That Cinderella"

const infoMainBackgroundP = makeP.cloneNode()
infoMainBackgroundP.textContent = "So why Cinderella's? Well, as mentioned previously, it wasn't just food Kuya Angelo cared about, it was also the music. Manila Sound-- \
    a genre of music characterized by its globalized, western influence-- is particularly close to his heart. So many of these songs randomly inject English into their lyrics \
    because it sounds cooler than Tagalog. It's a sentiment with which I'm well-acquainted. But I listen to this music nowadays, and the part that sticks out to me the most \
    is the distinctly Filipino essence of Manila Sound. This music was coming out during a really rough and pivotal moment for the country, and the radical positivity and love \
    that radiates that period of music meant something. So, why Cinderella's? Cinderella was a pop band in the 70's, and a lot of their music from back then has such a strong voice \
    even to this day. Also, I'd considered calling the place Hotdog, but I was worried it might give people the wrong idea."

const infoMainMission = makeH3.cloneNode()
infoMainMission.textContent = "Mission Statement"

const infoMainMissionP = makeP.cloneNode()
infoMainMissionP.textContent = "If you're on this site, you probably checked the menu first. You may have noticed that the menu is fairly limited and you may be wondering why that \
    that is. Well, simply put, expanding a menu is expensive. The more items on a menu, the smaller a percentage of the menu actually gets ordered. And while I'd love to expand the menu someday, \
    it is important to me to keep the menu cheap and to keep my employees well-paid. When you start a restaurant-- or any business, really-- you have three things to consider: your ambitions, \
    customers, your workers. One of these will always get the short end of the stick, and most places choose to harm their employees. I choose to let my pride and ambitions take a back seat so \
    that no one else has to suffer for it."

const infoAside = makeAside.cloneNode()
const house = makeImg.cloneNode()
house.src = "../img/house.jpg"
house.alt = "The old Mendoza Family house"
infoAside.appendChild(house)
infoAside.id = "infoAside"

const infoFooter = makeFooter.cloneNode()
const infoFooterH1 = makeH1.cloneNode()
infoFooterH1.textContent = "Contact Us"
const infoFooterAddress = makeP.cloneNode()
infoFooterAddress.textContent = "Address: 610 1st Ave, San Diego, CA 92101"
const infoFooterNumber = makeP.cloneNode()
infoFooterNumber.textContent = "Number: (619) 515-1460"
infoFooter.appendChild(infoFooterH1)
infoFooter.appendChild(infoFooterAddress)
infoFooter.appendChild(infoFooterNumber)

infoMain.appendChild(infoMainH1)
infoMain.appendChild(infoMainBio)
infoMain.appendChild(infoMainBioP)
infoMain.appendChild(infoMainBackground)
infoMain.appendChild(infoMainBackgroundP)
infoMain.appendChild(infoMainMission)
infoMain.appendChild(infoMainMissionP)

export { infoMain, infoAside, infoFooter }