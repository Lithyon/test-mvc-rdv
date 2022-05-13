import PointAccueilState from "./PointAccueilState";
import Prototype from "../Commun/Prototype";
import {ClonePointAccueilStateExtension} from "./ClonePointAccueilStateExtension";

interface InternalPointAccueilState extends PointAccueilState, Prototype<PointAccueilState> {
}

export default class PointAccueil {
    private readonly _state: InternalPointAccueilState;

    constructor(state: PointAccueilState) {
        this._state = ClonePointAccueilStateExtension(state) as InternalPointAccueilState;
    }

    get state() {
        return this._state.clone();
    }
}
