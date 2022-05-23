export default interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}