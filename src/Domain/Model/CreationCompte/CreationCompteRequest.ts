import CreationCompteRequestState from "./CreationCompteRequestState";
import Prototype from "../Commun/Prototype";
import {CloneCreationCompteRequestStateExtension} from "./CloneCreationCompteRequestStateExtension";

interface InternalCreationCompteRequestState extends CreationCompteRequestState, Prototype<CreationCompteRequestState> {
}

export default class CreationCompteRequest {
    private readonly _state: InternalCreationCompteRequestState;

    constructor(state: CreationCompteRequestState) {
        this._state = CloneCreationCompteRequestStateExtension(state) as InternalCreationCompteRequestState;
    }

    get state() {
        return this._state.clone();
    }
}
