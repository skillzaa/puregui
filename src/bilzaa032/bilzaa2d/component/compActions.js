export default class CompActions {
    constructor(arr, p) {
        this.arr = arr;
        this.p = p;
    }
    chqCollision(x, y) {
        for (let i = 0; i < this.arr.length; i++) {
            const elm = this.arr[i];
            // if (x > elm.d.x && x < elm.width(this.p)){
            if (x > elm.d.x && x < (elm.d.x + 200)) {
                // if (y > elm.draw.y && y < elm.height(this.p)){
                if (y > elm.d.y && y < (elm.d.y + 200)) {
                    return elm;
                }
            }
        }
        return null;
    }
} //comps end
