import Text from "./text.js";

export default function addText(bilzaa){
var form = mainDiv();
let content = document.createElement("input"); 
let fontSize = document.createElement("input");

content.name ="content";
content.id ="content";
fontSize.name="fontSize";
fontSize.id="fontSize";
form.appendChild(label("Add Text"));  
// form.appendChild(hr());  
form.appendChild(label("Content"));  
form.appendChild(content);  
form.appendChild(label("Font Size"));  
form.appendChild(fontSize);
form.appendChild(actionBtn(bilzaa));  
document.body.appendChild(form);
}
function hr(){
    let hr = document.createElement("hr");
return hr;
}
function actionBtn(bilzaa){
let btnDyn = document.createElement("button");
btnDyn.innerHTML = "Click me";
btnDyn.className = "btn";
    btnDyn.onclick = function (e) {
        let t = document.getElementById("content").value;
        let tfs = document.getElementById("fontSize").value;
        let txt = new Text(t);
        txt.x = 50;
        txt.fontSize = tfs;
        txt.y = 50;
        bilzaa.add(txt);
        bilzaa.draw();
    
        // /////////////////////
        let addtextElm = document.getElementById("addtext");
        addtextElm.parentNode.removeChild(addtextElm);
        e.preventDefault();
      };
return btnDyn;      
}
function label(title="Label Title"){
let label = document.createElement("Label"); 
label.innerHTML = title;
label.className = "lbl";
return label;
}
function mainDiv(id="addtext"){
    let md = document.createElement("div");
    // md.style.zIndex = 10;
    md.style.width = "400px";
    md.style.top = `${parseInt((window.innerHeight /2) -100)}px`;
    md.style.left = `${parseInt((window.innerWidth /2) - 200 )}px`;
    // md.style.left = window.innerWidth /2;
    // md.style.position = "absolute";
    md.id = id;
    md.className = "mainDiv"
    return md;
}