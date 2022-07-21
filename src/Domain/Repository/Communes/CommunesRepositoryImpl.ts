import CommunesDAO from "../../Data/Communes/CommunesDAO";
import CommunesRequest from "../../Model/Communes/CommunesRequest";
import Communes from "../../Model/Communes/Communes";

export class CommunesRepositoryImpl {
    private _dataSource: CommunesDAO;

    constructor(datasource: CommunesDAO) {
        this._dataSource = datasource;
    }

    async getCommunes(request: CommunesRequest) {
        return new Communes(await this._dataSource.getCommunes(request.state));
    }
}
