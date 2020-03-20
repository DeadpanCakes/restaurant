const makeMain = document.createElement("main")
const makeH1 = document.createElement("h1")
const makeH2 = document.createElement("h2")
const makeH3 = document.createElement("h3")
const makeUl = document.createElement("ul")
const makeP = document.createElement("p")
const makeLi = document.createElement("li")
const makeA = document.createElement("a");
const makeAside = document.createElement("aside");
const makeImg = document.createElement("img");
const makeFooter = document.createElement("footer");
const makeI = document.createElement("i");

const makeSweet = (name, desc, price) => {
    const makeH3 = document.createElement("h3")
    const makeP = document.createElement("p")
    const makeLi = document.createElement("li")
    const makeElement = () => {
        let container = makeLi.cloneNode();
        let itemName = makeH3.cloneNode();
        itemName.textContent = name;
        let itemDescription = makeP.cloneNode();
        itemDescription.textContent = desc
        let itemPrice = makeP.cloneNode();
        itemPrice.textContent = price;
        container.appendChild(itemName)
        container.appendChild(itemDescription)
        container.appendChild(itemPrice)
        return container;
    }
    return { makeElement };
}

const menuSweet = makeH1.cloneNode();
menuSweet.textContent = "Sweets";
const menuSweetH3 = makeH3.cloneNode();
menuSweetH3.textContent = "We Make No Distinction Between Our Two Menus; Feel Free To Pick Something Here As Your Meal";

const menuSweetUl = makeUl.cloneNode();
menuSweetUl.id = "menuSweetUl"

const champorado = makeSweet("CHAMPORADO", "Chocolate Rice Porridge, Served With Sweetened Condensed Milk", 3)

const turon = makeSweet("TURON", "Banana and Jackfruit Spring Roll, Dusted With Brown Sugar and then Fried", "2 for 1")

const iceCream = makeSweet("ICECREAM", "A Large Scoop Of Ube or Mango Ice Cream, Sandwiched Inside a Pan de Sal Roll.", 1)

const bibinka = makeSweet("BIBINKA", "Rice Cake Soaked in Coconut Milk, Baked with Fresh Cheese and Salted Eggs, and Topped With A Dusting of Sugar", 1)

const menuSweetArray = [menuSweet, menuSweetH3, champorado.makeElement(), turon.makeElement(), iceCream.makeElement(), bibinka.makeElement()]

const menuSweetContainer = makeMain.cloneNode();
menuSweetArray.forEach(element => menuSweetUl.appendChild(element));
menuSweetContainer.appendChild(menuSweetUl);
menuSweetContainer.id = "menuSweetContainer";

export { menuSweetContainer };