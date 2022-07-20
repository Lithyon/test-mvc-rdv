import {ErrorObservable, HasErrorHandler} from "../ErrorObservable";
import ErrorEvent from "../ErrorEvent/ErrorEvent";

export default class ErrorObservableImpl implements ErrorObservable {
    private _handlers: Array<HasErrorHandler>;

    constructor() {
        this._handlers = [];
    }

    subscribeHasError(hasErrorHandler: HasErrorHandler) {
        this._handlers.push(hasErrorHandler);
    }

    unsubscribeHasError(hasErrorHandler: HasErrorHandler) {
        this._handlers = this._handlers.filter(handler => handler !== hasErrorHandler);
    }

    raiseAdvancementEvent(event: ErrorEvent) {
        this._handlers.forEach(handler => handler(event));
    }
}
