import BaseModel from "../Commun/BaseModel";
import DisponibilitesRequestState from "./DisponibilitesRequestState";

export default class DisponibilitesRequest extends BaseModel<DisponibilitesRequestState> {
    private readonly _state: DisponibilitesRequestState;

    constructor(state: DisponibilitesRequestState) {
        super(state);
        this._state = state;
    }
}