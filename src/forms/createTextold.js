import Text from "./text.js";
import ElmObj from "../ElmObj.js";


const handler = (objs=[],bilzaa)=>{

let fontsize = 0;
let content = "";
let x = 0;
let y = 0;
for (let i = 0; i < objs.length; i++) {
    const obj = objs[i];
    if (obj.id == "fontsize"){
        fontsize = obj.value;
    }
    if (obj.id == "content"){
        content = obj.value;
    }
    if (obj.id == "x"){
        x = obj.value;
    }
    if (obj.id == "y"){
        y = obj.value;
    }
}
let t = new Text(content);
t.fontSize = fontsize;
t.x = x;
t.y = y;
bilzaa.add(t);
bilzaa.draw();
// console.log(fontsize);
// console.log(content);
}
///////////////////////////////////////////////////////
export default function createText(bilzaa){
let elmobj = new ElmObj(bilzaa);
    elmobj.label("Add Font");
    elmobj.label("Content");
    elmobj.textInput("content");
    elmobj.label("Font Size");
    elmobj.numberInput("fontsize");
    elmobj.label("X");
    elmobj.numberInput("x");
    elmobj.label("Y");
    elmobj.numberInput("y");
    elmobj.actionBtn(handler);

}
///////////////////////////////////////////////////////