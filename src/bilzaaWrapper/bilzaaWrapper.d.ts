import { Bilzaa2d, IDrawable } from "../../src/bilzaa030/index.js";
export default class BilzaaWrapper {
    bilzaa: Bilzaa2d;
    selected: IDrawable | null;
    canvas: HTMLElement;
    flagDrag: boolean;
    constructor(canvas: HTMLElement);
    addText(resp?: never[]): void;
    settings(resp?: never[]): void;
    mouseClick(e: MouseEvent): void;
    mouseMove(e: MouseEvent): void;
    mouseUp(e: MouseEvent): void;
    mouseDown(e: MouseEvent): void;
}
//# sourceMappingURL=bilzaaWrapper.d.ts.map