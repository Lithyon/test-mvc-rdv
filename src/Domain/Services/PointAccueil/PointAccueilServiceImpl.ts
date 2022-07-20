import {PointAccueilRepositoryImpl} from "../../Repository/PointAccueil";

export default class PointAccueilServiceImpl {
    private readonly pointAccueilRepo: PointAccueilRepositoryImpl;

    constructor(_pointAccueilRepo: PointAccueilRepositoryImpl) {
        this.pointAccueilRepo = _pointAccueilRepo;
    }

    getPointAccueil(cdBuro: string) {
        return this.pointAccueilRepo.getPointAccueil(cdBuro);
    }
}
