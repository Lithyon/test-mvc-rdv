import ProfessionEntity from "../../Data/API/Entity/SituationFamilialeEntity";
import ProfessionDAO from "../../Data/Profession/ProfessionDAO";
import Profession from "../../Model/Profession/Profession";
import CodeEntity from "../../Data/API/Entity/CodeEntity";

export class ProfessionRepositoryImpl {
    private readonly _dataSource: ProfessionDAO;

    constructor(datasource: ProfessionDAO) {
        this._dataSource = datasource;
    }

    async getProfession() {
        const profession = await this._dataSource.getProfession();
        return this._codificationsFilter(profession);
    }


    private _codificationsFilter(profession: ProfessionEntity) {
        const {codes} = profession;
        const tableauProfession = new Array<Profession>();
        codes.forEach((code: CodeEntity) =>
            tableauProfession.push(new Profession(code))
        );
        return tableauProfession;
    }
}
