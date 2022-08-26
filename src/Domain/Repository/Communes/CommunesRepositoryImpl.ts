import CommunesDAO from "../../Data/Communes/CommunesDAO";
import CommunesRequest from "../../Model/Commune/CommunesRequest";
import Commune from "../../Model/Commune/Commune";

export class CommunesRepositoryImpl {
    private readonly _dataSource: CommunesDAO;

    constructor(datasource: CommunesDAO) {
        this._dataSource = datasource;
    }

    async getCommunes(request: CommunesRequest) {
        const communes = await this._dataSource.getCommunes(request.state);

        if (communes?.length > 0) {
            return communes.map(commune => new Commune(commune));
        } else {
            return [];
        }
    }
}
