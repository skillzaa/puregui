import Text from "./text.js";
import ElmObj from "../ElmObj.js";

const handler = (objs=[],bilzaa)=>{

for (let i = 0; i < objs.length; i++) {
    const obj = objs[i];
    if (obj.id == "canvasWidth"){
        bilzaa.canvasWidth = obj.value;
    }
    if (obj.id == "canvasHeight"){
        bilzaa.canvasHeight = obj.value;
    }    
    if (obj.id == "backgroundColor"){
        bilzaa.background.color = obj.value;
    }    
}
bilzaa.init();
bilzaa.draw();
}
///////////////////////////////////////////////////////
export default function settings(bilzaa){
let elmobj = new ElmObj(bilzaa);
    elmobj.label("Settings");
    elmobj.label("canvas width");
    elmobj.numberInput("canvasWidth");
    elmobj.label("canvas height");
    elmobj.numberInput("canvasHeight");
    elmobj.label("background color");
    elmobj.textInput("backgroundColor");

    elmobj.actionBtn(handler);

}
///////////////////////////////////////////////////////