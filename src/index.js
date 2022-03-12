import BilzaaWrapper from "./bilzaaWrapper/bilzaaWrapper.js";
// import testMenu from "./menus/testMenu.js";
// import UiBuilder from "./uiBuilder/uiBuilder.js";
import MenuObj from "./uiBuilder/menuObj.js";
import createText from "./forms/createText.js"
import settings from "./forms/settings.js";

// const randomColor = Math.floor(Math.random()*16777215).toString(16);
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

let bilzaaWrapper = new BilzaaWrapper();

let menuObj = new MenuObj();

menuObj.addBtn(213,createText,bilzaaWrapper.addText.bind(bilzaaWrapper),"Add Text");


menuObj.addBtn(546,settings,bilzaaWrapper.settings.bind(bilzaaWrapper),"Settings");

