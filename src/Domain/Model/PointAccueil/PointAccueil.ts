import BaseModel from "../Commun/BaseModel";
import PointAccueilState from "./PointAccueilState";

export default class PointAccueil extends BaseModel<PointAccueilState> {
    private readonly _state: PointAccueilState;

    constructor(state: PointAccueilState) {
        super(state);
        this._state = state;
    }
}
