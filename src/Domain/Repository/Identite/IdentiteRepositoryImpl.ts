import IdentiteDAO from "../../Data/Identite/IdentiteDAO";

export class IdentiteRepositoryImpl {
    private readonly _dataSource: IdentiteDAO;

    constructor(datasource: IdentiteDAO) {
        this._dataSource = datasource;
    }

    getIdentite() {
        return this._dataSource.getIdentite();
    }
}
