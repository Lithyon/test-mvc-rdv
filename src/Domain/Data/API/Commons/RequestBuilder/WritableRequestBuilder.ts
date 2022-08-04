export interface WritableRequestBuilder<TRESPONSEBODY> {
    appendHeader(name: string, value: string): WritableRequestBuilder<TRESPONSEBODY>;

    setHeader(name: string, value: string): WritableRequestBuilder<TRESPONSEBODY>;

    body<TBODY>(body: TBODY, formData?: boolean): WritableRequestBuilder<TRESPONSEBODY>;

    onlyFetch(): Promise<Response>;

    fetchJson(): Promise<TRESPONSEBODY>;
}
