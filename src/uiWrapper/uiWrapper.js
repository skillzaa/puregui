export default class UiWrapper {
    constructor(can) {
        this.can = can;
        this.flagDrag = false;
        this.can.addEventListener("mousedown", () => {
            this.flagDrag = true;
            console.log(this.flagDrag);
        });
        this.can.addEventListener("mouseup", () => {
            this.flagDrag = false;
            console.log(this.flagDrag);
        });
    }
    mousemove(fnToRun) {
        this.can.addEventListener("mousemove", (e) => {
            // this.flagDrag = false;
            if (this.flagDrag == true) {
                console.log("drag");
                fnToRun(e);
            }
        });
    }
    click(fnToRun) {
        this.can.addEventListener("click", (e) => {
            var rect = this.can.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            fnToRun(e, x, y);
            // console.log(x,y);        
        });
    }
    mouseDown() {
    }
}
