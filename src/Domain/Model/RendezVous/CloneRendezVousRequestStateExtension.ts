import Prototype from "../Commun/Prototype";
import RendezVousRequestState from "./RendezVousRequestState";

function cloneRendezVousRequestState(): RendezVousRequestState {
    return {
        cdBuro: this.cdBuro,
        cdDemande: this.cdDemande,
        cdDomaine: this.cdDomaine,
        estFilleul: this.estFilleul,
        heure: this.heure,
        jour: this.jour,
        nmCommu: this.nmCommu,
        noSocietaireParrain: this.noSocietaireParrain,
        noTel: this.noTel,
        precision: this.precision
    };
}

export function CloneRendezVouRequestStateExtension(state: RendezVousRequestState): Prototype<RendezVousRequestState> {
    const prototype = state as any;

    prototype.clone = cloneRendezVousRequestState.bind(prototype);

    return prototype;
}