import {HeadersMacif} from "./HeadersMacif";

export class RequestMacif extends Request {
    constructor(input: RequestInfo, init: RequestInit = {
        headers: new HeadersMacif(),
        credentials: "include"
    }) {
        super(input, init);
    }
}