import RendezVousSelectionModelView from "./RendezVousSelectionModelView";
import DomaineModelViewBuilder from "../Domaine/DomaineModelViewBuilder";
import DemandeModelViewBuilder from "../Demande/DemandeModelViewBuilder";
import CanalModelViewBuilder from "../Canal/CanalModelViewBuilder";
import ChoixConnexionModelViewBuilder from "../ChoixConnexion/ChoixConnexionModelViewBuilder";
import HeureDisponibleModelViewBuilder from "../Disponibilites/HeureDisponibleModelViewBuilder";

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
            heure: HeureDisponibleModelViewBuilder.buildEmpty(),
            jour: new Date(),
            nmCommu: "",
            noSocietaireParrain: "",
            noTel: "",
            precision: ""
        };
    }

    static buildFromSessionStorage(rendezVous: any): RendezVousSelectionModelView {
        return {
            ...rendezVous,
            jour: new Date(rendezVous.jour),
        };
    }
}
