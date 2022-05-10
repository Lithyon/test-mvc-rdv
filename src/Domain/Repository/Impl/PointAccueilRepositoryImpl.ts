import PointAccueil from "../../Model/PointAccueil/PointAccueil";
import PointAccueilRepository from "../PointAccueilRepository";
import PointAccueilDAO from "../Data/PointAccueilDAO";

export class PointAccueilRepositoryImpl implements PointAccueilRepository {
    private _dataSource: PointAccueilDAO;

    constructor(datasource: PointAccueilDAO) {
        this._dataSource = datasource;
    }

    async getPointAccueil(cdBuro: string) {
        return new PointAccueil(await this._dataSource.getPointAccueil(cdBuro));
    }
}
