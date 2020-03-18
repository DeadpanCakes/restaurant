import { homeMain, homeAside1, homeAside2, homeFooter } from "./modules.js"

const content = document.getElementById("content");

content.appendChild(homeMain);
content.appendChild(homeAside1);
content.appendChild(homeAside2);
content.appendChild(homeFooter);