import RendezVous, { RendezVousResponse } from "../Model/RendezVous";
import { RendezVousRepository } from "../Repository/RendezVousRepository";

export interface RendezVousService {
  creerRendezVous(rendezvous: RendezVous): Promise<RendezVousResponse>;
}

export class RendezVousService implements RendezVousService {
  private rendezVousRepo: RendezVousRepository;

  constructor(_rendezVousRepo: RendezVousRepository) {
    this.rendezVousRepo = _rendezVousRepo;
  }

  creerRendezVous(rendezvous: RendezVous) {
    return this.rendezVousRepo.creerRendezVous(rendezvous);
  }
}
