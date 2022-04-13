import PointAccueilViewModel from "../Model/PointAccueil";

export interface PointAccueilRepository {
  getPointAccueil(cdBuro: string): Promise<PointAccueilViewModel>;
}
