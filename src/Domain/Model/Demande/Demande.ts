import DemandeState from "./DemandeState";
import {CloneDemandeStateExtension} from "./CloneDemandeStateExtension";
import Prototype from "../Commun/Prototype";

interface InternalDemandeState extends DemandeState, Prototype<DemandeState> {
}

export default class Demande {
    private readonly _state: InternalDemandeState;

    constructor(state: DemandeState) {
        this._state = CloneDemandeStateExtension(state) as InternalDemandeState;
    }

    get state() {
        return this._state.clone();
    }
}