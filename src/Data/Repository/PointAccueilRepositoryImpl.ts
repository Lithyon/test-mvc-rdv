import { PointAccueil } from "../../Domain/Model/PointAccueil";
import { PointAccueilRepository } from "../../Domain/Repository/PointAccueilRepository";
import PointAccueilDataSource from "../DataSource/PointAccueilDataSource";

export class PointAccueilRepositoryImpl implements PointAccueilRepository {
  dataSource: PointAccueilDataSource;

  constructor(_datasource: PointAccueilDataSource) {
    this.dataSource = _datasource;
  }

  async getPointAccueil(cdBuro: string): Promise<PointAccueil> {
    return this.dataSource.getPointAccueil(cdBuro);
  }
}
