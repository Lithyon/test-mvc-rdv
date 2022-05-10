import BaseModel from "../Commun/BaseModel";
import RendezVousState from "./RendezVousState";

export default class RendezVous extends BaseModel<RendezVousState> {
    private readonly _state: RendezVousState;

    constructor(state: RendezVousState) {
        super(state);
        this._state = state;
    }
}