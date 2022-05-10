import {RendezVousDisponibilitesModelView} from "./RendezVousDisponibilitesModelView";
import {IDisponibilites} from "../../../../Domain/Model/Disponibilites";

export default class RendezVousDisponibilitesModelViewBuilder {
    static buildFromDisponibilites(disponibilites: IDisponibilites) {
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