import RendezVousEntity from "../Repository/Data/API/Entity/RendezVousEntity";
import DisponibilitesEntity from "../Repository/Data/API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "../Repository/Data/API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../Repository/Data/API/Entity/RendezVousRequestEntity";

export interface RendezVousEtat extends RendezVousRequestEntity {
}

export default class RendezVous {
    constructor(readonly etat: RendezVousEtat) {
    }
}

export interface RendezVousResponseEtat extends RendezVousEntity {
}

export class RendezVousResponse {
    constructor(readonly etat: RendezVousResponseEtat) {
    }
}

export interface RendezVousDisponibilitesEtat extends DisponibilitesRequestEntity {
}

export class RendezVousDisponibilites {
    constructor(readonly etat: RendezVousDisponibilitesEtat) {
    }
}

export interface RendezVousDisponibilitesResponseEtat extends DisponibilitesEntity {
}

export class RendezVousDisponibilitesResponse {
    constructor(readonly etat: RendezVousDisponibilitesResponseEtat) {
    }
}