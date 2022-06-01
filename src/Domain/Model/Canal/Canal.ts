import CanalState from "./CanalState";
import Prototype from "../Commun/Prototype";
import {CloneCanalStateExtension} from "./CloneCanalStateExtension";

interface InternalCanalState extends CanalState, Prototype<CanalState> {
}

export default class Canal {
    private readonly _state: InternalCanalState;

    constructor(state: CanalState) {
        this._state = CloneCanalStateExtension(state) as InternalCanalState;
    }

    get state() {
        return this._state.clone();
    }
}