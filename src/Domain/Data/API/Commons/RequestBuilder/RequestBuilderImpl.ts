import {getCookie, setCookie} from "../Cookie";
import {v4 as uuidv4} from "uuid";

export class RequestBuilderImpl<TRESPONSEBODY> {
    private readonly _headers: Headers;
    private readonly _uri: string;
    private readonly _method: string;
    private readonly _navId?: string;
    private _body?: string | any;

    constructor(method: string, uri: string) {
        this._method = method;
        this._uri = uri;
        this._navId = this.getNavId();
        this._headers = new Headers({
            "X-Code-Application": "1880",
            "X-Code-Cible": "5",
            "X-No-Struct": "324",
            "X-Code-Langue": "fr-FR",
            "X-Action-Id": this.generateActionId()
        });

        if (this._navId !== undefined && this._navId !== "undefined" && this._navId !== "") {
            this.appendHeader("X-Nav-Id", this._navId);
        }
    }

    private get isWritable() {
        return this._method === "PUT" || this._method === "POST";
    }

    getNavId() {
        if (!getCookie("navid")) {
            setCookie("navid", uuidv4());
        }
        return getCookie("navid");
    }

    generateActionId() {
        const time = new Date().getTime();
        return `${this.getNavId()}${time}`;
    }

    appendHeader(name: string, value: string) {
        this._headers.append(name, value);
        return this;
    }

    setHeader(name: string, value: string) {
        this._headers.set(name, value);
        return this;
    }

    body<TBODY>(body: TBODY, formData = false) {
        if (this._body) {
            throw new Error("Body is already assigned");
        }

        this._body = formData ? body : JSON.stringify(body);
        return this;
    }

    onlyFetch(): Promise<Response> {
        const isWritable = this.isWritable;

        if (isWritable && !this._body) {
            throw new Error("Body must be initiliazed");
        }

        return fetch(this._uri, {
            method: this._method,
            headers: this._headers,
            body: isWritable ? this._body : undefined,
            credentials: "include"
        });
    }

    async fetchJson(): Promise<TRESPONSEBODY> {
        const response = await this.onlyFetch();
        return response.json();
    }
}
