import {Bilzaa2d} from "../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "../text.js";


export default class BilzaaWrapper{
constructor(){
this.bilzaa = new Bilzaa2d("bilzaa");
this.bilzaa.init();
this.bilzaa.draw();
}

addText(resp={}){
    if (resp.content == ""){resp.content = "Text...!"}
    let t = new Text(resp.content);
    t.fontSize = resp.fontSize |50;
    t.x = resp.x | 10;
    t.y = resp.y | 10;
    this.bilzaa.add(t);
    this.bilzaa.draw();   
}

}