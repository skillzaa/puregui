import UiBuilder from "../uiBuilder/uiBuilder.js";
///////////////////////////////////////////////////////
export default function globals(defaultClickEvent) {
    let elmobj = new UiBuilder(defaultClickEvent);
    elmobj.titleLabel("Global Settings");
    elmobj.label("Toggle Grab");
    elmobj.checkBox("toggleGrap");
    elmobj.submitFormBtn();
    elmobj.cancelFormBtn();
    elmobj.display();
}
///////////////////////////////////////////////////////
