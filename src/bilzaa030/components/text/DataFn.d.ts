import { FontNames } from "../../index.js";
export declare class ObjectData {
    frameStart: number;
    x: number;
    y: number;
    content: string;
    widthMargin: number;
    widthBorder: number;
    widthPadding: number;
    flagDrawMargin: boolean;
    flagDrawBorder: boolean;
    flagDrawPadding: boolean;
    flagDrawContentArea: boolean;
    flagDrawText: boolean;
    colorMargin: string;
    colorBorder: string;
    colorPadding: string;
    colorContentBg: string;
    fontColor: string;
    fontSize: number;
    fontFamily: FontNames;
    constructor();
}
export default function DataFn(): ObjectData;
export declare class CalcData {
    marginX: number;
    marginY: number;
    borderX: number;
    borderY: number;
    paddingX: number;
    paddingY: number;
    contentAreaX: number;
    contentAreaY: number;
    contentWidth: number;
    contentHeight: number;
    constructor();
}
//# sourceMappingURL=DataFn.d.ts.map