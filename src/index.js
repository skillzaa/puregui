import BilzaaWrapper from "./bilzaaWrapper/bilzaaWrapper.js";
import testMenu from "./menus/testMenu.js";
let bilzaaWrapper = new BilzaaWrapper();

////////---use query selector and add this on class
document.getElementById("navMenu").addEventListener("mouseleave",function(e){
e.target.style.display = "none";
});

///////////////////////////////////////////////////////
testMenu(bilzaaWrapper.addText.bind(bilzaaWrapper));
///////////////////////////////////////////////////////