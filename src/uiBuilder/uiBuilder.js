
export default class UiBuilder {

constructor(args={}){
this.mainDivElm = this.getMainDivElm();
this.ids = [];
}

textInput(id){
    let content = document.createElement("input"); 
    content.type = "text";
    content.id = id;
    this.ids.push(id);
    this.mainDivElm.appendChild(content);
}
numberInput(id){
    let content = document.createElement("input"); 
    content.type = "number";
    content.id = id;
    this.ids.push(id);
    this.mainDivElm.appendChild(content);
}
actionBtn(handler){
let btnDyn = document.createElement("button");
btnDyn.innerHTML = "Ok";
btnDyn.className = "btn";

    btnDyn.onclick = (e)=> {
let resp = [];
for (let i = 0; i < this.ids.length; i++) {
    let o = {};
    const id = this.ids[i];
    let value = document.getElementById(id).value;
    o.id =  id;
    o.value =  value;
    resp.push(o);
}
handler(resp);
// console.log("resp",resp);
        // /////////////////////
        e.preventDefault();
        this.mainDivElm.parentNode.removeChild(this.mainDivElm);
      };
// oper onclick event handler hai      
this.mainDivElm.appendChild(btnDyn);    
}
 label(title="Label Title"){
let label = document.createElement("Label"); 
label.innerHTML = title;
label.className = "lbl";
this.mainDivElm.appendChild(label);
}
getMainDivElm(id="mainDivId",className="mainDiv"){
    let md = document.createElement("div");
    md.style.width = "400px";
    md.style.top = `${parseInt((window.innerHeight /2) -100)}px`;
    md.style.left = `${parseInt((window.innerWidth /2) - 200 )}px`;
    md.id = id;
    md.className = className;
    document.body.appendChild(md);
    return md;
}
hr(){
    let hr = document.createElement("hr");
this.mainDivElm.appendChild(hr);
}
}
