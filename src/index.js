import BilzaaWrapper from "./bilzaaWrapper/bilzaaWrapper.js";
import MenuObj from "./uiBuilder/menuObj.js";
import createText from "./forms/createText.js";
import settings from "./forms/settings.js";
import globals from "./forms/globals.js";
import Controllers from "./controllers/controllers.js";
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
        let controllers = new Controllers(bilzaaWrapper);
        console.log(controllers);
        //////////////////////////////////////////////
    }
}
catch (_a) {
    throw new Error("canvas element not found");
}
