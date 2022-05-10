import RendezVousRequest from "../Model/RendezVous";
import RendezVous from "../Model/RendezVous";
import DisponibilitesRequest from "../Model/DisponibilitesRequest";
import Disponibilites from "../Model/Disponibilites";

export default interface RendezVousService {
    creerRendezVous(rendezvous: RendezVousRequest): Promise<RendezVous>;

    getDisponibilites(disponibilites: DisponibilitesRequest): Promise<Disponibilites>
}

