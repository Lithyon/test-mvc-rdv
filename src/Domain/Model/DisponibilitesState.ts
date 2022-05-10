import JourDisponibleState from "./JourDisponibleState";
import Cloneable from "./Clonable";

export default class DisponibilitesState implements Cloneable<DisponibilitesState> {
    aucuneDisponibilite: boolean;
    disponibilites: Array<JourDisponibleState>;

    constructor(aucuneDisponibilite: boolean, disponibilites: Array<JourDisponibleState>) {
        this.aucuneDisponibilite = aucuneDisponibilite;
        this.disponibilites = disponibilites;
    }

    clone(): DisponibilitesState {
        return new DisponibilitesState(this.aucuneDisponibilite, this.disponibilites);
    }
}