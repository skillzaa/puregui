import BilzaaWrapper from "../bilzaaWrapper/bilzaaWrapper.js";
export default class Controllers {
    bwrap: BilzaaWrapper;
    framediv: HTMLDivElement;
    theslider: HTMLInputElement;
    startBtn: HTMLButtonElement;
    stopBtn: HTMLButtonElement;
    playBtn: HTMLButtonElement;
    constructor(bwrap: BilzaaWrapper);
    start(): void;
    stop(): void;
    play(): void;
}
//# sourceMappingURL=controllers.d.ts.map