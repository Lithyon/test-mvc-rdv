import Canal from "../../Model/Canal/Canal";
import {CanalCode} from "../../Data/Enum/Canal";
import EligibiliteDAO from "../../Data/Eligibilite/EligibiliteDAO";

export default class CanalRepositoryImpl {
    private readonly _dataSource: EligibiliteDAO;

    constructor(readonly dataSource: EligibiliteDAO) {
        this._dataSource = dataSource;
    }

    async getCanaux(cdBuro: string): Promise<Array<Canal>> {
        const eligibilites = await this._dataSource.getEligibilites(cdBuro);

        const listeCanauxEligibles = new Array<Canal>();

        eligibilites.eligibleRdvPhysique && listeCanauxEligibles.push(new Canal({
            libelle: "En agence",
            code: CanalCode.AGENCE
        }));
        eligibilites.eligibleRdvTelephonique && listeCanauxEligibles.push(new Canal({
            libelle: "Par téléphone",
            code: CanalCode.TELEPHONE
        }));
        eligibilites.eligibleRdvVisio && listeCanauxEligibles.push(new Canal({
            libelle: "Par visioconférence",
            code: CanalCode.VISIO,
            isNew: true
        }));

        return listeCanauxEligibles;
    }
}
