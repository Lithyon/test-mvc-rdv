import Prototype from "../Commun/Prototype";
import DisponibilitesRequestState from "./DisponibilitesRequestState";

function cloneDisponibilitesRequestState(): DisponibilitesRequestState {
    const that = this as DisponibilitesRequestState;
    return {
        canalRendezVous: that.canalRendezVous,
        cdBuro: that.cdBuro,
        cdDemande: that.cdDemande,
        cdDomaine: that.cdDomaine,
        dtDebut: that.dtDebut,
    };
}

export function CloneDisponibilitesRequestStateExtension(state: DisponibilitesRequestState): Prototype<DisponibilitesRequestState> {
    const prototype = state as any;

    prototype.clone = cloneDisponibilitesRequestState.bind(prototype);

    return prototype;
}
