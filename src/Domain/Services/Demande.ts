import Demande from "../Model/Demande";
import { DemandeRepository } from "../Repository/DemandeRepository";

export interface DemandeService {
  getDemandes(domaineSelected: string): Promise<Demande>;
}

export class DemandeService implements DemandeService {
  private demandeRepo: DemandeRepository;

  constructor(_demandeRepo: DemandeRepository) {
    this.demandeRepo = _demandeRepo;
  }

  getDemandes(domaineSelected: string) {
    return this.demandeRepo.getDemandes(domaineSelected);
  }
}
