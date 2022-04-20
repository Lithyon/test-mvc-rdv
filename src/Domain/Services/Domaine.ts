import Domaine from "../Model/Domaine";
import { DomaineRepository } from "../Repository/DomaineRepository";

export interface DomaineService {
  getDomaines(domaineSelected: string): Promise<Domaine>;
}

export class DomaineService implements DomaineService {
  private domaineRepo: DomaineRepository;

  constructor(_domaineRepo: DomaineRepository) {
    this.domaineRepo = _domaineRepo;
  }

  getDomaines() {
    return this.domaineRepo.getDomaines();
  }
}
