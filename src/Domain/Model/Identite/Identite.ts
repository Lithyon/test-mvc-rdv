import IdentiteState from "./IdentiteState";
import Prototype from "../Commun/Prototype";
import {CloneIdentiteStateExtension} from "./CloneIdentiteStateExtension";

interface InternalIdentiteState extends IdentiteState, Prototype<IdentiteState> {
}

export default class Identite {
    private readonly _state: InternalIdentiteState;

    constructor(state: IdentiteState) {
        this._state = CloneIdentiteStateExtension(state) as InternalIdentiteState;
    }

    get state() {
        return this._state.clone();
    }
}
