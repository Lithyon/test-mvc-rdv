import ProfessionState from "./ProfessionState";
import Prototype from "../Commun/Prototype";
import {CloneProfessionStateExtension} from "./CloneProfessionStateExtension";

interface InternalDomaineState extends ProfessionState, Prototype<ProfessionState> {
}

export default class Profession {
    private readonly _state: InternalDomaineState;

    constructor(state: ProfessionState) {
        this._state = CloneProfessionStateExtension(state) as InternalDomaineState;
    }

    get state() {
        return this._state.clone();
    }
}
