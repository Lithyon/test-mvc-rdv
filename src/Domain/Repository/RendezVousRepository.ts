import RendezVous, { RendezVousResponse } from "../Model/RendezVous";

export interface RendezVousRepository {
  creerRendezVous(rendezvous: RendezVous): Promise<RendezVousResponse>;
}
