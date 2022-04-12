import { PointAccueilAPIEntity } from "./API/Entity/PointAccueilAPIEntity";

export default interface PointAccueilDataSource {
  getPointAccueil(cdBuro: string): Promise<PointAccueilAPIEntity>;
}
