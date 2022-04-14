import { PointAccueilEntity } from "./API/Entity/PointAccueilAPIEntity";

export default interface PointAccueilDataSource {
  getPointAccueil(cdBuro: string): Promise<PointAccueilEntity>;
}
