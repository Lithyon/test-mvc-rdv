import ErrorEvent from "./ErrorEvent/ErrorEvent";

export type HasErrorHandler = (event: ErrorEvent) => void

export interface ErrorObservable {
    subscribeHasError(hasErrorHandler: HasErrorHandler): void;

    unsubscribeHasError(hasErrorHandler: HasErrorHandler): void;
}