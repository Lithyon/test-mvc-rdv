import Prototype from "../Commun/Prototype";
import CreationCompteState from "./CreationCompteState";
import {CloneCreationCompteStateExtension} from "./CloneCreationCompteStateExtension";


interface InternalCreationCompteState extends CreationCompteState, Prototype<CreationCompteState> {
}

export default class CreationCompte {
    private readonly _state: InternalCreationCompteState;

    constructor(state: CreationCompteState) {
        this._state = CloneCreationCompteStateExtension(state) as InternalCreationCompteState;
    }

    get state() {
        return this._state.clone();
    }
}