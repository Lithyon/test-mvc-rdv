import Cloneable from "./Clonable";

export default abstract class BaseModel<T extends Cloneable<T>> {
    private readonly _stateClonable: T

    constructor(stateClonable: T) {
        this._stateClonable = stateClonable;
    }

    get state(): T {
        return this._stateClonable.clone();
    }
}