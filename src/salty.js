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

const makeFood = (name, desc, price) => {
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

const menuSalty = makeH1.cloneNode();
menuSalty.textContent = "Menu";
const menuSaltyH3 = makeH3.cloneNode();
menuSaltyH3.textContent = "All Meals Come With A Side Of Rice and a Choice of Pan de Sal (Sweet Dinner Roll) or Puto (Steamed Rice Cakes)";

const menuSaltyUl = makeUl.cloneNode();
menuSaltyUl.id = "menuSaltyUl"

const sisig = makeFood("SISIG", "Pork and Chicken Seasoned With Calimansi and Chili, Served Sizzling", 5)

const dinuguan = makeFood("DINUGUAN", "Pork Offal Stewed in Pork Blood", 5)

const tortangTalong = makeFood("TORTANG TALONG", "Filipino Eggplant Omlette, Served With Banana Ketchup (Spicy or Regular)", 5)

const lumpiaShanghai = makeFood("LUMPIA SHANGHAI", "Deep Fried Eggrolls (Pork or Veggie)", 3)

const breakFast = makeFood("FILIPINO BREAKFAST", "Garlic Fried Rice, Two Eggs, Over-Easy, and a Side of Vinegar, with Your Choice of Meat: Tapa (Thinly-Sliced, Marinated Beef), \
Bangus (Milkfish, Marinated and Fried), Spam (House-Made SPAM), Longgonisa (Sausage, Packed With A Variety of Spices), or Tocino (Fatty Marinated Bacon, Boiled and then Fried)", 5)

const menuSaltyArray = [menuSalty, menuSaltyH3, sisig.makeElement(), dinuguan.makeElement(), tortangTalong.makeElement(), lumpiaShanghai.makeElement(), breakFast.makeElement()];

const menuSaltyContainer = makeMain.cloneNode();
menuSaltyArray.forEach(element => menuSaltyUl.appendChild(element));
menuSaltyContainer.appendChild(menuSaltyUl);
menuSaltyContainer.id = "menuSaltyContainer";

export { menuSaltyContainer };
