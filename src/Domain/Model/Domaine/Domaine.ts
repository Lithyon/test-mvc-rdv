import BaseModel from "../Commun/BaseModel";
import DomaineState from "./DomaineState";

export default class Domaine extends BaseModel<DomaineState> {
    private readonly _state: DomaineState;

    constructor(state: DomaineState) {
        super(state);
        this._state = state;
    }
}