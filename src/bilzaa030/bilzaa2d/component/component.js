import { Style, DrawLayer, Transition } from "../../index.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component {
    constructor(DataFn) {
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        // this.d.content = content;
        //-----------------------------------------
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        // this.name = name;
        this.frameStart = 0; //component startand end frames
        this.display = true;
        this.selected = false;
        this.frameEnd = 500;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    addTransition(frameStart) {
        return this.compData.add(frameStart);
    }
    // brilent do not send frame in draw args just send frame in update-
    draw(p) {
        return true;
    }
    update(frame, p) {
        return true;
    }
}
