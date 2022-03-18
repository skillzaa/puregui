import { Component, Pack } from "../../index.js";
import { ObjectData } from "./DataFn.js";
export default class Grid extends Component<ObjectData> {
    constructor(DataFn: () => ObjectData);
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
}
//# sourceMappingURL=grid.d.ts.map