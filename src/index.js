import {Bilzaa2d} from "../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import addText from "./addText.js";
let bilzaa = new Bilzaa2d("bilzaa");
bilzaa.init();
bilzaa.draw();
console.log("bilzaa",bilzaa);

let createTextBtn = document.getElementById("createTextBtn");
createTextBtn.addEventListener("click",function(){
    addText(bilzaa);
});