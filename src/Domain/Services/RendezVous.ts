import RendezVousRequest from "../Model/RendezVous/RendezVousRequest";
import RendezVous from "../Model/RendezVous/RendezVous";
import DisponibilitesRequest from "../Model/Disponibilites/DisponibilitesRequest";
import Disponibilites from "../Model/Disponibilites/Disponibilites";

export default interface RendezVousService {
    creerRendezVous(rendezvous: RendezVousRequest): Promise<RendezVous>;

    getDisponibilites(disponibilites: DisponibilitesRequest): Promise<Disponibilites>
}

