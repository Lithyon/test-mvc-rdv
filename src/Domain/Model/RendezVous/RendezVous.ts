import RendezVousState from "./RendezVousState";
import Prototype from "../Commun/Prototype";
import {CloneRendezVousStateExtension} from "./CloneRendezVousStateExtension";

interface InternalRendezVousState extends RendezVousState, Prototype<RendezVousState> {
}

export default class RendezVous {
    private readonly _state: InternalRendezVousState;

    constructor(state: RendezVousState) {
        this._state = CloneRendezVousStateExtension(state) as InternalRendezVousState;
    }

    get state() {
        return this._state.clone();
    }
}