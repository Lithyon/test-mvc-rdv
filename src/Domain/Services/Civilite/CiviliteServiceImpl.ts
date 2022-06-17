import CiviliteRepositoryImpl from "../../Repository/Civilite/CiviliteRepositoryImpl";

export default class CiviliteServiceImpl {
    private civiliteRepo: CiviliteRepositoryImpl;

    constructor(_civiliteRepo: CiviliteRepositoryImpl) {
        this.civiliteRepo = _civiliteRepo;
    }

    getDefaultCivilite() {
        return this.civiliteRepo.getDefaultCivilite()
    }
}