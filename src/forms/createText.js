// import ElmObj from "../ElmObj.js";
import UiBuilder from "../uiBuilder/uiBuilder.js";


// const handler = (objs=[],defaultClickEvent)=>{
// let resp = {};
// resp.fontsize = 0;
// resp.content = "some text"; //this gets over written even if the value = ""
// resp.x = 0;
// resp.y = 0;
// for (let i = 0; i < objs.length; i++) {
//     const obj = objs[i];
//     if (obj.id == "fontsize"){
//         resp.fontsize = obj.value;
//     }
//     if (obj.id == "content"){
//         resp.content = obj.value;
//     }
//     if (obj.id == "x"){
//         resp.x = obj.value;
//     }
//     if (obj.id == "y"){
//         resp.y = obj.value;
//     }
// }
// defaultClickEvent(resp)
// }
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
    elmobj.submitFormBtn(defaultClickEvent);
    elmobj.display();

}
///////////////////////////////////////////////////////