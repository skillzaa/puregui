import BilzaaWrapper from "./bilzaaWrapper/bilzaaWrapper.js";
import testMenu from "./menus/testMenu.js";
import UiBuilder from "./uiBuilder/uiBuilder.js";

// let uiBuilder = new UiBuilder();
// console.log(uiBuilder);

let bilzaaWrapper = new BilzaaWrapper();

////////---use query selector and add this on class
// document.getElementById("navMenu").addEventListener("mouseleave",function(e){
// e.target.style.display = "none";
// });

///////////////////////////////////////////////////////
testMenu(bilzaaWrapper.addText.bind(bilzaaWrapper));
///////////////////////////////////////////////////////