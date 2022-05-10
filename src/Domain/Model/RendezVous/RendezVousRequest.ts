import BaseModel from "../Commun/BaseModel";
import {RendezVousRequestState} from "./RendezVousRequestState";

export default class RendezVousRequest extends BaseModel<RendezVousRequestState> {
    private readonly _state: RendezVousRequestState;

    constructor(state: RendezVousRequestState) {
        super(state);
        this._state = state;
    }
}
