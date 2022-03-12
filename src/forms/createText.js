
import UiBuilder from "../uiBuilder/uiBuilder.js";

///////////////////////////////////////////////////////
export default function createText(defaultClickEvent){
let elmobj = new UiBuilder(defaultClickEvent);
    elmobj.label("Add Font");
    elmobj.label("Content");
    elmobj.textInput("content");
    elmobj.label("Font Size");
    elmobj.numberInput("fontSize");
    elmobj.label("X");
    elmobj.numberInput("x");
    elmobj.label("Y");
    elmobj.numberInput("y");
    elmobj.submitFormBtn();
    elmobj.display();

}
///////////////////////////////////////////////////////