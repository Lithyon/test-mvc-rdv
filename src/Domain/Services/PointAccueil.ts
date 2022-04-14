import PointAccueil from "../Model/PointAccueil";
import { PointAccueilRepository } from "../Repository/PointAccueilRepository";

export interface PointAccueilService {
  getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}

export class PointAccueilService implements PointAccueilService {
  private pointAccueilRepo: PointAccueilRepository;

  constructor(_pointAccueilRepo: PointAccueilRepository) {
    this.pointAccueilRepo = _pointAccueilRepo;
  }

  async getPointAccueil(cdBuro: string) {
    return this.pointAccueilRepo.getPointAccueil(cdBuro);
  }
}
