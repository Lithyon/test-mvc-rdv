import SituationFamilialeDAO from "../../Data/SituationFamiliale/SituationFamilialeDAO";
import SituationFamiliale from "../../Model/SituationFamiliale/SituationFamiliale";
import SituationFamilialeEntity from "../../Data/API/Entity/SituationFamilialeEntity";
import CodeEntity from "../../Data/API/Entity/CodeEntity";

export class SituationFamilialeRepositoryImpl {
    private readonly _dataSource: SituationFamilialeDAO;

    constructor(datasource: SituationFamilialeDAO) {
        this._dataSource = datasource;
    }

    async getSituationFamiliale() {
        const situationFamiliale = await this._dataSource.getSituationFamiliale();
        return this._codificationsFilter(situationFamiliale);
    }


    private _codificationsFilter(situationFamiliale: SituationFamilialeEntity) {
        const {codes} = situationFamiliale;
        const tableauSituationFamiliale = new Array<SituationFamiliale>();
        codes.forEach((code: CodeEntity) =>
            tableauSituationFamiliale.push(new SituationFamiliale(code))
        );
        return tableauSituationFamiliale;
    }
}
