import {SituationFamilialeRepositoryImpl} from "../../Repository/SituationFamiliale";

export default class SituationFamilialeServiceImpl {
    private readonly situationFamilialeRepo: SituationFamilialeRepositoryImpl;

    constructor(_situationFamilialeRepo: SituationFamilialeRepositoryImpl) {
        this.situationFamilialeRepo = _situationFamilialeRepo;
    }

    getSituationFamiliale() {
        return this.situationFamilialeRepo.getSituationFamiliale();
    }
}
