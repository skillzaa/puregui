import {Bilzaa2d} from "../node_modules/bilzaa2d/src/bilzaa2d/index.js";

import testMenu from "./menus/testMenu.js";

let bilzaa = new Bilzaa2d("bilzaa");
bilzaa.init();
bilzaa.draw();
console.log("bilzaa",bilzaa);

////////---use query selector and add this on class
document.getElementById("navMenu").addEventListener("mouseleave",function(e){
e.target.style.display = "none";
});

///////////////////////////////////////////////////////
testMenu(bilzaa);
///////////////////////////////////////////////////////