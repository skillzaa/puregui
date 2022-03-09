
import Text from "./text.js";

export default function addText(bilzaa){
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
form.className = "modal"

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
    let addtextElm = document.getElementById("addtext");
    addtextElm.parentNode.removeChild(addtextElm);
    e.preventDefault();
  };
/////////////////////////////////////////////////////////////
}