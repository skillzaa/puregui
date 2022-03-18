var _a, _b, _c;
import BilzaaWrapper from "./bilzaaWrapper/bilzaaWrapper.js";
import MenuObj from "./uiBuilder/menuObj.js";
import createText from "./forms/createText.js";
import settings from "./forms/settings.js";
import globals from "./forms/globals.js";
// const randomColor = Math.floor(Math.random()*16777215).toString(16);
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
try {
    let c = document.getElementById("bilzaa");
    if (c == null) {
        throw new Error("canvas not found");
    }
    else {
        let bilzaaWrapper = new BilzaaWrapper(c);
        let menuObj = new MenuObj();
        menuObj.addBtn("Add Text", createText, bilzaaWrapper.addText.bind(bilzaaWrapper));
        menuObj.addBtn("Settings", settings, bilzaaWrapper.settings.bind(bilzaaWrapper));
        menuObj.addBtn("Globals", globals, bilzaaWrapper.globals.bind(bilzaaWrapper));
        //////////////////////////////////////////////
        let theslider = document.getElementById("theslider");
        // console.log("theslider",theslider)
        theslider.setAttribute("max", bilzaaWrapper.bilzaa.frameEnd.toString());
        setInterval(function () {
        }, 1000);
        theslider.addEventListener("input", (e) => {
            // console.log("theslider",e.target.value);
            bilzaaWrapper.bilzaa.frame = e.target.value;
            bilzaaWrapper.bilzaa.draw();
            // document.getElementById("framediv").innerHTML = ((e.target.value).toString());
            document.getElementById("framediv").innerHTML = (e.target.value);
        });
        //////////////////////////////////////////////
        (_a = document.getElementById("startBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
            bilzaaWrapper.bilzaa.start();
            setInterval(() => {
                document.getElementById("framediv").innerHTML = bilzaaWrapper.bilzaa.frame;
            }, 1000),
                console.log("start", bilzaaWrapper.bilzaa);
        });
        (_b = document.getElementById("stopBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
            bilzaaWrapper.bilzaa.stop();
            console.log("stopBtn", bilzaaWrapper.bilzaa);
        });
        (_c = document.getElementById("playBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", (e) => {
            console.log("playBtn");
            bilzaaWrapper.bilzaa.start();
        });
        //////////////////////////////////////////////
    }
}
catch (_d) {
    throw new Error("canvas element not found");
}
