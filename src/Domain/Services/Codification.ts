import Codification from "../Model/Codification";
import { CodificationRepository } from "../Repository/CodificationRepository";

export interface CodificationService {
  getCodification(codification: string, filters?: Array<string>): Promise<Codification>;
}

export class CodificationService implements CodificationService {
  private pointAccueilRepo: CodificationRepository;

  constructor(_pointAccueilRepo: CodificationRepository) {
    this.pointAccueilRepo = _pointAccueilRepo;
  }

  getCodifications(codification: string, filters?: Array<string>) {
    return this.pointAccueilRepo.getCodifications(codification, filters);
  }
}
