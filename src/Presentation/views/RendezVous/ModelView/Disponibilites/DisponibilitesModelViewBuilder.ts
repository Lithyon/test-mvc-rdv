import {DisponibilitesModelView} from "./DisponibilitesModelView";
import Disponibilites from "../../../../../Domain/Model/Disponibilites/Disponibilites";

export default class DisponibilitesModelViewBuilder {
    static buildFromDisponibilites(disponibilites: Disponibilites) {
        return {
            aucuneDisponibilite: disponibilites.state.aucuneDisponibilite,
            disponibilites: disponibilites.state.disponibilites
        }
    }

    static buildEmpty(): DisponibilitesModelView {
        return {
            aucuneDisponibilite: true,
            disponibilites: []
        };
    }
}