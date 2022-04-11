export type StateChangedHandler = () => void;

export default interface Controller<T> {
    onLoad():void;
    get state():T;
    subscribeStateChanged(onStateChanged:StateChangedHandler):void;
    unsubscribeStateChanged(onStateChanged:StateChangedHandler):void;
}
