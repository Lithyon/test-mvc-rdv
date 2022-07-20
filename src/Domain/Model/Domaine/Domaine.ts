import DomaineState from "./DomaineState";
import Prototype from "../Commun/Prototype";
import {CloneDomaineStateExtension} from "./CloneDomaineStateExtension";

interface InternalDomaineState extends DomaineState, Prototype<DomaineState> {
}

export default class Domaine {
    private readonly _state: InternalDomaineState;

    constructor(state: DomaineState) {
        this._state = CloneDomaineStateExtension(state) as InternalDomaineState;
    }

    get state() {
        return this._state.clone();
    }
}
