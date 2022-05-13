import JourDisponibleState from "./JourDisponibleState";

export default interface DisponibilitesState {
    aucuneDisponibilite: boolean;
    disponibilites: Array<JourDisponibleState>;
}