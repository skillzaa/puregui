
export default class UiBuilder {

constructor(defaultClickEvent=null){
this.id = this.randomId();    
if (defaultClickEvent == null){defaultClickEvent = ()=>console.log("defaultClickEvent")}
this.defaultClickEvent = defaultClickEvent ;    
this.parentDiv = this.customDialogDivColumn();
this.ids = [];
}

textInput(name){
    let content = document.createElement("input"); 
    content.name = name;
    content.type = "text";
    content.id = this.randomId();
    this.ids.push(content.id);
    this.parentDiv.appendChild(content);
}
numberInput(name){
    let content = document.createElement("input"); 
    content.name = name;
    content.type = "number";
    content.id = this.randomId();
    this.ids.push(content.id);
    this.parentDiv.appendChild(content);
}
submitFormBtn(defaultClickEvent,caption="ok",className = "btn"){
//create a button
let btnDyn = document.createElement("button");
btnDyn.innerHTML = caption;;
btnDyn.className = className;

// default behaviour of actionButton
    btnDyn.onclick = (e)=> {
let resp = [];
for (let i = 0; i < this.ids.length; i++) {
    let o = {};
    const id = this.ids[i];
    let elm = document.getElementById(id);
    o.id =  elm.id;
    o.name =  elm.name;
    o.value =  elm.value;
    resp.push(o);
}
//--now send the data to handler
defaultClickEvent(resp);
//stop further action and remove this ui module this.parentDiv
        e.preventDefault();
        this.parentDiv.parentNode.removeChild(this.parentDiv);
};
// oper onclick event handler hai      
this.parentDiv.appendChild(btnDyn);    
}


label(title="Label Title"){
let label = document.createElement("Label"); 
label.innerHTML = title;
label.className = "lbl";
this.parentDiv.appendChild(label);
}
customDialogDivColumn(className="navMenu"){
    let md = document.createElement("div");
    md.style.width = "50%";
    md.style.position = "absolute";
    md.style.top = `${parseInt((window.innerHeight /2) -100)}px`;
    md.style.left = `${parseInt((window.innerWidth /2) - 200 )}px`;
    //the id of this div is that of object
    md.id = this.id;
    md.className = className;
    document.body.appendChild(md); // this is a custom specifc div
    return md;
}
hr(){
    let hr = document.createElement("hr");
this.parentDiv.appendChild(hr);
}
randomId(){
return Math.floor(Math.random() * 1000000000000);    
}
display(){
    this.parentDiv.style.display = "flex";
    this.parentDiv.style.flexDirection = "column";
}
////////////////////////////////
}//class ends

