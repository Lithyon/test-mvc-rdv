import JourDisponibleEntity from "./JourDisponibleEntity";

export default interface DisponibilitesEntity {
    aucuneDisponibilite: boolean;
    disponibilites: JourDisponibleEntity[];
}
