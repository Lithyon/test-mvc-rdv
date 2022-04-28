import {
    RendezVousDisponibilitesRequestEntity,
    RendezVousDisponibilitesResponseEntity,
    RendezVousRequestEntity,
    RendezVousResponseEntity
} from "./API/Entity/RendezVousAPIEntity";

export default interface RendezVousDataSource {
    creerRendezVous(request: RendezVousRequestEntity): Promise<RendezVousResponseEntity>;

    getDisponibilites(request: RendezVousDisponibilitesRequestEntity): Promise<RendezVousDisponibilitesResponseEntity>;
}
