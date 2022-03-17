export default class UiWrapper {
    constructor() {
        document.getElementById("bilzaa").addEventListener("click", function (e) {
            console.log("click");
            let can = document.getElementById("bilzaa");
            var rect = can.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
        });
    }
}
