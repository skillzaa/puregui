import { Text } from "../../index.js";
// import Text from "../../components/text/text.js";
import DataFn from "../../components/text/DataFn.js";
import AddTextTemplates from "./addTextTemplates.js";
export default class AddFacade {
    constructor(comps) {
        this.addToArray = comps;
        this.textTempl = new AddTextTemplates(comps);
    }
    text(content = "..!", frameStart = 0, frameEnd = 5000) {
        let bs = new Text(DataFn);
        bs.frameStart = frameStart;
        bs.frameEnd = frameEnd;
        bs.d.content = content;
        this.addToArray.push(bs);
        return bs;
    }
}
