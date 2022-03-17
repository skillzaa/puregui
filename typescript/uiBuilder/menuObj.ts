
export default class MenuObj{
constructor(title="Main"){
//create the menu navbar title    
this.menuDiv  = document.createElement("div");
this.menuDiv.className = "navItem";
this.menuDiv.innerText = title;
//navBar is already in html
document.getElementById("navBar").appendChild(this.menuDiv);
//-----------------------------------------------------
//-----------------------------------------------------
//---Create the actual menu roll-down
this.innerDiv = document.createElement("div");
 this.innerDiv.className = "navMenu";
//  this.innerDiv.innerHTML = "<br/><br/>Hello<br/><br/>";
 
 this.innerDiv.style.display = "none";
 //-- append inner div to outer
 this.menuDiv.appendChild(this.innerDiv);
 //-- menu roll-down mouse levae event
 this.innerDiv.addEventListener("mouseleave",function(e){
     e.target.style.display = "none";
 });

 
//---Show the actual roll-down menu 
this.menuDiv.addEventListener("click", (e)=>{
this.innerDiv.style.display = "flex";
this.innerDiv.style.position = "absolute";
this.innerDiv.style.left = `${this.menuDiv.getBoundingClientRect().left}px`;
this.innerDiv.style.top = `${(this.menuDiv.getBoundingClientRect().bottom + 5)}px`;
    //  console.log("ok");
 });   
}//constructor

addBtn( title="click me",handler,fnTorun){
    let newBtnDiv = document.createElement("div");
    newBtnDiv.innerText = title;
    newBtnDiv.className = "menuBtns";
    newBtnDiv.addEventListener("click",function(){
        handler(fnTorun);
    });
    this.innerDiv.appendChild(newBtnDiv);
}

}//class