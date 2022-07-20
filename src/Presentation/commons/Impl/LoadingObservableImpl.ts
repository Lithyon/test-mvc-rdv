import {LoadingObservable, OnLoadHandler} from "../LoadingObservable";
import LoadingEvent from "../LoadingEvent/LoadingEvent";

export default class LoadingObservableImpl implements LoadingObservable {
    private _handlers: Array<OnLoadHandler>;

    constructor() {
        this._handlers = [];
    }

    subscribeOnLoad(onLoadHandler: OnLoadHandler) {
        this._handlers.push(onLoadHandler);
    }

    unsubscribeOnLoad(onLoadHandler: OnLoadHandler) {
        this._handlers = this._handlers.filter(handler => handler !== onLoadHandler);
    }

    raiseAdvancementEvent(event: LoadingEvent) {
        this._handlers.forEach(handler => handler(event));
    }
}
