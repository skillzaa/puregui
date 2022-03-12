
import UiBuilder from "../uiBuilder/uiBuilder.js";
///////////////////////////////////////////////////////
export default function settings(defaultClickEvent){
let elmobj = new UiBuilder(defaultClickEvent);
    elmobj.label("Settings");
    elmobj.label("canvas width");
    elmobj.numberInput("canvasWidth");
    elmobj.label("canvas height");
    elmobj.numberInput("canvasHeight");
    elmobj.label("background color");
    elmobj.textInput("backgroundColor");

    elmobj.submitFormBtn();
    elmobj.display();

}
///////////////////////////////////////////////////////