import SituationFamilialeDAO from "../../Data/SituationFamiliale/SituationFamilialeDAO";
import SituationFamiliale from "../../Model/SituationFamiliale/SituationFamiliale";
import SituationFamilialeEntity from "../../Data/API/Entity/SituationFamilialeEntity";

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
        return codes.reduce((prev, curr) => {
            prev.push(new SituationFamiliale(curr));
            return prev;
        }, new Array<SituationFamiliale>());
    }
}
