export interface ResponseEntity<T> {
    readonly data: T;
    readonly messages: Array<string>;
}