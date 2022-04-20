import Codification from "../../Domain/Model/Codification";
import { CodificationRepository } from "../../Domain/Repository/CodificationRepository";
import { Code } from "../DataSource/API/Entity/CodificationAPIEntity";
import CodificationDataSource from "../DataSource/CodificationDataSource";

export class CodificationRepositoryImpl implements CodificationRepository {
  private _dataSource: CodificationDataSource;

  constructor(datasource: CodificationDataSource) {
    this._dataSource = datasource;
  }

  async getCodifications(codification: string, filters?: Array<string>) {
    const codificationDS = await this._dataSource.getCodifications(codification)
    if (filters) {
      return new Codification(this._codificationsFilter(codificationDS.codes, filters));
    }
    return new Codification(codificationDS.codes);
  }

  private _codificationsFilter(codes: Array<Code>, filters: Array<string>) {
    return codes.filter((item) => filters.includes(item.code))
  }
}
