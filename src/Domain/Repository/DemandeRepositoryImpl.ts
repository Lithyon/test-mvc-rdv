import Demande, { DemandeEtat } from "../Model/Demande";
import { DemandeRepository } from "./DemandeRepository";
import DemandeDataSource from "../../Data/DataSource/DemandeDataSource";
import { DEMANDES_HORS_SINISTRE } from "../../Data/DataSource/Enum/Demande";
import { TypeDomaine } from "../../Data/DataSource/Enum/Domaine";

export class DemandeRepositoryImpl implements DemandeRepository {
  private _dataSource: DemandeDataSource;

  constructor(datasource: DemandeDataSource) {
    this._dataSource = datasource;
  }

  async getDemandes(domaineSelected: string) {
    if (domaineSelected === TypeDomaine.PRO) {
      return new Demande([]);
    }
    const codificationDS = await this._dataSource.getDemandes();
    return new Demande(this._codificationsFilter(codificationDS.codes));
  }

  private _codificationsFilter(codes: Array<DemandeEtat>) {
    return codes.filter((item) => DEMANDES_HORS_SINISTRE.includes(item.code));
  }
}
