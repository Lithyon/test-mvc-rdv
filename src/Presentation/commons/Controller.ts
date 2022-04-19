import { HasState } from "./HasState";
import { StateObservable } from "./StateChangedHandler";

export interface Controller<T> extends StateObservable, HasState<T> {}
