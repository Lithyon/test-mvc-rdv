import Domaine, { DomaineEtat } from "../../Domain/Model/Domaine";
import { DomaineRepository } from "../../Domain/Repository/DomaineRepository";
import DomaineDataSource from "../../Data/DataSource/DomaineDataSource";
import { DOMAINES } from "../../Data/DataSource/Enum/Domaine";

export class DomaineRepositoryImpl implements DomaineRepository {
  private _dataSource: DomaineDataSource;

  constructor(datasource: DomaineDataSource) {
    this._dataSource = datasource;
  }

  async getDomaines() {
    const codificationDS = await this._dataSource.getDomaines();
    return new Domaine(this._codificationsFilter(codificationDS.codes));
  }

  private _codificationsFilter(codes: Array<DomaineEtat>) {
    return codes.filter((item) => DOMAINES.includes(item.code));
  }
}
