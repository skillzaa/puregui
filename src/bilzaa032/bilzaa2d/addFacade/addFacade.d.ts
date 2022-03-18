import { IDrawable, Text } from "../../index.js";
import AddTextTemplates from "./addTextTemplates.js";
export default class AddFacade {
    private addToArray;
    textTempl: AddTextTemplates;
    constructor(comps: IDrawable[]);
    text(content?: string, frameStart?: number, frameEnd?: number): Text;
}
//# sourceMappingURL=addFacade.d.ts.map