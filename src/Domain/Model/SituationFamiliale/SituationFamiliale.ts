import SituationFamilialeState from "./SituationFamilialeState";
import Prototype from "../Commun/Prototype";
import {CloneSituationFamilialeStateExtension} from "./CloneSituationFamilialeStateExtension";

interface InternalDomaineState extends SituationFamilialeState, Prototype<SituationFamilialeState> {
}

export default class SituationFamiliale {
    private readonly _state: InternalDomaineState;

    constructor(state: SituationFamilialeState) {
        this._state = CloneSituationFamilialeStateExtension(state) as InternalDomaineState;
    }

    get state() {
        return this._state.clone();
    }
}
