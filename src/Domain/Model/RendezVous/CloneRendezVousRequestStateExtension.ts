import Prototype from "../Commun/Prototype";
import RendezVousRequestState from "./RendezVousRequestState";

function cloneRendezVousRequestState(): RendezVousRequestState {
    const that = this as RendezVousRequestState;
    return {
        adresseMail: that.adresseMail,
        canalRendezVous: that.canalRendezVous,
        cdBuro: that.cdBuro,
        cdDemande: that.cdDemande,
        cdDomaine: that.cdDomaine,
        estFilleul: that.estFilleul,
        heure: that.heure,
        jour: that.jour,
        nmCommu: that.nmCommu,
        noSocietaireParrain: that.noSocietaireParrain,
        noTel: that.noTel,
        precision: that.precision
    };
}

export function CloneRendezVouRequestStateExtension(state: RendezVousRequestState): Prototype<RendezVousRequestState> {
    const prototype = state as any;

    prototype.clone = cloneRendezVousRequestState.bind(prototype);

    return prototype;
}
