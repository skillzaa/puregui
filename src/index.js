import {Bilzaa2d} from "../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "./text.js";

let bilzaa = new Bilzaa2d("bilzaa");
// bilzaa.canvasHeight = 300;
// bilzaa.canvasWidth = 300;
bilzaa.init();
bilzaa.draw();
console.log("bilzaa",bilzaa);
//----hide addtext
// let addtextDiv  = document.getElementById("addtext");
// addtextDiv.style.display = "none";
//----attach createTextBtn
let createTextBtn = document.getElementById("createTextBtn");
createTextBtn.addEventListener("click",function(){
    /////////////////////////////////////////////////////////////
var form = document.createElement("div");
let label = document.createElement("Label"); 
let btnDyn = document.createElement("button");
let content = document.createElement("input"); 
let fontSize = document.createElement("input");
label.innerHTML = "first label";
btnDyn.innerHTML = "Click me";
form.style.zIndex = 10;
form.style.top = "100px";
form.style.position = "absolute";
form.id = "addtext";
form.method = "POST";
form.action = "login.php";   

form.appendChild(label);  
form.appendChild(btnDyn);  
// element1.value= ;
content.name ="content";
content.id ="content";
form.appendChild(content);  

// element2.value=pw;
fontSize.name="fontSize";
fontSize.id="fontSize";
form.appendChild(fontSize);

document.body.appendChild(form);

// form.submit();
/////////////////////////////////////////////////////////////

btnDyn.onclick = function (e) {
    let t = document.getElementById("content").value;
    let tfs = document.getElementById("fontSize").value;
    let txt = new Text(t);
    txt.x = 50;
    txt.fontSize = tfs;
    txt.y = 50;
    bilzaa.add(txt);
    bilzaa.draw();
    //now hide the div
    // let hideaddtext = document.getElementById("addtext");
    // hideaddtext.style.display = "none";
    // /////////////////////
    // let parent = document.getElementById("addtext");
    // e.preventDefault();
    // parent.parentNode.removeChild(parent);
  };
/////////////////////////////////////////////////////////////

});
