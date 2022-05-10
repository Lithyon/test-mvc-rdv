import BaseModel from "../Commun/BaseModel";
import DemandeState from "./DemandeState";

export default class Demande extends BaseModel<DemandeState> {
    private readonly _state: DemandeState;

    constructor(state: DemandeState) {
        super(state);
        this._state = state;
    }
}