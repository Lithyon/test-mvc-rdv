import CreationCompteRequest from "../../Model/CreationCompte/CreationCompteRequest";
import CreationCompte from "../../Model/CreationCompte/CreationCompte";
import CreationCompteDAO from "../../Data/CreationCompte/CreationCompteDAO";

export default class CreationCompteRepositoryImpl {
    private _dataSource: CreationCompteDAO;

    constructor(datasource: CreationCompteDAO) {
        this._dataSource = datasource;
    }

    async creationCompte(creationCompte: CreationCompteRequest) {
        return new CreationCompte(await this._dataSource.creationCompte(creationCompte.state));
    }
}