import { PointAccueil } from "../Model/PointAccueil";

export interface PointAccueilRepository {
  getDefaultPointAccueil(): PointAccueil;
  getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
