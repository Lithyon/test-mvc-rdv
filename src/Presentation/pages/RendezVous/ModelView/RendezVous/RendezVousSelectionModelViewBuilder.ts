import RendezVousSelectionModelView from "./RendezVousSelectionModelView";

export default class RendezVousSelectionModelViewBuilder {
    static buildEmpty(): RendezVousSelectionModelView {
        return {
            proposerChoixHoraire: false,
            choixConnexionSelected: "",
            adresseMail: "",
            canalSelected: "",
            cdBuro: "",
            demandeSelected: "",
            domaineSelected: "",
            estFilleul: false,
            heure: 0,
            jour: new Date(),
            nmCommu: "",
            noSocietaireParrain: "",
            noTel: "",
            precision: ""
        };
    }
}
