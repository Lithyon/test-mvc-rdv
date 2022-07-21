import {ProfessionRepositoryImpl} from "../../Repository/Profession";

export default class ProfessionServiceImpl {
    private readonly professionRepo: ProfessionRepositoryImpl;

    constructor(_professionRepo: ProfessionRepositoryImpl) {
        this.professionRepo = _professionRepo;
    }

    getProfession() {
        return this.professionRepo.getProfession();
    }
}
