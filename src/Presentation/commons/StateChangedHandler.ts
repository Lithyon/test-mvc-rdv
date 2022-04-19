export type StateChangedHandler = () => void;

export interface StateObservable {
  subscribeStateChanged(onStateChanged: StateChangedHandler): void;
  unsubscribeStateChanged(onStateChanged: StateChangedHandler): void;
}
