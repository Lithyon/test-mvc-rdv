import Demande from "../../Model/Demande/Demande";
import DemandeDAO from "../../Data/Demande/DemandeDAO";
import {DEMANDES_DEFAULT, DEMANDES_HORS_SINISTRE} from "../../Data/Enum/Demande";
import {TypeDomaine} from "../../Data/Enum/Domaine";
import DemandeEntity from "../../Data/API/Entity/DemandeEntity";

export class DemandeRepositoryImpl {
    private readonly _dataSource: DemandeDAO;

    constructor(datasource: DemandeDAO) {
        this._dataSource = datasource;
    }

    async getDemandes(domaineSelected: string) {
        if (domaineSelected === TypeDomaine.PRO) {
            return [];
        }

        const demandes = await this._dataSource.getDemandes();
        const filters = domaineSelected === TypeDomaine.SANTE ? DEMANDES_HORS_SINISTRE : DEMANDES_DEFAULT;

        return this._codificationsFilter(demandes, filters);
    }

    private _codificationsFilter(demandes: DemandeEntity, filters: Array<string>) {
        const {codes} = demandes;
        return codes.reduce((prev, curr) => {
            if (filters.includes(curr.code)) {
                prev.push(new Demande(curr));
            }
            return prev;
        }, new Array<Demande>());
    }
}
