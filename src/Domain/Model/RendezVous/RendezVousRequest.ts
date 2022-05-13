import RendezVousRequestState from "./RendezVousRequestState";
import Prototype from "../Commun/Prototype";
import {CloneRendezVouRequestStateExtension} from "./CloneRendezVousRequestStateExtension";

interface InternalRendezVousRequestState extends RendezVousRequestState, Prototype<RendezVousRequestState> {
}

export default class RendezVousRequest {
    private readonly _state: InternalRendezVousRequestState;

    constructor(state: RendezVousRequestState) {
        this._state = CloneRendezVouRequestStateExtension(state) as InternalRendezVousRequestState;
    }

    get state() {
        return this._state.clone();
    }
}
