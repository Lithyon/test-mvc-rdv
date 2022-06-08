import RendezVousSelectionModelView from "./RendezVousSelectionModelView";
import DomaineModelViewBuilder from "../Domaine/DomaineModelViewBuilder";
import DemandeModelViewBuilder from "../Demande/DemandeModelViewBuilder";
import CanalModelViewBuilder from "../Canal/CanalModelViewBuilder";
import DisponibilitesModelViewBuilder from "../Disponibilites/DisponibilitesModelViewBuilder";
import ChoixConnexionModelViewBuilder from "../ChoixConnexion/ChoixConnexionModelViewBuilder";

export default class RendezVousSelectionModelViewBuilder {
    static buildEmpty(): RendezVousSelectionModelView {
        return {
            proposerChoixHoraire: false,
            afficherChoixCanaux: false,
            afficherChoixConnexion: false,
            choixConnexionSelected: ChoixConnexionModelViewBuilder.buildEmpty(),
            adresseMail: "",
            canalSelected: CanalModelViewBuilder.buildEmpty(),
            cdBuro: "",
            demandeSelected: DemandeModelViewBuilder.buildEmpty(),
            domaineSelected: DomaineModelViewBuilder.buildEmpty(),
            estFilleul: false,
            heure: DisponibilitesModelViewBuilder.buildEmptyHeure(),
            jour: new Date(),
            nmCommu: "",
            noSocietaireParrain: "",
            noTel: "",
            precision: ""
        };
    }
}
