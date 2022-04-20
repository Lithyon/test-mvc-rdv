import Demande, { DemandeEtat } from "../Model/Demande";
import { DemandeRepository } from "./DemandeRepository";
import DemandeDataSource from "../../Data/DataSource/DemandeDataSource";

export const AUTRE = "99";
export const DEVIS = "01";
export const SOUSCRIPTION = "02";
export const MODIFICATION_CONTRAT = "03";
export const SINISTRE = "04";
export const DEMANDES_HORS_SINISTRE = [
  DEVIS,
  SOUSCRIPTION,
  SINISTRE,
  MODIFICATION_CONTRAT,
  AUTRE,
];

export class DemandeRepositoryImpl implements DemandeRepository {
  private _dataSource: DemandeDataSource;

  constructor(datasource: DemandeDataSource) {
    this._dataSource = datasource;
  }

  async getDemandes(domaineSelected: string) {
    if (domaineSelected === "07") {
      return new Demande([]);
    }
    const codificationDS = await this._dataSource.getDemandes();
    return new Demande(this._codificationsFilter(codificationDS.codes));
  }

  private _codificationsFilter(codes: Array<DemandeEtat>) {
    return codes.filter((item) => DEMANDES_HORS_SINISTRE.includes(item.code));
  }
}
