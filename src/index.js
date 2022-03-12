import BilzaaWrapper from "./bilzaaWrapper/bilzaaWrapper.js";
import testMenu from "./menus/testMenu.js";
import UiBuilder from "./uiBuilder/uiBuilder.js";
import MenuObj from "./uiBuilder/menuObj.js";
import createText from "./forms/createText.js"
// let uiBuilder = new UiBuilder();
// console.log(uiBuilder);

let bilzaaWrapper = new BilzaaWrapper();
let menuObj = new MenuObj();
menuObj.addBtn(213,createText,bilzaaWrapper.addText.bind(bilzaaWrapper),"Title");
////////---use query selector and add this on class
// document.getElementById("navMenu").addEventListener("mouseleave",function(e){
// e.target.style.display = "none";
// });

///////////////////////////////////////////////////////
// testMenu(bilzaaWrapper.addText.bind(bilzaaWrapper));
// testMenu(bilzaaWrapper.addText.bind(bilzaaWrapper));
///////////////////////////////////////////////////////