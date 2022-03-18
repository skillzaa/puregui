import {Bilzaa2d, IDrawable} from "../../src/bilzaa032/index.js";
// import Text from "../text.js";


export default class BilzaaWrapper{
    bilzaa:Bilzaa2d;    
    selected : IDrawable | null;
    canvas :HTMLElement;
    flagDrag :boolean;
    flagGrab :boolean;

constructor(canvas :HTMLElement){
this.canvas = canvas;
this.flagDrag = false;
this.flagGrab = false;
this.selected = null;
this.canvas.addEventListener("click",this.mouseClick.bind(this));    
this.canvas.addEventListener("mousedown",this.mouseDown.bind(this));    
this.canvas.addEventListener("mouseup",this.mouseUp.bind(this));    
this.canvas.addEventListener("mousemove",this.mouseMove.bind(this));    

this.bilzaa = new Bilzaa2d("bilzaa");
this.bilzaa.frameEnd = 600;
this.bilzaa.init();
// this.bilzaa.add
this.bilzaa.draw();
}

addText(resp=[]){
let rez = extractValues(resp,["fontSize","content","fontColor","x","y"
,"frameStart","frameEnd"]);
let t = this.bilzaa.add.text("Some");
// let t = new Text(chq(rez.content,"Some Text",true));
    t.frameStart = rez.frameStart;
    t.frameEnd = rez.frameEnd;
    t.d.content = rez.content;
    t.d.fontSize = parseInt(chq(rez.fontSize,50,true));
    // t.d.fontSize = 50;
    t.d.x = parseInt(chq(rez.x,50,true));
    t.d.y = parseInt(chq(rez.y,50,true));
    t.d.fontColor = chq(rez.fontColor,"#ff0000",true);
    // t.d.fontColor = "#ff0000";
    console.log("t",t);
    this.bilzaa.draw();   
}

globals(resp=[]){
// let rez = extractValues(resp,["toggleGrap"]);    
// if (rez.toggleGrap == "on"){
//     this.flagGrab = true;
// }   else {
//     this.flagGrab = true;
// }
this.bilzaa.draw();  
}
settings(resp=[]){
let rez = extractValues(resp,["backgroundColor","canvasvasWidth","canvasvasHeight"]);    
   
    ////////////////////////////////
    this.bilzaa.canvasvasWidth = chq(rez.canvasvasWidth,800,true); 
    this.bilzaa.canvasvasHeight = chq(rez.canvasvasHeight,350,true); 
    this.bilzaa.background.color = chq(rez.backgroundColor,"#EFEEE3",true); 
    this.bilzaa.init();   
    this.bilzaa.draw();   
}
//----------ui function
mouseClick(e :MouseEvent){
    // console.log("click");
    var rect = this.canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
  let sel = this.bilzaa.chqCollision(x,y);
  if (sel == null){
      
    console.log("nothing selected..clear");
        if (this.selected !== null){
            this.selected.d.flagDrawBoundingRectangle = false;;
            this.selected = null;
            this.bilzaa.draw();
        }

  }else {
    console.log("selected component id:",sel.id);
    this.selected = sel;
    this.selected.d.flagDrawBoundingRectangle = true;
    this.bilzaa.draw();
  }
}
mouseMove(e :MouseEvent){
    // console.log("mousemove");
if (this.selected == null){return;}    
var rect = this.canvas.getBoundingClientRect();    
let x = e.clientX - rect.left;
let y = e.clientY - rect.top;
this.selected.d.x = x;
this.selected.d.y = y;
this.bilzaa.draw();   
}
mouseUp(e :MouseEvent){
        this.flagDrag ==true;
    // console.log("mouseUp");   
}
mouseDown(e :MouseEvent){
    if (this.selected !== null){
        this.flagDrag ==true;
    }
    // console.log("mouseDown");   
}
}//class


function extractValues(resp,arr=[]){   
    let rez = {};
    for (let i = 0; i < resp.length; i++) {
        const item = resp[i];

        for (let ii = 0; ii < arr.length; ii++) {
            const lookfor = arr[ii];
            if (item.name == lookfor){
                rez[lookfor] = item.value;    
            }
            
        }
    }
 return rez;   
}

function chq(val,defaultVal,checkEmpty = false){
    if (val === null || val === "undefined"){
        return dafaultVal;
    }else {
        if (checkEmpty == true){
            if(val == ""){
                return defaultVal;
            }else {
                return val;
            }
        }else {
            return val;
        }
    }
}