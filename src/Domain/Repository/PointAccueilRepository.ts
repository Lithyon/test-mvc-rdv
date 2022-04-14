import PointAccueil from "../Model/PointAccueil";

export interface PointAccueilRepository {
  getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
