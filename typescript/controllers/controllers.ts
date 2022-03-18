import BilzaaWrapper from "../bilzaaWrapper/bilzaaWrapper.js";

export default class Controllers {
    bwrap :BilzaaWrapper; 
    framediv :HTMLDivElement;
    theslider :HTMLInputElement;
    startBtn :HTMLButtonElement;
    stopBtn :HTMLButtonElement;
    playBtn :HTMLButtonElement;

constructor(bwrap :BilzaaWrapper){
this.bwrap = bwrap;
//@ts-expect-error
this.framediv = document.getElementById("framediv");
// document.getElementById("framediv").innerHTML = ((e.target.value).toString());
//@ts-expect-error
this.theslider  = document.getElementById("theslider");
this.theslider.value = (this.bwrap.bilzaa.frame).toString(); 
this.theslider.setAttribute("max",this.bwrap.bilzaa.frameEnd.toString());
this.theslider.addEventListener("input",(e :Event)=>{
    this.bwrap.bilzaa.frame = parseInt(e.target.value);
    this.framediv.innerHTML = `${(e.target.value)} / ${(this.bwrap.bilzaa.frameEnd)}`;
    // this.bwrap.bilzaa.draw();    
});

////////////////////////////////
//@ts-expect-error
this.startBtn  = document.getElementById("startBtn");
this.startBtn.addEventListener("click",(e :Event)=>{
    this.bwrap.bilzaa.start();
    setInterval(()=>{
        this.framediv.innerHTML = `${(this.bwrap.bilzaa.frame)} / ${(this.bwrap.bilzaa.frameEnd)}`;
        },1000);
        

});

//@ts-expect-error
this.stopBtn  = document.getElementById("stopBtn");
this.stopBtn.addEventListener("click",(e :Event)=>{
    this.bwrap.bilzaa.stop();
});

//@ts-expect-error
this.playBtn  = document.getElementById("playBtn");
this.playBtn.addEventListener("click",(e :Event)=>{
    // this.bwrap.bilzaa.p;
});
//.........................................................


//.........................................................


}
//////////////////////////////////////////////

// document.getElementById("stopBtn")?.addEventListener("click",(e)=>{
//     this.bwrap.bilzaa.stop();
//     console.log("stopBtn",this.bwrap.bilzaa);
// });
// document.getElementById("playBtn")?.addEventListener("click",(e)=>{
// console.log("playBtn");
// this.bwrap.bilzaa.start();
// });


start(){

}
stop(){}
play(){}


}