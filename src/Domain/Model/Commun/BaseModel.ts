import Prototype from "./Prototype";

export default abstract class BaseModel<T extends Prototype<T>> {
    private readonly _stateClonable: T

    protected constructor(stateClonable: T) {
        this._stateClonable = stateClonable;
    }

    get state(): T {
        return this._stateClonable.clone();
    }
}