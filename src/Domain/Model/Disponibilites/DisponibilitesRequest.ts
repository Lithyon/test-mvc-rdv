import DisponibilitesRequestState from "./DisponibilitesRequestState";
import Prototype from "../Commun/Prototype";
import {CloneDisponibilitesRequestStateExtension} from "./CloneDisponibilitesRequestStateExtension";

interface InternalDisponibilitesRequestState extends DisponibilitesRequestState, Prototype<DisponibilitesRequestState> {
}

export default class DisponibilitesRequest {
    private readonly _state: InternalDisponibilitesRequestState;

    constructor(state: DisponibilitesRequestState) {
        this._state = CloneDisponibilitesRequestStateExtension(state) as InternalDisponibilitesRequestState;
    }

    get state() {
        return this._state.clone();
    }

}