import JourDisponibleEntity from "../../../../Domain/Repository/Data/API/Entity/JourDisponibleEntity";

export interface RendezVousDisponibilitesModelView {
    aucuneDisponibilite: boolean;
    disponibilites: JourDisponibleEntity[];
}
