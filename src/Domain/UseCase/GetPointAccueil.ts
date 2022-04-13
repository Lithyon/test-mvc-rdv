import PointAccueilViewModel from "../Model/PointAccueil";
import { PointAccueilRepository } from "../Repository/PointAccueilRepository";

export interface GetPointAccueil {
  invoke(cdBuro: string): Promise<PointAccueilViewModel>;
}

export class GetPointAccueilUseCase implements GetPointAccueil {
  private pointAccueilRepo: PointAccueilRepository;

  constructor(_pointAccueilRepo: PointAccueilRepository) {
    this.pointAccueilRepo = _pointAccueilRepo;
  }
  async invoke(cdBuro: string): Promise<PointAccueilViewModel> {
    return this.pointAccueilRepo.getPointAccueil(cdBuro);
  }
}
