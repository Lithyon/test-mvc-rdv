import CommunesRequestState from "./CommunesRequestState";
import Prototype from "../Commun/Prototype";
import {CloneCommunesRequestStateExtension} from "./CloneCommunesRequestStateExtension";

interface InternalCommunesRequestState extends CommunesRequestState, Prototype<CommunesRequestState> {
}

export default class CommunesRequest {
    private readonly _state: InternalCommunesRequestState;

    constructor(state: CommunesRequestState) {
        this._state = CloneCommunesRequestStateExtension(state) as InternalCommunesRequestState;
    }

    get state() {
        return this._state.clone();
    }
}