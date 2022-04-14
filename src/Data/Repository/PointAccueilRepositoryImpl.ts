import PointAccueil from "../../Domain/Model/PointAccueil";
import { PointAccueilRepository } from "../../Domain/Repository/PointAccueilRepository";
import PointAccueilDataSource from "../DataSource/PointAccueilDataSource";

export class PointAccueilRepositoryImpl implements PointAccueilRepository {
  private _dataSource: PointAccueilDataSource;

  constructor(datasource: PointAccueilDataSource) {
    this._dataSource = datasource;
  }

  async getPointAccueil(cdBuro: string) {
    return new PointAccueil(await this._dataSource.getPointAccueil(cdBuro));
  }
}
