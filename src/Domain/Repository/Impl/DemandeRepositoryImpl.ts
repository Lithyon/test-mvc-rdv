import Demande from "../../Model/Demande/Demande";
import DemandeRepository from "../DemandeRepository";
import DemandeDAO from "../Data/DemandeDAO";
import {DEMANDES_DEFAULT, DEMANDES_HORS_SINISTRE} from "../Data/Enum/Demande";
import {TypeDomaine} from "../Data/Enum/Domaine";
import DemandeEntity from "../Data/API/Entity/DemandeEntity";

export class DemandeRepositoryImpl implements DemandeRepository {
    private _dataSource: DemandeDAO;

    constructor(datasource: DemandeDAO) {
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
