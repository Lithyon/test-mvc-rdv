import Prototype from "../Commun/Prototype";
import DomaineState from "./DomaineState";

function cloneDomaineState(): DomaineState {
    return {
        code: this.code,
        libelle: this.libelle
    };
}

export function CloneDomaineStateExtension(state: DomaineState): Prototype<DomaineState> {
    const prototype = state as any;

    prototype.clone = cloneDomaineState.bind(prototype);

    return prototype;
}
