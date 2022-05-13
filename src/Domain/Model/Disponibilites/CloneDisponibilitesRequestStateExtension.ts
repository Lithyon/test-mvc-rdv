import Prototype from "../Commun/Prototype";
import DisponibilitesRequestState from "./DisponibilitesRequestState";

function cloneDisponibilitesRequestState(): DisponibilitesRequestState {
    return {
        cdBuro: this.cdBuro,
        dtDebut: this.dtDebut,
        motifs: this.motifs
    };
}

export function CloneDisponibilitesRequestStateExtension(state: DisponibilitesRequestState): Prototype<DisponibilitesRequestState> {
    const prototype = state as any;

    prototype.clone = cloneDisponibilitesRequestState.bind(prototype);

    return prototype;
}