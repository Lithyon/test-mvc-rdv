import RendezVous, {RendezVousDisponibilites, RendezVousDisponibilitesResponse, RendezVousResponse} from "../Model/RendezVous";

export default interface RendezVousRepository {
    creerRendezVous(rendezvous: RendezVous): Promise<RendezVousResponse>;

    getDisponibilites(disponibilites: RendezVousDisponibilites): Promise<RendezVousDisponibilitesResponse>
}
