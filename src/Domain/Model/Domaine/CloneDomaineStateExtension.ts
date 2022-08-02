import Prototype from "../Commun/Prototype";
import DomaineState from "./DomaineState";

function cloneDomaineState(): DomaineState {
    const that = this as DomaineState;
    return {
        code: that.code,
        libelle: that.libelle
    };
}

export function CloneDomaineStateExtension(state: DomaineState): Prototype<DomaineState> {
    const prototype = state as any;

    prototype.clone = cloneDomaineState.bind(prototype);

    return prototype;
}
