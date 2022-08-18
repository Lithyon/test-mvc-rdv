import {ErrorEntity} from "./ErrorEntity";

export interface ResponseEntity<T> {
    readonly data: T;
    readonly messages: Array<string>;
    readonly errors: Array<ErrorEntity>;
}
