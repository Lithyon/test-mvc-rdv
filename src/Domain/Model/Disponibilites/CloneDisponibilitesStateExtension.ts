import Prototype from "../Commun/Prototype";
import DisponibilitesState from "./DisponibilitesState";

function cloneDisponibilitesState(): DisponibilitesState {
    const that = this as DisponibilitesState;
    return {
        disponibilites: that.disponibilites,
        aucuneDisponibilite: that.aucuneDisponibilite
    };
}

export function CloneDisponibilitesStateExtension(state: DisponibilitesState): Prototype<DisponibilitesState> {
    const prototype = state as any;

    prototype.clone = cloneDisponibilitesState.bind(prototype);

    return prototype;
}
