export interface ReadableRequestBuilder<TRESPONSEBODY> {
    appendHeader(name: string, value: string): ReadableRequestBuilder<TRESPONSEBODY>;

    setHeader(name: string, value: string): ReadableRequestBuilder<TRESPONSEBODY>;

    fetchJson(): Promise<TRESPONSEBODY>;
}
