import Domaine, {IDomaine} from "../../Model/Domaine/Domaine";
import DomaineRepository from "../DomaineRepository";
import DomaineDAO from "../Data/DomaineDAO";
import {DOMAINES} from "../Data/Enum/Domaine";

export class DomaineRepositoryImpl implements DomaineRepository {
    private _dataSource: DomaineDAO;

    constructor(datasource: DomaineDAO) {
        this._dataSource = datasource;
    }

    async getDomaines() {
        const codificationDS = await this._dataSource.getDomaines();
        return new Domaine(this._codificationsFilter(codificationDS.codes));
    }

    private _codificationsFilter(codes: Array<IDomaine>) {
        return codes.filter((item) => DOMAINES.includes(item.code));
    }
}
