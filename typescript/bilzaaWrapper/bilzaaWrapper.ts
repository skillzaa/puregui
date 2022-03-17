import {Bilzaa2d, IDrawable} from "../../src/bilzaa030/index.js";
// import Text from "../text.js";


export default class BilzaaWrapper{
    bilzaa:Bilzaa2d;    
    selectedComp : IDrawable | null;
constructor(){
    this.selectedComp = null;
this.bilzaa = new Bilzaa2d("bilzaa");
this.bilzaa.init();
// this.bilzaa.add
this.bilzaa.draw();
}

addText(resp=[]){
// let rez = extractValues(resp,["fontSize","content","fontColor","x","y"]);
// let t = new Text(chq(rez.content,"Some Text",true));
let t = this.bilzaa.add.textTempl.allVisible();
t.d.x = 100;
t.d.y = 100;
    // t.fontSize = chq(rez.fontSize,50,true);
    // t.x = chq(rez.x,50,true);
    // t.y = chq(rez.y,50,true);
    // t.fontColor = chq(rez.fontColor,"#ff0000",true);
    // this.bilzaa.add(t);
    this.bilzaa.draw();   
}

settings(resp=[]){
let rez = extractValues(resp,["backgroundColor","canvasWidth","canvasHeight"]);    
   
    ////////////////////////////////
    this.bilzaa.canvasWidth = chq(rez.canvasWidth,800,true); 
    this.bilzaa.canvasHeight = chq(rez.canvasHeight,350,true); 
    this.bilzaa.background.color = chq(rez.backgroundColor,"#EFEEE3",true); 
    this.bilzaa.init();   
    this.bilzaa.draw();   
}
//----------ui function
click(e :MouseEvent){
    let can    = document.getElementById("bilzaa");
    //@ts-expect-error
    var rect = can.getBoundingClientRect();
        
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    console.log(this.bilzaa.chqCollision(x,y));
}
mousemove(e){
    // console.log("x",x);
let can    = document.getElementById("bilzaa");
var rect = can.getBoundingClientRect();
    
let x = e.clientX - rect.left;
let y = e.clientY - rect.top;
this.bilzaa.comps[0].d.x = x;
this.bilzaa.comps[0].d.y = y;
this.bilzaa.draw();   
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