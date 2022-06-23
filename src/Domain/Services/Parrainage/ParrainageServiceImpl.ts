import ParrainageRepositoryImpl from "../../Repository/Parrainage/ParrainageRepositoryImpl";

export default class ParrainageServiceImpl {
    private parrainageRepo: ParrainageRepositoryImpl;

    constructor(_parrainageRepo: ParrainageRepositoryImpl) {
        this.parrainageRepo = _parrainageRepo;
    }

    getDefautParrainageChoix() {
        return this.parrainageRepo.getDefautParrainageChoix()
    }
}