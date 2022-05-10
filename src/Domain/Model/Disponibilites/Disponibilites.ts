import DisponibilitesState from "./DisponibilitesState";
import BaseModel from "../Commun/BaseModel";

export default class Disponibilites extends BaseModel<DisponibilitesState> {
    private readonly _state: DisponibilitesState;

    constructor(state: DisponibilitesState) {
        super(state);
        this._state = state;
    }
}