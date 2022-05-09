import Demande from "../Model/Demande";
import {DemandeRepository} from "./DemandeRepository";
import DemandeDataSource from "./Data/DemandeDataSource";
import {DEMANDES_DEFAULT, DEMANDES_HORS_SINISTRE} from "./Data/Enum/Demande";
import {TypeDomaine} from "./Data/Enum/Domaine";
import DemandeEntity from "./Data/API/Entity/DemandeEntity";

export class DemandeRepositoryImpl implements DemandeRepository {
    private _dataSource: DemandeDataSource;

    constructor(datasource: DemandeDataSource) {
        this._dataSource = datasource;
    }

    async getDemandes(domaineSelected: string) {
        switch (domaineSelected) {
            case TypeDomaine.PRO:
                return new Demande([]);
            case TypeDomaine.SANTE:
                return new Demande(this._codificationsFilter(await this._dataSource.getDemandes(), DEMANDES_HORS_SINISTRE));
            default:
                return new Demande(this._codificationsFilter(await this._dataSource.getDemandes(), DEMANDES_DEFAULT));
        }
    }

    private _codificationsFilter(demandes: DemandeEntity, filters: Array<string>) {
        const {codes} = demandes;
        return codes.filter((item) => filters.includes(item.code));
    }
}
