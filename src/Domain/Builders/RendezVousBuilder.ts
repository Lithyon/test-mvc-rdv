import RendezVousSelectionModelView from "../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import RendezVousRequest from "../Model/RendezVous/RendezVousRequest";

export function buildCreerRendezVous(rendezVous: RendezVousSelectionModelView) {
    return new RendezVousRequest({
        adresseMail: rendezVous.adresseMail,
        canalRendezVous: rendezVous.canalSelected.code,
        cdBuro: rendezVous.cdBuro,
        cdDemande: rendezVous.demandeSelected.code,
        cdDomaine: rendezVous.domaineSelected.code,
        estFilleul: rendezVous.estFilleul,
        heure: rendezVous.heure.code,
        jour: rendezVous.jour,
        nmCommu: rendezVous.nmCommu,
        noSocietaireParrain: rendezVous.noSocietaireParrain,
        noTel: rendezVous.noTel,
        precision: rendezVous.precision,
    });
}