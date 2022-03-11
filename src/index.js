import {Bilzaa2d} from "../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import createText from "./forms/createText.js";
import settings from "./forms/settings.js";
let bilzaa = new Bilzaa2d("bilzaa");
bilzaa.init();
bilzaa.draw();
console.log("bilzaa",bilzaa);

///////////////////////////////////////////////////////
let createTextBtn = document.getElementById("createTextBtn");
createTextBtn.addEventListener("click",function(){
    createText(bilzaa);
});
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
let settingsBtn = document.getElementById("settingsBtn");
settingsBtn.addEventListener("click",function(){
    settings(bilzaa);
});
///////////////////////////////////////////////////////
document.getElementById("navMenu").addEventListener("mouseleave",function(e){
e.target.style.display = "none";
});
///////////////////////////////////////////////////////
let navMenuBtn = document.getElementById("navMenuBtn");
navMenuBtn.addEventListener("click",function(e){
    let d = document.getElementById("navMenu");

    d.style.display = "block";
    // Try d.parent
    d.style.left = `${navMenuBtn.getBoundingClientRect().left}px`;
    d.style.top = `${(navMenuBtn.getBoundingClientRect().bottom + 5)}px`;

});
///////////////////////////////////////////////////////