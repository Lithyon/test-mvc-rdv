import {RendezVousDisponibilitesModelView} from "./RendezVousDisponibilitesModelView";
import {RendezVousDisponibilitesResponseEtat} from "../../../../Domain/Model/RendezVous";

export default class RendezVousDisponibilitesModelViewBuilder {
    static buildFromDisponibilites(disponibilites: RendezVousDisponibilitesResponseEtat) {
        return {
            aucuneDisponibilite: disponibilites.aucuneDisponibilite,
            disponibilites: disponibilites.disponibilites
        }
    }
    static buildEmpty(): RendezVousDisponibilitesModelView {
        return {
            aucuneDisponibilite: true,
            disponibilites: []
        };
    }
}