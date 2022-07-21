import CommunesState from "./CommunesState";
import Prototype from "../Commun/Prototype";
import {CloneCommunesStateExtension} from "./CloneCommunesStateExtension";

interface InternalCommunesState extends CommunesState, Prototype<CommunesState> {
}

export default class Communes {
    private readonly _state: InternalCommunesState;

    constructor(state: CommunesState) {
        this._state = CloneCommunesStateExtension(state) as InternalCommunesState;
    }

    get state() {
        return this._state.clone();
    }
}
