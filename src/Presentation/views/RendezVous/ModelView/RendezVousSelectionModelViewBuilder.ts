import RendezVousSelectionModelView from "./RendezVousSelectionModelView";

export default class RendezVousSelectionModelViewBuilder {
    static buildEmpty(): RendezVousSelectionModelView {
        return {
            cdBuro: "",
            demandeSelected: "",
            domaineSelected: "",
            estFilleul: false,
            heure: 0,
            jour: 0,
            nmCommu: "",
            noSocietaireParrain: "",
            noTel: "",
            precision: ""
        };
    }
}
