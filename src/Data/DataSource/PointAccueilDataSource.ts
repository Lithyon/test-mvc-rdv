import { PointAccueil } from "../../Domain/Model/PointAccueil";

export default interface PointAccueilDataSource {
  getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
