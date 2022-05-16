import { Controller } from "./Controller";
import { StateChangedHandler } from "./StateChangedHandler";

export default abstract class BaseController<T> implements Controller<T> {
  private _onStateChanged?: StateChangedHandler;

  abstract get state(): T;

  subscribeStateChanged(onStateChanged: StateChangedHandler): void {
    this._onStateChanged = onStateChanged;
  }

  unsubscribeStateChanged(onStateChanged?: StateChangedHandler): void {
    this._onStateChanged = undefined;
  }

  raiseStateChanged() {
    this._onStateChanged && this._onStateChanged();
  }
}
