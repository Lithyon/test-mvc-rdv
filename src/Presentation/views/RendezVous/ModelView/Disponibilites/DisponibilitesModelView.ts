import JourDisponibleModelView from "./JourDisponibleModelView";

export interface DisponibilitesModelView {
    aucuneDisponibilite: boolean;
    disponibilites: Array<JourDisponibleModelView>;
}
