import DisponibilitesState from "./DisponibilitesState";
import Prototype from "../Commun/Prototype";
import {CloneDisponibilitesStateExtension} from "./CloneDisponibilitesStateExtension";

interface InternalDisponibilitesState extends DisponibilitesState, Prototype<DisponibilitesState> {
}

export default class Disponibilites {
    private readonly _state: InternalDisponibilitesState;

    constructor(state: DisponibilitesState) {
        this._state = CloneDisponibilitesStateExtension(state) as InternalDisponibilitesState;
    }

    get state() {
        return this._state.clone();
    }
}