import {generateActionId} from "./GenerateActionId";
import {getNavId} from "./GetNavId";

export class HeadersMacif extends Headers {
    constructor(init?: HeadersInit) {
        super({
            ...init,
            "X-Code-Application": "1880",
            "X-Code-Cible": "5",
            "X-No-Struct": "324",
            "X-Code-Langue": "fr-FR",
            "X-Action-Id": generateActionId(),
        });

        const navId = getNavId();

        if (navId !== undefined && navId !== "undefined" && navId !== "") {
            this.append("X-Nav-Id", navId)
        }
    }
}