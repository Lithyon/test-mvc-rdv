import PointAccueil from "../../Model/PointAccueil/PointAccueil";
import PointAccueilDAO from "../../Data/PointAccueil/PointAccueilDAO";

export class PointAccueilRepositoryImpl {
    private readonly _dataSource: PointAccueilDAO;

    constructor(datasource: PointAccueilDAO) {
        this._dataSource = datasource;
    }

    async getPointAccueil(cdBuro: string) {
        return new PointAccueil(await this._dataSource.getPointAccueil(cdBuro));
    }
}
