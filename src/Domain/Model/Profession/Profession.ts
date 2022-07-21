import ProfessionState from "./ProfessionState";
import Prototype from "../Commun/Prototype";
import {ProfessionStateExtension} from "./ProfessionStateExtension";

interface InternalDomaineState extends ProfessionState, Prototype<ProfessionState> {
}

export default class Profession {
    private readonly _state: InternalDomaineState;

    constructor(state: ProfessionState) {
        this._state = ProfessionStateExtension(state) as InternalDomaineState;
    }

    get state() {
        return this._state.clone();
    }
}
