import Prototype from "../Commun/Prototype";
import DisponibilitesState from "./DisponibilitesState";

function cloneDisponibilitesState(): DisponibilitesState {
    return {
        disponibilites: this.disponibilites,
        aucuneDisponibilite: this.aucuneDisponibilite
    };
}

export function CloneDisponibilitesStateExtension(state: DisponibilitesState): Prototype<DisponibilitesState> {
    const prototype = state as any;

    prototype.clone = cloneDisponibilitesState.bind(prototype);

    return prototype;
}
