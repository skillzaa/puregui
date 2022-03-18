import { Style, Pack, IDrawable, DrawLayer, Transition, IFrameStart } from "../../index.js";
export default class Component<T extends IFrameStart> implements IDrawable {
    protected compData: Transition<T>;
    d: T;
    data: T;
    drawLayer: DrawLayer;
    frameStart: number;
    frameEnd: number;
    id: string;
    display: boolean;
    selected: boolean;
    style: Style;
    constructor(DataFn: () => T);
    width(p: Pack): number;
    height(p: Pack): number;
    addTransition(frameStart: number): T;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=component.d.ts.map