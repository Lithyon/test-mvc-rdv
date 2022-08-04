import DisponibilitesEntity from "../API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "../API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../API/Entity/RendezVousRequestEntity";

export default interface RendezVousDAO {
    creerRendezVous(request: RendezVousRequestEntity): Promise<void>;

    getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity>;
}
