import Domaine, { DomaineEtat } from "../../Domain/Model/Domaine";
import { DomaineRepository } from "../../Domain/Repository/DomaineRepository";
import DomaineDataSource from "../../Data/DataSource/DomaineDataSource";

export const AUTRE = "99";
export const AUTO = "01";
export const HABITATION = "02";
export const SANTE = "05";
export const BANQUE_EPARGNE = "12";
export const CREDIT = "03";
export const PREVOYANCE = "04";
export const PRO = "07";
export const DOMAINES = [
  AUTO,
  HABITATION,
  SANTE,
  BANQUE_EPARGNE,
  CREDIT,
  PREVOYANCE,
  PRO,
  AUTRE,
];

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
