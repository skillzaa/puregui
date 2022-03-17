import UiBuilder from "../uiBuilder/uiBuilder.js";
///////////////////////////////////////////////////////
export default function createText(defaultClickEvent) {
    let elmobj = new UiBuilder(defaultClickEvent);
    elmobj.titleLabel("Add Font");
    elmobj.label("Content");
    elmobj.textInput("content", "Some Text");
    elmobj.label("Font Size");
    elmobj.numberInput("fontSize", 50);
    elmobj.label("Font Color");
    elmobj.colorPicker("fontColor", "black");
    elmobj.label("X");
    elmobj.numberInput("x", 50);
    elmobj.label("Y");
    elmobj.numberInput("y", 50);
    elmobj.submitFormBtn();
    elmobj.cancelFormBtn();
    elmobj.display();
}
///////////////////////////////////////////////////////
