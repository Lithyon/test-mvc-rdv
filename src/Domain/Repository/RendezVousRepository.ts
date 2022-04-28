import RendezVous, {RendezVousDisponibilites, RendezVousDisponibilitesResponse, RendezVousResponse} from "../Model/RendezVous";

export interface RendezVousRepository {
    creerRendezVous(rendezvous: RendezVous): Promise<RendezVousResponse>;

    getDisponibilites(disponibilites: RendezVousDisponibilites): Promise<RendezVousDisponibilitesResponse>
}
