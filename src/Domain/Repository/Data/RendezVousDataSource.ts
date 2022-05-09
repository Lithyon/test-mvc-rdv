import RendezVousEntity from "./API/Entity/RendezVousEntity";
import DisponibilitesEntity from "./API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "./API/Entity/DisponibilitesRequestEntity";
import {RendezVousRequestEntity} from "./API/Entity/RendezVousRequestEntity";

export default interface RendezVousDataSource {
    creerRendezVous(request: RendezVousRequestEntity): Promise<RendezVousEntity>;

    getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity>;
}
