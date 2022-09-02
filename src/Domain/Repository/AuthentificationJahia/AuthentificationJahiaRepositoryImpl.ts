import AuthentificationJahiaDAO from "../../Data/AuthentificationJahia/AuthentificationJahiaDAO";

export class AuthentificationJahiaRepositoryImpl {
    private readonly _dataSource: AuthentificationJahiaDAO;

    constructor(datasource: AuthentificationJahiaDAO) {
        this._dataSource = datasource;
    }

    async finalisationConnexion(mfsid: string) {
        await this._dataSource.finalisationConnexion(mfsid);
    }
}
