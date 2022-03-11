import {Bilzaa2d} from "../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "../text.js";


export default class BilzaaWrapper{
constructor(){
this.bilzaa = new Bilzaa2d("bilzaa");
this.bilzaa.init();
this.bilzaa.draw();
}

addText(resp={}){
let rez = {};
    for (let i = 0; i < resp.length; i++) {
        const item = resp[i];
    
    if (item.name == "fontSize"){
        rez.fontSize = item.value;    
    }
    if (item.name == "x"){
        rez.x = item.value;    
    }
    if (item.name == "y"){
        rez.y = item.value;    
    }
    if (item.name == "content"){
        if (item.value == ""){
            rez.content = "Text...!";
        }else {
            rez.content = item.value;
        }
    }
        
    }
    let t = new Text(rez.content);
    t.fontSize = rez.fontSize |50;
    t.x = rez.x | 10;
    t.y = rez.y | 10;
    this.bilzaa.add(t);
    this.bilzaa.draw();   
}

}