export interface CookieAttributes {
    path?: string
    domain?: string
    expires?: number | Date
    sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None"
    secure?: boolean

    [property: string]: any
}

export type CookieAttributesConfig = Readonly<CookieAttributes>;

function stringifyAttributes(
    attributes: CookieAttributes & { expires?: any }
): string {
    attributes = Object.assign({}, attributes);

    if (typeof attributes.expires === "number") {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }

    if (attributes.expires != null) {
        attributes.expires = attributes.expires.toUTCString();
    }

    return (
        Object.entries(attributes)
            .filter(([_key, value]: [string, any]) => value != null && value !== false)
            .map(([key, value]: [string, string | true]) =>
                value === true ? `; ${key}` : `; ${key}=${value.split(";")[0]}`
            )
            .join("")
    );
}

export const DEFAULT_ATTRIBUTES: CookieAttributesConfig = Object.freeze({
    path: "/"
});

export function setCookie<T extends string>(name: string, value: T, attributes: CookieAttributes = DEFAULT_ATTRIBUTES) {
    document.cookie = `${name}=${value};${stringifyAttributes(attributes)}`;
}

export function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length === 2) {
        return parts.pop()?.split(";").shift();
    }
}
