interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}
export function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}
