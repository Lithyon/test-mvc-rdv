import {Disponibilite} from "../../../../Domain/Repository/Data/API/Entity/RendezVousAPIEntity";

export interface RendezVousDisponibilitesModelView {
    aucuneDisponibilite: boolean;
    disponibilites: Disponibilite[];
}
