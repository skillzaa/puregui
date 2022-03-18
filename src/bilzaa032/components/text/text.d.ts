import { Component, Pack, FontNames } from "../../index.js";
import { ObjectData, CalcData } from "./DataFn.js";
export default class Text extends Component<ObjectData> {
    protected calcData: CalcData;
    fontFamilyNames: typeof FontNames;
    constructor(DataFn: () => ObjectData);
    width(p: Pack): number;
    height(p: Pack, perc?: number): number;
    update(frame: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    drawContentArea(p: Pack): void;
    drawText(p: Pack): void;
    contentHeight(p: Pack, perc?: number): number;
    contentWidth(p: Pack): number;
    drawPadding(p: Pack): void;
    drawBorder(p: Pack): void;
    drawMargin(p: Pack): void;
    drawBoundingRectangle(p: Pack, color?: string, lineWidth?: number): void;
}
//# sourceMappingURL=text.d.ts.map