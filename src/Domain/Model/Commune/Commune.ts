import CommuneState from "./CommuneState";
import Prototype from "../Commun/Prototype";
import {CloneCommuneStateExtension} from "./CloneCommuneStateExtension";

interface InternalCommuneState extends CommuneState, Prototype<CommuneState> {
}

export default class Commune {
    private readonly _state: InternalCommuneState;

    constructor(state: CommuneState) {
        this._state = CloneCommuneStateExtension(state) as InternalCommuneState;
    }

    get state() {
        return this._state.clone();
    }
}
