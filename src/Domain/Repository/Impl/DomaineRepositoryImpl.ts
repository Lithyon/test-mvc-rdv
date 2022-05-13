import Domaine from "../../Model/Domaine/Domaine";
import DomaineRepository from "../DomaineRepository";
import DomaineDAO from "../Data/DomaineDAO";
import {DOMAINES} from "../Data/Enum/Domaine";
import DomaineEntity from "../Data/API/Entity/DomaineEntity";

export class DomaineRepositoryImpl implements DomaineRepository {
    private _dataSource: DomaineDAO;

    constructor(datasource: DomaineDAO) {
        this._dataSource = datasource;
    }

    async getDomaines() {
        const codificationDS = await this._dataSource.getDomaines();
        return this._codificationsFilter(codificationDS);
    }

    private _codificationsFilter(domaines: DomaineEntity) {
        const {codes} = domaines
        return codes.reduce((prev, curr) => {
            if (DOMAINES.includes(curr.code)) {
                prev.push(new Domaine(curr))
            }
            return prev;
        }, new Array<Domaine>());
    }
}
