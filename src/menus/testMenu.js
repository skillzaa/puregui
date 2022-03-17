import createText from "../forms/createText.js";
import settings from "../forms/settings.js";
export default function testMenu(bilzaa) {
    //--the heading of the menu which is main navbar item
    let newMenuItem = document.createElement("div");
    newMenuItem.className = "navItem";
    // newMenuItem.id = "menuBtn"; --wrong since i will run this fn mutiple time
    newMenuItem.innerText = "Main";
    //...................................
    //navBar is already in html
    document.getElementById("navBar").appendChild(newMenuItem);
    //----------Add event listner for the navBar item and... 
    //---Create the actual roll-down menu 
    newMenuItem.addEventListener("click", function (e) {
        let menuDiv = document.createElement("div");
        //---Create the actual menu roll-down
        menuDiv.className = "navMenu";
        // menuDiv.id = "menuDiv";
        menuDiv.style.position = "absolute";
        menuDiv.style.left = `${e.target.getBoundingClientRect().left}px`;
        menuDiv.style.top = `${(e.target.getBoundingClientRect().bottom + 5)}px`;
        menuDiv.style.display = "block";
        //-- menu roll-down mouse levae event
        menuDiv.addEventListener("mouseleave", function (e) {
            e.target.style.display = "none";
        });
        ////////////////////////////////////////////////////////////////////        
        ////////////////////////////////////////////////////////////////////        
        ////////////////////////////////////////////////////////////////////        
        /////---------Menu Links / Buttons ----Begin->
        let createTextBtn = document.createElement("div");
        createTextBtn.id = "createTextBtn"; //may be ok
        createTextBtn.innerText = "Create Text";
        createTextBtn.className = "navItem";
        createTextBtn.addEventListener("click", function () {
            createText(bilzaa);
        });
        //................................
        let settingsBtn = document.createElement("div");
        settingsBtn.id = "settingsBtn"; //may be ok
        settingsBtn.innerText = "Settings";
        settingsBtn.className = "navItem";
        settingsBtn.addEventListener("click", function () {
            settings(bilzaa);
        });
        //................................
        menuDiv.appendChild(createTextBtn);
        menuDiv.appendChild(settingsBtn);
        /////---------Menu Links / Buttons ----End->
        //append all buttons
        document.body.appendChild(menuDiv);
    });
}
