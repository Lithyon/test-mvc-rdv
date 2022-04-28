import RendezVous, {RendezVousDisponibilites, RendezVousDisponibilitesResponse, RendezVousResponse} from "../Model/RendezVous";
import { RendezVousRepository } from "../Repository/RendezVousRepository";

export interface RendezVousService {
  creerRendezVous(rendezvous: RendezVous): Promise<RendezVousResponse>;

  getDisponibilites(disponibilites: RendezVousDisponibilites): Promise<RendezVousDisponibilitesResponse>
}

export class RendezVousService implements RendezVousService {
  private rendezVousRepo: RendezVousRepository;

  constructor(_rendezVousRepo: RendezVousRepository) {
    this.rendezVousRepo = _rendezVousRepo;
  }

  creerRendezVous(rendezvous: RendezVous) {
    return this.rendezVousRepo.creerRendezVous(rendezvous);
  }

  getDisponibilites(disponibilites: RendezVousDisponibilites): Promise<RendezVousDisponibilitesResponse> {
    return this.rendezVousRepo.getDisponibilites(disponibilites);
  }
}
