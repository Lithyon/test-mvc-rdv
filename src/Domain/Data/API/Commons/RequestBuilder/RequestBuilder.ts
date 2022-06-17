import {ReadableRequestBuilder} from "./ReadableRequestBuilder";
import {WritableRequestBuilder} from "./WritableRequestBuilder";
import {RequestBuilderImpl} from "./RequestBuilderImpl";

export class RequestBuilder {
    static get<TRESPONSE>(uri: string): ReadableRequestBuilder<TRESPONSE> {
        return new RequestBuilderImpl("GET", uri);
    }

    static post<TRESPONSE>(uri: string): WritableRequestBuilder<TRESPONSE> {
        return new RequestBuilderImpl("POST", uri);
    }

    static put<TRESPONSE>(uri: string): WritableRequestBuilder<TRESPONSE> {
        return new RequestBuilderImpl("PUT", uri);
    }

    static delete<TRESPONSE>(uri: string): ReadableRequestBuilder<TRESPONSE> {
        return new RequestBuilderImpl("DELETE", uri);
    }
}
