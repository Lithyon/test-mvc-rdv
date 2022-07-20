import Prototype from "../Commun/Prototype";
import DisponibilitesRequestState from "./DisponibilitesRequestState";

function cloneDisponibilitesRequestState(): DisponibilitesRequestState {
    return {
        canalRendezVous: this.canalRendezVous,
        cdBuro: this.cdBuro,
        cdDemande: this.cdDemande,
        cdDomaine: this.cdDomaine,
        dtDebut: this.dtDebut,
    };
}

export function CloneDisponibilitesRequestStateExtension(state: DisponibilitesRequestState): Prototype<DisponibilitesRequestState> {
    const prototype = state as any;

    prototype.clone = cloneDisponibilitesRequestState.bind(prototype);

    return prototype;
}
