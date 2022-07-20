import LoadingEvent from "./LoadingEvent/LoadingEvent";

export type OnLoadHandler = (event: LoadingEvent) => void;

export interface LoadingObservable {
    subscribeOnLoad(onLoadHandler: OnLoadHandler): void;

    unsubscribeOnLoad(onLoadHandler: OnLoadHandler): void;
}
