
import UiBuilder from "../uiBuilder/uiBuilder.js";
///////////////////////////////////////////////////////
export default function settings(defaultClickEvent){
let elmobj = new UiBuilder(defaultClickEvent);
    elmobj.titleLabel("Settings");
    
    elmobj.label("canvas width");
    elmobj.numberInput("canvasWidth",800);
    
    elmobj.label("canvas height");
    elmobj.numberInput("canvasHeight",350);

    elmobj.label("background color");
    // elmobj.textInput("backgroundColor","beige");
    elmobj.colorPicker("backgroundColor","#EFEEE3");

    elmobj.submitFormBtn();2
    elmobj.cancelFormBtn();
    elmobj.display();

}
///////////////////////////////////////////////////////