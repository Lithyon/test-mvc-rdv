import TypedResponse from "./TypedResponse";

export function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
    return fetch.apply(window, args);
}